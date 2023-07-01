const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dataCairanSchema = new Schema({
  jenis_cairan_input: {
    type: String
  },
  jumlah_dosis_cairan_input: {
    type: String
  },
  jenis_cairan_output: {
    type: String
  },
  jumlah_dosis_cairan_output: {
    type: String
  }
});

const dataObservasiSchema = new Schema({
  hari: {
    type: String,
  },
  jam_01: [dataCairanSchema],
  jam_02: [dataCairanSchema],
  jam_03: [dataCairanSchema],
  jam_04: [dataCairanSchema],
  jam_05: [dataCairanSchema],
  jam_06: [dataCairanSchema],
  input_output_1: {
    type: String,
  },
  jam_07: [dataCairanSchema],
  jam_08: [dataCairanSchema],
  jam_09: [dataCairanSchema],
  jam_10: [dataCairanSchema],
  jam_11: [dataCairanSchema],
  jam_12: [dataCairanSchema],
  input_output_2: {
    type: String,
  },
  jam_13: [dataCairanSchema],
  jam_14: [dataCairanSchema],
  jam_15: [dataCairanSchema],
  jam_16: [dataCairanSchema],
  jam_17: [dataCairanSchema],
  jam_18: [dataCairanSchema],
  input_output_3: {
    type: String,
  },
  jam_19: [dataCairanSchema],
  jam_20: [dataCairanSchema],
  jam_21: [dataCairanSchema],
  jam_22: [dataCairanSchema],
  jam_23: [dataCairanSchema],
  jam_24: [dataCairanSchema],
  input_output_4: {
    type: String,
  },
});

const ObservasiCairanSchema = new Schema({
  status_pulang: {
    type: Boolean,
  },
  no_rekam_medis: {
    type: String,
    required: true,
    ref: 'Patient',
    field: 'no_rekam_medis'
  },
  data_observasi: [dataObservasiSchema],
}, { timestamps: true });

module.exports = mongoose.model("RekamMedisObservasiCairan", ObservasiCairanSchema);
