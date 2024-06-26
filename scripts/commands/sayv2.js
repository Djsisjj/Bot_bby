module.exports.config = {
	name: "sayv2",
	version: "1.0.1",
	permssion: 2,
	credits: "Emon",
  prefix: 'true',
	description: "Make the bot return google's audio file via text",
	category: "nsfw",
	usages: "vb [Text]",
	cooldowns: 5,
	dependencies: {
		"path": "",
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event, args }) {
	try {
		const { createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
		const { resolve } = global.nodemodule["path"];
		var content = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
		var languageToSay = (["bn",].some(item => content.indexOf(item) == 0)) ? content.slice(0, content.indexOf(" ")) : global.config.language;
		var msg = (languageToSay != global.config.language) ? content.slice(3, content.length) : content;
		const path = resolve(__dirname, 'cache', `${event.threadID}_${event.senderID}.mp3`);
		await global.utils.downloadFile(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(msg)}&tl=bn&client=tw-ob`, path);

		// Reply with text
		api.sendMessage(`✅`, event.threadID);

		return api.sendMessage({ attachment: createReadStream(path)}, event.threadID, () => unlinkSync(path));
	} catch (e) {
		return console.log(e);
	}
}
