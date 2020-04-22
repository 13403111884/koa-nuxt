<template lang="html">
<div v-if="loading" class="Loading">
  <Progress :percent="percent" :stroke-width="6" text-inside />
  <div class="loading-page">
    <p>Loading...</p>
  </div>
</div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    percent: 0
  }),
  methods: {
    /* eslint-disable no-console */
    start () {
      this.percent = 0
      this.loading = true
    },
    finish () {
      const Interval = setInterval(() => {
        if (this.percent < 100) {
          this.percent = this.percent + 0.3
        } else {
          clearInterval(Interval)
          this.loading = false
        }
      }, 20)
    },
    fail (error) {
      console.log(error)
    },
    increase (num) {
      this.percent = +num
    }
  }
}
</script>

<style scoped>
.Loading{
  width: 100vw;
}
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
</style>
