const http = require("http");
const fs = require("fs");



const host = 'localhost';
const port = 8080;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/wantedData.json":
            res.writeHead(200);
            const dir = __dirname + '\\data\\wantedData.json'
            console.log(dir)
            try {
                const data = fs.readFileSync(dir, 'utf8');
                res.end(`{"Response": ${data}}`);
            } catch (err) {
                console.log(err);
                res.end(`{"Response": "Error"}`);
            }
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})