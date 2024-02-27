import { createApp } from 'vue'
import { createStore } from 'vuex'
import { register } from 'register-service-worker'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import routes from './router'

//registerServiceWorker
if (process.env.NODE_ENV === 'production') {
    register(`${process.env.BASE_URL}service-worker.js`, {
        ready() {
            console.log(
                'App is being served from cache by a service worker.\n' +
                'For more details, visit https://goo.gl/AFskqB'
            )
        },
        registered() {
            console.log('Service worker has been registered.')
        },
        cached() {
            console.log('Content has been cached for offline use.')
        },
        updatefound() {
            console.log('New content is downloading.')
        },
        updated() {
            console.log('New content is available; please refresh.')
        },
        offline() {
            console.log('No internet connection found. App is running in offline mode.')
        },
        error(error) {
            console.error('Error during service worker registration:', error)
        }
    })
}

//CreateStore
const store = createStore({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})

//bind vue router
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
console.dir(router)

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');




//https://purecss.io/start/
//https://github.com/pure-css/pure/blob/master/site/static/layouts/marketing/styles.css
//https://github.com/pure-css/pure/blob/master/site/static/layouts/marketing/index.html