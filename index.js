import 'dotenv/config';
import saySomeThing from './other';
import express from 'express';
// init app express
const app = express();

saySomeThing();

app.listen(3000);
