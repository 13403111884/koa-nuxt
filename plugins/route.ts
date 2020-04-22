export default function ({ app }: any) {
  app.router.afterEach((to: any, from: any) => {
    // to.push({ name: 'err' })
    console.log('plugins', to.path, from)
  })
}
