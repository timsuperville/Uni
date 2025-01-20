const stemsService = require('../../../services/songs/stems/index.js');

const getStems = async (req, res) => {
  try {
    const songId = req.params.songId;
    const stems = await stemsService.getStems(songId);
    res.status(200).json(stems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const uploadStem = async (req, res) => {
  try {
    const songId = req.params.songId;
    const data = req.body;
    const Stem = await stemsService.saveStem(songId, data);
    res.status(200).json(Stem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateStem = async (req, res) => {
  try {
    const songId = req.params.songId;
    const stemName = req.params.stemName;
    const data = req.body;
    const stem = await stemsService.updateStem(songId, stemName, data);
    res.status(200).json(stem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteStem = async (req, res) => {
  try {
    const songId = req.params.songId;
    const stemName = req.params.stemName;
    const Stem = await stemsService.deleteStem(songId, stemName);
    res.status(200).json(Stem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const downloadStem = async (req, res) => {
  try {
    const songId = req.params.songId;
    const StemName = req.params.stemName;
    const Stem = await stemsService.downloadStem(songId, StemName);
    res.download(Stem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
   getStems,
   uploadStem,
   updateStem,
   deleteStem,
   downloadStem
   };