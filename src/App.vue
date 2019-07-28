<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact-us">Contact-us</router-link>
    </div>
    <router-view />
  </div>
</template>