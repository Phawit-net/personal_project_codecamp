module.exports = (app, db) => {
  app.get('/formats', (req, res) => {
    db.format.findAll()
      .then(result => {
        res.status(200).json(result)
      })
      .catch(error => {
        res.status(400).json({ message: error.message })
      })
  })

  app.get('/format/:pid', (req, res) => {
    db.format.findAll({
      where: {
        product_id: req.params.pid
      },
      attributes: ['file_format']
    })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(error => {
        res.status(400).json({ message: error.message })
      })
  })
  // app.post('/format', (req, res) => {
  //   db.format.create({
  //     file_format: req.body.file_format,
  //     product_id:req.body.product_id
  //   })
  //     .then(result => {
  //       res.status(200).json(result)
  //     })
  //     .catch(error => {
  //       res.status(400).json({ message: error.message })
  //     })
  // })

  app.post('/format', async (req, res) => {
    try {
      for (file of req.body.file_format){
        await db.format.create({
          file_format: file,
          product_id:req.body.product_id
        })
      }
      res.status(200).json("Add success")
    } catch (error) {
      res.status(400).json({ message: "Cannot insert" })
    }
  })
//   app.put('/format/:id', async (req, res) => {
//     try {
//       const result = await db.format.update(
//         {
//           name: req.body.name,
//           file_format: req.body.file_format
//         },
//         {
//           where: { id: req.params.id }
//         }
//       )
//       res.status(201).json(result)
//     }
//     catch (err) {
//       res.status(400).json()
//     }
//   })

//   app.delete('/format/:id',async(req,res)=>{
//     try{ 
//     const result = await db.format.destroy(
//         {
//             where :{id:req.params.id}  
//         }
//     )
//     res.status(200).json(result)
//     }
//     catch(err){
//         res.status(400).json()
//     }    
// })

}

