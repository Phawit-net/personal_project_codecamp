const express = require('express')
const app = express()
const cors = require('cors')

const bodyParser = require('body-parser')
const db = require('./models')

const categoryService = require('./services/category')
const subcategoryService = require('./services/sub_category')
const productService = require('./services/product')

app.use(cors())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync({ alter: false }).then(() => {
    categoryService(app, db)
    subcategoryService(app, db)
    productService(app, db)

  app.listen(8081, () => {
    console.log("Server is running on port 8081")
  })
})