<template>
	<div class="surface-section">
	  <div class="profile-header">
		<h2 class="section-title">Detalles del perfil</h2>
		<div class="profile-info">
		  <div class="profile-image">
			<!-- Icono de perfil -->
			<span class="material-icons profile-icon">person</span>
			<!-- Input para cargar la foto de perfil -->
			<input type="file" ref="fileInput" @change="handleFileUpload" style="display: none;">
			<!-- Botón para cargar la foto de perfil (solo visible en modo de edición) -->
			<button class="upload-button" @click="triggerFileUpload" v-if="editing">Cargar foto</button>
		  </div>
		  <div class="profile-details">
			<!-- Mostrar los detalles del perfil en modo de visualización -->
			<template v-if="!editing">
			  <div class="profile-name">{{ user.firstName }} {{ user.lastName }}</div>
			  <div class="profile-position">{{ user.position }}</div>
			</template>
			<!-- Mostrar los campos de edición del perfil en modo de edición -->
			<template v-else>
			  <div class="profile-field">
				<label class="field-label">Nombre</label>
				<input type="text" v-model="user.firstName" placeholder="Nombre">
			  </div>
			  <div class="profile-field">
				<label class="field-label">Apellido</label>
				<input type="text" v-model="user.lastName" placeholder="Apellido">
			  </div>
			  <div class="profile-field">
				<label class="field-label">Cargo</label>
				<input type="text" v-model="user.position" placeholder="Cargo">
			  </div>
			</template>
		  </div>
		  <!-- Botón para alternar entre los modos de visualización y edición -->
		  <button class="edit-button" @click="toggleEditing">{{ editing ? 'Guardar' : 'Editar perfil' }}</button>
		</div>
	  </div>
	  <div class="profile-fields">
	<div class="field-row">
	  <div class="profile-field">
		<h3 class="field-label">Correos electrónicos</h3>
		<div class="field-value">
		  <!-- Lista de correos electrónicos -->
		  <div class="email-item" v-for="email in user.emails" :key="email.id">
			<!-- Mostrar los detalles del correo electrónico en modo de visualización -->
			<template v-if="!email.editing">
			  <span class="email-address">{{ email.address }}</span>
			  <span class="email-primary" v-if="email.primary">(Principal)</span>
			  <span class="material-icons edit-icon" @click="editEmail(email)">edit</span>
			  <span class="material-icons delete-icon" @click="removeEmail(email)">delete</span>
			</template>
			<!-- Mostrar el campo de edición del correo electrónico en modo de edición -->
			<template v-else>
			  <input type="email" v-model="email.address" placeholder="Correo electrónico">
			  <span class="material-icons save-icon" @click="saveEmail(email)">save</span>
			  <span class="material-icons cancel-icon" @click="cancelEditEmail(email)">cancel</span>
			</template>
		  </div>
		  <!-- Botón para agregar un nuevo correo electrónico -->
		  <button class="add-button" @click="addEmail">+ Agregar correo electrónico</button>
		</div>
	  </div>

	  <div class="profile-field">
		<h3 class="field-label">Número de teléfono</h3>
		<div class="field-value">
		  <!-- Mostrar el número de teléfono en modo de visualización -->
		  <div class="phone-item" v-if="!user.phoneNumber.editing">
			<span class="phone-number">{{ user.phoneNumber.number }}</span>
			<span class="material-icons edit-icon" @click="editPhoneNumber">edit</span>
			<span class="material-icons delete-icon" @click="removePhoneNumber">delete</span>
		  </div>
		  <!-- Mostrar el campo de edición del número de teléfono en modo de edición -->
		  <template v-else>
			<input type="tel" v-model="user.phoneNumber.number" placeholder="Número de teléfono">
			<span class="material-icons save-icon" @click="savePhoneNumber">save</span>
			<span class="material-icons cancel-icon" @click="cancelEditPhoneNumber">cancel</span>
		  </template>
		  <!-- Botón para agregar un nuevo número de teléfono -->
		  <button class="add-button" @click="addPhoneNumber">+ Agregar número de teléfono</button>
		</div>
	  </div>
	</div>
  </div>
