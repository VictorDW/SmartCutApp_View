<template>
  <div class="background-container">
    <div class="container">
      <div class="reset-password-box">
        <div class="form-container">
          <div class="text-center">
            <!-- Título del formulario de restablecimiento de contraseña -->
            <h2 class="mb-4 title">Restablecer Contraseña</h2>
          </div>
          <!-- Formulario de restablecimiento de contraseña -->
          <form @submit.prevent="resetPassword">
            <div class="input-group">
              <div class="input mb-4">
                <!-- Campo de entrada para el correo electrónico -->
                <input
                  class="form-control input-lg"
                  type="email"
                  v-model="email"
                  placeholder="Correo electrónico"
                  style="background-color: #dfdee5"
                  required
                />
              </div>
              <div class="input mb-4">
                <!-- Campo de entrada para la identificación -->
                <input
                  class="form-control input-lg"
                  type="text"
                  v-model="identification"
                  placeholder="Identificación"
                  style="background-color: #dfdee5"
                  required
                />
              </div>
              <div class="input mb-4">
                <!-- Campo de entrada para el nombre de usuario -->
                <input
                  class="form-control input-lg"
                  type="text"
                  v-model="username"
                  placeholder="Nombre de usuario"
                  style="background-color: #dfdee5"
                  required
                />
              </div>
              <div class="input mb-4">
                <!-- Campo de entrada para la nueva contraseña -->
                <input
                  class="form-control input-lg"
                  type="password"
                  v-model="newPassword"
                  placeholder="Nueva contraseña"
                  style="background-color: #dfdee5"
                  required
                />
              </div>
              <div class="input mb-4">
                <!-- Campo de entrada para verificar la contraseña -->
                <input
                  class="form-control input-lg"
                  type="password"
                  v-model="confirmPassword"
                  placeholder="Verificar contraseña"
                  style="background-color: #dfdee5"
                  required
                />
              </div>
            </div>
            <div class="text-center button-container">
              <!-- Botón para restablecer la contraseña -->
              <button type="submit" class="mt-4 btn-pers btn-small" id="reset_password_button">
                Restablecer
              </button>
              <div class="alternative-option mt-3">
                <!-- Enlace para volver a la página de inicio de sesión -->
                <router-link :to="{ name: 'LoginView' }" class="small-link">
                  Volver a iniciar sesión
                </router-link>
              </div>
            </div>
          </form>
          <!-- Alerta de error (oculta por defecto) -->
          <div
            class="alert alert-warning alert-dismissible fade show mt-5 d-none"
            role="alert"
            id="alert_reset_password"
          >
            {{ errorMessage }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
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
      email: '', // Correo electrónico del usuario
      identification: '', // Identificación del usuario
      username: '', // Nombre de usuario
      newPassword: '', // Nueva contraseña
      confirmPassword: '', // Confirmación de la nueva contraseña
      errorMessage: '', // Mensaje de error
    };
  },
  methods: {
    resetPassword() {
      // Validar que todos los campos estén completos
      if (!this.email || !this.identification || !this.username || !this.newPassword || !this.confirmPassword) {
        this.errorMessage = 'Por favor, complete todos los campos.';
        const alertResetPassword = document.querySelector('#alert_reset_password');
        alertResetPassword.classList.remove('d-none');
      }
      // Validar que las contraseñas coincidan
      else if (this.newPassword !== this.confirmPassword) {
        this.errorMessage = 'Las contraseñas no coinciden.';
        const alertResetPassword = document.querySelector('#alert_reset_password');
        alertResetPassword.classList.remove('d-none');
      }
      else {
        // Lógica para restablecer la contraseña
        console.log('Restableciendo contraseña...');
        
        // Redirigir al usuario a la página de inicio de sesión después de restablecer la contraseña
        this.$router.push({ name: 'LoginView' }); 
      }
    },
  },
};
</script>

<style scoped>
.background-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #f8f9fc;
  margin-left: 40%;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  
}

.reset-password-box {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  
}

.form-container {
  width: 100%;
  margin-left: 10%;
}

#reset_password_button {
  background-color: #1d1b31;
  color: #ffffff;
  border: none;
  padding: 0.7rem 1.4rem;
  font-size: 1.05rem;
  width: 100%;
  margin-left: -48%;
}

@media (min-width: 768px) {
  #reset_password_button {
    width: auto;
  }
}

#reset_password_button:hover {
  background-color: #00ff00;
}

.btn-small {
  padding: 0.5rem 1.2rem;
  font-size: 1.15rem;
}

.small-link {
  font-size: 12px;
  color: #858796;
  text-decoration: underline;
  cursor: pointer;
  margin-left: -24%;
}

.alternative-option {
  margin-top: 1rem;
}

.title {
  font-size: 2.2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: -4rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input.mb-4:last-child {
  margin-bottom: 2rem !important;
}

.input-lg {
  font-size: 1.1rem;
  padding: 0.75rem 1rem;
}

@media (max-width: 767px) {
  .background-container {
    margin-left: 5%;
  }

  .input-lg {
    font-size: 0.9rem;
    padding: 0.5rem 0.6rem;
  }

  .title {
    font-size: 1.6rem;
  }

  #reset_password_button {
    font-size: 0.9rem;
  }

  .btn-small {
    font-size: 0.9rem;
  }
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>