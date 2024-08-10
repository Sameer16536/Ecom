const express = require('express')
const zod = require('zod')
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieparser = require('cookie-parser')
const cors = require('cors')
const { JWT_SECRET } = require('../config')
const prisma = new PrismaClient()
const app = express()
const PORT = 3000
//Middlewares::
app.use(express.json())
app.use(cors())
app.use(cookieparser())

//Zod
const userInput = zod.object({
    name: zod.string().min(1).max(50),
    email: zod.string().email(),
    password: zod.string().min(8).max(16),
})


//Generate token::
const generateToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' })
}


//SignUp
app.post('/register', async (req, res) => {
    //Input Body validation
    const { validateBody } = userInput.safeParse(req.body)
    if (!validateBody) return res.status(400).json({ error: 'Invalid input' })
    try {
        const { name, email, password } = req.body
        //check if user already exists::
        const existingUser = await prisma.user.findUnique({ where: { email: email } })
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' })
        }
        //Hash the password:
        const hasedPassword = await bcrypt.hash(password, 10)

        //create user::
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hasedPassword
            }
        })
        res.json(user)
    }
    catch (error) {
        console.log(error)
    }
})

//Login:
app.post('/login', async (req, res) => {
    //Input Body validation
    const { validateBody } = userInput.safeParse(req.body)
    if (!validateBody) return res.status(400).json({ error: 'Invalid input' })
    try {
        const { email, password } = req.body
        //check if user exists::
        const user = await prisma.user.findUnique({ where: { email: email } })
        if (!user) {
            return res.status(400).json({ error: 'User does not exist' })
        }
        //check if password is correct:::   
        const hasedPassword = await bcrypt.compare(password, user.password)

        //generate token
        if (user && hasedPassword) {
            const token = generateToken(user);
            //res.cookie(name_of_cookie, value_of_cookie);
            res.cookie('token', token, { httpOnly: true })
            res.json(user)
        }
        else {
            res.status(401).json({ error: "Invalid Credentials" })
        }
    }
    catch (error) {
        console.log(error)
    }
})

//Products::
app.get('/products', async (req, res) => {
try {
    const products = await products.findMany()
    res.json(products)
} catch (error) {
    console.error(error)
}
})

//orders::
app.post('/orders', async (req, res) => {
    const token  = req.cookies.token
    if (!token) {
        return res.status(401).json({ error: "Not authenticated" })
    }

    const {id} = jwt.verify(token,JWT_SECRET)
    const {productId} = req.body

    //create Order:
    const order = await prisma.order.create({data:{
        userId:id ,
        productId:productId
    }})
    res.json(order)
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})