const { PythonShell } = require('python-shell');//Python実行ライブラリ


const options = {
    mode: 'json',
    pythonOptions: ['-u'],
    pythonPath: "python3"
}

let pyshell;

exports.start = (url) => {//----------ニコニコ動画 開始----------//
    return new Promise((resolve) => {
        pyshell = new PythonShell('./util/getNicoVideo.py', options);
        pyshell.on('message', function (data) {
            resolve(data);
        });
        pyshell.send({
            url: url
        });
    })
}

exports.end = () => {//----------ニコニコ動画 終了----------//
    pyshell.send({});
}