module.exports.config = {
	name: "imganime",
	version: "1.0.0",
	permssion: 0,
	credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
	description: "Random anime pictures",
	prefix:"true",
	category: "anime",
	usages: "imganime",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://anime.ocvat2810.repl.co/').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/shiba.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/shiba.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/shiba.${ext}`)).on("close", callback);
			})
}
