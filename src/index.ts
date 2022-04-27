const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3005;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req: any, res: any) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ a: 1 }));
});

app.post("/formPost", (req: any, res: any) => {
    console.log(`got request ${JSON.stringify(req.body)}`);
    debugger;
    res.end(JSON.stringify({result: 'sababa'}));
});



console.log("Baaaaa");

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
