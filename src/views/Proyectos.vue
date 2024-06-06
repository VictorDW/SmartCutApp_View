<template>
	<div class="container">
	  <div class="contenido-principal">
		<!-- Contenedor de la tabla de proyectos -->
		<div class="tabla-contenedor" :style="{ ...tableStyles, borderLeft: '5px solid #36B9CC' }" :class="{ 'blur': mostrarModalNuevoProyecto }">
		  <h2>Proyectos</h2>
		  <!-- Sección de búsqueda y botón para agregar nuevo proyecto -->
		  <div class="busqueda-paginacion">
			<div class="busqueda-container">
			  <input type="text" v-model="busqueda" placeholder="Buscar..." class="busqueda-input">
			</div>
			<button class="btn-header" @click="abrirModalNuevoProyecto" :style="{ ...cardStyles, ...cardPrimaryShadowStyles, borderLeft: '5px solid #4E73DF' }">
			  <div class="card-content">
				<span class="material-icons card-icon" style="color: #4E73DF; background-color: #f0f2f5; border-radius: 50%; padding: 8px;">add</span>
				<div class="text-uppercase" style="font-weight: bold; color: black;">Nuevo proyecto</div>
			  </div>
			</button>
		  </div>
		  <!-- Tabla de proyectos -->
		  <div class="tabla-proyectos-wrapper">
			<table class="tabla-proyectos">
			  <thead>
				<tr>
				  <th>Nombre</th>
				  <th>Fecha de Inicio</th>
				  <th>Fecha de Finalización</th>
				  <th>Encargados</th>
				  <th>Acciones</th>
				</tr>
			  </thead>
			  <tbody>
				<!-- Filas de la tabla de proyectos -->
				<tr v-for="(proyecto, index) in proyectosFiltrados" :key="index">
				  <td>
					<!-- Mostrar el nombre del proyecto si no se está editando -->
					<template v-if="proyectoEditado !== proyecto">
					  {{ proyecto.nombre }}
					</template>
					<!-- Mostrar el campo de edición del nombre del proyecto si se está editando -->
					<template v-else>
					  <input type="text" v-model="proyectoEditadoTemporal.nombre">
					</template>
				  </td>
				  <td>
					<!-- Mostrar la fecha de inicio del proyecto si no se está editando -->
					<template v-if="proyectoEditado !== proyecto">
					  {{ proyecto.fechaInicio }}
					</template>
					<!-- Mostrar el campo de edición de la fecha de inicio del proyecto si se está editando -->
					<template v-else>
					  <input type="date" v-model="proyectoEditadoTemporal.fechaInicio">
					</template>
				  </td>
				  <td>
					<!-- Mostrar la fecha de finalización del proyecto si no se está editando -->
					<template v-if="proyectoEditado !== proyecto">
					  {{ proyecto.fechaFinalizacion }}
					</template>
					<!-- Mostrar el campo de edición de la fecha de finalización del proyecto si se está editando -->
					<template v-else>
					  <input type="date" v-model="proyectoEditadoTemporal.fechaFinalizacion">
					</template>
				  </td>
				  <td>
					<!-- Mostrar la lista de encargados del proyecto si no se está editando -->
					<template v-if="proyectoEditado !== proyecto">
					  <ul>
						<li v-for="(encargado, index) in proyecto.encargados" :key="index">
						  {{ encargado.nombre }}
						</li>
					  </ul>
					</template>
					<!-- Mostrar los campos de edición de los encargados del proyecto si se está editando -->
					<template v-else>
					  <div v-for="(encargado, index) in proyectoEditadoTemporal.encargados" :key="index">
						<input type="text" v-model="proyectoEditadoTemporal.encargados[index].nombre">
					  </div>
					  <!-- Botón para agregar un nuevo encargado al proyecto en edición -->
					  <button type="button" class="btn-agregar-encargado" @click="agregarEncargadoEditado">
						Agregar Encargado
					  </button>
					</template>
				  </td>
				  <td>
					<!-- Botones de acción para editar y eliminar el proyecto si no se está editando -->
					<template v-if="proyectoEditado !== proyecto">
					  <button class="btn-accion btn-editar" @click="editarProyecto(proyecto)">
						<span class="material-icons">edit</span>
					  </button>
					  <button class="btn-accion btn-eliminar" @click="confirmarEliminacion(index)">
						<span class="material-icons">delete</span>
					  </button>
					</template>
					<!-- Botones para guardar y cancelar la edición del proyecto si se está editando -->
					<template v-else>
					  <button class="btn-accion btn-guardar" @click="guardarProyecto(proyecto, index)">
						<span class="material-icons">save</span>
					  </button>
					  <button class="btn-accion btn-cancelar" @click="cancelarEdicion">
						<span class="material-icons">cancel</span>
					  </button>
					</template>
				  </td>
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
		<!-- Modal para agregar un nuevo proyecto -->
		<modal v-if="mostrarModalNuevoProyecto" @close="cerrarModalNuevoProyecto">
		  <div class="modal-contenido" :style="{ ...tableStyles, borderLeft: '5px solid #36B9CC', width: '120%' }">
			<h2>Nuevo Proyecto</h2>
			<form @submit.prevent="agregarProyecto" class="registro-form">
			  <div class="registro-row">
				<div class="registro-col">
				  <label for="nombre">Nombre del proyecto:</label>
				  <input type="text" id="nombre" v-model="nuevoProyecto.nombre" required>
				</div>
			  </div>
			  <div class="registro-row">
				<div class="registro-col">
				  <label for="fechaInicio">Fecha de inicio:</label>
				  <input type="date" id="fechaInicio" v-model="nuevoProyecto.fechaInicio" required>
				</div>
				<div class="registro-col">
				  <label for="fechaFinalizacion">Fecha de finalización:</label>
				  <input type="date" id="fechaFinalizacion" v-model="nuevoProyecto.fechaFinalizacion" required>
				</div>
			  </div>
			  <div class="registro-row">
				<div class="registro-col">
				  <label for="encargado">Encargado:</label>
				  <div v-for="(encargado, index) in nuevoProyecto.encargados" :key="index">
					<input type="text" v-model="encargado.nombre" required>
				  </div>
				</div>
				<div class="registro-col">
				  <!-- Botón para agregar un nuevo encargado al proyecto -->
				  <button type="button" class="btn-agregar-encargado" @click="agregarEncargado">
					Agregar Encargado
				  </button>
				</div>
			  </div>
			  <div class="btn-registrar-container">
				<button type="submit" class="btn-registrar">Crear Proyecto</button>
			  </div>
			</form>
		  </div>
		</modal>
		<!-- Modal de confirmación para eliminar un proyecto -->
		<modal v-if="mostrarModalConfirmacion" @close="cerrarModalConfirmacion">
		  <div class="modal-contenido">
			<h2>Confirmar eliminación</h2>
			<p>¿Seguro que desea eliminar este proyecto?</p>
			<div class="modal-botones">
			  <button class="btn-cancelar" @click="cerrarModalConfirmacion">Cancelar</button>
			  <button class="btn-eliminar" @click="eliminarProyecto">Eliminar</button>
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
		proyectos: [], // Lista de proyectos
		nuevoProyecto: {
		  // Datos del nuevo proyecto
		  nombre: '',
		  fechaInicio: '',
		  fechaFinalizacion: '',
		  encargados: [{ nombre: '' }],
		},
		proyectoEditado: null, // Proyecto que se está editando actualmente
		proyectoEditadoTemporal: null, // Copia temporal del proyecto en edición
		mostrarModalNuevoProyecto: false, // Indicador para mostrar/ocultar el modal de nuevo proyecto
		mostrarModalConfirmacion: false, // Indicador para mostrar/ocultar el modal de confirmación de eliminación
		proyectoAEliminar: null, // Índice del proyecto a eliminar
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
	  proyectosFiltrados() {
		// Filtra los proyectos según el término de búsqueda y los límites de paginación
		const inicioEntrada = (this.paginaActual - 1) * this.entradasPorPagina;
		const finEntrada = inicioEntrada + this.entradasPorPagina;
		return this.proyectos.filter(proyecto =>
		  Object.values(proyecto).some(valor =>
			String(valor).toLowerCase().includes(this.busqueda.toLowerCase())
		  )
		).slice(inicioEntrada, finEntrada);
	  },
	  totalPaginas() {
		// Calcula el número total de páginas según la cantidad de proyectos y las entradas por página
		return Math.ceil(this.proyectos.length / this.entradasPorPagina);
	  },
	},
	methods: {
	  agregarProyecto() {
		// Agrega un nuevo proyecto a la lista de proyectos
		this.proyectos.push({ ...this.nuevoProyecto });
		this.nuevoProyecto = {
		  nombre: '',
		  fechaInicio: '',
		  fechaFinalizacion: '',
		  encargados: [{ nombre: '' }],
		};
		this.cerrarModalNuevoProyecto();
	  },
	  agregarEncargado() {
		// Agrega un nuevo encargado al proyecto en creación
		this.nuevoProyecto.encargados.push({ nombre: '' });
	  },
	  agregarEncargadoEditado() {
		// Agrega un nuevo encargado al proyecto en edición
		this.proyectoEditadoTemporal.encargados.push({ nombre: '' });
	  },
	  editarProyecto(proyecto) {
		// Establece el proyecto que se está editando actualmente y crea una copia temporal
		this.proyectoEditado = proyecto;
		this.proyectoEditadoTemporal = JSON.parse(JSON.stringify(proyecto));
	  },
	  guardarProyecto(proyecto, index) {
		// Guarda los cambios del proyecto editado
		Object.assign(proyecto, this.proyectoEditadoTemporal);
		this.proyectoEditado = null;
		this.proyectoEditadoTemporal = null;
	  },
	  cancelarEdicion() {
		// Cancela la edición del proyecto y reinicia los datos temporales
		this.proyectoEditado = null;
		this.proyectoEditadoTemporal = null;
	  },
	  confirmarEliminacion(index) {
		// Muestra el modal de confirmación de eliminación y guarda el índice del proyecto a eliminar
		this.proyectoAEliminar = index;
		this.mostrarModalConfirmacion = true;
	  },
	  eliminarProyecto() {
		// Elimina el proyecto seleccionado de la lista de proyectos
		this.proyectos.splice(this.proyectoAEliminar, 1);
		this.proyectoAEliminar = null;
		this.mostrarModalConfirmacion = false;
	  },
	  abrirModalNuevoProyecto() {
		// Abre el modal para crear un nuevo proyecto
		this.mostrarModalNuevoProyecto = true;
	  },
	  cerrarModalNuevoProyecto() {
		// Cierra el modal de creación de nuevo proyecto y reinicia los datos del nuevo proyecto
		this.mostrarModalNuevoProyecto = false;
		this.nuevoProyecto = {
		  nombre: '',
		  fechaInicio: '',
		  fechaFinalizacion: '',
		  encargados: [{ nombre: '' }],
		};
	  },
	  cerrarModalConfirmacion() {
		// Cierra el modal de confirmación de eliminación y reinicia el índice del proyecto a eliminar
		this.mostrarModalConfirmacion = false;
		this.proyectoAEliminar = null;
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
	margin-top: 1rem;
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
  
  /* Estilos para el botón "Nuevo proyecto" */
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
  
  /* Estilos para tabla de Proyectos */
  .tabla-contenedor {
	border-radius: 8px;
	box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
	transition: filter 0.3s ease;
  }
  
  .tabla-contenedor.blur {
	filter: blur(5px);
  }
  
  .tabla-proyectos-wrapper {
	overflow-x: auto;
	max-width: 100%;
  }
  
  .tabla-proyectos {
	font-size: 0.9rem;
	width: 100%;
	table-layout: fixed;
  }
  
  .tabla-proyectos th,
  .tabla-proyectos td {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
  }
  
  .tabla-proyectos td ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
  }
  
  @media (max-width: 767px) {
	.tabla-proyectos th,
	.tabla-proyectos td {
	  padding: 8px;
	}
  }
  
  @media (min-width: 768px) and (max-width: 991px) {
	.tabla-proyectos {
	  font-size: 0.8rem;
	}
  }
  
  @media (max-width: 767px) {
	.tabla-proyectos {
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
.btn-agregar-encargado {
padding: 10px 20px;
background-color: #1CC88A;
color: white;
border: none;
border-radius: 4px;
text-align: center;
cursor: pointer;
transition: background-color 0.3s ease;
margin-top: 3rem
}
.btn-agregar-encargado:hover {
background-color: #17A673;
}
</style>