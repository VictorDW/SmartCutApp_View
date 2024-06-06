<template>
	<aside :class="[isExpanded ? 'is-expanded' : '', isMobile ? 'is-mobile' : '']">
	  <div class="logo">
		<img :src="logoURL" alt="SmarCut" />
		<h4 class="sidebar-title">SMARTCUT</h4>
	  </div>
  
	  <div class="menu">
		<router-link to="/Dashboard" class="button">
		  <span class="material-icons">home</span>
		  <span class="text">Dashboard</span>
		</router-link>
		<hr class="separator" />
		<h3>Inventario</h3>
		<router-link to="/Proveedores" class="button">
		  <span class="material-icons">person</span>
		  <span class="text">Proveedores</span>
		</router-link>
		<router-link to="/Materiales" class="button">
		  <span class="material-icons">description</span>
		  <span class="text">Materiales</span>
		</router-link>
		<hr class="separator" />
		<h3>Proyectos</h3>
		<router-link to="/Proyectos" class="button">
		  <span class="material-icons">folder_open</span>
		  <span class="text">Proyectos</span>
		</router-link>
		<router-link to="/Cortes" class="button">
		  <span class="material-icons">content_cut</span>
		  <span class="text">Cortes</span>
		</router-link>
	  </div>
  
	  <div class="menu-toggle-wrap">
		<div class="menu-toggle-circle">
		  <button class="menu-toggle" @click="toggleMenu">
			<span class="material-icons">keyboard_arrow_right</span>
		  </button>
		</div>
	  </div>
  
	  <div class="flex"></div>
	</aside>
  
 </template>
  
  <script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logoURL from '../assets/logo.png'

const isExpanded = ref(localStorage.getItem('isExpanded') === 'true')
const isMobile = ref(window.innerWidth <= 997)


const toggleMenu = () => {
  isExpanded.value = !isExpanded.value
  localStorage.setItem('isExpanded', isExpanded.value)
}

const handleResize = () => {
  isMobile.value = window.innerWidth <= 997
  if (isMobile.value) {
    isExpanded.value = false
}
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
    
<style lang="scss" scoped>
:root {
  --sidebar-width: 300px;
}

.sidebar {
  width: var(--sidebar-width);
}

aside {
  display: flex;
  flex-direction: column;

  background-color: var(--dark);
  color: var(--light);

  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;

  transition: 0.2s ease-in-out;

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    margin-bottom: 2rem;
    display: flex;

    img {
      width: 2rem;
    }
    h4 {
      font-size: 1.5rem;
      margin-left: 1.1rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.4rem;
    margin-top: 6rem;
    margin-right: 5rem;
    margin-left: 2rem;
    position: relative;
    top: 0.4rem;
    transition: 0.2s ease-in-out;

    .menu-toggle {
      display: flex;
      align-items: center;
      transition: 0.2s ease-in-out;

      .material-icons {
        line-height: normal;
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  .menu-toggle-circle {
    width: 2.1rem;
    height: 2.1rem;
    border-radius: 50%;
    background-color: var(--dark-alt);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    margin-left: 12px;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-in-out;
      }
      .text {
        color: var(--light);
        transition: 0.2s ease-in-out;
      }

      &:hover {
        background-color: var(--dark-alt);

        .material-icons,
        .text {
          color: var(--primary);
        }
      }

      &.router-link-exact-active {
        background-color: var(--dark-alt);
        border-right: 5px solid var(--primary);

        .material-icons,
        .text {
          color: var(--primary);
        }
      }
    }
  }
  .separator {
    width: calc(100% - 1rem);
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    border-top: 1px solid var(--light);
  }
  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p {
      font-size: 0.875rem;
      color: var(--grey);
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

      .menu-toggle {
        transform: rotate(-180deg);
    
    }

    h3,
    .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }

    .footer {
      opacity: 0;
    }
  }

  @media (max-width: 997px) {
    width: calc(2rem + 32px);
    min-width: calc(2rem + 32px);
    
    &.is-mobile {
      .logo img {
        width: 1.6rem;
      }
      
      .menu .button .material-icons {
        font-size: 1.6rem;
      }
    }
  }

  @media (max-width: 997px) {
    width: calc(2rem + 32px);
    min-width: calc(2rem + 32px);
    
    &.is-mobile {
      .logo img {
        width: 1.6rem;
      }
      
      .menu .button .material-icons {
        font-size: 1.6rem;
      }
    }
  }

  @media (max-width: 1024px) {
    &.is-expanded {
      width: var(--sidebar-width);
    }
  }
}
</style>