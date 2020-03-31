export const state = () => ({
  locales: ['en', 'zh'],
  locale: 'en'
})

export const mutations = {
  SET_LANG (state: any, locale: string) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
