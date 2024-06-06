<template>
  <div class="custom-container">
    <!-- Formulario de registro de usuario -->
    <form @submit.prevent="register" class="custom-form">
      <h2 class="form-title">Registrar nuevo usuario</h2>
      <div class="form-row">
        <div class="form-column">
          <div class="form-group">
            <!-- Campo de entrada para el nombre -->
            <input
              class="form-control"
              type="text"
              name="name"
              v-model="name"
              placeholder="Nombre(s)"
              required
            />
            <!-- Mensaje de validación para el campo de nombre -->
            <small v-if="!validateField(name) && name !== ''" class="text-danger">Este campo es requerido</small>
          </div>
          <div class="form-group">
            <!-- Campo de entrada para los apellidos -->
            <input
              class="form-control"
              type="text"
              name="lastname"
              v-model="lastname"
              placeholder="Apellidos"
              required
            />
            <!-- Mensaje de validación para el campo de apellidos -->
            <small v-if="!validateField(lastname) && lastname !== ''" class="text-danger">Este campo es requerido</small>
          </div>
        </div>
        <div class="form-column">
          <div class="form-group">
            <!-- Campo de entrada para el número de identificación -->
            <input
              class="form-control"
              type="text"
              name="identification"
              v-model="identification"
              placeholder="Numero de Identificación"
              required
            />
            <!-- Mensaje de validación para el campo de número de identificación -->
            <small v-if="!validateField(identification) && identification !== ''" class="text-danger">Este campo es requerido</small>
          </div>
          <div class="form-group">
            <!-- Campo de entrada para el número de celular -->
            <input
              class="form-control"
              type="text"
              name="cellphone"
              v-model="cellphone"
              placeholder="Celular"
              required
            />
            <!-- Mensaje de validación para el campo de número de celular -->
            <small v-if="!validateField(cellphone) && cellphone !== ''" class="text-danger">Este campo es requerido</small>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-column">
          <div class="form-group">
            <!-- Campo de entrada para el nombre de usuario -->
            <input
              class="form-control"
              type="text"
              name="username"
              v-model="username"
              placeholder="Nombre usuario"
              required
            />
            <!-- Mensaje de validación para el campo de nombre de usuario -->
            <small v-if="!validateField(username) && username !== ''" class="text-danger">Este campo es requerido</small>
          </div>
        </div>
        <div class="form-column">
          <div class="form-group">
            <!-- Campo de entrada para el correo electrónico -->
            <input
              class="form-control"
              type="text"
              name="email"
              v-model="email"
              placeholder="Correo"
              required
            />
            <!-- Mensaje de validación para el campo de correo electrónico -->
            <small v-if="!validateField(email) && email !== ''" class="text-danger">Este campo es requerido</small>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-column">
          <div class="form-group">
            <!-- Campo de entrada para la contraseña -->
            <input
              class="form-control"
              type="password"
              name="password"
              v-model="password"
              placeholder="Contraseña"
              required
            />
            <!-- Mensaje de validación para el campo de contraseña -->
            <small v-if="!validateField(password) && password !== ''" class="text-danger">Este campo es requerido</small>
          </div>
        </div>
        <div class="form-column">
          <div class="form-group">
            <!-- Campo de entrada para confirmar la contraseña -->
            <input
              class="form-control"
              type="password"
              name="confirmPassword"
              v-model="confirmPassword"
              placeholder="Verificar Contraseña"
              required
            />
            <!-- Mensajes de validación para el campo de confirmación de contraseña -->
            <small
              v-if="confirmPassword && password !== confirmPassword"
              class="text-danger"
              >Las contraseñas no coinciden</small
            >
            <small v-else-if="!validateField(confirmPassword) && confirmPassword !== ''" class="text-danger"
              >Este campo es requerido</small
            >
          </div>
        </div>
      </div>
      <div class="button-container">
        <!-- Botón de registro -->
        <button type="submit" id="register_button" class="btn">
          Registrar
        </button>
      </div>
      <!-- Alerta de error (oculta por defecto) -->
      <div
        class="alert alert-warning alert-dismissible fade show mt-5 d-none"
        role="alert"
        id="alert_2"
      >
        {{ errorMessage }}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </form>
  </div>
</template>
<script>
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      name: '', // Nombre del usuario
      lastname: '', // Apellidos del usuario
      identification: '', // Número de identificación del usuario
      cellphone: '', // Número de celular del usuario
      username: '', // Nombre de usuario
      email: '', // Correo electrónico del usuario
      password: '', // Contraseña del usuario
      confirmPassword: '', // Confirmación de contraseña del usuario
      errorMessage: '', // Mensaje de error
    };
  },
  methods: {
    register() {
      // Lógica de registro de usuario
      console.log('Registrando usuario...');
      // Aquí puedes realizar validaciones adicionales y llamar a una función de registro
    },
    validateField(field) {
      return field.trim() !== '';
    },
  },
  setup() {
    const router = useRouter();

    return {};
  },
};
</script>

<style scoped>
.custom-container {
  width: 100%;
  max-width: 1117px;
  margin: 4rem auto;
  padding: 1rem;
}

.form-title {
  font-size: 24px;
  font-weight: bold;
  margin: 2rem 0;
  text-align: center;
}

.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-left: 6rem;
  margin-right: 6rem;
  flex-wrap: wrap;
}

.form-column {
  width: 100%;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .form-column {
    width: 48%;
  }
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-control {
  background-color: #f2f2f2;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  width: 100%;
  font-size: 0.9rem;
}

@media (max-width: 767px) {
  .form-control {
    font-size: 0.rem;
  }
}

.form-text {
  font-size: 0.8rem;
  color: #6c757d;
}

.btn {
  background-color: #1d1b31;
  color: #ffffff;
  border: none;
  width: 100%;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

@media (min-width: 768px) {
  .btn {
    width: 35%;
  }
}

.btn:hover {
  background-color: #00ff00;
}

.button-container {
  text-align: center;
  margin-top: 1rem;
}

.text-danger {
  color: #dc3545;
}

.text-muted {
  color: #6c757d;
}

</style>