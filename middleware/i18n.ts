export default function ({ isHMR, app, store, route, params, error, redirect }: any) {
  const defaultLocale = app.i18n.fallbackLocale
  // 如果通过热模块更换调用了中间件，忽略它
  if (isHMR) { return }
  // 从参数获取语言环境
  const locale = params.lang || defaultLocale
  if (!store.state.locales.includes(locale)) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }
  // 设定地区
  store.commit('SET_LANG', locale)
  app.i18n.locale = store.state.locale
  if (locale === defaultLocale && route.fullPath.indexOf('/' + defaultLocale) === 0) {
    const toReplace = '^/' + defaultLocale + (route.fullPath.indexOf('/' + defaultLocale + '/') === 0 ? '/' : '')
    const re = new RegExp(toReplace)
    return redirect(
      route.fullPath.replace(re, '/')
    )
  }
}
