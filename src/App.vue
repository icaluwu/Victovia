<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/location">Location</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  padding: 10px;
}
nav a {
  margin-right: 10px;
  text-decoration: none;
  color: blue;
}
</style>
