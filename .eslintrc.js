module.exports = {
  extends: ['plugin:vue/vue3-essential', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': ['off']
  },
  plugins: ['prettier']
};