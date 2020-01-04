module.exports = (app, db) => {
    app.get('/subcategories', (req, res) => {
      db.sub_category.findAll()
        .then(result => {
          res.status(200).json(result)
        })
        .catch(error => {
          res.status(400).json({ message: error.message })
        })
    })
    // path for detail page
    app.get('/subPath/:sid', (req, res) => {
      db.sub_category.findOne({
        where: {
          id: req.params.sid
        },
        attributes: ['name']
      })
        .then(result => {
          res.status(200).json(result)
        })
        .catch(error => {
          res.status(400).json({ message: error.message })
        })
    })

    app.post('/subcategory' , (req,res)=>{
      db.sub_category.create({
          name : req.body.name,
          category_id:req.body.category_id
      }).then(result => {
          res.status(200).json(result)
        })
        .catch(error => {
          res.status(400).json({ message: error.message })
        })
    })

    app.delete('/subcategory/:id', (req, res) => {
      db.sub_category.destroy({ where: req.params.id })
        .then(result => {
          res.status(204).json()
        })
        .catch(error => {
          res.status(400).json({ message: error.message })
        })
    })

    app.put('/subcategory/:id', (req, res) => {
      db.sub_category.update({
        name : req.body.name,
        category_id:req.body.category_id
      }, { where: { id: req.params.id } })
        .then(result => {
          res.status(200).json(result)
        })
        .catch(error => {
          res.status(400).json({ message: error.message })
        })
    })
}