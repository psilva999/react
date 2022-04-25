//PASTAS CRIADAS NO INICIO DO ARQUIVO

//webpack -- agrupa (bundle) o código do seu aplicativo
//Permite difinirmos os componentes em diferentes arquivos para melhor organização 
//Facilita a importação de código externo instalado via NPM

//Babel - transforma JSX (return <div></div>) em funções (React.createElement())
//Transforma JS novo em JS antigo

//WEBPACK
//Siga os passos abaixo

//npm init -y -- inicia um pacote npm na pasta do seu aplicativo

//instala o webpack, webpack-cli e webpack-dev-server
//npm install webpack webpack-cli webpack-dev-server --save-dev

//Criar arquivos mínimos
//index.html
//src/index.js

//coloque os seguintes arquvios em 'scripts' no arquivo pachage.json:
// "start": "webpack serve --mode development --open --hot",
// "build": "webpack --mode production"

//crie o arquivo webpack.config.js
//adicione a seguinte linha de comando no file
// module.exports = {
//   devServer: {
//     static: './',
//     historyApiFallback: true,   
//   }
// }

//Digite: 'npm start' no terminal

//Aperte ctrl + c para finalizar o server momentaneamente
//npm run build para criar uma pasta dist

//npm install react react-dom -- para instalar o react e react-dom

//coloque o seguinte código no index.js
// import ReactDOM from 'react-dom'

// ReactDOM.render('Hello', document.body)

//Babel min -- permite colocarmos nosso código no react de uma forma mais fácil
//npm install @babel/core @babel/preset-react babel-loader --save-dev 
//COloque isso no arquivo webpack.config.js:

// module.exports = {
//   devServer: {
//     static: './',
//     historyApiFallback: true,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-react'],
//           },
//         },
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
// };

//CSS
//npm install style-loader css-loader --save-dev

//WEBPACK.CONFIG.JS
// module.exports = {
//   devServer: {
//     static: './',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-react'],
//           },
//         },
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
// };

//CREATE-REACT-APP
//VOcê pode instalar globalmente utilizando a seguinte linha
//npx create-react-app meuapp
