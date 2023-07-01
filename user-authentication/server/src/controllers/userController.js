import User from '../models/User.js'

export const handleUserRegister = async (req, res) => {
    const { firstName, lastName, username, email, password} = req.body
    console.log("Register user:", req.body)
    try{
        const user = await User.create({
            firstName, lastName, username, email, password
        })
        console.log('User Registered Successfully')
        res.satus(201).json({
            success: true,
            user
        })
        res.send()
    } catch (error){
        res.status(500).json({
            success:false,
            error: error.message,
        })
    }
    
}

export const handleUserLogin = (req, res) => {
    res.send('User Login Successfully')
}

export const handleFogotPassword = (req, res) => {
    res.send('Forgot Password')
}

export const handleResetPassword = (req, res) => {
    res.send('Reset Password Successfully')
}