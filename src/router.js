import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Cortes from './views/Cortes.vue';
import Proveedores from './views/Proveedores.vue';
import Materiales from './views/Materiales.vue';
import Proyectos from './views/Proyectos.vue';
import LoginView from './views/LoginView.vue';
import RegisterView from './views/RegisterView.vue';
import ResetPasswordView from './views/ResetPasswordView.vue';
import Profile from './views/Profile.vue';
import UserManual from './views/UserManual.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/cortes',
    component: Cortes
  },
  {
    path: '/proveedores',
    component: Proveedores
  },
  {
    path: '/materiales',
    component: Materiales
  },
  {
    path: '/proyectos',
    component: Proyectos
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/reset-password',
    name: 'ResetPasswordView',
    component: ResetPasswordView
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/user-manual',
    name: 'UserManual',
    component: UserManual
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;