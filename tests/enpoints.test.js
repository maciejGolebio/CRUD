const request = require('supertest')
const app = require('../server.js')

describe('Post Endpoints', () => {
  it('should create player (health check)', async ()=> {
    const res = await request(app).post('/v1/chessplayers').send({
        name : "Maciek",
        elo: 1800,
      })
    expect(res.status).toEqual(200)
  })
})
describe('Get Endpoints', () => {
  it('should health check', async ()=> {
    const res = await request(app).get('/v1/chessplayers')
    expect(res.status).toEqual(200)
  })
})