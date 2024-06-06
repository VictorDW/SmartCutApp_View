<template>
	<div class="container">
	  <div class="contenido-principal">
		<!-- Contenedor de la tabla de proveedores -->
		<div class="tabla-contenedor" :style="{ ...tableStyles, borderLeft: '5px solid #36B9CC' }" :class="{ 'blur': mostrarModalNuevoProveedor }">
		  <h2>Proveedores Registrados</h2>
		  <!-- Sección de búsqueda y botón para agregar nuevo proveedor -->
		  <div class="busqueda-paginacion">
			<div class="busqueda-container">
			  <input type="text" v-model="busqueda" placeholder="Buscar..." class="busqueda-input">
			</div>
			<button class="btn-header" @click="abrirModalNuevoProveedor" :style="{ ...cardStyles, ...cardPrimaryShadowStyles, borderLeft: '5px solid #4E73DF' }">
			  <div class="card-content">
				<span class="material-icons card-icon" style="color: #4E73DF; background-color: #f0f2f5; border-radius: 50%; padding: 8px;">add</span>
				<div class="text-uppercase" style="font-weight: bold; color: black;">Nuevo proveedor</div>
			  </div>
			</button>
		  </div>
		  <!-- Tabla de proveedores registrados -->
		  <div class="tabla-registrados-wrapper">
			<table class="tabla-registrados">
			  <thead>
				<tr>
				  <th>Nombre</th>
				  <th>Apellido</th>
				  <th>Cédula</th>
				  <th>Email</th>
				  <th>Teléfono</th>
				  <th>Dirección</th>
				  <th>Descripción</th>
				  <th>Acciones</th>
				</tr>
			  </thead>
			  <tbody>
				<!-- Filas de la tabla de proveedores -->
				<tr v-for="(proveedor, index) in proveedoresFiltrados" :key="index">
				  <!-- Mostrar los detalles del proveedor si no se está editando -->
				  <template v-if="proveedorEditado !== proveedor">
					<td>{{ proveedor.nombre }}</td>
					<td>{{ proveedor.apellido }}</td>
					<td>{{ proveedor.cedula }}</td>
					<td>{{ proveedor.email }}</td>
					<td>{{ proveedor.telefono }}</td>
					<td>{{ proveedor.direccion }}</td>
					<td>{{ proveedor.descripcion }}</td>
					<td>
					  <!-- Botones de acción para editar y eliminar proveedor -->
					  <button class="btn-accion btn-editar" @click="editarProveedor(proveedor)">
						<span class="material-icons">edit</span>
					  </button>
					  <button class="btn-accion btn-eliminar" @click="confirmarEliminacion(index)">
						<span class="material-icons">delete</span>
					  </button>
					</td>
				  </template>
				  <!-- Mostrar los campos de edición del proveedor si se está editando -->
				  <template v-else>
					<td><input type="text" v-model="proveedorEditado.nombre"></td>
					<td><input type="text" v-model="proveedorEditado.apellido"></td>
					<td><input type="text" v-model="proveedorEditado.cedula"></td>
					<td><input type="email" v-model="proveedorEditado.email"></td>
					<td><input type="text" v-model="proveedorEditado.telefono"></td>
					<td><input type="text" v-model="proveedorEditado.direccion"></td>
					<td><input type="text" v-model="proveedorEditado.descripcion"></td>
					<td>
					  <!-- Botón para guardar los cambios del proveedor editado -->
					  <button class="btn-accion btn-guardar" @click="guardarProveedor(proveedor)">
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
		<!-- Modal para crear un nuevo proveedor -->
		<modal v-if="mostrarModalNuevoProveedor" @close="cerrarModalNuevoProveedor">
		  <div class="modal-contenido" :style="{ ...tableStyles, borderLeft: '5px solid #36B9CC', width: '120%' }">
			<h2>Crear Proveedor</h2>
			<form @submit.prevent="agregarProveedor" class="registro-form">
			  <div class="registro-row">
				<div class="registro-col">
				  <label for="nombre">Nombre:</label>
				  <input type="text" id="nombre" v-model="nuevoProveedor.nombre" required>
				</div>
				<div class="registro-col">
				  <label for="apellido">Apellido:</label>
				  <input type="text" id="apellido" v-model="nuevoProveedor.apellido" required>
				</div>
			  </div>
			  <div class="registro-row">
				<div class="registro-col">
				  <label for="cedula">Cédula:</label>
				  <input type="text" id="cedula" v-model="nuevoProveedor.cedula" required>
				</div>
				<div class="registro-col">
				  <label for="email">Email:</label>
				  <input type="email" id="email" v-model="nuevoProveedor.email" required>
				</div>
			  </div>
			  <div class="registro-row">
				<div class="registro-col">
				  <label for="telefono">Teléfono:</label>
				  <input type="text" id="telefono" v-model="nuevoProveedor.telefono" required>
				</div>
				<div class="registro-col">
				  <label for="direccion">Dirección:</label>
				  <input type="text" id="direccion" v-model="nuevoProveedor.direccion" required>
				</div>
			  </div>
			  <div class="registro-row">
				<div class="registro-col">
				  <label for="descripcion">Descripción:</label>
				  <input type="text" id="descripcion" v-model="nuevoProveedor.descripcion" required>
				</div>
			  </div>
			  <div class="btn-registrar-container">
				<button type="submit" class="btn-registrar">Crear</button>
			  </div>
			</form>
		  </div>
		</modal>
		<!-- Modal de confirmación para eliminar un proveedor -->
		<modal v-if="mostrarModalConfirmacion" @close="cerrarModalConfirmacion">
		  <div class="modal-contenido">
			<h2>Confirmar eliminación</h2>
			<p>¿Seguro que desea eliminar este proveedor?</p>
			<div class="modal-botones">
			  <button class="btn-cancelar" @click="cerrarModalConfirmacion">Cancelar</button>
			  <button class="btn-eliminar" @click="eliminarProveedor">Eliminar</button>
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
		proveedores: [], // Lista de proveedores
		nuevoProveedor: {
		  // Datos del nuevo proveedor
		  nombre: '',
		  apellido: '',
		  cedula: '',
		  email: '',
		  telefono: '',
		  direccion: '',
		  descripcion: '',
		},
		proveedorEditado: null, // Proveedor que se está editando actualmente
		mostrarModalNuevoProveedor: false, // Indicador para mostrar/ocultar el modal de nuevo proveedor
		mostrarModalConfirmacion: false, // Indicador para mostrar/ocultar el modal de confirmación de eliminación
		proveedorAEliminar: null, // Índice del proveedor a eliminar
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
	  proveedoresFiltrados() {
		// Filtra los proveedores según el término de búsqueda y los límites de paginación
		const inicioEntrada = (this.paginaActual - 1) * this.entradasPorPagina;
		const finEntrada = inicioEntrada + this.entradasPorPagina;
		return this.proveedores.filter(proveedor =>
		  Object.values(proveedor).some(valor =>
			String(valor).toLowerCase().includes(this.busqueda.toLowerCase())
		  )
		).slice(inicioEntrada, finEntrada);
	  },
	  totalPaginas() {
		// Calcula el número total de páginas según la cantidad de proveedores y las entradas por página
		return Math.ceil(this.proveedores.length / this.entradasPorPagina);
	  },
	},
	methods: {
	  agregarProveedor() {
		// Agrega un nuevo proveedor a la lista de proveedores
		this.proveedores.push({ ...this.nuevoProveedor });
		this.nuevoProveedor = {
		  nombre: '',
		  apellido: '',
		  cedula: '',
		  email: '',
		  telefono: '',
		  direccion: '',
		  descripcion: '',
		};
		this.cerrarModalNuevoProveedor();
	  },
	  editarProveedor(proveedor) {
		// Establece el proveedor que se está editando actualmente
		this.proveedorEditado = proveedor;
	  },
	  guardarProveedor(proveedor) {
		// Guarda los cambios del proveedor editado
		Object.assign(proveedor, this.proveedorEditado);
		this.proveedorEditado = null;
	  },
	  confirmarEliminacion(index) {
		// Muestra el modal de confirmación de eliminación y guarda el índice del proveedor a eliminar
		this.proveedorAEliminar = index;
		this.mostrarModalConfirmacion = true;
	  },
	  eliminarProveedor() {
		// Elimina el proveedor seleccionado de la lista de proveedores
		this.proveedores.splice(this.proveedorAEliminar, 1);
		this.proveedorAEliminar = null;
		this.mostrarModalConfirmacion = false;
	  },
	  abrirModalNuevoProveedor() {
		// Abre el modal para crear un nuevo proveedor
		this.mostrarModalNuevoProveedor = true;
	  },
	  cerrarModalNuevoProveedor() {
		// Cierra el modal de creación de nuevo proveedor y reinicia los datos del nuevo proveedor
		this.mostrarModalNuevoProveedor = false;
		this.nuevoProveedor = {
		  nombre: '',
		  apellido: '',
		  cedula: '',
		  email: '',
		  telefono: '',
		  direccion: '',
		  descripcion: '',
		};
	  },
	  cerrarModalConfirmacion() {
		// Cierra el modal de confirmación de eliminación y reinicia el índice del proveedor a eliminar
		this.mostrarModalConfirmacion = false;
		this.proveedorAEliminar = null;
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
  
  /* Estilos para el botón "Nuevo proveedor" */
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
  
  /* Estilos para tabla de Proveedores Registrados */
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
	border: 1px
	solid #ccc;
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