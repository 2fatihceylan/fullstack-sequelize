const express = require('express');
const router = express.Router();
const {Comments} = require('../models');
const {validateToken} = require('../middlewares/JWT')



router.get("/:postId", async(request,response)=>{

    const postId = request.params.postId;

    const comments = await Comments.findAll({where: {PostId: postId}});

    response.json(comments);
})


router.post("/",validateToken, async(request, response)=>{

    const comment = request.body;

    await Comments.create(comment);

    response.json(comment);

})





module.exports=router;