const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
  const { postId, text } = req.body;
  try {
    const [result] = await pool.query('INSERT INTO comments (postId, text) VALUES (?, ?)', [postId, text]);
    res.status(201).json({ id: result.insertId, postId, text });
  } catch (err) {
    res.status(500).json({ error: 'Error adding comment' });
  }
});

router.get('/', async (req, res) => {
  try {
    const [comments] = await pool.query('SELECT * FROM comments');
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching comments' });
  }
});

module.exports = router;
