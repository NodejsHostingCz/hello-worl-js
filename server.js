const express = require('express');
const app = express();
const {
    helloWorld
} = require('./routes/index.js');

app.get('/', helloWorld);

if (!process.env.PORT) {
    console.error('Missing environment variable PORT');
    process.exit(1);
}

app.listen(process.env.PORT, function () {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});