const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const DrugSchema = new Schema({
  nama_obat: {
    type: String,
    required: true,
  },
  harga: {
    type: Number,
    required: true,
  },
  is_deleted: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Drug", DrugSchema);
