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
function getAllNews(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
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
            .then((response) => {
            res.status(200).json({
                success: true,
                response
            });
        });
    });
}
exports.getAllNews = getAllNews;
