const express = require('express');
const router = express.Router();



require("../DB/conn");
const User = require("../Model/userSchema");



router.get("/", async (req, res) => {
    await res.send("home page")
})


router.post('/insert', async (req, res) => {
    const { sname, semail, saddress, sphone } = req.body;
    try {
        const response = await User.findOne({ name: sname });
        if (response) {
            return res.json({ error: "User Exist" });
        }
        const userCreation = new User(
            {
                name: sname,
                email: semail,
                address: saddress,
                phone: sphone
            }
        )

        const userRegistered = await userCreation.save();

        if (userRegistered) {
            res.status(200).json({ message: "Registered Successfully" })
        } else {
            res.status(400).json({ message: "Registration UnSuccessfull" })
        }
    } catch (err) {
        console.log(err);
    }
})

router.get("/read", async (req, res) => {
    User.find({}, (err, response) => {
        if (err) {
            res.send(err)
        }
        res.send(response)
    })
})


router.put("/update",async  (req, res) => {
    const { sid, semail, saddress, sphone } = req.body;
    // console.log(sid);
   
    try {
     await User.findById(sid,(err,result)=>{
         result.email = semail,
         result.address = saddress,
         result.phone = sphone;

         result.save();
         res.send("updated")
     });
    } catch (err) {
        console.log(err);
    }
})


router.delete("/delete", async(req, res)=>{
//    const sid = req.params.id;
    const {sid} = req.body;
    User.findByIdAndRemove(sid).exec();
})

module.exports = router;