import { createApp } from 'vue'
import App from './App.vue'
import Lazy from './directives/LazyImage';

const app = createApp(App);

Lazy(app)

app.mount('#app')
