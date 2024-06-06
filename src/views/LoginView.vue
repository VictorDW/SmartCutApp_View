<template>
  <div class="background-container">
    <div class="container">
      <div class="login-box">
        <div class="left-side">
          <div class="logo-container">
            <div class="logo-background">
               <!-- Filas de imágenes de logo -->
                <div class="logo-images">
                  <img :src="SmartcutlogoURL" alt="SmarCut" />
              </div>
              <div class="logo-text-container">
                <!-- Texto del logo -->
                <span class="logo-text">SMARTCUT</span>
              </div>
            </div>
          </div>
        </div>
        <div class="right-side">
          <div class="form-container">
            <!-- Título del formulario de inicio de sesión -->
            <h2 class="mb-6 title">Iniciar Sesión</h2>
            <div class="input-group">
              <div class="input mb-4">
                <!-- Campo de entrada para el correo electrónico -->
                <input
                  class="form-control input-lg"
                  type="text"
                  v-model="email"
                  placeholder="Usuario"
                  style="background-color: #dfdee5"
                  required
                />
                <!-- Mensaje de error para el campo de correo electrónico -->
                <small v-if="showEmailError"class="text-danger error-message">
                  <i class="fa-solid fa-triangle-exclamation"></i> 
                  {{ this.errorMesageUsername }}
                </small>
              </div>
              <div class="input">
                <!-- Campo de entrada para la contraseña -->
                <input
                  class="form-control input-lg"
                  type="password"
                  v-model="password"
                  placeholder="Contraseña"
                  style="background-color: #dfdee5"
                  required
                />
                <!-- Mensaje de error para el campo de contraseña -->
                <small v-if="showPasswordError" class="text-danger error-message">
                  <i   class="fa-solid fa-triangle-exclamation"></i>
                  {{ this.errorMesagePassword }}
                </small>
              </div>
            </div>
            <div class="alternative-option mt-1">
              <!-- Enlace para restablecer la contraseña -->
              <span @click="moveToResetPassword" class="small-link">
                ¿Olvidaste la contraseña?
              </span>
            </div>
            <!-- Botón de inicio de sesión -->
            <button type="submit" class="mt-4 btn-pers btn-small" id="login_button" @click="login">
              Ingresar
            </button>
            <!-- Alerta de error (oculta por defecto) -->
            <div v-if="showAlert" class="alert">
              <span  class="alert__message" role="alert">
                <i class="fa-solid fa-circle-xmark"></i>
                {{ errorMessage }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  data() {
    return {
      email: '', // Correo electrónico del usuario
      password: '', // Contraseña del usuario
      errorMessage: '',
      errorMesageUsername: '',
      errorMesagePassword: '',
      showAlert: false, // Indicador para mostrar la alerta de error
      showEmailError: false, // Indicador para mostrar el mensaje de error del correo electrónico
      showPasswordError: false, // Indicador para mostrar el mensaje de error de la contraseña
      SmartcutlogoURL: '/src/assets/SmartcutLogo.png', // Ruta de la imagen del logo
    };
  },
  methods: {
    login() {

      this.clearMessageError();
      this.showEmailError = !this.email;
      this.showPasswordError = !this.password;

      if (!this.email || !this.password) {
        this.basicValidation();
      } else {
         // Lógica para enviar los datos de inicio de sesión al backend
        this.authentication();
      }
    },

    basicValidation() {
    
      if (!this.email) {
          this.errorMesageUsername = "Ingrese su nombre de usuario";
      }
      if (!this.password) {
          this.errorMesagePassword = "Ingrese su contraseña";
      }

      this.errorMessage = 'Por favor, complete todos los campos.';
      this.showAlert = true;
    },

    clearMessageError() {
      this.showEmailError = false;
      this.showPasswordError = false;
    },
    moveToRegister() {
      // Redirigir al usuario a la página de registro
      this.$router.push('/register');
    },
    async authentication() {

      const confi = {
        headers: {
          "Content-Type": "application/json",
        }
      }

      const payload = {
          "username": this.email, 
          "password": this.password
      }

      try {

        const response = await axios.post('http://localhost:8080/auth/login', payload, confi);

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('fullName', `${response.data.firstName} ${response.data.lastName}`);

        // Redirigir al usuario a la página del tablero después de un inicio de sesión exitoso
        this.$router.push('/dashboard');

      } catch (error) {
          
        if (error.response.status === 400) {
          this.getErrorInputs(error.response.data);
          this.showAlert = false;
        } else {
          this.errorMessage = error.response.data.message;
          this.showAlert = true;
        }
        
      }

     /* const payload = {
          "username": this.email, 
          "password": this.password
      }

      await axios.post('http://localhost:8080/auth/login', payload)
      .then(response => {
        this.$router.push('/dashboard')
      })
      .catch(error => {
   
        if (error.response.status === 400) {
          this.getErrorInputs(error.response.data);
          this.showAlert = false;
        } else {
          this.errorMessage = error.response.data.message;
          this.showAlert = true;
        } 

      });*/

    },
    getErrorInputs(erros) {
      erros.map(errorObject =>  {
        errorObject.fieldName === "password" ? 
          (this.showPasswordError = true, this.errorMesagePassword = errorObject.message) : 
          (this.showEmailError = true, this.errorMesageUsername = errorObject.message) 
      });
    }
  },
  setup() {
    const router = useRouter();
    const moveToResetPassword = () => {
      // Redirigir al usuario a la página de restablecimiento de contraseña
      router.push({ name: 'ResetPasswordView' });
    };
    return {
      moveToResetPassword,
    };
  },
};
</script>

