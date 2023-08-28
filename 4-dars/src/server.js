const express = require("express");
const  fetchAll  = require("./connection.js");

const app = express();
app.use(express.json());

app.get('/users', async (req, res) => {
    const users = await fetchAll('SELECT * FROM users');
    res.send(users);
});

app.post('/users', async (req, res) => {
    const { username, password } = req.body;
    const users = await fetchAll('INSERT INTO users(username , password) VALUES($1, $2) returning *;', [username, password]);
    res.send(users);
});

app.get('/users/:userId', async (req, res) => {
    const { userId } = req.params
    const users = await fetchAll('select * from users WHERE id = $1', [userId]);
    if (!users) {
        res.status(404).send({ message: "User not found", status: 404 });
        return;
    }
    res.send(users);
    return;
});

app.put('/users/:userId', async (req, res) => {
    const { userId } = req.params;
    const { username } = req.body;
    const users = await fetchAll('UPDATE users SET username= $1 WHERE id = $2 returning *;', [username, userId]);
    res.send(users);
});

app.delete('/users/:userId', async (req, res) => {
    const { userId } = req.params;
    const users = await fetchAll('DELETE FROM users WHERE id = $1 returning *', [userId]);
    res.send(users);
});

app.listen(6000, () => {
    console.log(6000);
});