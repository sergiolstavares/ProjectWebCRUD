import { Router } from 'express'
import { CustomerController } from './controllers/CustomerController'
import { MechanicController } from './controllers/MechanicController'
import  { UserController }  from './controllers/UserController' 


const router = Router()

router.post('/createUser', new UserController().createUser)
router.put('/updateUser/:cpf', new UserController().updateUser)

router.post('/createCustomer', new CustomerController().createCustomer)
router.put('/updateCustomer/:cpf', new CustomerController().updateCustomer)

router.post('/createMechanic', new MechanicController().createMechanic)
router.put('/updateMechanic/:cpf', new MechanicController().updateMechanic)


export {
    router
}