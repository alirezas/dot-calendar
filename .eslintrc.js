module.exports = {
  extends: [
    '@nuxtjs'
    // 'plugin:nuxt/recommended',
    // 'plugin:vue/vue3-recommended'
  ],
  // add your custom rules here
  rules: {
    'vue/no-multiple-template-root': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: true
      }
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }]
  }
}
