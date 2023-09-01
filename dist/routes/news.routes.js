"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const news_controllers_1 = require("../controller/news.controllers");
const newsroutes = (0, express_1.Router)();
newsroutes.post("/getallnews", news_controllers_1.getAllNews);
exports.default = newsroutes;
