<template>
  <section class="container">
    <div class="hello">
      <logo />
      <h1 class="title">hello-nuxt</h1>
      <h2 class="subtitle">My peachy Nuxt.js project</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
    <div class="vd">
      <div class="vd-item">
        <video width="320" height="240" controls>
          <source src="/v/Nubile Films - Ebbi Cums on a Stiff Cock .mp4" type="video/mp4" />
        </video>
      </div>
      <div class="vd-item">
        <video width="320" height="240" controls>
          <source src="/v/Cute Arisa Kanno Hairy Puss Fuck with Cum Swallow.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="vd-item">
        <video width="320" height="240" controls>
          <source src="/v/RB Lays MP down .mp4" type="video/mp4" />
        </video>
      </div>
      <div class="vd-item">
        <video width="320" height="240" controls>
          <source
            src="/v/PARADISE FILMS Natural Russian Teen gets Full Massage.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="vd-item">
        <video width="320" height="240" controls>
          <source src="/v/Risa Tachibana Cosplay Fuck.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.hello{
  height: 100vh;
  width: 100vw;
}
.vd {
  display: flex;
  justify-content: space-between;
  width: 100vw;
}
</style>
