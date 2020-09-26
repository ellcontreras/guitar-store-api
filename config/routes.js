import GuitarController from "./../src/controllers/GuitarController"

export default server => {
  server.get('/api/guitar', GuitarController.getAll)
  server.post('/api/guitar', GuitarController.insert)
  server.put('/api/guitar/:id', GuitarController.update)
  server.delete('/api/post/:id', GuitarController.delete)
}

