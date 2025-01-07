const tracks = require('./tracks/index');

const repository = require('../..repositories/songs/songsRepository');
const ccli = require('../../drivers/CCLI/index');

const getAllSongs = async (groupId) => {
   const results = await repository.getAllSongs(groupId);
   return results;
}

const searchSongs = async (query, data) => {
   const { groupId } = data;
   const localResults = await repository.searchSong(groupId, query);
   const externalResults = await ccli.searchSong(query, data);

}

const saveNewSong = async (groupId, song) => {
   const newSong = await repository.saveNewSong(groupId, song);
   return newSong;
}

const updateSong = async (id, song) => {
   return await repository.updateSong(id, song);
}

const deleteSong = async (id) => {
   return await repository.deleteSong(id);
}

const saveAudioTrack = async (id, audioTrack) => {
   return await tracks.uploadTrack(id, audioTrack);
}

const getAudioTrack = async (id) => {
   return await tracks.getTrack(id);
}

const deleteAudioTrack = async (id) => {
   return await tracks.deleteTrack(id);
}

module.exports = {
   getAllSongs,
};
