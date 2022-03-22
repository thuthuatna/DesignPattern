const express = require('express');
const axios = require('axios');
const cors = require('cors');
const Redis = require('redis');

const redisClient = Redis.createClient({
  socket: { port: '127.0.0.1', port: 6379 },
});

const DEFAULT_EXPIRATION = 3600;

redisClient.connect();
redisClient.on('connect', () => console.log('Redis Client Connected '));
redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.on('ready', () => console.log('Redis Client Ready'));
redisClient.on('reconnecting', () => console.log('Redis Client Reconnecting'));
redisClient.on('end', () => console.log('Redis Client End'));

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());

console.log('running...');

app.get('/photos', async (req, res) => {
  const albumId = req.query.albumId;

  const photos = await redisClient.get(`photos?albumId=${albumId}`);
  if (photos) {
    console.log('Cache Hit!');
    return res.json(JSON.parse(photos));
  } else {
    console.log('Cache Miss!');
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/photos',
      {
        params: { albumId },
      },
    );
    redisClient.setEx(
      `photos?albumId=${albumId}`,
      DEFAULT_EXPIRATION,
      JSON.stringify(data),
    );
    res.json(data);
  }
});

app.get('/jobs', (req, res) => {
  const searchTerm = req.query.search;
  console.log('jobs...');
  try {
    const res = redisClient.get(searchTerm, async (err, jobs) => {
      if (err) throw err;

      if (jobs) {
        res.status(200).send({
          jobs: JSON.parse(jobs),
          message: 'data retrieved from the cache',
        });
      } else {
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/photos',
        );
        redisClient.setex(searchTerm, 600, JSON.stringify(data));
        res.status(200).send({
          jobs: data,
          message: 'cache miss',
        });
      }
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// async function getOrSetCache(key, data) {
//   const data = await redisClient.get(key);
//   if (data) return JSON.parse(data);
//   await redisClient.setEx(key, DEFAULT_EXPIRATION, JSON.stringify(data));
//   getOrSetCache();
// }

app.listen(3000);
