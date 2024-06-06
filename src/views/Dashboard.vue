
<template>

  <section class="main">
    <nav class="nav">
      <div class="left-section">
        <!-- Muestra el mensaje "Dashboard" -->
        <div class="Dashboard-message">Dashboard</div>
        <!-- Muestra un mensaje de bienvenida con el nombre de usuario -->
        <div class="User-message">Bienvenido, {{ showDataUser() }}</div>
      </div>
      <div class="right-section">
        <!-- Icono de notificación que activa/desactiva el desplegable de notificaciones -->
        <div class="notification-icon" @click="toggleNotifications">
          <span class="material-icons ">notifications</span>
          <!-- Desplegable de notificaciones que se muestra cuando showNotifications es true -->
          <div class="notification-dropdown" v-if="showNotifications" style="width: 200px;">
            <!-- Itera sobre el array de notificaciones y muestra cada notificación -->
            <div class="notification-item" v-for="(notification, index) in notifications" :key="index">
              <i class="material-icons">notifications_active</i>
              <span class="notification-text">{{ notification }}</span>
              <hr class="separator">
            </div>
          </div>
        </div>
        <!-- Separador entre el icono de notificación y el icono de usuario -->
        <hr class="separator user-separator">
        <!-- Icono de usuario que activa/desactiva el menú desplegable -->
        <div class="user-icon" @click="toggleDropdown">
          <span class="material-icons">person</span>
        </div>
        <!-- Menú desplegable que se muestra al hacer clic en el icono de usuario -->
        <div class="dropdown-menu" @click="toggleDropdown">
          <span class="material-icons">arrow_drop_down</span>
          <!-- Menú desplegable que se muestra cuando showDropdown es true -->
          <div class="menu-dropdown" v-if="showDropdown">
            <!-- Elemento de menú para navegar al perfil de usuario -->
            <div class="menu-item" @click="navigateToProfile">
              <i class="material-icons">person</i> Perfil
            </div>
            <!-- Elemento de menú para navegar a la vista de creación de usuarios -->
            <div class="menu-item" @click="navigateToRegisterView">
              <i class="material-icons material-icons--add_user">group_add</i> Crear Usuarios
            </div>
            <hr class="separator">
            <!-- Elemento de menú para navegar al manual de usuario -->
            <div class="menu-item" @click="navigateToUserManual">
              <i class="material-icons">help</i> Manual de Usuario
            </div>
            <hr class="separator">
            <!-- Elemento de menú para cerrar sesión y navegar a la vista de inicio de sesión -->
            <div class="menu-item" @click="navigateToLoginView">
              <i class="material-icons">exit_to_app</i> Cerrar Sesión
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="main-container" :style="{ ...globalStyles }">
        <div class="main-cards" style="display: flex; flex-direction: row; margin-bottom: 20px; width: 100%">
          <!-- Tarjeta de proveedores registrados -->
          <div class="card" :style="{ ...cardStyles, ...cardPrimaryShadowStyles, flex: '1', marginRight: '20px', borderLeft: '5px solid #4E73DF' }">
            <div class="card-content">
              <div class="card-info">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1" style="font-weight: bold; color: black;">Proveedores Registrados</div>
                <div class="h5 mb-2 font-weight-bold text-gray-800" style="font-weight: bold; font-size: 170%; text-align: center; margin-top: 20px;">6</div>
              </div>
              <span class="material-icons card_icon" style="color: #4E73DF; background-color: #f0f2f5; border-radius: 50%; padding: 8px;">local_shipping</span>
            </div>
          </div>

          <!-- Tarjeta de materiales en inventario -->
          <div class="card" :style="{ ...cardStyles, ...cardSuccessShadowStyles, flex: '1', marginRight: '20px', borderLeft: '5px solid #1CC88A' }">
            <div class="card-content">
              <div class="card-info">
                <div class="text-xs font-weight-bold text-success text-uppercase mb-1" style="font-weight: bold; color: black;">Materiales en Inventario</div>
                <div class="h5 mb-2 font-weight-bold text-gray-800" style="font-weight: bold; font-size: 170%; text-align: center; margin-top: 20px;">55</div>
              </div>
              <span class="material-icons card_icon" style="color: #1CC88A; background-color: #f0f2f5; border-radius: 50%; padding: 8px;">inventory_2</span>
            </div>
          </div>

          <!-- Tarjeta de proyectos creados -->
          <div class="card" :style="{ ...cardStyles, ...cardInfoShadowStyles, flex: '1', borderLeft: '5px solid #36B9CC' }">
            <div class="card-content">
              <div class="card-info">
                <div class="text-xs font-weight-bold text-info text-uppercase mb-1" style="font-weight: bold; color: black;">Proyectos Creados</div>
                <div class="h5 mb-2 font-weight-bold text-gray-800" style="font-weight: bold; font-size: 170%; text-align: center; margin-top: 20px;">15</div>
              </div>
              <span class="material-icons card_icon" style="color: #36B9CC; background-color: #f0f2f5; border-radius: 50%; padding: 8px;">engineering</span>
            </div>
          </div>
        </div>

        <div class="tables" style="display: flex; flex-direction: row; width: 100%">
          <!-- Tabla de materiales más utilizados -->
          <div class="table" :style="{ ...tableStyles, width: '65%', marginRight: '15px' }">
            <h3 style="color: #000000; margin-bottom: 16px; text-align: left">Materiales más Utilizados</h3>
            <table style="width: 100%">
              <thead>
                <tr>
                  <th style="text-align: left">ID Material</th>
                  <th style="text-align: left">Nombre</th>
                  <th style="text-align: left">Cantidad</th>
                  <th style="text-align: left">Estado</th>
                </tr>
              </thead>
              <tbody>
                <!-- Itera sobre el array de materiales mostrados y muestra cada material en una fila de la tabla -->
                <tr v-for="(material, index) in materialesMostrados" :key="material.id" style="margin-bottom: 5px; border-bottom: 1px solid black">
                  <td>{{ material.id }}</td>
                  <td>{{ material.nombre }}</td>
                  <td>{{ material.cantidad }}</td>
                  <!-- El color de fondo de la celda de estado depende del valor del estado del material -->
                  <td :style="{ backgroundColor: material.estado === 'Disponible' ? '#1CC88A' : '#E74A3B', padding: '5px 10px', color: '#000000', borderRadius: '5px', textAlign: 'center', width: 'calc(100% - 10px)' }">{{ material.estado }}</td>
                </tr>
              </tbody>
            </table>
      <!-- Paginación de la tabla de materiales más utilizados -->
      <div class="paginacion">
        <!-- Botón para ir a la página anterior, deshabilitado si se encuentra en la primera página -->
        <button @click="paginaAnteriorMateriales" :disabled="paginaActualMateriales === 1">&lt;</button>
        <!-- Muestra la página actual y el total de páginas -->
        <span>{{ paginaActualMateriales }} de {{ totalPaginasMateriales }}</span>
        <!-- Botón para ir a la página siguiente, deshabilitado si se encuentra en la última página -->
        <button @click="paginaSiguienteMateriales" :disabled="paginaActualMateriales === totalPaginasMateriales">&gt;</button>
      </div>
      </div>

      <!-- Tabla de proyectos por operador -->
      <div class="table" :style="{ ...tableStyles, width: '32%' }">
      <h3 style="color: #000000; margin-bottom: 16px; text-align: left;">Proyectos por Operador</h3>
      <table style="width: 100%; border-spacing: 0 5px;">
        <tbody>
          <!-- Itera sobre el array de proyectos mostrados y muestra cada proyecto en una fila de la tabla -->
          <tr v-for="(proyecto, index) in proyectosMostrados" :key="proyecto.operador" style="margin-bottom: 5px; border-bottom: 1px solid black">
            <td style="display: flex; align-items: center;">
              <!-- Icono de usuario -->
              <span class="material-icons" style="color: #CCCCCC; margin-right: 20px; font-size: 250%; border-radius: 50%; background-color: #f0f2f5; padding: 8px;">face</span>
              <div style="display: flex; flex-direction: column;">
                <!-- Nombre del operador -->
                <div>{{ operadorNames[index] }}</div>
                <!-- Cantidad de proyectos del operador -->
                <div>{{ proyecto.cantidad }}</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- Paginación de la tabla de proyectos por operador -->
      <div class="paginacion">
        <!-- Botón para ir a la página anterior, deshabilitado si se encuentra en la primera página -->
        <button @click="paginaAnteriorProyectos" :disabled="paginaActualProyectos === 1">&lt;</button>
        <!-- Muestra la página actual y el total de páginas -->
        <span>{{ paginaActualProyectos }} de {{ totalPaginasProyectos }}</span>
        <!-- Botón para ir a la página siguiente, deshabilitado si se encuentra en la última página -->
        <button @click="paginaSiguienteProyectos" :disabled="paginaActualProyectos === totalPaginasProyectos">&gt;</button>
      </div>
      </div>
      </div>
    </div>
  </section>
 
