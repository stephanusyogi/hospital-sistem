const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const RoomSchema = new Schema({
  nama_ruangan: {
    type: String,
    required: true,
  },
  kelas: {
    type: String,
    required: true,
  },
  harga: {
    type: Number,
    required: true,
  },
  kuota_kasur: {
    type: Number,
    required: true,
  },
  is_deleted: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Room", RoomSchema);
