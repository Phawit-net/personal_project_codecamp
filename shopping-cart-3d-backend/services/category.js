module.exports = (app, db) => {
    app.get('/categories', (req, res) => {
      db.category.findAll({
        include: [{
          model: db.sub_category
        }]
      })
        .then(result => {
          res.status(200).json(result)
        })
        .catch(error => {
          res.status(400).json({ message: error.message })
        })
    })

    app.post('/category' , (req,res)=>{
        db.category.create({
          name : req.body.name,
          icon : req.body.icon
        }).then(result => {
            res.status(200).json(result)
          })
          .catch(error => {
            res.status(400).json({ message: error.message })
          })
    })

    app.delete('/category/:id', (req, res) => {
      db.category.destroy({ where: req.params.id })
        .then(result => {
          res.status(204).json()
        })
        .catch(error => {
          res.status(400).json({ message: error.message })
        })
    })

    app.put('/category/:id', (req, res) => {
      db.category.update({
        name: req.body.name,
        icon: req.body.icon,
      }, { where: { id: req.params.id } })
        .then(result => {
          res.status(200).json(result)
        })
        .catch(error => {
          res.status(400).json({ message: error.message })
        })
    })
}