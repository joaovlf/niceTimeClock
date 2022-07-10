import {Request, Response} from 'express'
import {PrismaClient} from '@prisma/client'
class TimeController { 
        public async save(req:Request, res:Response){
            const prisma = new PrismaClient()
            const { userId } = req.body
            const time = await prisma.time.create({
                data:{
                    userId,
                    created_At:new Date(),
                }
            })
            return res.json({Tempo:time})
        }
        public async list(req:Request,res:Response){
            const prisma = new PrismaClient()
            const time = await prisma.time.findMany()
            return res.json({message:"retorno de usuarios",data:time})
        }

}

export const timeController = new TimeController()