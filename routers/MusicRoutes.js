const expres = require('express');
const MusicController = require('../controllers/MusicController');
const router = expres.router();

router.post('/upload', MusicController.uploadMusic);
router.get('/list', MusicController.getMusicList);

module.exports = router;