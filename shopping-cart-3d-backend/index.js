const express = require('express')
const app = express()
const cors = require('cors')

const bodyParser = require('body-parser')
const db = require('./models')
const passport = require('passport')

const categoryService = require('./services/category')
const subcategoryService = require('./services/sub_category')
const productService = require('./services/product')
const userService = require('./services/user')
const formatService = require('./services/format')


app.use(passport.initialize())

app.use(cors())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

require('./config/passport/passport')

db.sequelize.sync({ alter: false }).then(() => {
    categoryService(app, db)
    subcategoryService(app, db)
    productService(app, db)
    userService(app,db)
    formatService(app,db)

  app.listen(8080, () => {
    console.log("Server is running on port 8080")
  })
})