// const express = require("express");

import express from "express";
import * as path from "path";
import {dirname} from "path";
const app = express();

app.listen(3000, () => {
    console.log("Application started on port 3000");
});

app.get("/", (req,res) => {
    res.sendFile(path.join(path.resolve(),"/index.html"));
})