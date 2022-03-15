var mongoose = require('mongoose');

const Initialize =  () => {
    const db_host = process.env.DB_HOST || 'localhost';
    const db_port = process.env.DB_PORT || 27017;
    const db_name = process.env.DB_NAME || 'my_database';
    const db_user = process.env.DB_USER || '';
    const db_pass = process.env.DB_PASS || '';
    let db_url = `mongodb://${db_host}:${db_port}/${db_name}`;
    if(process.env.DB_USER && process.env.DB_PASS) {
        db_url = `mongodb://${db_user}:${db_pass}@${db_host}:${db_port}/${db_name}`;
    }
    const db_options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    mongoose.connect(db_url, db_options);
    const db = mongoose.connection;
    db.on('connected', () => {
        console.log(`MongoDB connected to ${db_url}`);
        // run seed
       const seed = require('./seed');
       seed();
    });
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.on('disconnected', console.log.bind(console, 'MongoDB disconnected'));
};


module.exports = Initialize;