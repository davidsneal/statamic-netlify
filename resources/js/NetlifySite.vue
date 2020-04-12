<template>
  <div>
    <div class="flex items-center justify-between">
      <div class="pr-4">
        <h2 class="font-bold">{{ site.name }}</h2>
        <a :href="siteUrl" target="_blank" rel="noopener" class="my-1 text-sm text-blue font-bold">
          {{ siteUrl }}
        </a>
      </div>
      <a :href="siteUrl" target="_blank" rel="noopener" class="my-1 text-sm text-blue font-bold">
        <img class="w-24 h-auto max-w-full shadow" :src="screenshotUrl" :alt="site.name">
      </a>
    </div>
    <confirmation-modal
      v-if="confirming"
      :title="lang.heading"
      :bodyText="lang.confirmation"
      :buttonText="lang.confirm"
      danger="true"
      @confirm="submit"
      @cancel="confirming = false"
    />
  </div>
</template>

<script>
  export default {
    name: 'netlify-site',

    props: {
      site: {
        type: Object,
        default: () => [],
      },
    },

    data() {
      return {
        site: {},
      }
    },

    computed: {
      screenshotUrl() {
        if (this.site.published_deploy.screenshot_url) return this.site.published_deploy.screenshot_url

        return '/vendor/davidsneal/netlify/img/default_screenshot.png'
      },

      siteUrl() {
        if (this.site.ssl) return this.site.ssl_url

        return this.site.url
      },
    },
  }
</script>
