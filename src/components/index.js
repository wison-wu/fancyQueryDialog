import Vue from 'vue';
import queryDialog from './fancyQueryDialog.vue';

const fancyQueryDialog = {
    install(Vue, options) {
      Vue.component(queryDialog.name, queryDialog)
    }
  }
  if (typeof window !== 'undefined' && window.Vue) {
    window.fancyQueryDialog = queryDialog
    Vue.use(queryDialog)
  }
export default fancyQueryDialog;
