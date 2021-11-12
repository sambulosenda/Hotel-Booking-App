import { info } from "autoprefixer";
import Room from "../models/room"

//Get all rooms => /api/rooms/
const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json({
            count: rooms.length,
            success: true,
            rooms
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }

}

//Create new room => /api/rooms/create
const newRoom = async (req, res) => {
    try {
        const room = await Room.create(req.body);
        res.status(200).json({
            success: true,
            room
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

//Get room details => /api/rooms/:id
const getSingleRoom = async (req, res) => {
    try {
        const room = await Room.findById(req.query.id)

        if(!room){
            return res.status(404).json({
                success: false,
                error: "Room not found with this id"
            })
        }

        res.status(200).json({
            success: true,
            room
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

//Update room details => /api/rooms/:id
const updateRoom = async (req, res) => {
    try {
        let room = await Room.findById(req.query.id)
        if(!room){
            return res.status(404).json({
                success: false,
                error: "Room not found with this id"
            })
        }

        room = await Room.findByIdAndUpdate(req.query.id, req.body, {
            new: true, 
            runValidators: true, 
            useFindAndModify: false
        })

        res.status(200).json({
            success: true,
            room
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}


//Delete room => /api/rooms/:id
const deleteRoom = async (req, res) => {
    try {
        const room = await Room.findById(req.query.id)
        
        if(!room){
            return res.status(404).json({
                success: false,
                error: "Room not found with this id"
            })
        }

       await room.remove()

        res.status(200).json({
            success: true, 
            message: "Room deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}


export {
    getRooms,
    newRoom,
    getSingleRoom,
    updateRoom,
    deleteRoom
}