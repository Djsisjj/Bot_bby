module.exports.config = {
  name: "sev1",
  version: "1.0.0",
  permssion: 0,
  credits: "VĐT&NTH với sự Sp của DũngUwU",
  description: "Random ảnh sexy có phí",
  prefix:"true",
  category: "nsfw",
  usages: "sexy",
  cooldowns: 3
};

module.exports.run = async ({ api, event, Currencies }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 0) {
    axios.get('http://api.vangbanlanhat.tk/image?type=sexy').then(res => {
    var callback = function () {
          api.sendMessage({
            attachment: fs.createReadStream(__dirname + '/cache/trai.jpg')
          }, event.threadID, () => fs.unlinkSync(__dirname + '/cache/trai.jpg'), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + '/cache/trai.jpg')).on("close", callback).then(Currencies.setData(event.senderID, options = {money: money - 0}));
      })
  } else return api.sendMessage("Bạn cần 0 đô để xem ảnh ?",event.threadID,event.messageID);
}