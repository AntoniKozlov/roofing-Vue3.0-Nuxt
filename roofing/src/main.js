import { createApp } from 'vue'

import App from './App.vue'
import Lazy from './directives/LazyImage';
import ScrollTo from './directives/ScrollTo';

const app = createApp(App);

Lazy(app)
ScrollTo(app)

app.mount('#app')
