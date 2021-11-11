import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
    
    name:{
        type: String, 
        required: [true, 'Please enter room name'],
        trim: true, 
        maxLength: [100, 'Room name cannot exceed 100 characters']
    }, 

    price:{
        type: Number, 
        required: [true, 'Please enter room price'],
        trim: true, 
        maxLength: [4, 'Room price cannot exceed 4 characters']
    }, 

    description:{
        type: String, 
        required: [true, 'Please enter room description'],
       
    },
    Address:{
        type: String, 
        required: [true, 'Please enter room address'],
       
    },
    guestCapacity:{
        type: Number, 
        required: [true, 'Please enter room guest capacity'],
       
    },
    noOfBed:{
        type: Number, 
        required: [true, 'Please enter room number of beds'],
       
    },
    internet:{
        type: Boolean, 
        default: false,
       
    },
    breakfast:{
        type: Boolean, 
        default: false,
       
    },
    airConditioned:{
        type: Boolean, 
        default: false,
       
    },
    petsAllowed:{
        type: Boolean, 
        default: false,
       
    },
    roomCleaning:{
        type: Boolean, 
        default: false,
    },

    ratings:{
        type: Number, 
        default: false,
       
    },

})

export default mongoose.model.Room || mongoose.model('Room', roomSchema);
