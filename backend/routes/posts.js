const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
  const { imageUrl, description } = req.body;
  try {
    const [result] = await pool.query('INSERT INTO posts (imageUrl, description) VALUES (?, ?)', [imageUrl, description]);
    res.status(201).json({ id: result.insertId, imageUrl, description });
  } catch (err) {
    res.status(500).json({ error: 'Error creating post' });
  }
});

router.get('/', async (req, res) => {
  try {
    const [posts] = await pool.query('SELECT * FROM posts');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching posts' });
  }
});

module.exports = router;
