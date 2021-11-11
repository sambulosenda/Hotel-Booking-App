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



export {
    getRooms,
    newRoom,
}