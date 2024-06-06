<template>
	<div class="app">
	  <Sidebar v-if="!isExceptedRoute" />
	  <RouterView />
	</div>
</template>
  
<script setup>
import Sidebar from './components/Sidebar.vue';
import { RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const isExceptedRoute = computed(() => ['LoginView', 'ResetPasswordView'].includes(route.name));
</script>
  
<style lang="scss">
:root {
	--primary: #1cc88a;
	--primary-alt: #1cc88a;
	--grey: #a5aab7;
	--dark: #1d1b31;
	--dark-alt: #334155;
	--light: #ffffff;
	--sidebar-width: 300px;
}
  
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}
  
body {
	background: var(--light);
}
  
button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}
  
.app {
	display: flex;
	main {
	  flex: 1 1 0;
	  padding: 2rem;
	  @media (max-width: 1024px) {
		padding-left: 6rem;
	  }
	}
}
</style>