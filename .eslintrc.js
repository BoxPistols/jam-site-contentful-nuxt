module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  // INFO: コーディングルール TODO: PrettierファイルでAutoFormat 同一の値
  rules: {
    semi: false,
    singleQuote: true,
  },
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
    },
  ],
}
