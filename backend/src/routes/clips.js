const express = require('express');
const router = express.Router();

// GET /api/clips
router.get('/', async (req, res) => {
  res.json({ clips: [] });
});

// GET /api/clips/:id
router.get('/:id', async (req, res) => {
  res.json({ clip: { id: req.params.id, timecode: '0:00-0:30', score: 95 } });
});

// PUT /api/clips/:id
router.put('/:id', async (req, res) => {
  res.json({ message: 'Clip updated', clipId: req.params.id });
});

// DELETE /api/clips/:id
router.delete('/:id', async (req, res) => {
  res.json({ message: 'Clip deleted', clipId: req.params.id });
});

// POST /api/clips/:id/export
router.post('/:id/export', async (req, res) => {
  res.json({ message: 'Export started', clipId: req.params.id });
});

module.exports = router;
