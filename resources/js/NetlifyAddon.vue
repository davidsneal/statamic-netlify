<template>
  <div>
    <div v-if="loading" class="loading">
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 40 40" stroke="#737f8c"><g fill="none" fill-rule="evenodd"><g transform="translate(2 2)" stroke-width="4"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(52.8934 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg>
      <div class="mt-1">Loading</div>
    </div>
    <div v-else>
      <div v-if="deployable" class="flex items-center justify-between">
        <div class="pr-4">
          <h2 class="font-bold">{{ lang.heading }}</h2>
          <p v-if="!busy" class="my-1 text-sm text-grey">{{ lang.text }}</p>
          <p v-else class="my-1 text-sm text-grey">
            Your site is building, please be patient. You can safely navigate away from
            this page, it shall refresh automatically once complete.
          </p>
        </div>
        <button v-if="!busy" @click.prevent="confirming = true" class="btn">
          <span v-if="firing">{{ lang.firing }}</span>
          <span v-else>{{ lang.action }}</span>
        </button>
        <span v-else class="fade-in-out inline-flex items-center px-3 py-1 rounded-full text-sm font-medium leading-5 bg-blue-100 text-blue-800">
          Busy
        </span>
      </div>
      <div v-else class="flex items-center justify-between">
        <div class="pr-4">
          <h2 class="font-bold">{{ lang.heading }}</h2>
          <p class="my-1 text-sm text-grey">
            Your site is up-to-date, there's nothing to deploy at this time.
          </p>
        </div>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium leading-5 bg-green text-white">
          Live
        </span>
      </div>
      <netlify-site v-if="site.id" :site="site" />
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
  </div>
</template>

<script>
import NetlifySite from './NetlifySite'

  export default {
    components: {
      NetlifySite,
    },

    props: {
      hash: {
        type: String,
        default: '',
      },
      lang: {
        type: Object,
        default: () => {},
      },
      routes: {
        type: Object,
        default: () => {},
      },
    },

    data() {
      return {
        confirming: false,
        error: false,
        firing: false,
        loading: true,
        site: {},
        timeout: null,
      }
    },

    mounted() {
      this.getSite()
    },

    computed: {
      busy() {
        return this.site.state != 'ready' && this.site.state != 'current'
      },

      deployable() {
        return this.site.published_deploy.commit_ref == this.hash
      },
    },

    methods: {
      getSite() {
        if (this.timeout) clearTimeout(this.timeout)

        this.$axios.get(this.routes.site)
          .then((response) => {
            this.site = response.data
            this.loading = false

            if (this.site.state != 'ready') {
              this.timeout = setTimeout(() => {
                this.getSite()
              }, 5000)
            }
          })
          .catch((error) => {
            this.$toast.error('Failed to retrieve the site')
            this.error = true
          })
      },

      submit() {
        this.confirming = false
        this.firing = true

        this.$axios.post(this.routes.build)
          .then(response => {
            this.$toast.success(this.lang.success)
            this.getSite()
          })
          .catch((error) => {
            this.$toast.error(this.lang.failed)
            console.log(error)
          })
          .finally(() => {
            this.firing = false
          })
      },
    },
  }
</script>

<style scoped>
.fade-in-out {
  opacity: 1;
  animation: fade 3s linear infinite;
}

@keyframes fade {
  0%,100% { opacity: 0.5 }
  50% { opacity: 1 }
}
</style>
