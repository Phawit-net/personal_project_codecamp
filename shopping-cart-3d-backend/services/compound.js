module.exports = (app, db) => {
  app.get('/compounds', (req, res) => {
    db.compound.findAll({
    })
      .then((result) => {
        res.status(200).json(result)
      })
      .catch((err) => {
        res.status(400).json()
      })
  })

  app.post('/compound', async (req, res) => {
    db.compound.create({
      productId: req.body.productId,
      formatId: req.body.formatId
    }).then(result => {
      res.status(200).json(result)
    })
      .catch(error => {
        res.status(400).json({ message: error.message })
      })
  })
}
