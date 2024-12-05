import express from 'express'
import { UserControllers } from './user.controller'

const router = express.Router()

router.post('/create-user', UserControllers.createStudent)

export const userRoutes = router