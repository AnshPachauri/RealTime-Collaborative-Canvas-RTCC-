import express from 'express';

const app = express();



app.get('/signup', (req, res) => {
    res.send('This is a signup point');
});

app.get('signin', (req, res) => {
    res.send('This is a signin point');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});