</template>
  
Aquí tienes el código con comentarios explicativos añadidos:
vueCopy code<script setup>
import { ref, computed, onMounted} from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();
const showNotifications = ref(false);
const showDropdown = ref(false);
const name = 'DashboardView';

onMounted(() => {
  if (!localStorage.getItem('token')) {
    router.push({ name: 'LoginView' });
  }
});

const showDataUser = () => {
  return localStorage.getItem('fullName');
}

// Función para alternar la visualización de las notificaciones
const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value;
};

// Función para alternar la visualización del menú desplegable
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};


// Array de notificaciones
const notifications = [
  'Mensaje 1',
  'Mensaje 2',
  'Mensaje 3',
  'Mensaje 4',
  'Mensaje 5'
];

// Variables reactivas
const globalStyles = ref({
  backgroundColor: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '20px',
  width: '100%',
  marginTop: '60px'
});

// Estilos de las tarjetas y tablas
const cardStyles = {
  backgroundColor: '#FFFFFF',
  color: '#000000',
  borderRadius: '8px',
  padding: '16px',
  marginBottom: '16px',
};

const cardPrimaryShadowStyles = {
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const cardSuccessShadowStyles = {
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const cardInfoShadowStyles = {
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const tableStyles = {
  backgroundColor: '#FFFFFF',
  color: '#000000',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '10px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
};

// Datos simulados para las tablas
const materialesData = [
  { id: '555-112', nombre: 'Lámina de MDF', cantidad: 85, estado: 'Disponible' },
  { id: '555-113', nombre: 'Lámina de MDP', cantidad: 0, estado: 'Agotado' },
  { id: '555-114', nombre: 'Lámina de aglomerado', cantidad: 25, estado: 'Disponible' },
  { id: '555-115', nombre: 'Lámina de MDF', cantidad: 70, estado: 'Disponible' },
  { id: '555-116', nombre: 'Lámina de MDP', cantidad: 40, estado: 'Disponible' },
  { id: '555-117', nombre: 'Lámina de aglomerado', cantidad: 0, estado: 'Agotado' },
  { id: '555-118', nombre: 'Lámina de MDF', cantidad: 60, estado: 'Disponible' },
  { id: '555-119', nombre: 'Lámina de MDP', cantidad: 90, estado: 'Disponible' },
  { id: '555-120', nombre: 'Lámina de aglomerado', cantidad: 20, estado: 'Disponible' },
  { id: '555-121', nombre: 'Lámina de MDF', cantidad: 0, estado: 'Agotado' },
];

const proyectosData = [
  { operador: 'Juan Pérez', cantidad: 5 },
  { operador: 'Carlos Gómez', cantidad: 8 },
  { operador: 'Luis Hernández', cantidad: 2 },
  { operador: 'María Rodríguez', cantidad: 4 },
  { operador: 'Ana Martínez', cantidad: 7 },
  { operador: 'Pedro López', cantidad: 3 },
];

// Obtener los nombres de los operadores de los proyectos
const operadorNames = proyectosData.map(item => item.operador);

// Datos para la paginación de la tabla de materiales
const paginaActualMateriales = ref(1);
const entradasPorPaginaMateriales = ref(6);

// Datos para la paginación de la tabla de proyectos
const paginaActualProyectos = ref(1);
const entradasPorPaginaProyectos = ref(5);

// Funciones para la paginación de la tabla de materiales
const paginaSiguienteMateriales = () => {
  if (paginaActualMateriales.value < totalPaginasMateriales.value) {
    paginaActualMateriales.value++;
  }
};

const paginaAnteriorMateriales = () => {
  if (paginaActualMateriales.value > 1) {
    paginaActualMateriales.value--;
  }
};

// Funciones para la paginación de la tabla de proyectos
const paginaSiguienteProyectos = () => {
  if (paginaActualProyectos.value < totalPaginasProyectos.value) {
    paginaActualProyectos.value++;
  }
};

const paginaAnteriorProyectos = () => {
  if (paginaActualProyectos.value > 1) {
    paginaActualProyectos.value--;
  }
};

// Propiedades computadas para la paginación de la tabla de materiales
const materialesMostrados = computed(() => {
  const inicioEntrada = (paginaActualMateriales.value - 1) * entradasPorPaginaMateriales.value;
  const finEntrada = inicioEntrada + entradasPorPaginaMateriales.value;
  return materialesData.slice(inicioEntrada, finEntrada);
});

const totalPaginasMateriales = computed(() => {
  return Math.ceil(materialesData.length / entradasPorPaginaMateriales.value);
});

// Propiedades computadas para la paginación de la tabla de proyectos
const proyectosMostrados = computed(() => {
  const inicioEntrada = (paginaActualProyectos.value - 1) * entradasPorPaginaProyectos.value;
  const finEntrada = inicioEntrada + entradasPorPaginaProyectos.value;
  return proyectosData.slice(inicioEntrada, finEntrada);
});

const totalPaginasProyectos = computed(() => {
  return Math.ceil(proyectosData.length / entradasPorPaginaProyectos.value);
});

// Funciones para la navegación
const navigateToProfile = () => {
  router.push({ name: 'Profile' });
};

const navigateToRegisterView = () => {
  router.push({ name: 'RegisterView' });
};

const navigateToUserManual = () => {
  router.push({ name: 'UserManual' });
};

const navigateToLoginView = () => {
  localStorage.removeItem('fullName');
  localStorage.removeItem('token');
  router.push({ name: 'LoginView' });
};
</script>

<style scoped>

.main {
  position: relative;
  width: 100%;
}
.nav {
  position: absolute;
  top: 12px;
  left: 16px;
  width: calc(100% - 16px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.left-section {
  display: flex;
  flex-direction: column;
}

.Dashboard-message {
  margin-bottom: 5px;
  color: #000000;
  font-size: 1.5rem;
  font-weight: bold;
}

.user-message {
  color: #000000;
  font-size: 1.2rem;
}

.right-section {
  display: flex;
  align-items: center;
}

.notification-icon,
.user-icon {
  position: relative;
  cursor: pointer;
}

.notification-dropdown,
.menu-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #FFFFFF;
  border: 1px solid #CCCCCC;
  border-radius: 5px;
  padding: 20px;
}

.notification-item,
.menu-item {
  margin-bottom: 5px;
}

.material-icons--add_user {
  margin-left: 4px;
}

.top-section {
  display: flex;
  align-items: center;
}

.notification-icon {
  position: relative;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 1px;
}

.notification-icon .material-icons {
  font-size: 0.9rem;
}

.user-icon {
  position: relative;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 1px;
  font-size: 2rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #CCCCCC;
}

.dropdown-menu {
  cursor: pointer;
}

.notification-dropdown,
.menu-dropdown {
  position: absolute;
  top: 100%;
  right: 20px;
  background-color: #FFFFFF;
  color: #000000;
  border: 1px solid #CCCCCC;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.notification-item,
.menu-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 2px;
  cursor: pointer;
}

h3 {
  font-weight: bold;
  text-align: left;
}

.h5 {
  font-weight: bold;
  font-size: 100%;
}

.card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card_icon {
  color: #FFFFFF;
  background-color: #C6C9D0;
  border-radius: 50%;
  padding: 8px;
  font-size: 40px;
}

.text-primary {
  color: #4E73DF;
}

.text-success {
  color: #1CC88A;
}

.text-info {
  color: #36B9CC;
}

table {
  border-collapse: separate;
  border-spacing: 0 12px;
  width: 100%;
}

td,
th {
  padding: 10px;
  border-bottom: 1px solid black;
}

.table:first-child table {
  border-spacing: 0 15px;
}

.table:first-child td,
.table:first-child th {
  border: none;
}

.table:last-child table {
  border-spacing: 0 5px;
}

.table:last-child td {
  border: none;
  display: flex;
  align-items: center;
}

.table:last-child .material-icons {
  color: #CCCCCC;
  margin-right: 20px;
  font-size: 250%;
  border-radius: 50%;
  background-color: #f0f2f5;
  padding: 8px;
}

.separator {
  border: none;
  height: 1px;
  background-color: #CCCCCC;
  margin: 5px 0;
}

.user-separator {
  border-left: 1px solid #CCCCCC;
  height: 30px;
  margin: 0 10px;
}

.notification-text {
  display: block;
  text-align: center;
}

.notification-item:hover,
.menu-item:hover {
  background-color: #F0F0F0;
}

.main-cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
}

.card {
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
}

.tables {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.table {
  width: calc(50% - 10px);
  margin-bottom: 20px;
}

.table:first-child {
  width: calc(65% - 15px);
  margin-right: 15px;
}

.paginacion {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.paginacion button {
  padding: 5px 10px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 5px;
}

.paginacion span {
  margin: 0 10px;
}

@media (max-width: 992px) {
  .main-cards {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .card {
    width: calc(50% - 20px);
    margin-right: 20px;
  }

  .card:last-child {
    margin-right: 0;
  }

  .table {
    width: calc(50% - 10px);
    margin-right: 10px;
  }

  .table:last-child {
    margin-right: 0;
  }
}

@media (max-width: 600px) {
  .main-cards {
    flex-direction: column;
  }

  .card {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }

  .tables {
    flex-direction: column;
  }

  .table {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }

  .table:first-child {
    width: 100%;
    margin-right: 0;
  }

  table {
    font-size: 9px;
  }

  td,
  th {
    padding: 5px;
  }

  .table:first-child table,
  .table:last-child table {
    border-spacing: 0;
  }

  .table:first-child td,
  .table:first-child th,
  .table:last-child td {
    border-bottom: 1px solid black;
  }

  .table:last-child .material-icons {
    font-size: 200%;
    margin-right: 10px;
  }
}

@media (max-width: 768px) {
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 2;
  }

  .Dashboard-message,
  .user-message {
    font-size: 1.2rem;
  }

  .sidebar {
    position: absolute;
    top: 60px;
    left: 0;
    width: 200px;
    height: calc(100% - 60px);
    background-color: #f5f5f5;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  .main-container {
    margin-top: 80px;
    margin-left: 0;
    padding: 20px;
    width: 100%;
  }
}
</style>