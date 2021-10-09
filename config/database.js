const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

express.connect = () => {
	  // Connecting to the database
	mongoose
		.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: true
		})
		.then(() => {
			console.log('Successfully connected to database');
		})
		.catch(error => {
			console.log('database connection failed. existing now...');
			console.error(error);
			process.exit(1);
		});
}