import express, { json } from 'express'
import { router } from './router'

const app = express()

app.listen(8080, () => {
    console.log('server is run on port 8080')
})
app.use(json())
app.use(router)