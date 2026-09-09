const express = require("express");

const app = express();
app.use(express.json());
app.get("/health", (_request, response) => response.json({ status: "ok" }));

if (require.main === module) app.listen(Number(process.env.PORT || 8080));

module.exports = app;
