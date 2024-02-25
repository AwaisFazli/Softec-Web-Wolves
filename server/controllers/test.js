const Test = require("../modals/test")

const testControllers = {}

testControllers.CheckConnection = async (req, res) => {
    try {
        const name = req.body?.name
        const newName = new Test({
            name: name
        })

        const savedName = await newName.save()
        res.json({
            message: "Name saved",
            name: savedName
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = testControllers