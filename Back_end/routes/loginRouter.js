import express from "express";

import { login } from "../controllers/login.controller.js";


const loginrouter = express.Router();

loginrouter.post("/logindata",login);



export default loginrouter;