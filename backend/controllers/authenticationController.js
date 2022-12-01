const db = require("./../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getuser = async (req, res) => 
{
    try
    {
        const users = await db.user.findAll();
        res.json(users);
    }catch (error)
    {
        console.log(error);
    }
}

    const register = async (req, res) => 
{
    const { email,nip,userid, password,confirmPassword } = req.body;

    //validasi user ada atau tidak
    const checkData = await db.profile.findOne({ where: { nip,email,userid } })
    console.log(checkData)
    if(!checkData){
        return res.status(400).json({ message: "user anda tidak terdaftar!"})
    }
    //validasi user ada atau tidak
    const validateEmail = await db.user.findOne({ where: { email}})
    if(validateEmail) {
        return res.json({ message: "email already exsist!"})
    }
    if(password !== confirmPassword) 
    {
        return res.status(400).json({ message: "Password dan Confirm Password tidak sama!"});
    }
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try{
        const resAdd = await db.user.create({ userid, email, password: hashPassword });
    return res.status(201).json({
        message: "register data successfully!",
        data: resAdd,
    })
    }catch(error)
    {
        console.log(error);
    }
} 

const login = async (req, res) => {
    const { email, password} = req.body;
    const checkData = await db.user.findOne({ where: { email } })

    if(!checkData){
        return res.status(400).json({ message: "email or password not found!"})
    }
    
    const comparePassword = await bcrypt.compare(password, checkData.password);
    if(!comparePassword) {
        return res.status(400).json({ message: "Password Salah!"})
    }

    const token = jwt.sign({ id: checkData.id, email: checkData.email, password: checkData.password}, process.env.ACCESS_TOKEN_SECRET);
    return res.status(200).json({ message: "login successfully!", token});
}

module.exports = { register,login,getuser}