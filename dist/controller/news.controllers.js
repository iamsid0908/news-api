"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNews = void 0;
require('dotenv').config();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);
// export async function  getAllNews(req:Request,res:Response){
//     let params = req.body;
//     if (!params) {
//         params.params = 'everything';
//       }
//     newsapi.v2.everything({
//         q: `${params.params}`,
//         language: 'en',
//         sortBy: 'relevancy',
//         page: 1
//       })
//       .then((response:any) => {
//         res.status(200).json({
//             success:true,
//             response
//         })
//       })
// }
function getAllNews(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let params = req.body; // Use query parameters instead of body
        const startIndex = parseInt(params.index || '0'); // Get the index from the query parameters, default to 0 if not provided
        if (!params.query) {
            params.query = 'everything';
        }
        newsapi.v2.everything({
            q: `${params.query}`,
            language: 'en',
            sortBy: 'relevancy',
            page: startIndex + 1, // Increment the page number based on the index
        })
            .then((response) => {
            const articles = response.articles || [];
            if (articles.length > 0) {
                const firstArticle = articles[0];
                res.status(200).json({
                    success: true,
                    article: firstArticle,
                });
            }
            else {
                res.status(404).json({
                    success: false,
                    message: 'No articles found',
                });
            }
        })
            .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'An error occurred while fetching news',
                error,
            });
        });
    });
}
exports.getAllNews = getAllNews;
