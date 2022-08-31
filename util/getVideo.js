
const ytdl = require('ytdl-core');

exports.youtube = (id, res) => {
    console.log(`start: youtube ${id}`);
    const stream = ytdl(id, { highWaterMark: 1 << 25 });
    stream.pipe(res);
    stream.on("end", () => {
        console.log(`end: youtube ${id}`);
    });
}

const nico = require('./NicoVideo');
const req = require('./request');

exports.nicovideo = async (id, res) => {
    console.log(`start: nicovideo ${id}`);
    const json = await nico.start(`https://www.nicovideo.jp/watch/${id}`);
    const stream = await req.stream(json.url);
    stream.pipe(res);
    stream.on("end", () => {
        nico.end();
        console.log(`end: nicovideo ${id}`);
    });
}