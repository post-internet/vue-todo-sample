# vue-todo-sample
Please use this if you like!

## Another way to make vue-todo-sample
- [vue-cli](https://github.com/vuejs/vue-cli)
- [webpack](https://webpack.js.org/)
- [es2015](https://babeljs.io/learn-es2015/)
- [eslint](http://eslint.org/)
- [e2e test](http://nightwatchjs.org/)
- [unit test](https://mochajs.org/)

## Quick start
```bash
npm install
npm run dev
```

## If you want to make this from the very beginning (mac)
``` bash
# install homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# install nodebrew
brew install nodebrew
nodebrew setup
echo "export PATH=\$HOME/.nodebrew/current/bin:\$PATH" >> ~/.bash_profile
source ~/.bash_profile

# install nodejs
nodebrew install-binary stable
nodebrew use stable

# install vue-cli
npm install -g vue-cli

# make vue project
vue init webpack vue-todo-sample
cd ./vue-todo-sample
npm install
npm run dev

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
