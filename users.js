const express=require('express');
const router = express.Router();
const {v4:uuidv4} = require('uuid');


let users = [
    {
    name: "wisdom",
    lastname: "Awoke",
    age: 24,
    country: "Ethiopia"
    }
]

//all routes in here are starting with /users

router.get('/', (req, res) => {
    
    res.send(users);
});
router.post('/', (req, res) => {
   
    const user = req.body;
    const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    const userWithId = { ...user, id: userId };



    users.push(userWithId);
     res.send(`Create User ${user.name} successful`);
    
});


router.get('/:id', (req, res) => {
    const { id } = req.params;
   const foundUserById= users.find((user)=> user.id === id)
    res.send(foundUserById);
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const filteredUsers = users.filter((user) => user.id !== id);
    res.send(`User with id ${id} deleted from database.`);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { name, lastname, age, country } = req.body;
      const user =  users.find((user)=> user.id === id);
    if(name){
        user.name = name;

    }

      if(lastname){
        user.lastname = lastname;

    }
      if(age){
        user.age = age;

    }
      if(country){
        user.country = country;

    }


    res.send(`User with id ${id} has been updated.`);
  

});




module.exports = router;