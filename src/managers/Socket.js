import io from 'socket.io-client';
import { socketUrl } from "../apiConfig.js"

export const socketio = io(socketUrl);
