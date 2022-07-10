import {Request, Response} from 'express'
import {PrismaClient} from '@prisma/client'
class UserController { 
        public async save(req:Request, res:Response){
            const {name,lastName, age, time} = req.body
            const prisma = new PrismaClient()
            const user = await prisma.user.create({data:{
                name, 
                lastName, 
                age
            }
        })
            return res.json({usuario:user})
        }
        public async list(req:Request,res:Response){
            const prisma = new PrismaClient()
            const users = await prisma.user.findMany()
            return res.json({message:"retorno de usuarios",data:users})
        }

}

export const userController = new UserController()