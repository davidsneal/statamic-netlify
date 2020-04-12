import NetlifyAddon from './NetlifyAddon.vue';

Statamic.booting(() => {
    Statamic.$components.register('netlify-addon', NetlifyAddon)
})
