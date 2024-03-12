require('dotenv').config({ path: __dirname + '/.env' })
const url = require('url');
const proxy = require('express-http-proxy');
const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

// Hotsname to redirect to
const phpProxy = proxy(process.env.REDDIR_HOST, {
    proxyReqPathResolver: req => {
        const urlPath = url.parse(req.baseUrl).path

        if (urlPath !== null && urlPath !== undefined && urlPath !== "/") {
            const splitPath = urlPath.split("/");

            if (splitPath.length < 3) return "/badrequest"

            console.log(`${urlPath} => index.php?controller=${splitPath[1]}&action=${splitPath[2]}`)
            return `/index.php?controller=${splitPath[1]}&action=${splitPath[2]}`;
        } else {
            console.log(`${urlPath} => ${urlPath}`);
            return url.parse(req.baseUrl).path
        }
    }
});

app.use("/*", phpProxy);

app.listen(port, () => console.log(`Running on ${port}`));