<template>
  <label for="checkbox" class="switch" @click="$store.commit('TOGGLE_THEME')">
    <input type="checkbox" :checked="$store.state.darkTheme" />
    <span class="slider"></span>
  </label>
</template>

<script></script>