<style scoped>

.background-container {
  display: flex;
  height: 100vh;
  background-color: #ffffff;
  align-items: center;
  margin-left: 8rem;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.login-box {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55vw;
  height: 69vh;
  margin-left: 10rem;
}

.left-side {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background-color: #1d1b31;
  padding: 20px;
}

.right-side {
  padding: 20px;
  width: 50%;
}

.logo-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.logo-background {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #1d1b31;
  padding: 20px;
  height: 100%;
}

.logo-images {
  display: flex;
  flex-direction: column;
}

.logo-row {
  display: flex;
}

.logo-img {
  width: 150px;
  height: 150px;
  object-fit:contain;
}

.logo-text-container {
  margin-left: 10px;
  display: flex;
  align-items: center;
}

.logo-text {
  color: white;
  font-size: 34px;
}

.form-container {
  width: 100%;
}

#login_button {
  background-color: #1d1b31;
  color: #ffffff;
  border: none;
  padding: 0.7rem 1.4rem;
  font-size: 1.05rem;
  border-radius: 10px;
  border: 1px solid transparent;
  transition: all 0.4s ease;
}

#login_button:hover {
  background-color: white;
  color: #1d1b31;
  border: 1px solid #1d1b31;
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
}

.alternative-option {
  margin-bottom: 1rem;
}

h2.mb-6 {
  margin-bottom: 4rem;
}

.title {
  font-size: 2.2rem;
  margin-top: 2rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.input-lg {
  font-size: 1.4rem;
  padding: 0.7rem 1.4rem;
}

.title {
  text-align: center;
}

.input {
  display: flex;
  flex-direction: column;
}

.form-control {
  border-radius: 12px;
}

.error-message {
  color: red;
}

.error-message {
  margin-top: 0.5rem;
  font-size: 1rem;
}

.alert { 
  margin-top: 20px;
  padding: 16px;
  color: white;
  background-color: rgb(255, 0, 0, 0.8);
  border-radius: 5px;
  box-shadow: 4px 4px 5px 1px rgba(128, 128, 128, 0.8);
}

.alert__message {
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75em;
}

.fa-circle-xmark {
  line-height: normal;
  font-size: 1.5rem;
}

@media (max-width: 1024px) {
  .login-box {
    width: 80vw;
    height: 60vh;
  }

  .input-lg {
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
  }

  .title {
    font-size: 1.8rem;
    margin-top: 1.5rem;
  }

  .logo-img {
    width: 40px;
    height: 40px;
  }

  .logo-text {
    font-size: 20px;
  }
}


@media (max-width: 767px) {
  .background-container {
    margin-left: 0;
    padding: 1rem;
  }

  .login-box {
    width: 100%;
    height: auto;
    flex-direction: column;
    margin-left: 0;
  }

  .left-side {
    width: 100%;
    height: auto;
    padding: 2rem;
  }

  .right-side {
    width: 100%;
    padding: 2rem;
  }

  .input-lg {
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  }

  .title {
    font-size: 1.4rem;
    margin-top: 1rem;
  }

  .logo-img {
    width: 30px;
    height: 30px;
  }

  .logo-text {
    font-size: 16px;
  }

  .logo-container {
    order: -1;
    margin-bottom: 2rem;
  }
}
</style>