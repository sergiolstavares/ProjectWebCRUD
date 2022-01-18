import { Request, Response } from 'express'
import { prismaClient } from '../prisma'

class MechanicController {
  async createMechanic(req: Request, res: Response): Promise<Response> {
    try {
      const { cpf, name, state, city, phone, mail } = req.body

      const mechanicValidate = await prismaClient.mechanic.findFirst({ where: { cpf } })

      if (!mechanicValidate) {
        const mechanic = await prismaClient.mechanic.create({
          data: {
            cpf,
            name,
            state,
            city,
            phone,
            mail
          }
        })
        return res.json(mechanic)

      } else {
        return res.json({ message: "Ja possui um Mecanico cadastrado com esse Cpf" })
      }
    } catch (error: any) {
      return res.json({ message: error.message })
    }
  }

  async updateMechanic(req: Request, res: Response): Promise<Response> {
    try {
      const cpf = parseInt(req.params.cpf)
      const mechanic = await prismaClient.mechanic.findFirst({ where: { cpf } })

      if (mechanic) {
        const mechanicID = mechanic.id_mechanic
        const {
          name,
          state,
          city,
          phone,
          mail } = req.body

        const mechanicUpdated = await prismaClient.mechanic.update({
          where: { id_mechanic: mechanicID },
          data: {
            name,
            state,
            city,
            phone,
            mail
          }
        })
        return res.json(mechanicUpdated)
      } else {
        return res.json({ Message: "Mecanico nao existe" })
      }

    } catch (error: any) {
      return res.json(error.message)
    }
  }
}

export { MechanicController }