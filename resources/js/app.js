/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap')

 import Vue from 'vue'
 
 /**
  * Next, we will create a fresh Vue application instance and attach it to
  * the page. Then, you may begin adding components to this application
  * or customize the JavaScript scaffolding to fit your unique needs.
  */
import ExampleComponent from './components/ExampleComponent.vue';
import ChatApplication from './components/ChatApplication.vue';
 Vue.component('example-component', ExampleComponent)
 Vue.component('chat-application', ChatApplication)
 
 const app = new Vue({
   el: '#app',
   data: {
     userID: null
   },
   mounted () {
     // Assign the ID from meta tag for future use in application
     this.userID = document.head.querySelector('meta[name="userID"]').content
   }
 })
 