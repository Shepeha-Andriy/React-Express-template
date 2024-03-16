import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

try {
  app.listen(process.env.APP_PORT || 8080, () => {
    console.log('server started')
  })
} catch (error) {
  console.log(error)
}
