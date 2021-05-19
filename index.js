const { static, urlencoded } = require('express');
const express = require('express');
const path = require('path');
const logger = require('./midleware/logger');
const exphbs = require('express-handlebars');
const members = require('./Members');

const app = express();

// routes for handlebar views
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Member App',
    members
  })
);

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// app.use(logger);

// body parser midleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/members', require('./routes/api/members'));

// static assets folder
app.use(static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT}`);
});
