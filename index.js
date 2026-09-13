import express from "express"
const app = express()

const port = process.env.PORT || 5000

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({
        message: "hello world",
        success: true,
        statusCode:200
    })
})

app.get("/health", (req, res) => {
    res.status(200).json({
        message: "Everything is fine",
        success: true,
        statusCode:200
    })
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
    console.log(`Visit: http://localhost:${port}`)
})