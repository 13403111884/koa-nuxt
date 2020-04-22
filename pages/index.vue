<template>
  <div class="container">
    <h1 class="Content__Title">
      {{ $t('home.title') }}
    </h1>
    <p>{{ $t('about.introduction') }}</p>
    <Button @click="postLogin()">
      语言
    </Button>
    <logo />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  middleware: 'i',
  components: {
    Logo
  },
  async asyncData () {
    const a = await new Promise((resolve) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      setTimeout(() => {
        resolve({ name: 'world' })
      }, 3000)
    })
    // console.log('item', item)
    return { a }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        // 00
      }, 2000)
    })
  },
  methods: {
    postLogin () {
      if (this.$i18n.locale === 'zh') {
        this.$i18n.locale = 'en'
      } else {
        this.$i18n.locale = 'zh'
      }
      // eslint-disable-next-line no-console
      console.log('client-methods', this)
    }
  },
  head () {
    return { title: this.$t('about.title') }
  }
}
</script>

<style>

</style>
