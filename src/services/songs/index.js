// Desc: Service layer for songs
const repository = require('../../repositories/songs/index.js');
const ccli = require('../external/ccli/index.js');

const getAllSongs = async () => {
   const results = await repository.getAllSongs();
   return results;
}

const getGroupSongs = async (groupId) => {
   const results = await repository.getGroupSongs(groupId);
   return results;
}

const searchSongs = async (query, groupId) => {
   const groupResults = await repository.searchSong(groupId, query);
   const globalResults = await ccli.searchSong(query);
   return { groupResults, globalResults };
}

const saveNewSong = async (groupId, data) => {
   if (!groupId) {
      return await repository.saveNewSong(data);
   }
   return await repository.saveGroupSong(data, groupId);
}

const updateSong = async (id, data) => {
   return await repository.updateSong(id, data);
}

const deleteSong = async (id) => {
   return await repository.deleteSong(id);
}

module.exports = {
   getAllSongs,
   getGroupSongs,
   searchSongs,
   saveNewSong,
   updateSong,
   deleteSong,
};
