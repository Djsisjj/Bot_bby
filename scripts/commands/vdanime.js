module.exports.config = {
  name: "vdanime",
  version: "1.0.0",
  permssion: 0,
  credits: "Kz Khánh",
  description: "Random",
  prefix:"true",
  category: "anime",
  usages: "",
  cooldowns: 0
};
module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var thơ = (await axios.get("https://apithanhalisharon.shar0n.repl.co/poem/love?apikey=ThanhAliVip_1234567890")).data.data;
  axios.get('https://kz-api.ngojchaan.repl.co/vdanime').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  const moment = require("moment-timezone");
  var ngay = moment.tz('Asia/Ho_Chi_Minh').format('D/MM/YYYY');
  var gio = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss');
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
  let callback = function () {
          api.sendMessage({
            body: `=======𝐕𝐃𝐀𝐍𝐈𝐌𝐄=======\n𝗛𝗲𝗹𝗹𝗼, 𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀: ${gio} ⏰\nㅤ📅 𝐍𝐠𝐚̀𝐲: ${ngay} (${thu})\nLink: ${res.data.data}\n\n𝐓𝐇Í𝐍𝐇 ${thơ}`,
            attachment: fs.createReadStream(__dirname + `/cache/dạ.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/dạ.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/dạ.${ext}`)).on("close", callback);
      })
}

