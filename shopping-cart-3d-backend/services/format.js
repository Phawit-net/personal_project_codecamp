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

  app.post('/format', (req, res) => {
    db.format.create({
      name: req.body.name,
      file_format: req.body.file_format
    })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(error => {
        res.status(400).json({ message: error.message })
      })
  })

  app.put('/format/:id', async (req, res) => {
    try {
      const result = await db.format.update(
        {
          name: req.body.name,
          file_format: req.body.file_format
        },
        {
          where: { id: req.params.id }
        }
      )
      res.status(201).json(result)
    }
    catch (err) {
      res.status(400).json()
    }
  })

  app.delete('/format/:id',async(req,res)=>{
    try{ 
    const result = await db.format.destroy(
        {
            where :{id:req.params.id}  
        }
    )
    res.status(200).json(result)
    }
    catch(err){
        res.status(400).json()
    }    
})

}

