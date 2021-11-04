const router = require('express').Router();
const { UserDog, User } = require('../../models');


router.get("/",(req,res)=>{
  UserDog.findAll({
    include:[User]
  }).then(dbUserDogs=>{
      if(dbUserDogs.length){
          res.json(dbUserDogs)
      } else {
          res.status(404).json({message:"No dogs found!"})
      }
  }).catch(err=>{
      console.log(err);
      res.status(500).json({message:"an error occured",err:err})
  })
})

router.post('/', async (req, res) => {
  try {
    console.log(req.session.user_id)
    const dogData = await UserDog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(dogData);
    
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});



module.exports = router;
