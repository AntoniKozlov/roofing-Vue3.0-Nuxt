<template>
  <div>
      <MainApp />
  </div>
</template>

<script>
//  import Vue from 'vue';
// import VueScrollIndicator from 'vue-scroll-indicator';

import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap';

import MainApp from './components/main-app/MainApp.vue'

export default {
    name: 'App',
    components: {
        MainApp,
    },
}
</script>

<style>
body {
    font-family: 'Times New Roman', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #212112;
    background-color: #fff;
    overflow-x: hidden;
    transition: all 200ms linear;
}

::selection {
    color: #fff;
    background-color: #8167a9;
}

::-moz-selection {
    color: #fff;
    background-color: #8167a9;
}



/* #Primary style
    ================================================== */
.bg-light {
    background-color: #fff !important;
    transition: all 200ms linear;
}

.section {
    position: relative;
    width: 100%;
    display: block;
}

.full-height {
    height: 100vh;
}

.over-hide {
    overflow: hidden;
}

.absolute-center {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    margin-top: 40px;
    transform: translateY(-50%);
    z-index: 20;
}

h1 {
    font-size: 48px;
    line-height: 1.2;
    font-weight: 700;
    color: #212112;
    text-align: center;
}

p {
    text-align: center;
    margin: 0;
    padding-top: 10px;
    opacity: 1;
    transform: translate(0);
    transition: all 300ms linear;
    transition-delay: 1700ms;
}

h1 span {
    display: inline-block;
    transition: all 300ms linear;
    opacity: 1;
    transform: translate(0);
}

h1 span:nth-child(1) {
    transition-delay: 1000ms;
}

h1 span:nth-child(2) {
    transition-delay: 700ms;
}

h1 span:nth-child(3) {
    transition-delay: 900ms;
}

h1 span:nth-child(4) {
    transition-delay: 800ms;
}

h1 span:nth-child(5) {
    transition-delay: 1000ms;
}

h1 span:nth-child(6) {
    transition-delay: 700ms;
}

h1 span:nth-child(7) {
    transition-delay: 900ms;
}

h1 span:nth-child(8) {
    transition-delay: 800ms;
}

h1 span:nth-child(9) {
    transition-delay: 600ms;
}

h1 span:nth-child(10) {
    transition-delay: 700ms;
}

h1 span:nth-child(11) {
    transition-delay: 1300ms;
}

h1 span:nth-child(12) {
    transition-delay: 1500ms;
}

h1 span:nth-child(13) {
    transition-delay: 1400ms;
}

h1 span:nth-child(14) {
    transition-delay: 1200ms;
}

h1 span:nth-child(15) {
    transition-delay: 1450ms;
}

.fade-in {
    opacity: 0;
    transform: scale(0.8);
    box-sizing: border-box;
    transition: 1.3s all cubic-bezier(0.39, 0.575, 0.565, 1);
}

.ltr-direction {
    direction: ltr;
}

.rtl-direction {
    direction: rtl;
}
</style>
