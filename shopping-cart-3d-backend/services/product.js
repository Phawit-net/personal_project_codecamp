module.exports = (app, db) => {
    app.get('/products/:id', (req, res) => {
      db.product.findAll({
        where :{
          category_id: req.params.id
        },
        attributes : ['name','price','image','id']
      })
        .then(result => {
          res.status(200).json(result)
        })
        .catch(error => {
          res.status(400).json({ message: error.message })
        })
    })

    app.get('/products/subcategory/:id', (req, res) => {
      db.product.findAll({
        where :{
          sub_category_id: req.params.id
        },
        attributes : ['name','price','image','id']
      })
        .then(result => {
          res.status(200).json(result)
        })
        .catch(error => {
          res.status(400).json({ message: error.message })
        })
    })

    app.post('/product' , (req,res)=>{
      db.product.create({
          name : req.body.name,
          category_id : req.body.category_id,
          sub_category_id : req.body.sub_category_id,
          price : req.body.price,
          description : req.body.description,
          image : req.body.image,
          published_date : req.body.published_date
      }).then(result => {
          res.status(200).json(result)
        })
        .catch(error => {
          res.status(400).json({ message: error.message })
        })
    })
}