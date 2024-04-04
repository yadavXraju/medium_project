
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { userRouter } from './routes/user'
import {blogRouter}  from './routes/blog'

const app = new Hono<{
    Bindings:{
      DATABASE_URL:string,
      JWT_SECRET:string
    }
}>()
app.use('/*',cors());
app.route('/api/v1/user',userRouter)
app.route('/api/v1/blog',blogRouter)





export default app

// postgresql://neondb_owner:orWMP0cg5tsD@ep-broad-sound-a1q89qw0.ap-southeast-1.aws.neon.tech/neondb?sslmode=require

// connection Pooling
// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiZmJmMTMxYjEtZTI5ZS00ZGRiLTgzODQtYzViYjc2YWI3NWMxIiwidGVuYW50X2lkIjoiZGU5NmNhNjJjMjllYmExYzc4ZTFkNmJjZWNhYmM2ZTg1ZDc5MmFlOGYzYzNjN2RiYzdhZDgwYzQzMTYwYzAwZiIsImludGVybmFsX3NlY3JldCI6IjJhYzEzMTg4LTY5NDItNGU1ZC04YzZhLTdkODI4NGVhNzAxZSJ9.kWQkbpQykgSk5neo9Bjyf3c33BIeNFxplvpIdT2sl5M"
