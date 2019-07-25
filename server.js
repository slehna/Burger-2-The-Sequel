
const express = require('express');
const db = require('./models/');


const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


const routes = require('./controllers/burgers_controller');
app.use(routes);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    });
}).catch(error => {
    console.error(error);
});