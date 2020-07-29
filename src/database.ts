import mongoose from 'mongoose';

import { mongodb } from './keys';

mongoose
	.connect(mongodb.URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: true,
		useUnifiedTopology: true 
	})
	.then(db => console.log('db is conected'))
	.catch(err => console.log(err));
