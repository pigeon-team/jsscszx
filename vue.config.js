module.exports ={
    devServer: {
        proxy:{
            '/api':{
                target: 'http://download.jsscszx.xyz/jsscszx/api',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api':''
                }
            }
        }
    }
}