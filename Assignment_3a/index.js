const express = require('express');
const path = require('path')
const app = express();
const PORT = 4000;
const publicPath= path.join(__dirname, 'public');
app.use(express.static(publicPath)); 

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
