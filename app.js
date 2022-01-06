import express from 'express';
import mongoose from 'mongoose';
import UserRouter from './routes/user.js';
import ProductRouter from './routes/product.js';
import dotenv from 'dotenv';
import OrderRouter from './routes/order.js';
import emailRouter from './routes/newletter.js';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

dotenv.config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.DB_URL;

const server = http.createServer(app);

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(()=> console.log(`Database Connected`))
.catch((error)=> console.log(error));

app.use('/api/users', UserRouter);
app.use('/api/products', ProductRouter);
app.use('/api/orders', OrderRouter);
app.use("/api/newsletter", emailRouter);

app.get('/api/config/paypal', (req,res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

if(process.env.ENV === "PROD"){
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    app.use(express.static(path.join(__dirname, 'build')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
  }

server.listen(PORT, ()=> console.log(`Server Started at ${PORT}`));

app.get('/',(req,res)=>{
  res.send("Server is Ready");
});







