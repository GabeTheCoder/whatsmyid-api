
import express from 'express';
import config from './utils/config';

import identifiers from './routes/identifiers';

const app = express();
config(app);

// MARK: Routes
app.use('/identifiers', identifiers);

app.listen(3000, () => console.log('Node server running on port 3000 in ' + process.env.NODE_ENV + ' mode'));
