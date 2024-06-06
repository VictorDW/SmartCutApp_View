<template>
	<div class="container">
	  <div class="contenido-principal">
		<div class="tabla-contenedor" :style="{ ...tableStyles, borderLeft: '5px solid #36B9CC' }">
		  <!-- Título de la sección de cortes -->
		  <h2>Cortes</h2>
		  <!-- Formulario para agregar un nuevo corte -->
		  <form @submit.prevent="agregarCorte" class="form-cortes">
			<div class="form-row">
			  <div class="form-group">
				<!-- Selector de proyecto -->
				<label for="proyecto">Proyecto:</label>
				<select id="proyecto" v-model="proyectoSeleccionado" @change="cargarCortesProyecto(proyectoSeleccionado)" required>
				  <option v-for="proyecto in proyectos" :key="proyecto.id" :value="proyecto">
					{{ proyecto.nombre }}
				  </option>
				</select>
			  </div>
			</div>
			<div class="form-row">
			  <div class="form-group">
				<!-- Campo de entrada para el corte en el eje X -->
				<label for="ejeX">Corte Eje X:</label>
				<input type="number" id="ejeX" v-model="nuevoCorte.ejeX" required>
			  </div>
			  <div class="form-group">
				<!-- Campo de entrada para el corte en el eje Y -->
				<label for="ejeY">Corte Eje Y:</label>
				<input type="number" id="ejeY" v-model="nuevoCorte.ejeY" required>
			  </div>
			  <div class="form-group">
				<!-- Botón para agregar un nuevo corte -->
				<button type="submit" class="btn-registrar">Agregar Corte</button>
			  </div>
			</div>
		  </form>
		  <!-- Tabla de cortes -->
		  <table class="tabla-cortes">
			<thead>
			  <tr>
				<th>Eje X</th>
				<th>Eje Y</th>
				<th>Acciones</th>
			  </tr>
			</thead>
			<tbody>
			  <!-- Fila para cada corte -->
			  <tr v-for="(corte, index) in cortesPaginados" :key="index">
				<!-- Mostrar los detalles del corte si no se está editando -->
				<template v-if="corteEditado !== corte">
				  <td>{{ corte.ejeX }}</td>
				  <td>{{ corte.ejeY }}</td>
				  <td>
					<!-- Botón para editar el corte -->
					<button class="btn-editar" @click="editarCorte(corte)">
					  <span class="material-icons">edit</span>
					</button>
					<!-- Botón para eliminar el corte -->
					<button class="btn-eliminar" @click="eliminarCorte(index)">
					  <span class="material-icons">delete</span>
					</button>
				  </td>
				</template>
				<!-- Mostrar los campos de edición del corte si se está editando -->
				<template v-else>
				  <td><input type="number" v-model="corteEditado.ejeX"></td>
				  <td><input type="number" v-model="corteEditado.ejeY"></td>
				  <td>
					<!-- Botón para guardar los cambios del corte editado -->
					<button class="btn-guardar" @click="guardarCorte(corte)">
					  <span class="material-icons">save</span>
					</button>
				  </td>
				</template>
			  </tr>
			</tbody>
		  </table>
		  <!-- Paginación de la tabla de cortes -->
		  <div class="paginacion">
			<label for="entradas">Mostrar:</label>
			<select id="entradas" v-model="cortesPerPage">
			  <option value="5">5</option>
			  <option value="10">10</option>
			  <option value="20">20</option>
			</select>
			<span>Página:</span>
			<!-- Botón para ir a la página anterior -->
			<button @click="paginaAnterior" :disabled="paginaActual === 1">&lt;</button>
			<span>{{ paginaActual }} de {{ totalPaginas }}</span>
			<!-- Botón para ir a la página siguiente -->
			<button @click="paginaSiguiente" :disabled="paginaActual === totalPaginas">&gt;</button>
		  </div>
		</div>
	  </div>
	</div>
  </template>
 <script>
 export default {
   name: 'cortes',
   data() {
	 return {
	   proyectos: [], // Lista de proyectos
	   proyectoSeleccionado: null, // Proyecto seleccionado actualmente
	   proyectoActual: null, // Proyecto actual
	   nuevoCorte: {
		 ejeX: null, // Valor del eje X para el nuevo corte
		 ejeY: null, // Valor del eje Y para el nuevo corte
	   },
	   cortesProyecto: [], // Lista de cortes del proyecto seleccionado
	   corteEditado: null, // Corte que se está editando actualmente
	   tableStyles: {
		 borderRadius: '8px',
		 boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.1)',
	   },
	   paginaActual: 1, // Página actual de la paginación
	   cortesPerPage: 5, // Número de cortes por página
	 };
   },
   computed: {
	 totalPaginas() {
	   // Calcula el número total de páginas basado en la cantidad de cortes y los cortes por página
	   return Math.ceil(this.cortesProyecto.length / this.cortesPerPage);
	 },
	 cortesPaginados() {
	   // Obtiene los cortes paginados según la página actual y los cortes por página
	   const inicio = (this.paginaActual - 1) * this.cortesPerPage;
	   const fin = inicio + this.cortesPerPage;
	   return this.cortesProyecto.slice(inicio, fin);
	 },
   },
   methods: {
	 agregarCorte() {
	   // Agrega un nuevo corte al proyecto seleccionado
	   if (this.proyectoSeleccionado) {
		 const nuevoCorte = {
		   ejeX: this.nuevoCorte.ejeX,
		   ejeY: this.nuevoCorte.ejeY,
		 };
		 this.cortesProyecto.push(nuevoCorte);
		 this.nuevoCorte.ejeX = null;
		 this.nuevoCorte.ejeY = null;
	   }
	 },
	 editarCorte(corte) {
	   // Establece el corte que se está editando actualmente
	   this.corteEditado = { ...corte };
	 },
	 guardarCorte(corte) {
	   // Guarda los cambios del corte editado
	   Object.assign(corte, this.corteEditado);
	   this.corteEditado = null;
	 },
	 eliminarCorte(index) {
	   // Elimina un corte del proyecto seleccionado
	   this.cortesProyecto.splice(index, 1);
	 },
	 cargarCortesProyecto(proyecto) {
	   // Carga los cortes del proyecto seleccionado
	   this.proyectoActual = proyecto;
	   this.cortesProyecto = proyecto.cortes || [];
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
  padding: 20px;
}

.contenido-principal {
  padding: 40px;
  
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  margin-left: 2rem;
}

.form-cortes {
  margin-bottom: 20px;
  width: 100%;
  font-size: 1.2rem;
  margin-left: 1rem;
}

.form-row {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.form-group {
  flex: 1;
  margin-right: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1.1rem;
}

.btn-registrar {
  padding: 12px 24px;
  background-color: #4e73df;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1.1rem;
}

th,
td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

.btn-editar,
.btn-eliminar,
.btn-guardar {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 1,1rem;
}

.btn-editar {
  background-color: #4e73df;
  color: white;
}

.btn-eliminar {
  background-color: #e74a3b;
  color: white;
}

.btn-guardar {
  background-color: #1cc88a;
  color: white;
}

.paginacion {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-size: 14px;
}

.paginacion label {
  margin-right: 10px;
}

.paginacion select {
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  width: auto;
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
  margin: 0 5px;
}

.paginacion button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.material-icons {
  font-size: 18px;
  vertical-align: middle;
}
</style>