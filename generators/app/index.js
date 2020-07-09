// 此文件作为Generator 的核心入口
const Generator = require("yeoman-generator")

module.exports = class extends Generator {
    prompting() {
        return this.prompt({
          type: "input",
          name: "name",
          message: "Your project name",
          default: this.appname,
        }).then(res => {
            this.answers = res
        })
    }

    writing () {
        const templates = [
            "yarn.lock",
            "README.en.md",
            "README.md",
            "README.md",
            "package-lock.json",
            "package.json",
            "public/index.html",
            "jsconfig.json",
            ".gitignore",
            "config/env.js",
            "config/modules.js",
            "config/paths.js",
            "config/pnpTs.js",
            "config/webpack.config.js",
            "config/webpackDevServer.config.js",
            "config/jest/cssTransform.js",
            "config/jest/fileTransform.js",
            "public/favicon.ico",
            "public/index.html",
            "public/logo192.png",
            "public/manifest.json",
            "public/robots.txt",
            "scripts/build.js",
            "scripts/start.js",
            "scripts/test.js",
            "src/setupProxy.js",
            "src/logo.svg",
            "src/index.js",
            "src/index.css",
            "src/api/index.js",
            "src/api/login/index.js",
            "src/components/headNav/index.css",
            "src/components/headNav/index.jsx",
            "src/components/infoCard/index.css",
            "src/components/infoCard/index.jsx",
            "src/components/menu/list.jsx",
            "src/components/menu/index.jsx",
            "src/images/avatar.jpg",
            "src/redux/action.js",
            "src/redux/actionTypes.js",
            "src/redux/index.js",
            "src/redux/reducer.js",
            "src/redux/reducer2.js",
            "src/routers/AuthRouter.js",
            "src/routers/LazyLoad.js",
            "src/routers/router.js",
            "src/utils/index.js",
            "src/views/layout.jsx",
            "src/views/layout.css",
            "src/views/login/login.jsx",
            "src/views/login/login.css",
            "src/views/login/register.jsx",
            "src/views/home/home.jsx",
            "src/views/collect/collect.jsx",
            "src/views/archive/archive.jsx",
            "src/views/about/about.jsx",
            "src/views/about/about.css",
            "src/views/404/404.jsx",
            "src/views/404/404.css",
        ]

        templates.forEach(element => {
             // 模板文件路径
            this.fs.copyTpl(
                this.templatePath(element),
                this.destinationPath(element),
                this.answers
            )
        });
        
    }
    
}