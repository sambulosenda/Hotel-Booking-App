const Room = require('../models/room');
const mongoose = require('mongoose');

//import dbConnect from '../config/dbConnect';

const rooms = require ('../data/rooms');

mongoose.connect('mongodb+srv://sambulo1234:WYwWbBrWV8CEJ6yB@cluster0.iyrwz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const seedRooms = async () => {
 try {
     await Room.deleteMany();
     console.log('Rooms deleted');

     await Room.insertMany(rooms);
     console.log('Rooms seeded');


 } catch (error) {
     console.log(error.message);
     process.exit()
 }
}

seedRooms()