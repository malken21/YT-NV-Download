const http = require('http');

const GV = require("./util/getVideo");

const port = 80;


const server = http.createServer(async (req, res) => {
    try {
        const data = req.url.slice(1).split("/");

        if (data.length != 3) {
            error(res);
            return;
        };

        console.log(data);

        switch (data[0]) {
            case "youtube":
                GV.youtube(data[1], res)
                break;
            case "nicovideo":
                GV.nicovideo(data[1], res)
                break;
        }
    } catch {
        error(res);
    }
})
function error(res) {
    res.writeHead(404, {
        'Content-Type': 'text/txt; charset=utf-8'
    });
    res.end();
}
server.listen(port, () => {
    console.log(`start port: ${port}`);
});