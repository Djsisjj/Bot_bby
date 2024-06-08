module.exports.config = {
    name: 'google',
    version: '1.1.1',
    permssion: 0,
    credits: 'DC-Nam',
    description: 'Xem hình ảnh bằng từ khóa trên google',
    prefix:"true",
    category: 'Người dùng',
    usages: '[số ảnh] + [từ khóa]',
    cooldowns: 3
};
const {
    get
} = require('axios')
module.exports.run = async function({
    api, event, args
}) {
    try {
        var l = isNaN(args[0])?1: (args[0] > 50?50: args[0]),
        s = args.join(' ');
        s = isNaN(args[0])?s: s.replace(l, '');
        const res = await get(`https://api.nambsls.repl.co/crawl/yahoo-image?s=${encodeURI(s)}&f=6`);
        if (res.data.status != 200) return api.sendMessage(res.data.message, event.threadID, event.messageID);
        const attachment = [],
        index = [],
        u = res.data.data;
        l = l > u.count?u.count: l;
        do {
            const n = Math.floor(Math.random()*u.count);
            if (!index.includes(n)) index.push(n);
        } while (index.length != l);
        for (const i of index)try {
            const res_ = await get(u.url_image[i], {
                responseType: 'stream'
            });
            if (res_.status == 200) attachment.push(res_.data);
        }catch {
            continue;
        };
        api.sendMessage({
            body:`Ảnh bot tìm được trên google\n\n${res.data.message} `, attachment
        }, event.threadID, event.messageID);
    }catch(e) {
        api.sendMessage(`${e}`, event.threadID, event.messageID)};
};
