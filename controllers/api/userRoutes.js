const router = require('express').Router();
const { User, UserDog } = require('../../models');
const nodemailer = require("nodemailer");
require('dotenv').config();


router.get("/",(req,res)=>{
  User.findAll({
    include:[UserDog]
  }).then(dbUsers=>{
      if(dbUsers.length){
          res.json(dbUsers)
      } else {
          res.status(404).json({message:"No users found!"})
      }
  }).catch(err=>{
      console.log(err);
      res.status(500).json({message:"an error occured",err:err})
  })
})

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    email(userData);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    // });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get("/loggedinuser",async (req,res)=>{
  try {
    const dogData = await User.findByPk(req.session.user_id, {
      include:  [UserDog] ,
    });
    res.json(dogData);
    if (dogData) {
      res.status(200)
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// node mailer 
async function email(data) {
 
  
  let transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'tomadoggy@hotmail.com', 
      pass: '12345password', 
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"TomaDoggy Company 🦴" <tomadoggy@hotmail.com>', // sender address
    to: toString(data.email), // list of receivers
    subject: "Thanks for signing up with TomaDoggy!🐕", // Subject line
    text: "Welcome to our pack! We hope you enjoy playing with your new bestfriend! 🐾", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

}

email().catch(console.error);
module.exports = router;
