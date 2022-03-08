const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const fireDB = require('./firedb')
app.get('/data/:id', async(req, res) => {
    const id = req.params.id;
    await fireDB.collection('teacher').doc('class12A').onSnapshot(snap => {
        const data = snap.data();
        res.send(data[`${id}`])
    })
})

app.listen(port, () => {
    console.log('server listening to port 3000...')
})