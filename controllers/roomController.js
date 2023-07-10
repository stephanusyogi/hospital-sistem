const Room = require("../models/rooms");

const createRoom = async (req, res) => {
  try {
    const { nama_ruangan, kelas, harga } = req.body;

    if (!nama_ruangan || !kelas || !harga) {
      throw new Error("This field are required!");
    }

    const newRoom = new Room({
      nama_ruangan,
      kelas,
      harga,
      is_deleted: false,
    });

    const savedRoom = await newRoom.save();
    res
      .status(200)
      .send({ message: "Room created successfully", room: savedRoom });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getRoom = async (req, res) => {
  try {
    const rooms = await Room.find({ is_deleted: false }).sort({ kelas: 1 });

    res.status(200).send(rooms);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getRoomById = async (req, res) => {
  try {
    const { id } = req.params;
    const room = await Room.findById(id);

    if (!room) {
      throw new Error("Room not found!");
    }

    res.status(200).send(room);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateRoom = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = req.body;

    const updatedRoom = await Room.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ room: updatedRoom });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteRoom = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = {
      is_deleted: true,
    };

    const deletedRoom = await Room.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ room: deletedRoom });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createRoom,
  getRoom,
  getRoomById,
  updateRoom,
  deleteRoom,
};
