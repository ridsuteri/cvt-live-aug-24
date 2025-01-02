const User = require("../models/User");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const showUsers = async (req, res) => {
  try {
    let { userId } = req.params;
    if (userId) {
      let users = await User.find({ username: userId });
      res.status(200).json({ data: users });
    } else {
      let users = await User.find();
      res.status(200).json({ data: users });
    }
  } catch (e) {
    res
      .status(500)
      .json({ data: `Intenal server error : ${JSON.stringify(err)}` });
  }
};

const addUser = async (req, res) => {
  try {
    const user = req.body;
    user.password = await bcrypt.hash(user.password, saltRounds);
    const userObj = new User(user);
    await userObj.save();
    res.status(201).json({ data: "User added successfully" });
  } catch (err) {
    res.status(500).json({ data: `Error saving the document: ${JSON.stringify(err)}` });
  }
};

const deleteUser = async (req, res) =>{
    try{
        let { userId } = req.params;
        let result = await User.findOneAndDelete({username: userId})
        if(result){
            res.status(200).json({ data: "User deleted successfully" });
        }
        else{
            res.status(404).json({ data: "User doesn't exist" });   
        }
    }catch(err){
        res
        .status(500)
        .json({ data: `Intenal server error : ${JSON.stringify(err)}` });
    }
}

const updateUser = async (req, res)=>{
    try{
        let { userId } = req.params;
        let userObj = req.body
        let result = await User.findOneAndUpdate({username: userId}, userObj)
        if(result){
            res.status(200).json({ data: "User updated successfully" });
        }
        else{
            res.status(404).json({ data: "No matching record found" });   
        }
    }catch(err){
        res
        .status(500)
        .json({ data: `Intenal server error : ${err}` });
    }
}

module.exports = { showUsers, addUser, deleteUser, updateUser };
