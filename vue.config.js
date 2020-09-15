module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "@/sass/style.sass"'
            }
        }
    }
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/game_simon/'
        : '/'
}