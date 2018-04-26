const path = require("path");

const config={
    mode:"development",
    entry:{
        index:"./src/index"
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.jsx?/i,
                exclude:"/node_modules",
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["es2015","react"]
                    }
                }
            }
        ]
    },
    resolve:{
        extensions:[".js",".jsx",".json"]
    }
};

module.exports=config;