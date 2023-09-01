import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import globalroutes from "./routes";
const app = express()

app.use(cors({
    origin:'*'
}))
app.use(express.json());
app.use(bodyParser.json());
app.use("/v1",globalroutes);

const port =8000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})
