const express = require('express');
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/users.js');


const app = express();
const PORT = 8080;

app.use(bodyParser.json());

// var router = express.Router();              // get an instance of the express Router
app.use('/api', usersRoutes);

// router.route('/users')
//     .get(function (req, res) {
//         res.json({ id: 1, name: 'name' });
//     })


// app.get('/', (req, res) => {
//     console.log('First Get');
//     res.send('Working');
// })

app.listen(PORT, () => console.log(`Serer Listening on http://localhost:${PORT}`));

