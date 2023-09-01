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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectMongo = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        mongoose_1.default.connect("mongodb+srv://sid:sid@cluster0.keue1ae.mongodb.net/", {
            autoIndex: true,
        })
            .then(() => {
            console.log('Mongo connected fromm here');
            resolve('Mongo connected');
        })
            .catch((err) => {
            console.error(err);
            reject(err);
        });
    });
});
exports.default = connectMongo;
// mongodb+srv://siddharthchandrakar007:sid@cluster0.frfuw5a.mongodb.net/
