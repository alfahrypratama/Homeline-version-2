const express = require('express');
const cors = require('cors');
const PORT = 3052;

const UserRoute = require('./routes/UserRoute')
const NotarisRoute = require('./routes/NotarisRoute')
const AuthRoute = require('./routes/AuthRoute')

const app = express()

app.use(cors());
app.use(express.json())


app.use(UserRoute)
app.use(NotarisRoute)
app.use(AuthRoute)

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});