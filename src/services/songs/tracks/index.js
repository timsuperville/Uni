const filesystem = require('../../../filesystem/index');
const stems = require('./stems/index');

const uploadTrack = async (id, track) => {
    return await stems.uploadTrack(id, track);
}