</div>
</template>
<script>
	export default {
	  data() {
		return {
		  editing: false, // Indica si el perfil está en modo de edición
		  user: {
			firstName: 'Jaylon',
			lastName: 'Dias',
			position: 'Desarrollador',
			emails: [
			  { id: 1, address: 'example@clerk.dev', primary: true, editing: false },
			  { id: 2, address: 'example@personal.com', primary: false, editing: false },
			  { id: 3, address: 'email@work.io', primary: false, editing: false },
			],
			phoneNumber: {
			  number: '+1 (555) 123-4567',
			  editing: false,
			},
		  },
		};
	  },
	  methods: {
		toggleEditing() {
		  // Alternar entre los modos de visualización y edición del perfil
		  this.editing = !this.editing;
		},
		triggerFileUpload() {
		  // Activar el input de carga de archivo al hacer clic en el botón de carga de foto
		  this.$refs.fileInput.click();
		},
		handleFileUpload(event) {
		  // Manejar la carga de la foto de perfil
		  const file = event.target.files[0];
		  // Lógica para cargar la foto de perfil
		  console.log('Foto de perfil cargada:', file);
		},
		addEmail() {
		  // Agregar un nuevo correo electrónico a la lista
		  this.user.emails.push({
			id: Date.now(),
			address: '',
			primary: false,
			editing: true,
		  });
		},
		editEmail(email) {
		  // Habilitar el modo de edición de un correo electrónico
		  email.editing = true;
		},
		saveEmail(email) {
		  // Guardar los cambios realizados en un correo electrónico
		  email.editing = false;
		},
		cancelEditEmail(email) {
		  // Cancelar la edición de un correo electrónico
		  if (email.address === '') {
			const index = this.user.emails.findIndex(e => e.id === email.id);
			this.user.emails.splice(index, 1);
		  } else {
			email.editing = false;
		  }
		},
		removeEmail(email) {
		  // Eliminar un correo electrónico de la lista
		  const index = this.user.emails.findIndex(e => e.id === email.id);
		  this.user.emails.splice(index, 1);
		},
		addPhoneNumber() {
		  // Habilitar la edición para agregar un nuevo número de teléfono
		  this.user.phoneNumber.editing = true;
		},
		editPhoneNumber() {
		  // Habilitar el modo de edición del número de teléfono
		  this.user.phoneNumber.editing = true;
		},
		savePhoneNumber() {
		  // Guardar los cambios realizados en el número de teléfono
		  this.user.phoneNumber.editing = false;
		},
		cancelEditPhoneNumber() {
		  // Cancelar la edición del número de teléfono y restaurar el valor original
		  this.user.phoneNumber.editing = false;
		  this.user.phoneNumber.number = '+1 (555) 123-4567';
		},
		removePhoneNumber() {
		  // Eliminar el número de teléfono
		  this.user.phoneNumber.number = '';
		},
	  },
	};
</script>
<style scoped>
.surface-section {
  background-color: #FFFFFF;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-image {
  position: relative;
  margin-bottom: 20px;
}

.profile-icon {
  font-size: 72px;
  color: #666666;
  border: 2px solid #666666;
  border-radius: 50%;
  padding: 10px;
}

.upload-button {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #007bff;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
}

.profile-details {
  text-align: center;
}

.profile-name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}

.profile-position {
  font-size: 16px;
  color: #666666;
}

.edit-button {
  background-color: transparent;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
}

.profile-fields {
  margin-top: 50px;
}

.field-row {
  display: flex;
  flex-direction: column;
  margin-left: 0;
}

.profile-field {
  width: 100%;
  margin-bottom: 20px;
}

.field-label {
  font-weight: bold;
  margin-bottom: 10px;
}

.field-value {
  display: block;
  text-align: left;
}

input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-button {
  background-color: transparent;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
  margin-top: 5px;
}

.email-item,
.phone-item {
  margin-bottom: 5px;
}

.email-address,
.phone-number {
  margin-right: 5px;
}

.email-primary {
  color: #666666;
  margin-right: 5px;
}

.edit-icon,
.delete-icon,
.save-icon,
.cancel-icon {
  cursor: pointer;
  margin-left: 5px;
  font-size: 14px;
}

.edit-icon {
  color: #007bff;
}

.delete-icon {
  color: #dc3545;
}

.save-icon {
  color: #28a745;
}

.cancel-icon {
  color: #6c757d;
}

@media (min-width: 768px) {
  .field-row {
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20px;
  }

  .profile-field {
    width: 48%;
    margin-bottom: 0;
  }

  input {
    width: 100%;
  }
}
</style>