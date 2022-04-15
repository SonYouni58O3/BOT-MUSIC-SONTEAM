module.exports = {
    app: {
        px: '<',
        token: 'OTY0MjM0OTA3ODg0ODcxNzcw.YlhrvA.sfziJJaiyUk3-x7x8MLGJ2JjHRw',
        playing: 'By SonYouni58O3'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
