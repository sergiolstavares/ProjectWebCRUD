import { Request, Response } from 'express'
import { prismaClient } from '../prisma'

class UserController {
    async createUser(req: Request, res: Response): Promise<Response> {
        try {
            const { cpf, name, mail, password } = req.body

            const userExists = await prismaClient.user.findFirst({
                where: { cpf }
            })

            if (!userExists) {
                const user = await prismaClient.user.create({
                    data: {
                        cpf,
                        name,
                        mail,
                        password
                    }
                })
                return res.json(user)
            } else {
                return res.json({ Message: "Ja existe um usuario cadastrado com esse CPF" })
            }
        }
        catch (error: any) {
            return res.json({ error: error.message })
        }
    }

    async updateUser(req: Request, res: Response): Promise<Response> {
        try {
            const cpf = parseInt(req.params.cpf)
            const user = await prismaClient.user.findFirst({where: { cpf }})

            if(user) {
                const userID = user.id
                const {
                    name,
                    mail,
                    password } = req.body
    
                const userUpdated = await prismaClient.user.update({
                    where: { id: userID },
                    data: {
                        name,
                        mail,
                        password
                    }
                })
                return res.json(userUpdated)
            } else {
                return res.json({Message: "Usuario nao existe"})
            }
            
        } catch (error: any) {
            return res.json(error.message)
        }
    }
}

export { UserController }