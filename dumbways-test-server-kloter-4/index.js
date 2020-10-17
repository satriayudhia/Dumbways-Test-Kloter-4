const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'web_musik'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/post', (req, res) => {
    const sqlSelect = "SELECT music.id, music.title, music.durasi, genre.id as genre_id, genre.name as genre, singers.id as singer_id, singers.name as singer, music.photo, music.deskripsi FROM music JOIN genre ON music.id_genre = genre.id JOIN singers ON music.id_singer = singers.id";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
});

app.get('/detail/:id', (req, res) => {
    const id = req.params.id
    const sqlSelect = "SELECT music.id, music.title, music.durasi, genre.id as genre_id, genre.name as genre, singers.id as singer_id, singers.name as singer, music.photo, music.deskripsi FROM music JOIN genre ON music.id_genre = genre.id JOIN singers ON music.id_singer = singers.id WHERE music.id = ?";
    db.query(sqlSelect, id, (err, result) => {
        res.send(result)
    });
});

app.get('/genre/:id', (req, res) => {
    const id = req.params.id
    const sqlSelect = "SELECT music.id, music.title, music.durasi, genre.id as genre_id, genre.name as genre, singers.id as singer_id, singers.name as singer, music.photo, music.deskripsi FROM music JOIN genre ON music.id_genre = genre.id JOIN singers ON music.id_singer = singers.id WHERE genre.id = ?";
    db.query(sqlSelect, id, (err, result) => {
        res.send(result)
    });
});

app.get('/singer/:id', (req, res) => {
    const id = req.params.id
    const sqlSelect = "SELECT music.id, music.title, music.durasi, genre.id as genre_id, genre.name as genre, singers.id as singer_id, singers.name as singer, music.photo, music.deskripsi FROM music JOIN genre ON music.id_genre = genre.id JOIN singers ON music.id_singer = singers.id WHERE singers.id = ?";
    db.query(sqlSelect, id, (err, result) => {
        res.send(result)
    });
});

// app.get('/update/:id', (req, res) => {
//     const id = req.params.id
//     const sqlSelect = "SELECT * FROM news WHERE id = ?";
//     db.query(sqlSelect, id, (err, result) => {
//         res.send(result)
//     });
// });

app.get('/post/getGenreId', (req, res) => {
    const sqlSelect = "SELECT id, name FROM genre";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
});

app.get('/post/getSingerId', (req, res) => {
    const sqlSelect = "SELECT id, name FROM singers";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
});

app.post("/post/music", (req, res) => {

    const title = req.body.title
    const durasi = req.body.durasi
    const id_genre = req.body.id_genre
    const id_singer = req.body.id_singer
    const photo = req.body.photo
    const deskripsi = req.body.deskripsi

    const sqlInsert = "INSERT INTO music (title, durasi, id_genre, id_singer, photo, deskripsi) VALUES (?,?,?,?,?,?)";
    db.query(sqlInsert, [title, durasi, id_genre, id_singer, photo, deskripsi], (err, result) => {
        console.log(result);
    });
});

app.post("/post/genre", (req, res) => {

    const name = req.body.name

    const sqlInsert = "INSERT INTO genre (name) VALUES (?)";
    db.query(sqlInsert, [name], (err, result) => {
        console.log(result);
    });
});

app.post("/post/singer", (req, res) => {

    const name = req.body.name

    const sqlInsert = "INSERT INTO singers (name) VALUES (?)";
    db.query(sqlInsert, [name], (err, result) => {
        console.log(result);
    });
});

app.delete('/:id', (req, res) => {
    const id = req.params.id
    const sqlDelete = "DELETE FROM music WHERE id = ?";

    db.query(sqlDelete, id, (err, result) => {
        if(err) console.log(err);
    });
})

app.put('/update/:id', (req, res) => {
    const id = req.params.id
    const title = req.body.title
    const durasi = req.body.durasi
    const id_genre = req.body.id_genre
    const id_singer = req.body.id_singer
    const photo = req.body.photo
    const deskripsi = req.body.deskripsi

    const sqlUpdate = "UPDATE music SET title = ?, durasi = ?, id_genre = ?, id_singer = ?, photo = ?, deskripsi = ? WHERE id = ?";

    db.query(sqlUpdate, [title, durasi, id_genre, id_singer, photo, deskripsi, id], (err, result) => {
        if(err) console.log(err);
    });
})

app.listen(3001, () => {
    console.log('running port 3001');
});