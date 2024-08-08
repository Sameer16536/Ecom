const express = require('express')
const zod = require('zod')
const {PrismaClient}  = require('@prisma/client')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieparser = require('cookie-parser')
const cors = require('cors')

const prisma = new PrismaClient()
const app = express()

//Middlewares::
app.use(express.json())
app.use(cors())
app.use(cookieparser())