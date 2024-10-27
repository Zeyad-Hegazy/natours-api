const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

const toursPath = path.join(__dirname, "dev-data", "data", "tours.json");
const tours = JSON.parse(fs.readFileSync(toursPath));

app.get("/api/v1/tours", (req, res) => {
	res.status(200).json({
		statu: "success",
		results: tours.length,
		data: {
			tours,
		},
	});
});

const port = 7000;
app.listen(port, () => {
	console.log("App is running on port 7000...");
});
