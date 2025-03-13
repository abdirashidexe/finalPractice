import express from 'express';

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}));

app.set('view engine', 'ejs');

let workouts = [];

const PORT = 3000;

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/summary', (req, res) => {

    const workout = {
        type: req.body.type,
        duration: req.body.duration,
        intensity: req.body.intensity,
        date: req.body.date,
        notes: req.body.notes
    };

    workouts.push(workout);

    console.log(workouts);

    res.render('summary', { workouts });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
