import User from "../model/User.js"


export const handleListUsers = async (req, res) => {
    try{
        const users = await User.find()
        console.log('users:', users)
        res.send(users)
    } catch (error) {
        console.log("🚀 ~ error LIST USER:", error.message);
        res.send("Error in listing users" + error.message);

    }

}

export const handleAddUser = async (req, res) => {
    console.log('handleAddUser:', req.body)
    try{
        const newUser = await User.create(req.body)
        console.log('new user:', newUser)
        res.send('New user added to the DB')
    } catch (error) {
        console.log("erroe add user:", error.message)
        res.send("Error in add user" + error.message)
    }
}