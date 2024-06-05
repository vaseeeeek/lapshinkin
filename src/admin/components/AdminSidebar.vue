<template>
    <aside class="admin-sidebar">
      <nav>
        <ul>
          <li><router-link to="/admin">Dashboard</router-link></li>
        </ul>
      </nav>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'AdminSidebar'
  };
  </script>
  
  <style scoped>
  .admin-sidebar {
    background-color: #f4f4f4;
    padding: 20px;
  }
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  nav ul li {
    margin: 10px 0;
  }
  </style>
  