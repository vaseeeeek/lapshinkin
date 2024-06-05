<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Главная</router-link></li>
          <li><router-link to="/blog">Блог</router-link></li>
          <li><router-link to="/portfolio">Портфолио</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>© 2024 Название вашего проекта</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
header, footer {
  background: #333;
  color: white;
  padding: 1rem;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

main {
  padding: 2rem;
}
</style>
