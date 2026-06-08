const express = require('express');
const router = express.Router();

// GET /api/videos
router.get('/', async (req, res) => {
  res.json({ videos: [] });
});

// GET /api/videos/:id
router.get('/:id', async (req, res) => {
  res.json({ video: { id: req.params.id, title: 'Mock Video', status: 'COMPLETED' } });
});

// POST /api/videos/upload
router.post('/upload', async (req, res) => {
  res.status(202).json({ message: 'Upload started', videoId: 'mock-video-id' });
});

// POST /api/videos/:id/process
router.post('/:id/process', async (req, res) => {
  // Triggers the AI processing mock
  res.status(202).json({ message: 'Processing queued', videoId: req.params.id });
});

module.exports = router;
