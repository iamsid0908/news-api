import { Router } from "express";
import {  getAllNews} from "../controller/news.controllers";

const newsroutes = Router()


newsroutes.post("/getallnews", getAllNews)

export default newsroutes