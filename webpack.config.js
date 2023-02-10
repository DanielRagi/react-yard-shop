const path = require('path'); // Ruta del proyecto principal.
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Importamos plugin.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js', // Entry point de la app.
    output: { // Output point
        path: path.resolve(__dirname, 'dist'), // En nuestro path, crea la carpeta dist
        filename: 'bundle.js', // Nombre de .js resultante
        publicPath: '/'
    },
    mode: 'development',
    resolve: { // Extensión de archivos a seguir.
        extensions: ['.js', '.jsx']
    },
    module: { // Loaders para cada tipo de archivo
        rules: [ // Reglas para usar
            {
                test: /\.(js|jsx)$/, // Extensiones sobre las cuales actuará Babel.
                exclude: /node_modules/, // Excluir del seguimiento.
                use: { 
                    loader: 'babel-loader' // Indicamos loader.
                }
            },
            {
                test: /\.html$/, // Regla de extensiones HTML.
                use: [
                    {
                        loader: 'html-loader' // Indicamos el loader.
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|svg|jpeg|webp)$/, // Nativo webpack 5
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[hash][ext]',
                }
             }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // Instancia del plugin HTML
            template: './public/index.html', // Archivo raiz.
            filename: './index.html' // Archivo resultante.
        }),
        new MiniCssExtractPlugin({
			filename: '[name].css'
        })
    ],
    devServer: {
        historyApiFallback: true,
        allowedHosts: path.join(__dirname, 'dist'), // contentBase en webpack 4, allowedHosts en webpack 5
        port: 3000,
        compress: true,
    }
}