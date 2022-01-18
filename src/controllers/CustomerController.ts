import { Request, Response } from 'express'
import { prismaClient } from '../prisma'

class CustomerController {
  async createCustomer(req: Request, res: Response): Promise<Response> {

    try {
      const { cpf, name, state, city, phone, mail } = req.body

      const customerValidate = await prismaClient.customer.findFirst({ where: { cpf } })

      if (!customerValidate) {
        const customer = await prismaClient.customer.create({
          data: {
            cpf,
            name,
            state,
            city,
            phone,
            mail
          }
        })
        return res.json(customer)

      } else {
        return res.json({ message: "Ja possui um cliente cadastrado com esse Cpf" })
      }
    } catch (error: any) {
      return res.json({ message: error.message })
    }
  }

  async updateCustomer(req: Request, res: Response): Promise<Response> {
    try {
      const cpf = parseInt(req.params.cpf)
      const customer = await prismaClient.customer.findFirst({ where: { cpf } })

      if (customer) {
        const customerID = customer.id_customer
        const {
          name,
          state,
          city,
          phone,
          mail } = req.body

        const customerUpdated = await prismaClient.customer.update({
          where: {id_customer: customerID},
          data: {
            name,
            state,
            city,
            phone,
            mail
          }
        })
        return res.json(customerUpdated)
      } else {
        return res.json({ Message: "Cliente nao existe" })
      }

    } catch (error: any) {
      return res.json(error.message)
    }
  }
}

export { CustomerController }