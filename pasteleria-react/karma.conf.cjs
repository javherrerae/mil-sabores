// Configuración de Karma: ejecuta las pruebas Jasmine en Chrome
const webpack = require('webpack')

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'webpack'],

    // Todos los archivos de prueba terminan en .spec.jsx
    files: [{ pattern: 'src/**/*.spec.jsx', watched: false }],

    preprocessors: {
      'src/**/*.spec.jsx': ['webpack', 'sourcemap']
    },

    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            resolve: { fullySpecified: false },
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: { chrome: '100' } }],
                  ['@babel/preset-react', { runtime: 'automatic' }]
                ],
                // Marca el código para medir la cobertura (sin contar las pruebas)
                plugins: [['istanbul', { exclude: ['**/*.spec.jsx', 'src/main.jsx'] }]]
              }
            }
          },
          // Los archivos CSS se importan como texto: en las pruebas no hacen falta
          { test: /\.css$/, type: 'asset/source' }
        ]
      },
      resolve: { extensions: ['.js', '.jsx'] },
      plugins: [new webpack.ProvidePlugin({ process: 'process/browser' })]
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'text-summary' },
        { type: 'text' }
      ]
    },

    browsers: ['ChromeHeadless'],
    singleRun: false
  })
}