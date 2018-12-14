module.exports= {
  entry: './app/app.jsx',
  output: {
      path: __dirname,
      filename: './public/bundle.js'
  },
  resolve: {
      root: __dirname,
      alias: {
        Main: './components/Main.jsx',
        Nav: './Nav.jsx',
        Weather: './components/Weather.jsx',
        About: './components/About.jsx',
        Examples: './components/Examples.jsx',
        WeatherForm: './WeatherForm.jsx',
        WeatherMessage: './WeatherMessage.jsx',
        openWeatherMap: 'app/api/openWeatherMap.jsx'
      },
      extensions: ['', '.js', '.jsx']
  },
  module: {
      loaders: [
                {
                  loader: 'babel-loader',
                  query: {
                      presets: ['react', 'es2015']
                  },
                  test: /\.jsx?$/,
                  exclude: /(node_modules|bower_components)/
                }
      ]
   }
};
