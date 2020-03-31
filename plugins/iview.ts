import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {
  Button
} from 'view-design'

Vue.use(VueI18n)
Vue.component('Button', Button)

export default ({ app, store }: any) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      en: require('@/locales/en.json'),
      zh: require('@/locales/zh.json')
    }
  })

  app.i18n.path = (link: string) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
