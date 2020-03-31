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
  components: {
    Logo
  },
  asyncData () {
    // console.log('item', item)
  },
  methods: {
    postLogin () {
      if (this.$i18n.locale === 'zh') {
        this.$i18n.locale = 'en'
      } else {
        this.$i18n.locale = 'zh'
      }
    }
  },
  head () {
    return { title: this.$t('about.title') }
  }
}
</script>

<style>

</style>
