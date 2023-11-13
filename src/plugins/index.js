/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import store from '@/store/store'
import { SchedulePlugin } from '@syncfusion/ej2-vue-schedule';


export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(store)
    .use(ScedulePlugin)
}
