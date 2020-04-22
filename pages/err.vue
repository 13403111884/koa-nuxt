<template>
  <div>无权限</div>
</template>

<script>
export default {
  asyncData () {
    const a = new Promise((resolve) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      setTimeout(() => {
        resolve({ name: 'world' })
      }, 1000)
    })
    // console.log('item', item)
    return { a }
  }
}
</script>

<style>

</style>
