const express = require('express');
const router = express.Router();

const {Posts} = require('../models')

router.get("/", async (request, response)=>{

    const listOfPosts = await Posts.findAll(); // databaseden veri çektik

    response.json(listOfPosts);
});


router.post("/", async (request, response) =>{

    const post = request.body;

    await Posts.create(post);  // database e kaydettik

    response.json(post);

});


module.exports = router;
