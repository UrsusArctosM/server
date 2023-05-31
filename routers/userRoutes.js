import express from 'express'

const userRouter = express();

userRouter.get('/', (req, res) => {
    return res.json({message: 'ok get user'})
})

userRouter.post('/', (req,res) =>{
    return res.json({message: 'ok post user'})
})

export {userRouter}