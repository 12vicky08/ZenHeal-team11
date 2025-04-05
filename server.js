const express = require('express');
const app = express();

app.use(express.static(__dirname));

const PORT = 8080; // Change this to any port
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
