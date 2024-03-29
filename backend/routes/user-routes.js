const express = require('express');
const {getAllUser, signup, updateUser, deleteUser, login, getBookingsofUser, getUserById, imageUpload} = require('../controllers/user-controller');

const userRouter = express.Router();

userRouter.get("/", getAllUser);
userRouter.get("/:id", getUserById);
userRouter.post("/signup",signup);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/login", login);
userRouter.get("/booking/:id", getBookingsofUser);
userRouter.post("/upload", imageUpload, (req, res) => {
    res.send("file uploades")
});
module.exports = userRouter;