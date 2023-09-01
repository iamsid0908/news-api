import { Request,Response } from "express";
require('dotenv').config()
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);


export async function  getAllNews(req:Request,res:Response){
    let params = req.body;
    if (!params) {
        params.params = 'everything';
      }
    newsapi.v2.everything({
        q: `${params.params}`,
        language: 'en',
        sortBy: 'relevancy',
        page: 2
      })
      .then((response:any) => {
        res.status(200).json({
            success:true,
            response
        })
      })
}