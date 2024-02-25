const userController = {}
const jwtDecode = require("jwt-decode")
const jwtSecret = process.env.JWT_SECRET;
const User = require("../modals/userScehma")

userController.getUser = async (req, res) => {
    try {
        const userId = req.userId
        
        const user = await User.findById(userId)

        if (!user){
            res.status(404).json({message: "No User Found"})
        }
        res.status(200).json({name: user.name, email: user.email, id: user._id})
    } catch (error) {
        console.log(error)
    }
}

module.exports = userController