const express = require('express');
const router = express.Router();
const {Users} = require('../models');

const bcrypt = require('bcrypt');

const {createTokens, validateToken} = require('../JWT');



router.post("/register", async (request, response)=>{

    const {username, password} = request.body;

    bcrypt.hash(password, 10).then(async (hash)=>{

        try {
            var user = await Users.create({
                username: username,
                password: hash
            })

            response.status(200).json({result: user})
         
        }
        catch(error){

            console.log('--------------------------------');
            console.log(error.name);
            console.log('------------------------------------');
            if (error.name === 'SequelizeUniqueConstraintError') {
                response.status(403).json({ message: "User already exists"});
            } else {
                response.status(500)
                response.json({ status: 'error', message: "Something went wrong"});
            }
        }

        
    })
} );




router.post("/login", async (request, response)=>{

    const {username, password} = request.body;

    const user = await Users.findOne({where: {username: username}});

    if(!user) {
        response.json({error: "User_does_not_exist"});
    }
    else{
  
     bcrypt.compare(password, user.password).then((match)=>{

        if(!match){
            response.json({error: "wrong_password"})
        }
        else{

            

            const accessToken = createTokens(user.dataValues);

            response.cookie('access-token',accessToken,{
                maxAge: 60*60*24*30*1000,
                httpOnly: true,
            })

            response.json("you_logged_in");

        }

     })      
    }

})


router.get("/isLogin", validateToken,  (request, response)=>{

    response.status(200).json("user_already_loggedin");
  
     
} );

router.get("/logout", validateToken, async (request, response)=>{

    const temp = {username: 'asd', id: 0}

    const accessToken = createTokens(temp);

    response.cookie('access-token', accessToken, {
        maxAge: 1,
        httpOnly: true,
    })

    response.status(200).json("user_logedout");
  
     
} );





module.exports = router;