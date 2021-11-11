import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import { getRooms } from '../../../controllers/roomControllers'


const handler = nc();

dbConnect();

handler.get(getRooms)

export default handler;