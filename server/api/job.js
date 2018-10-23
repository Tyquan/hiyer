const express = require('express');
const router = express.Router();
const Job = require('../models/job');

router.get("/", (req, res) => {
	Job.find((err, data) => {
		if (err) {
			res.status(200).json({
				jobs: null,
				message: "Error Finding Jobs"
			});
		} else {
			if (!data) {
				res.status(200).json({
					jobs: null,
					message: "No Jobs Available"
				});
			} else {
				res.status(200).json(data);
			}
		}
	});
});

module.exports = router;