module.exports = {
    apps: [
        {
            name: 'BOT',
            script: 'dist/main.js',
            node_args: '-r dotenv/config',
        },
    ],
}
