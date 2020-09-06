const mongoose = require('mongoose');

const db_path = 'mongodb://localhost/dna';
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect(db_path, config, error => {
    if (!error) {
        console.log('Successfull connection.')
    } else {
        console.log('Error connecting to database.')
    }
})