<template>
  <div class="container">
    <div class="contenido-principal">
      <!-- Contenedor de la tabla de materiales -->
      <div class="tabla-contenedor" :style="{ ...tableStyles, borderLeft: '5px solid #36B9CC' }" :class="{ 'blur': mostrarModalNuevoMaterial }">
        <h2>Materiales Registrados</h2>
        <!-- Sección de búsqueda y botón para agregar nuevo material -->
        <div class="busqueda-paginacion">
          <div class="busqueda-container">
            <input type="text" v-model="busqueda" placeholder="Buscar..." class="busqueda-input">
          </div>
          <button class="btn-header" @click="abrirModalNuevoMaterial" :style="{ ...cardStyles, ...cardPrimaryShadowStyles, borderLeft: '5px solid #4E73DF' }">
            <div class="card-content">
              <span class="material-icons card-icon" style="color: #4E73DF; background-color: #f0f2f5; border-radius: 50%; padding: 8px;">add</span>
              <div class="text-uppercase" style="font-weight: bold; color: black;">Nuevo material</div>
            </div>
          </button>
        </div>
        <!-- Tabla de materiales registrados -->
        <div class="tabla-registrados-wrapper">
          <table class="tabla-registrados">
            <thead>
              <tr>
                <th>ID</th>
                <th>Código</th>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Altura</th>
                <th>Ancho</th>
                <th>Precio Unitario</th>
                <th>Cantidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <!-- Filas de la tabla de materiales -->
              <tr v-for="(material, index) in materialesFiltrados" :key="index">
                <!-- Mostrar los detalles del material si no se está editando -->
                <template v-if="materialEditado !== material">
                  <td>{{ material.id }}</td>
                  <td>{{ material.codigo }}</td>
                  <td>{{ material.nombre }}</td>
                  <td>{{ material.tipo }}</td>
                  <td>{{ material.altura }}</td>
                  <td>{{ material.ancho }}</td>
                  <td>{{ material.precioUnitario }}</td>
                  <td>{{ material.cantidad }}</td>
                  <td>
                    <!-- Botones de acción para editar y eliminar material -->
                    <button class="btn-accion btn-editar" @click="editarMaterial(material)">
                      <span class="material-icons">edit</span>
                    </button>
                    <button class="btn-accion btn-eliminar" @click="confirmarEliminacion(index)">
                      <span class="material-icons">delete</span>
                    </button>
                  </td>
                </template>
                <!-- Mostrar los campos de edición del material si se está editando -->
                <template v-else>
                  <td><input type="text" v-model="materialEditado.id"></td>
                  <td><input type="text" v-model="materialEditado.codigo"></td>
                  <td><input type="text" v-model="materialEditado.nombre"></td>
                  <td><input type="text" v-model="materialEditado.tipo"></td>
                  <td><input type="number" v-model="materialEditado.altura"></td>
                  <td><input type="number" v-model="materialEditado.ancho"></td>
                  <td><input type="number" v-model="materialEditado.precioUnitario"></td>
                  <td><input type="number" v-model="materialEditado.cantidad"></td>
                  <td>
                    <!-- Botón para guardar los cambios del material editado -->
                    <button class="btn-accion btn-guardar" @click="guardarMaterial(material)">
                      <span class="material-icons">save</span>
                    </button>
                  </td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Sección de paginación -->
        <div class="tabla-footer">
          <div class="paginacion">
            <label for="entradas">Mostrar:</label>
            <select id="entradas" v-model="entradasPorPagina">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
            <span>Página:</span>
            <button @click="paginaAnterior" :disabled="paginaActual === 1">&lt;</button>
            <span>{{ paginaActual }} de {{ totalPaginas }}</span>
            <button @click="paginaSiguiente" :disabled="paginaActual === totalPaginas">&gt;</button>
          </div>
        </div>
      </div>
      <!-- Modal para registrar un nuevo material -->
      <modal v-if="mostrarModalNuevoMaterial" @close="cerrarModalNuevoMaterial">
        <div class="modal-contenido" :style="{ ...tableStyles, borderLeft: '5px solid #36B9CC', width: '120%' }">
          <h2>Registrar Material</h2>
          <form @submit.prevent="agregarMaterial" class="registro-form">
            <div class="registro-row">
              <div class="registro-col">
                <label for="id">ID:</label>
                <input type="text" id="id" v-model="nuevoMaterial.id" required>
              </div>
              <div class="registro-col">
                <label for="codigo">Código:</label>
                <input type="text" id="codigo" v-model="nuevoMaterial.codigo" required>
              </div>
              <div class="registro-col">
                <label for="altura">Altura:</label>
                <input type="number" id="altura" v-model="nuevoMaterial.altura" required>
              </div>
              <div class="registro-col">
                <label for="ancho">Ancho:</label>
                <input type="number" id="ancho" v-model="nuevoMaterial.ancho" required>
              </div>
            </div>
            <div class="registro-row">
              <div class="registro-col">
                <label for="precioUnitario">Precio Unitario:</label>
                <input type="number" id="precioUnitario" v-model="nuevoMaterial.precioUnitario" required>
              </div>
              <div class="registro-col">
                <label for="cantidad">Cantidad:</label>
                <input type="number" id="cantidad" v-model="nuevoMaterial.cantidad" required>
              </div>
              <div class="registro-col">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" v-model="nuevoMaterial.nombre" required>
              </div>
              <div class="registro-col">
                <label for="tipo">Tipo:</label>
                <input type="text" id="tipo" v-model="nuevoMaterial.tipo" required>
              </div>
            </div>
            <div class="btn-registrar-container">
              <button type="submit" class="btn-registrar">Registrar</button>
            </div>
          </form>
        </div>
      </modal>
      <!-- Modal de confirmación para eliminar un material -->
      <modal v-if="mostrarModalConfirmacion" @close="cerrarModalConfirmacion">
        <div class="modal-contenido">
          <h2>Confirmar eliminación</h2>
          <p>¿Seguro que desea eliminar este material?</p>
          <div class="modal-botones">
            <button class="btn-cancelar" @click="cerrarModalConfirmacion">Cancelar</button>
            <button class="btn-eliminar" @click="eliminarMaterial">Eliminar</button>
          </div>
        </div>
      </modal>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      materiales: [], // Lista de materiales
      nuevoMaterial: {
        // Datos del nuevo material
        id: '',
        codigo: '',
        nombre: '',
        tipo: '',
        altura: null,
        ancho: null,
        precioUnitario: null,
        cantidad: null,
      },
      materialEditado: null, // Material que se está editando actualmente
      mostrarModalNuevoMaterial: false, // Indicador para mostrar/ocultar el modal de nuevo material
      mostrarModalConfirmacion: false, // Indicador para mostrar/ocultar el modal de confirmación de eliminación
      materialAEliminar: null, // Índice del material a eliminar
      busqueda: '', // Término de búsqueda
      paginaActual: 1, // Página actual de la paginación
      entradasPorPagina: 5, // Número de entradas por página
      tableStyles: {
        // Estilos de la tabla
        borderRadius: '8px',
        boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.1)',
      },
      cardStyles: {
        // Estilos de las tarjetas
        backgroundColor: '#FFFFFF',
        color: '#000000',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
      },
      cardPrimaryShadowStyles: {
        // Estilos de sombra primaria de las tarjetas
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      },
    };
  },
  computed: {
    materialesFiltrados() {
      // Filtra los materiales según el término de búsqueda y los límites de paginación
      const inicioEntrada = (this.paginaActual - 1) * this.entradasPorPagina;
      const finEntrada = inicioEntrada + this.entradasPorPagina;
      return this.materiales.filter(material =>
        Object.values(material).some(valor =>
          String(valor).toLowerCase().includes(this.busqueda.toLowerCase())
        )
      ).slice(inicioEntrada, finEntrada);
    },
    totalPaginas() {
      // Calcula el número total de páginas según la cantidad de materiales y las entradas por página
      return Math.ceil(this.materiales.length / this.entradasPorPagina);
    },
  },
  methods: {
    agregarMaterial() {
      // Agrega un nuevo material a la lista de materiales
      this.materiales.push({ ...this.nuevoMaterial });
      this.nuevoMaterial = {
        id: '',
        codigo: '',
        nombre: '',
        tipo: '',
        altura: null,
        ancho: null,
        precioUnitario: null,
        cantidad: null,
      };
      this.cerrarModalNuevoMaterial();
    },
    editarMaterial(material) {
      // Establece el material que se está editando actualmente
      this.materialEditado = material;
    },
    guardarMaterial(material) {
      // Guarda los cambios del material editado
      Object.assign(material, this.materialEditado);
      this.materialEditado = null;
    },
    confirmarEliminacion(index) {
      // Muestra el modal de confirmación de eliminación y guarda el índice del material a eliminar
      this.materialAEliminar = index;
      this.mostrarModalConfirmacion = true;
    },
    eliminarMaterial() {
      // Elimina el material seleccionado de la lista de materiales
      this.materiales.splice(this.materialAEliminar, 1);
      this.materialAEliminar = null;
      this.mostrarModalConfirmacion = false;
    },
    abrirModalNuevoMaterial() {
      // Abre el modal para registrar un nuevo material
      this.mostrarModalNuevoMaterial = true;
    },
    cerrarModalNuevoMaterial() {
      // Cierra el modal de registro de nuevo material y reinicia los datos del nuevo material
      this.mostrarModalNuevoMaterial = false;
      this.nuevoMaterial = {
        id: '',
        codigo: '',
        nombre: '',
        tipo: '',
        altura: null,
        ancho: null,
        precioUnitario: null,
        cantidad: null,
      };
    },
    cerrarModalConfirmacion() {
      // Cierra el modal de confirmación de eliminación y reinicia el índice del material a eliminar
      this.mostrarModalConfirmacion = false;
      this.materialAEliminar = null;
    },
    paginaAnterior() {
      // Va a la página anterior de la paginación
      if (this.paginaActual > 1) {
        this.paginaActual--;
      }
    },
    paginaSiguiente() {
      // Va a la página siguiente de la paginación
      if (this.paginaActual < this.totalPaginas) {
        this.paginaActual++;
      }
    },
  },
};
</script>
<style scoped>
/* Estilos generales */
.container {
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
}

