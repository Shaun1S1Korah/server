import { Hono } from 'hono'

const app = new Hono()

app.get('/person', (c) => {
  return c.json({
    minor: false,
    age: 22,
    lastName: 'Smith',
    firstName: 'Adam',
  })
})

app.get('/watch', (c) => {
  const video = c.req.query('video')
  return c.text(`You want to see ${video}`)
})

export default app