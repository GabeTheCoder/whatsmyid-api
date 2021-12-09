
import bodyParser from 'body-parser';
import cors from './cors';

export default async app => {
    app.use('*', cors);
    app.use(bodyParser.json());
};
