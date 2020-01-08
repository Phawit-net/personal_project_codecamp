module.exports = (app, db) => {
  app.get('/products/:id', (req, res) => {
    db.product.findAll({
      where: {
        category_id: req.params.id
      },
      attributes: ['name', 'price', 'image', 'id']
    })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(error => {
        res.status(400).json({ message: error.message })
      })
  })
  // path for detail page
  app.get('/details/:name', (req, res) => {
    db.product.findOne({
      where: {
        name: req.params.name
      }, include: [{
        model: db.format
      }]
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
      where: {
        sub_category_id: req.params.id
      },
      attributes: ['name', 'price', 'image', 'id']
    })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(error => {
        res.status(400).json({ message: error.message })
      })
  })

  app.post('/product', (req, res) => {
    // if (!req.files) {
    //   res.send({
    //     status: false,
    //     message: 'No file uploaded'
    //   })
    // } else {
    //   const picture = req.files.imageUpload
    //   const pictureName = `${(new Date()).getTime()}.jpeg`;
    //   picture.mv('./upload/' + pictureName)

    //   res.send({
    //     status: true,
    //     message: 'File is uploaded',
    //     data: {
    //       name: pictureName,
    //       size: picture.size
    //     }
    //   })
      db.product.create({
        name: req.body.name,
        category_id: req.body.category_id,
        sub_category_id: req.body.sub_category_id,
        price: req.body.price,
        description: req.body.description,
        user_id:req.body.user_id,
        // image: req.body.image,
        published_date: req.body.published_date,
        polygons_type: req.body.polygons_type,
        polygons_count: req.body.polygons_count,
        vertices_count: req.body.vertices_count,
        texture: req.body.texture,
        material: req.body.material,
        rigged: req.body.rigged,
        animated: req.body.animated,
        uv_mapped: req.body.uv_mapped,
        unwrapped: req.body.unwrapped
      }).then(result => {
        res.status(200).json(result)
      })
        .catch(error => {
          res.status(400).json({ message: error.message })
        })
    // }
  })

}