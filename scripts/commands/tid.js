module.exports.config = {
	name: "tid",	
  version: "1.0.0", 
	permssion: 0,
	credits: "MrTomXxX",
	description: "Get box id", 
	prefix:"true",
	category: "group",
	usages: "tid",
	cooldowns: 5, 
	dependencies: '',
};

module.exports.run = async function({ api, event }) {
  api.sendMessage("ID of this thread: "+event.threadID, event.threadID, event.messageID);
},
