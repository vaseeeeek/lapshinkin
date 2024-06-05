<template>
    <div id="admin-app">
      <admin-header></admin-header>
      <admin-sidebar></admin-sidebar>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import AdminHeader from './components/AdminHeader.vue';
  import AdminSidebar from './components/AdminSidebar.vue';
  
  export default {
    name: 'AppAdmin',
    components: {
      AdminHeader,
      AdminSidebar
    }
  };
  </script>
  
  <style>
  #admin-app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  </style>
  