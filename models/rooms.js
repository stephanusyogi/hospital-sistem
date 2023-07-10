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
  },
  is_deleted: {
    type: Boolean,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Room", RoomSchema);
