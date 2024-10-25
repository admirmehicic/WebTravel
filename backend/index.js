import cors from "cors"
import express from "express"
import mysql from "mysql"

const app=express()

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"admir",
    database:"dbtravel_310"

})

app.use(express.json())
app.use(cors())



app.get("/",(req,res)=>{
    res.json("backend dio aplikacije")
})

app.get("/putovanja",(req,res)=>{
    const q="SELECT * FROM putovanja"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/putovanja",(req,res)=>{
    const q="INSERT INTO putovanja (`name`, `location`, `date`, `price`) VALUES (?)"
    const values=[
        req.body.name,
        req.body.location,
        req.body.date,
        req.body.price,
    ]

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("putovanje pohranjeno u bazu")
    })
})

app.delete("/putovanja/:id",(req,res)=>{
    const putovanjeId=req.params.id
    const q="DELETE FROM putovanja WHERE id = ?"

    db.query(q,putovanjeId,(err,data)=>{
        if(err) return res.json(err)
        return res.json("obrisano")
    })
})

app.put("/putovanja/:id",(req,res)=>{
    const putovanjeId=req.params.id
    const q="UPDATE putovanja SET `name`=?,`location`=?,`date`=?,`price`=? WHERE id=?"

    const values=[
        req.body.name,
        req.body.location,
        req.body.date,
        req.body.price,
    ]

    db.query(q,[...values,putovanjeId],(err,data)=>{
        if(err) return res.json(err)
        return res.json("update")
    })
})

app.listen(8800, ()=>{
    console.log("povezano")
})