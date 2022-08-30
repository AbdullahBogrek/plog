const express = require("express")

const port = 3000
const app = express()

app.get("/", (req, res) => {
    const blog = {
        id:1, 
        title: "Blog Title",
        description: "Blog Description"
    }
    res.send(blog)
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})