
import express from 'express';
import identifier from '../utils/identifier';

const identifiers = express.Router();

identifiers.get('/generate', (req, res) => {
    const result = identifier.generate();
    res.status(200).send({ result });
});

identifiers.post('/verify', (req, res) => {
    const id = req.body.identifier;

    if (typeof id !== 'string') {
        return res.status(400).send({ code: 'invalid-identifier' });
    }

    const value = id.toUpperCase().trim().replace('-', '');
    const valid = identifier.verify(value);

    res.status(200).send({ valid });
});

export default identifiers;
