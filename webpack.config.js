const path = require('path'); // Ruta del proyecto principal.
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Importamos plugin.

module.exports = {
    entry: './src/index.js', // Entry point de la app.
    output: { // Output point
        path: path.resolve(__dirname, 'dist'), // En nuestro path, crea la carpeta dist
        filename: 'bundle.js' // Nombre de .js resultante
    },
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // Instancia del plugin HTML
            template: './public/index.html', // Archivo raiz.
            filename: './index.html' // Archivo resultante.
        })
    ]
}