.contenido-principal {
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 1rem; /* Agregado: separación superior de 1rem para el título */
}

table {
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
  overflow: hidden;
}

th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #FFFFFF;
}

input {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
}

button {
  cursor: pointer;
}

/* Estilos para el botón "Nuevo material" */
.btn-header {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  height: 50%;
  margin-right: 2rem;
}

.btn-header:hover {
  background-color: #F0F0F0;
}

.card-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.card-icon {
  margin-right: 10px;
}

.text-uppercase {
  text-transform: uppercase;
  font-weight: bold;
}

/* Estilos para tabla de Materiales Registrados */
.tabla-contenedor {
  border-radius: 8px;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
  transition: filter 0.3s ease;
}

.tabla-contenedor.blur {
  filter: blur(5px);
}

.tabla-registrados-wrapper {
  overflow-x: auto;
  max-width: 100%;
}

.tabla-registrados {
  font-size: 0.9rem;
  width: 100%;
  table-layout: fixed;
}

.tabla-registrados th,
.tabla-registrados td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 767px) {
  .tabla-registrados th,
  .tabla-registrados td {
    padding: 8px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .tabla-registrados {
    font-size: 0.8rem;
  }
}

@media (max-width: 767px) {
  .tabla-registrados {
    font-size: 0.7rem;
  }
}

/* Estilos para la barra de búsqueda y paginación */
.busqueda-paginacion {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.busqueda-container {
  display: flex;
  align-items: center;
  margin-left: 2rem;
}

.busqueda-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

.tabla-footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 0.6rem;
}

.paginacion {
  display: flex;
  align-items: center;
}

.paginacion label {
  margin-right: 10px;
}

.paginacion select {
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

.paginacion span {
  margin: 0 5px;
}

.paginacion button {
  padding: 6px 10px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Estilos para los botones de acción */
.btn-accion {
  padding: 1px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 18px;
  transform: scale(0.7);
}

.btn-editar {
  color: #4E73DF;
}

.btn-guardar {
  color: #1CC88A;
}

.btn-eliminar {
  color: #E74A3B;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

/* Estilos para la ventana modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-contenido {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  max-width: 1000px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  top: -300px;
  margin-left: 3rem;
}

.modal h2 {
  margin-top: 0;
}

.modal .btn-registrar-container {
  margin-top: 20px;
}

.modal-botones {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.btn-cancelar,
.btn-eliminar {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-cancelar {
  background-color: #ccc;
  color: #000;
  margin-right: 10px;
}

.btn-eliminar {
  color: #E74A3B;
}

/* Estilos para el formulario de registro */
.registro-form {
  display: flex;
  flex-direction: column;
}

.registro-row {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
}

.registro-col {
  flex: 1 1 calc(50% - 20px);
  margin: 10px;
}

.registro-col label {
  display: block;
  margin-bottom: 5px;
}

.registro-col input {
  width: 100%;
  box-sizing: border-box;
}

.btn-registrar-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.btn-registrar {
  padding: 10px 20px;
  background-color: #4E73DF;
  color: white;
  border: none;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-registrar:hover {
  background-color: #3756A6;
}
</style>