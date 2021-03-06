import nc from "next-connect";

import dbConnect from "../../../config/dbConnect";

import { getRooms, newRoom } from '../../../controllers/roomControllers'


const handler = nc();

dbConnect();

handler.get(getRooms)

handler.post(newRoom)

export default handler;