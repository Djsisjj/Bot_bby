module.exports.config = {
  name: "xvideo",
  version: "1.0.0",
  permssion: 2,
  credits: "Trung Kiên mod by Kaneki",
  description: "Random Video Sex",
  prefix: true,
  category: "nudes",
  usages: "boobs",
  cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies}) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 0) {
  axios.get('https://apituandz1407.herokuapp.com/api/videosex.php').then(res => {
  var image = res.data.url;
        let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `bawas pera-0 `,
            attachment: fs.createReadStream(__dirname + `/cache/videosex.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/videosex.mp4`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/videosex.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 0})
      })
  } else return api.sendMessage("kailangan mo ng 0 para makapag send ng bold,\n mang hingi ka sa owner ng bot",event.threadID,event.messageID);
  }