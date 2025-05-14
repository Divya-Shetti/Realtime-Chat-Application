//const express=require("express")
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";

import express from "express";
import { app,server } from "./lib/socket.js";

import cookieParser from "cookie-parser";
import path from "path";

app.use(cookieParser());
dotenv.config()

const __dirname = path.resolve();


import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
app.use(express.json());

import cors from "cors"

app.use(cors(
   { origin: "http://localhost:5173",
    credentials:true,
   }
));

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // Only forward non-API routes to React
  app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });

  /*
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });*/
}

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
   connectDB();
});
/*
const PORT=process.env.PORT
server.listen(PORT,()=>{
    console.log("Server is running on port: "+PORT);
    connectDB();
});*/