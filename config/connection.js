const {connect, connection} = require('mongoose');
const connectionString =
    process.env.MONGODB_URI || 'mongodb://localhost:3001/social-social-club';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;