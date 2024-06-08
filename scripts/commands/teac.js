/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
	name: "teac",
	version: "2.0.6",
	permssion: 0,
	credits: "ProCoderMew",
	description: "Dạy bot (dùng cho lệnh sim)",
	prefix:"true",
  category: "general",
	usages: "hello => goodbye",
	cooldowns: 5,
	dependencies: {
		"axios": ""
	},
    envConfig: {
        APIKEY: "Meew_kB5wRAlpHhrAj0GhRzmmLHesvvTbXE"
    }
};

module.exports.run = async function({ api, event, args }) {
	const { APIKEY } = global.configModule.teach;
	const axios = global.nodemodule["axios"];
	const { data } = await axios("https://meewmeew.info/simsimi/teach?apikey=Meew_kB5wRAlpHhrAj0GhRzmmLHesvvTbXE", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data: { teach: args.join(" ") }
	});
	if (data.success == false) return api.sendMessage(`${data.error}`, event.threadID, event.messageID);
	return api.sendMessage(`${data.data}`, event.threadID, event.messageID);
}
