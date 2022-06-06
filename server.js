const json_server = require("json-server")
const server = json_server.create();
const router = json_server.router("./db.json");
const middlewares = json_server.defaults({
    static: "./build"
})

const port = process.env.PORT || 5000;
server.use(middlewares);
server.use(
    json_server.rewriter({
        "/api/*": "/$1"
    })
);

server.use(router);
server.listen(port, () => {
    console.log( `Server is running! on ${port}`);
})