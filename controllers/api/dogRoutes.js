const router = require('express').Router();
const { Dog, UserDog ,User } = require('../../models');


router.get("/",(req,res)=>{
  Dog.findAll({
    include:[UserDog]
  }).then(dbDogs=>{
      if(dbDogs.length){
          res.json(dbDogs)
      } else {
          res.status(404).json({message:"No dogs found!"})
      }
  }).catch(err=>{
      console.log(err);
      res.status(500).json({message:"an error occured",err:err})
  })
})

module.exports = router;