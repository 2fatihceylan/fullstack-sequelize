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


router.get("/byId/:id", async (request, response)=>{

    const id = request.params.id;

    const post = await Posts.findByPk(id);  // id ile (primary key ile) veri çektik

    response.json(post);

})


module.exports = router;
