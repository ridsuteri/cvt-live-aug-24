const express = require('express');
const {showUsers, addUser, deleteUser, updateUser} = require('../controller/userController')
const router = express.Router();

router.get('/', showUsers);
router.get('/:userId', showUsers);
router.post('/', addUser);
router.delete('/:userId', deleteUser);
router.patch('/:userId', updateUser);

module.exports = router;