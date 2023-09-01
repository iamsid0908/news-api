import { Express, Router } from "express";
import newsroutes from "./news.routes";

const globalroutes = Router();

globalroutes.get("/healthCheck",(req,res)=>{ res.status(200).send({message:"helo yt"}) })


globalroutes.use("/news",newsroutes)

export default globalroutes