<template>
  <main id="manual-page" class="background-container">
    <div class="container">
      <div class="content">
        <section id="introduction">
          <h2>Introducción</h2>
          <p>Bienvenido al Manual de Usuario del software SmartCut. Este manual tiene como objetivo guiarte a través de las diferentes funcionalidades y componentes del sistema, brindándote una comprensión detallada de cómo utilizar eficientemente todas las herramientas disponibles.</p>
          <p>SmartCut es un software diseñado para optimizar y gestionar de manera eficiente los procesos relacionados con proyectos de carpintería, corte de materiales y administración de inventarios. Desde el registro de proveedores y materiales hasta la creación y seguimiento de proyectos, incluyendo la asignación de cortes, SmartCut te brinda un control completo sobre tus operaciones.</p>
        </section>
        <section id="objectives">
          <h2>Objetivos</h2>
          <p>El principal objetivo de este manual es proporcionarte una guía clara y concisa que te permita:</p>
          <ul>
            <li>Comprender la estructura y los componentes principales del software SmartCut.</li>
            <li>Familiarizarte con el flujo de trabajo y los procesos involucrados en cada sección del sistema.</li>
            <li>Aprender a utilizar de manera efectiva las funcionalidades de inicio de sesión, gestión de perfiles, registro de usuarios, y administración de proveedores, materiales, proyectos y cortes.</li>
            <li>Conocer las mejores prácticas y recomendaciones para aprovechar al máximo las capacidades del software.</li>
            <li>Resolver cualquier duda o problema que pueda surgir durante el uso del sistema.</li>
          </ul>
        </section>
        <section id="login">
          <h2>Inicio de Sesión</h2>
          <p>El componente de inicio de sesión es un elemento crucial del software, ya que actúa como la puerta de acceso a todas las funcionalidades y herramientas disponibles. Es importante comprender correctamente este proceso para garantizar una experiencia de usuario fluida y segura.</p>
          <h3>Pantalla de inicio de sesión</h3>
          <p>Al abrir el software, se presentará la pantalla de inicio de sesión. Esta pantalla se divide en dos secciones principales: el lado izquierdo muestra el logotipo y el nombre del software, mientras que el lado derecho contiene los campos para ingresar las credenciales de acceso.</p>
          <h3>Campos de ingreso de credenciales</h3>
          <p>En la sección derecha, encontrará dos campos de entrada obligatorios. El primer campo es para ingresar su nombre de usuario, que es un identificador único asignado a su cuenta. El segundo campo es para ingresar su contraseña, que es una combinación secreta de caracteres que sólo usted conoce. Es fundamental que ingrese estas credenciales correctamente, ya que el sistema verificará su autenticidad antes de permitir el acceso.</p>
          <h3>Recuperación de contraseña</h3>
          <p>Si por alguna razón ha olvidado su contraseña, no se preocupe. Debajo de los campos de ingreso de credenciales, encontrará un enlace que dice "¿Olvidaste la contraseña?". Al hacer clic en este enlace, se iniciará un proceso de recuperación de contraseña que le permitirá restablecer su contraseña de manera segura.</p>
          <p>El componente de Restablecer Contraseña es una funcionalidad esencial en el software SmarCut que permite a los usuarios restablecer su contraseña en caso de que la hayan olvidado o necesiten cambiarla por razones de seguridad. A continuación, se detallan los diferentes elementos y el flujo de trabajo de este componente:</p>
          <ul>
            <li>Título "Restablecer Contraseña": Esta sección muestra el título principal del componente, indicando claramente su propósito.</li>
            <li>Campos de entrada:
              <ul>
                <li>Correo electrónico: Campo de entrada donde se debe ingresar la dirección de correo electrónico asociada a la cuenta del usuario.</li>
                <li>Identificación: Campo donde se debe ingresar el número de identificación o documento del usuario.</li>
                <li>Nombre de usuario: Campo para ingresar el nombre de usuario de la cuenta.</li>
                <li>Nueva contraseña: Campo donde se debe ingresar la nueva contraseña que el usuario desea establecer.</li>
                <li>Verificar contraseña: Campo adicional donde se debe reingresar la misma contraseña para verificar que no haya errores.</li>
              </ul>
            </li>
            <li>Validaciones de campos:
              <ul>
                <li>Todos los campos son obligatorios, y si alguno se deja vacío, se mostrará un mensaje de error indicando "Por favor, complete todos los campos".</li>
                <li>Si las contraseñas ingresadas en los campos "Nueva contraseña" y "Verificar contraseña" no coinciden, se mostrará un mensaje de error indicando "Las contraseñas no coinciden".</li>
              </ul>
            </li>
            <li>Botón "Restablecer": Una vez que se hayan completado todos los campos obligatorios correctamente, el usuario puede hacer clic en el botón "Restablecer" para enviar la solicitud de restablecimiento de contraseña.</li>
            <li>Enlace "Volver a iniciar sesión": Si el usuario decide cancelar el proceso de restablecimiento de contraseña, puede hacer clic en el enlace "Volver a iniciar sesión" para ser redirigido a la pantalla de inicio de sesión.</li>
            <li>Mensaje de error: Si ocurre algún error durante el proceso de restablecimiento de contraseña, se mostrará un mensaje de error en un cuadro de alerta en la parte inferior del formulario. Este mensaje puede contener información sobre el error específico que ocurrió y ayudar al usuario a resolverlo.</li>
          </ul>
          <p>Es importante que el usuario ingrese información completa y precisa en todos los campos obligatorios para restablecer su contraseña de manera exitosa. Si se encuentran errores durante el proceso, se deben seguir las indicaciones de los mensajes de error y corregir los campos correspondientes antes de intentar enviar el formulario nuevamente.</p>
          <p>Después de un restablecimiento de contraseña exitoso, el usuario podrá iniciar sesión en el sistema utilizando su nueva contraseña y las demás credenciales (correo electrónico, nombre de usuario e identificación).</p>
          <h3>Botón de inicio de sesión</h3>
          <p>Una vez que haya ingresado correctamente su nombre de usuario y contraseña, deberá hacer clic en el botón "Ingresar". Este botón enviará sus credenciales al sistema para su verificación.</p>
          <h3>Acceso concedido</h3>
          <p>Si las credenciales ingresadas son válidas, el sistema le otorgará acceso al software y será redirigido al panel de control o "Dashboard". Este panel de control es el centro de operaciones desde donde podrá acceder a todas las funcionalidades y herramientas disponibles en el software.</p>
          <h3>Errores de inicio de sesión</h3>
          <p>Si las credenciales ingresadas son incorrectas o si falta información por completar, el sistema mostrará una alerta o mensaje de error. Este mensaje le indicará claramente cuál es el problema, ya sea un nombre de usuario o contraseña incorrectos, o campos faltantes por completar. En este caso, deberá corregir los errores e intentar iniciar sesión nuevamente.</p>
          <p>Es importante tener en cuenta que las credenciales de acceso son información confidencial y sensible. Por lo tanto, se recomienda no compartirlas con nadie y mantenerlas en un lugar seguro. Además, es una buena práctica cambiar periódicamente su contraseña para mantener un nivel óptimo de seguridad.</p>
          <p>Si tiene alguna dificultad o duda adicional durante el proceso de inicio de sesión, no dude en consultar la sección de soporte técnico o ponerse en contacto con el equipo de asistencia.</p>
        </section>
        <section id="sidebar">
          <h2>Barra Lateral</h2>
          <p>La barra lateral es un elemento crucial de la interfaz de usuario del software SmarCut. Actúa como un menú de navegación que permite acceder de manera rápida y conveniente a las diferentes secciones y funcionalidades del sistema. A continuación, se detalla su funcionamiento y características:</p>
          <ul>
            <li>Ubicación y apariencia: La barra lateral se encuentra ubicada en el lateral izquierdo de la pantalla. Está diseñada con un estilo minimalista y moderno, con colores oscuros que contrastan con los iconos y textos claros, brindando una experiencia visual agradable.</li>
            <li>Logotipo y título: En la parte superior de la barra lateral, se encuentra el logotipo y el título del software "SmarCut". Esto ayuda a identificar claramente la aplicación y a recordar su propósito principal.</li>
            <li>Menú de navegación: El menú de navegación es el componente principal de la barra lateral. Está compuesto por diferentes secciones y enlaces que permiten acceder a las distintas áreas del software. Estas secciones son:
              <ul>
                <li>Dashboard: Este enlace te lleva al panel de control principal, donde puedes obtener una vista general del sistema y acceder a las funcionalidades más importantes.</li>
                <li>Inventario: Esta sección contiene dos enlaces: "Proveedores" y "Materiales". Aquí puedes gestionar y administrar la información relacionada con los proveedores y los materiales disponibles en el inventario.</li>
                <li>Proyectos: Esta sección contiene dos enlaces: "Proyectos" y "Cortes". Aquí puedes crear, editar y gestionar los proyectos del sistema, así como realizar cortes y asignaciones de materiales a los proyectos.</li>
              </ul>
            </li>
            <li>Navegación por enlaces: Cada uno de los enlaces del menú de navegación está representado por un ícono y un texto descriptivo. Al hacer clic en cualquiera de estos enlaces, serás redirigido a la sección correspondiente del software.</li>
            <li>Indicador de sección activa: El enlace correspondiente a la sección en la que te encuentres actualmente estará resaltado con un color diferente y un borde lateral, lo que te ayudará a identificar fácilmente la ubicación actual dentro del sistema.</li>
            <li>Botón de expandir/contraer: En la parte inferior de la barra lateral, encontrarás un botón circular que te permite expandir o contraer el menú. Cuando la barra lateral está contraída, solo se muestran los iconos, mientras que al expandirla, se muestran también los textos descriptivos de cada sección.</li>
            <li>Adaptabilidad a dispositivos móviles: La barra lateral es responsive y se adapta automáticamente a diferentes tamaños de pantalla. En dispositivos móviles, se muestra una versión más compacta de la barra lateral, con iconos más pequeños y sin textos descriptivos, para optimizar el espacio en pantalla.</li>
          </ul>
          <p>La barra lateral es una herramienta crucial para navegar de manera eficiente por las diferentes secciones del software SmarCut. Familiarizarte con su estructura y funcionalidades te permitirá acceder rápidamente a las áreas que necesites y mejorar tu productividad en el uso del sistema.</p>
        </section>
        <section id="dashboard">
          <h2>Dashboard</h2>
          <p>El Dashboard, también conocido como Panel de Control, es la sección principal del software SmarCut. Actúa como un centro de operaciones desde donde se puede acceder a las funcionalidades y herramientas más importantes del sistema. A continuación, se detallan sus componentes y funcionalidades:</p>
          <h3>Barra de navegación</h3>
          <p>En la parte superior de la pantalla, se encuentra la barra de navegación. Aquí podrás ver el título "Dashboard" y el nombre del usuario actualmente conectado.</p>
          <p>La barra de navegación es un componente esencial ubicado en la parte superior de la interfaz del software SmarCut. Proporciona acceso rápido a varias funcionalidades y opciones importantes. A continuación, se detallan los diferentes elementos de la barra de navegación:</p>
          <ul>
            <li>Título "Dashboard": Muestra el nombre de la sección principal del software, que es el Panel de Control o Dashboard.</li>
            <li>Nombre de Usuario: Aquí se muestra el nombre del usuario actualmente conectado al sistema.</li>
            <li>Icono de Notificaciones
              <ul>
                <li>Este icono en forma de campana permite acceder a las notificaciones del sistema.</li>
                <li>Al hacer clic en él, se despliega un menú desplegable que muestra las notificaciones más recientes.</li>
                <li>Las notificaciones pueden incluir avisos, actualizaciones o eventos importantes relacionados con el sistema.</li>
              </ul>
            </li>
            <li>Icono de Perfil de Usuario:
              <ul>
                <li>Representado por un icono de persona, esta opción permite acceder a la configuración y detalles del perfil del usuario.</li>
                <li>Al hacer clic en el icono, se abre un menú desplegable con las siguientes opciones:</li>
              </ul>
            </li>
          </ul>
          <h4>Perfil</h4>
          <p>El componente de Perfil es una sección crucial del software SmarCut que permite al usuario ver y editar su información personal, correos electrónicos, números de teléfono y otros detalles relevantes. A continuación, se detallan los diferentes elementos y funcionalidades de este componente:</p>
          <h5>Detalles del Perfil:</h5>
          <ul>
            <li>Imagen de Perfil
              <ul>
                <li>En esta sección, se muestra una imagen de perfil predeterminada (un ícono de persona). Si estás en modo de edición, puedes hacer clic en el botón "Cargar foto" para seleccionar y cargar una imagen personalizada como tu foto de perfil.</li>
              </ul>
            </li>
            <li>Nombre y Apellido
              <ul>
                <li>Aquí se muestran tu nombre y apellido. En modo de edición, puedes modificar estos campos ingresando tus nuevos datos.</li>
              </ul>
            </li>
            <li>Cargo
              <ul>
                <li>Este campo muestra tu cargo o posición dentro de la organización. También puedes editarlo en modo de edición.</li>
              </ul>
            </li>
            <li>Botón "Editar perfil" / "Guardar": Este botón te permite alternar entre el modo de visualización y el modo de edición de tus datos personales. Cuando estás en modo de visualización, el botón dice "Editar perfil"; al hacer clic, se habilita el modo de edición. En modo de edición, el botón cambia a "Guardar", lo que te permite confirmar los cambios realizados.</li>
          </ul>
          <h5>Correos Electrónicos</h5>
		  <ul>
  <li>Lista de Correos Electrónicos: Aquí se muestra una lista de tus correos electrónicos registrados. Cada correo electrónico se presenta con su dirección y una indicación si es el correo principal o no.</li>
  <li>Editar Correo Electrónico: Al hacer clic en el icono de edición (lápiz) junto a un correo electrónico, se habilitará un campo de entrada para que puedas modificar la dirección de correo.</li>
  <li>Guardar Correo Electrónico: Después de editar la dirección de correo electrónico, haz clic en el icono de guardar (disco) para confirmar los cambios.</li>
  <li>Cancelar Edición: Si deseas cancelar la edición de un correo electrónico, haz clic en el icono de cancelar (X).</li>
  <li>Eliminar Correo Electrónico: Puedes eliminar un correo electrónico haciendo clic en el icono de eliminación (papelera).</li>
  <li>Agregar Correo Electrónico: Si deseas agregar un nuevo correo electrónico, haz clic en el botón "Agregar correo electrónico". Se agregará un nuevo campo de entrada para que ingreses la dirección de correo electrónico.</li>
</ul>
<h5>Número de Teléfono</h5>
<ul>
  <li>Mostrar Número de Teléfono: En esta sección, se muestra tu número de teléfono registrado. Si aún no has ingresado un número, esta sección estará vacía.</li>
  <li>Editar Número de Teléfono: Para editar tu número de teléfono, haz clic en el icono de edición (lápiz). Se habilitará un campo de entrada para que puedas ingresar un nuevo número.</li>
  <li>Guardar Número de Teléfono: Después de editar el número de teléfono, haz clic en el icono de guardar (disco) para confirmar los cambios.</li>
  <li>Cancelar Edición: Si deseas cancelar la edición del número de teléfono, haz clic en el icono de cancelar (X).</li>
  <li>Eliminar Número de Teléfono: Puedes eliminar tu número de teléfono haciendo clic en el icono de eliminación (papelera).</li>
  <li>Agregar Número de Teléfono: Si aún no has ingresado un número de teléfono, haz clic en el botón "Agregar número de teléfono" para habilitar un campo de entrada y poder ingresar tu número.</li>
</ul>
<p>Recuerda que es importante mantener tu información de perfil actualizada, ya que esta información se utiliza en varios lugares del sistema, como en la gestión de proyectos y la comunicación con otros usuarios.</p>
<h4>Registro de Usuario</h4>
<p>El componente de Registro de Usuario es una funcionalidad crucial en el software SmarCut que permite crear nuevos usuarios en el sistema. Esta opción suele estar reservada para usuarios con permisos de administrador.</p>
<ul>
  <li>Título "Registrar nuevo usuario": Esta sección muestra el título principal del componente, indicando claramente su propósito.</li>
  <li>Campos de entrada:
    <ul>
      <li>Nombre(s): Campo de entrada donde se debe ingresar el nombre o nombres del nuevo usuario.</li>
      <li>Apellidos: Campo de entrada para ingresar los apellidos del nuevo usuario.</li>
      <li>Número de Identificación: Campo donde se debe ingresar el número de identificación o documento del nuevo usuario.</li>
      <li>Celular: Campo para ingresar el número de teléfono celular del nuevo usuario.</li>
      <li>Nombre de usuario: Campo donde se debe ingresar un nombre de usuario único para el nuevo usuario.</li>
      <li>Correo: Campo de entrada para ingresar la dirección de correo electrónico del nuevo usuario.</li>
      <li>Contraseña: Campo para ingresar una contraseña segura para el nuevo usuario.</li>
      <li>Verificar Contraseña: Campo adicional donde se debe reingresar la misma contraseña para verificar que no haya errores.</li>
    </ul>
  </li>
  <li>Validaciones de campos:
    <ul>
      <li>Cada campo de entrada tiene una validación básica que verifica si se ha ingresado un valor o no.</li>
      <li>Si un campo obligatorio está vacío, se mostrará un mensaje de error en rojo debajo del campo, indicando que "Este campo es requerido".</li>
      <li>Para las contraseñas, se valida que ambos campos ("Contraseña" y "Verificar Contraseña") contengan el mismo valor. Si no coinciden, se muestra un mensaje de error indicando "Las contraseñas no coinciden".</li>
    </ul>
  </li>
  <li>Botón "Registrar": Una vez que se hayan completado todos los campos obligatorios correctamente, el usuario puede hacer clic en el botón "Registrar" para enviar el formulario y crear un nuevo usuario en el sistema.</li>
  <li>Mensaje de error: Si ocurre algún error durante el proceso de registro, se mostrará un mensaje de error en un cuadro de alerta en la parte inferior del formulario. Este mensaje puede contener información sobre el error específico que ocurrió y ayudar al usuario a resolverlo.</li>
</ul>
<p>Es importante que el usuario ingrese información completa y precisa en todos los campos obligatorios para crear un nuevo usuario de manera exitosa. Si se encuentran errores durante el proceso de registro, se deben seguir las indicaciones de los mensajes de error y corregir los campos correspondientes antes de intentar enviar el formulario nuevamente.</p>
<p>Después de un registro exitoso, el nuevo usuario podrá iniciar sesión en el sistema utilizando las credenciales (nombre de usuario y contraseña) proporcionadas durante el proceso de registro.</p>
<h4>Manual de Usuario</h4>
<p>Abre el manual de usuario del software, que contiene instrucciones detalladas sobre cómo utilizar las diferentes funcionalidades y componentes del sistema.</p>
<h4>Cerrar Sesión</h4>
<p>La opción de "Cerrar Sesión" es una funcionalidad crucial en el software SmarCut que permite al usuario salir de manera segura del sistema. Esto es importante por razones de seguridad y privacidad, ya que evita que otras personas puedan acceder a la cuenta del usuario si se deja la sesión abierta.</p>
<p>Para cerrar la sesión, sigue estos pasos:</p>
<ul>
  <li>Ubica el icono de perfil de usuario en la barra de navegación superior. Está representado por un icono de persona.</li>
  <li>Haz clic en el icono de perfil de usuario para desplegar el menú desplegable.</li>
  <li>En el menú desplegable, selecciona la opción "Cerrar Sesión".</li>
  <li>Después de hacer clic en "Cerrar Sesión", el sistema cerrará tu sesión actual de manera segura.</li>
  <li>Serás redirigido automáticamente a la pantalla de inicio de sesión.</li>
</ul>
<p>Es importante tener en cuenta que, una vez que hayas cerrado la sesión, no podrás acceder a ninguna de las funcionalidades del software hasta que inicies sesión nuevamente con tus credenciales válidas.</p>
<p>Se recomienda cerrar la sesión cuando hayas completado tus tareas en el sistema o cuando no vayas a utilizar el software durante un período prolongado. Esto ayuda a proteger tu información personal y los datos del sistema de accesos no autorizados.</p>
<p>Si por alguna razón necesitas volver a acceder al software después de cerrar la sesión, simplemente deberás ingresar tus credenciales (nombre de usuario y contraseña) en la pantalla de inicio de sesión para iniciar una nueva sesión.</p>
        </section>
        <section id="summary-cards">
          <h2>Tarjetas de resumen</h2>
          <p>Justo debajo de la barra de navegación, se encuentran tres tarjetas informativas que brindan un resumen rápido de los datos más importantes del sistema:</p> 
          <ul>
            <li>Proveedores Registrados: Muestra la cantidad total de proveedores registrados en el sistema.</li>
            <li>Materiales en Inventario: Indica la cantidad total de materiales disponibles en el inventario.</li>
            <li>Proyectos Creados: Muestra la cantidad total de proyectos creados en el sistema.</li>
          </ul>
        </section>
        <section id="material-table">
          <h2>Tabla de Materiales más Utilizados</h2>
          <p>Esta tabla muestra una lista de los materiales más utilizados en el sistema. Cada fila de la tabla contiene información detallada sobre un material específico, incluyendo su ID, nombre, cantidad disponible y estado (Disponible o Agotado). La tabla está paginada, lo que significa que puedes navegar entre diferentes páginas para ver más materiales.</p>
        </section>
        <section id="projects-table">  
          <h2>Tabla de Proyectos por Operador</h2>
          <p>Esta tabla muestra una lista de los proyectos asignados a cada operador en el sistema. Cada fila de la tabla contiene el nombre del operador y la cantidad de proyectos asignados a él. Al igual que la tabla de materiales, esta tabla también está paginada para facilitar la navegación.</p>
          <h3>Paginación</h3>
          <p>Tanto la tabla de Materiales más Utilizados como la tabla de Proyectos por Operador cuentan con controles de paginación en la parte inferior. Estos controles te permiten navegar entre diferentes páginas de la tabla, mostrando un subconjunto de los datos en cada página.</p>
          <p>El Dashboard es el punto de partida para acceder a las diferentes secciones y funcionalidades del software SmarCut. Desde aquí, puedes obtener una vista general rápida de la información más relevante del sistema, así como acceder a las diferentes áreas de gestión de proveedores, materiales, proyectos y cortes.</p>
          <p>Es importante familiarizarte con la estructura y componentes del Dashboard, ya que te ayudará a navegar de manera eficiente por el software y a tomar decisiones informadas basadas en los datos resumidos que se presentan en esta sección.</p>
        </section>
        <section id="supplier-management">
          <h2>Gestión de Proveedores</h2>
          <p>El componente de Gestión de Proveedores es una sección crucial del software SmarCut que permite administrar y mantener un registro de los proveedores de materiales. A continuación, se detallan los diferentes elementos y funcionalidades de este componente:</p>
          <ul>
            <li>Título "Proveedores Registrados": Esta sección muestra el título principal del componente, indicando que aquí se muestran los proveedores registrados en el sistema.</li>
            <li>Barra de búsqueda: En la parte superior, hay un campo de entrada que permite buscar proveedores por cualquier información relevante, como nombre, apellido, cédula, correo electrónico, teléfono, dirección o descripción.</li>
            <li>Botón "Nuevo proveedor": Este botón permite abrir un modal para registrar un nuevo proveedor en el sistema.</li>
            <li>Tabla de proveedores:
              <ul>
                <li>Encabezados de columna: La tabla muestra las siguientes columnas con información de cada proveedor: Nombre, Apellido, Cédula, Email, Teléfono, Dirección y Descripción.</li>
                <li>Filas de proveedores: Cada fila de la tabla representa un proveedor registrado, mostrando su información detallada en las diferentes columnas.</li>
              </ul>
            </li>
            <li>Acciones
              <ul>
                <li>Editar: Al hacer clic en el icono de edición (lápiz), se habilitará el modo de edición para esa fila, permitiendo modificar la información del proveedor.</li>
                <li>Guardar: Después de editar la información del proveedor, se debe hacer clic en el icono de guardar (disco) para confirmar los cambios.</li>
                <li>Eliminar: Al hacer clic en el icono de eliminación (papelera), se abrirá un modal de confirmación para eliminar al proveedor seleccionado.</li>
              </ul>
            </li>
            <li>Paginación: En la parte inferior de la tabla, se encuentran los controles de paginación que permiten navegar entre diferentes páginas de la tabla, mostrando un subconjunto de los proveedores en cada página. Puedes seleccionar la cantidad de entradas por página y desplazarte hacia adelante o hacia atrás utilizando los botones de paginación.</li>
            <li>Modal de registro de nuevo proveedor: Al hacer clic en el botón "Nuevo proveedor", se abrirá un modal con un formulario para ingresar la información del nuevo proveedor, como nombre, apellido, cédula, correo electrónico, teléfono, dirección y descripción. Una vez completado el formulario, se debe hacer clic en el botón "Crear" para registrar al nuevo proveedor en el sistema.</li>
            <li>Modal de confirmación de eliminación: Antes de eliminar a un proveedor del sistema, se abrirá un modal de confirmación que te pedirá confirmar si realmente deseas eliminar al proveedor seleccionado.</li>
          </ul>
          <p>Es importante mantener actualizada la información de los proveedores registrados, ya que esta información se utiliza en varias áreas del sistema, como en la gestión de materiales y la creación de proyectos. Además, la funcionalidad de búsqueda te permitirá encontrar rápidamente a los proveedores según tus necesidades.</p>
        </section>
        <section id="material-management">
          <h2>Gestión de Materiales</h2>
          <p>El componente de Gestión de Materiales es una sección crucial del software SmarCut que permite administrar y mantener un registro de los materiales disponibles en el inventario. A continuación, se detallan los diferentes elementos y funcionalidades de este componente:</p>
          <ul>
            <li>Título "Materiales Registrados": Esta sección muestra el título principal del componente, indicando que aquí se muestran los materiales registrados en el sistema.</li>
            <li>Barra de búsqueda: En la parte superior, hay un campo de entrada que permite buscar materiales por cualquier información relevante, como ID, código, nombre, tipo, altura, ancho, precio unitario o cantidad.</li>
            <li>Botón "Nuevo material": Este botón permite abrir un modal para registrar un nuevo material en el sistema.</li>
            <li>Tabla de materiales:
              <ul>
                <li>Encabezados de columna: La tabla muestra las siguientes columnas con información de cada material: ID, Código, Nombre, Tipo, Altura, Ancho, Precio Unitario, Cantidad y Acciones.</li>
                <li>Filas de materiales: Cada fila de la tabla representa un material registrado, mostrando su información detallada en las diferentes columnas.</li>
              </ul>
            </li>
            <li>Acciones
              <ul>
                <li>Editar: Al hacer clic en el icono de edición (lápiz), se habilitará el modo de edición para esa fila, permitiendo modificar la información del material.</li>
                <li>Guardar: Después de editar la información del material, se debe hacer clic en el icono de guardar (disco) para confirmar los cambios.</li>
                <li>Eliminar: Al hacer clic en el icono de eliminación (papelera), se abrirá un modal de confirmación para eliminar el material seleccionado.</li>
              </ul>
            </li>
            <li>Paginación: En la parte inferior de la tabla, se encuentran los controles de paginación que permiten navegar entre diferentes páginas de la tabla, mostrando un subconjunto de los materiales en cada página. Puedes seleccionar la cantidad de entradas por página y desplazarte hacia adelante o hacia atrás utilizando los botones de paginación.</li>
            <li>Modal de registro de nuevo material: Al hacer clic en el botón "Nuevo material", se abrirá un modal con un formulario para ingresar la información del nuevo material, como ID, código, nombre, tipo, altura, ancho, precio unitario y cantidad. Una vez completado el formulario, se debe hacer clic en el botón "Registrar" para agregar el nuevo material al sistema.</li>
            <li>Modal de confirmación de eliminación: Antes de eliminar un material del sistema, se abrirá un modal de confirmación que te pedirá confirmar si realmente deseas eliminar el material seleccionado.</li>
          </ul>
          <p>Es importante mantener actualizada la información de los materiales registrados, ya que esta información se utiliza en varias áreas del sistema, como en la gestión de proyectos y la asignación de materiales. Además, la funcionalidad de búsqueda te permitirá encontrar rápidamente los materiales según tus necesidades.</p>
        </section>
        <section id="project-management">
          <h2>Gestión de Proyectos</h2>
          <p>El componente de Gestión de Proyectos es una sección crucial del software SmarCut que permite administrar y mantener un registro de los proyectos en curso o planificados. A continuación, se detallan los diferentes elementos y funcionalidades de este componente:</p>
          <ul>
            <li>Título "Proyectos": Esta sección muestra el título principal del componente, indicando que aquí se muestran los proyectos registrados en el sistema.</li>
            <li>Barra de búsqueda: En la parte superior, hay un campo de entrada que permite buscar proyectos por cualquier información relevante, como nombre, fechas de inicio y finalización, o nombres de los encargados.</li>
            <li>Botón "Nuevo proyecto": Este botón permite abrir un modal para registrar un nuevo proyecto en el sistema.</li>
            <li>Tabla de proyectos:
              <ul>
                <li>Encabezados de columna: La tabla muestra las siguientes columnas con información de cada proyecto: Nombre, Fecha de Inicio, Fecha de Finalización, Encargados y Acciones.</li>
                <li>Filas de proyectos: Cada fila de la tabla representa un proyecto registrado, mostrando su información detallada en las diferentes columnas.</li>
              </ul>
            </li>
            <li>Acciones
              <ul>
                <li>Editar: Al hacer clic en el icono de edición (lápiz), se habilitará el modo de edición para esa fila, permitiendo modificar la información del proyecto, como el nombre, las fechas y los encargados.</li>
                <li>Guardar: Después de editar la información del proyecto, se debe hacer clic en el icono de guardar (disco) para confirmar los cambios.</li>
                <li>Cancelar: Si se desea cancelar la edición del proyecto, se puede hacer clic en el icono de cancelar (X).</li>
                <li>Eliminar: Al hacer clic en el icono de eliminación (papelera), se abrirá un modal de confirmación para eliminar el proyecto seleccionado.</li>
              </ul>
            </li>
            <li>Paginación: En la parte inferior de la tabla, se encuentran los controles de paginación que permiten navegar entre diferentes páginas de la tabla, mostrando un subconjunto de los proyectos en cada página. Puedes seleccionar la cantidad de entradas por página y desplazarte hacia adelante o hacia atrás utilizando los botones de paginación.</li>
            <li>Modal de registro de nuevo proyecto: Al hacer clic en el botón "Nuevo proyecto", se abrirá un modal con un formulario para ingresar la información del nuevo proyecto, como el nombre, las fechas de inicio y finalización, y los encargados. Una vez completado el formulario, se debe hacer clic en el botón "Crear Proyecto" para agregar el nuevo proyecto al sistema.</li>
            <li>Modal de confirmación de eliminación: Antes de eliminar un proyecto del sistema, se abrirá un modal de confirmación que te pedirá confirmar si realmente deseas eliminar el proyecto seleccionado.</li>
          </ul>
          <p>Es importante mantener actualizada la información de los proyectos registrados, ya que esta información se utiliza en varias áreas del sistema, como en la gestión de materiales y la asignación de recursos. Además, la funcionalidad de búsqueda te permitirá encontrar rápidamente los proyectos según tus necesidades.</p>
        </section>
        <section id="cut-management">
          <h2>Gestión de Cortes</h2>
          <p>El componente de Gestión de Cortes es una sección del software SmarCut que permite administrar y registrar los cortes necesarios para los diferentes proyectos. A continuación, se detallan los diferentes elementos y funcionalidades de este componente:</p>
          <ul>
            <li>Título "Cortes": Esta sección muestra el título principal del componente, indicando que aquí se gestionan los cortes para los proyectos.</li>
            <li>Selección de Proyecto: En la parte superior, hay un menú desplegable donde se debe seleccionar el proyecto para el cual se desea agregar o administrar los cortes. Solo se mostrarán los cortes asociados al proyecto seleccionado.</li>
            <li>Formulario de Agregar Corte:
              <ul>
                <li>Corte Eje X: Campo de entrada numérico donde se debe ingresar la coordenada X del corte.</li>
                <li>Corte Eje Y: Campo de entrada numérico donde se debe ingresar la coordenada Y del corte.</li>
                <li>Botón "Agregar Corte": Una vez que se hayan ingresado las coordenadas X y Y del corte, se debe hacer clic en este botón para agregar el corte al proyecto seleccionado.</li>
              </ul>
            </li>
            <li>Tabla de Cortes:
              <ul>
                <li>Encabezados de Columna: La tabla muestra las siguientes columnas: Eje X, Eje Y y Acciones.</li>
                <li>Filas de Cortes: Cada fila de la tabla representa un corte registrado para el proyecto seleccionado, mostrando sus coordenadas X y Y.</li>
              </ul>
            </li>
            <li>Acciones
              <ul>
                <li>Editar: Al hacer clic en el icono de edición (lápiz), se habilitará el modo de edición para esa fila, permitiendo modificar las coordenadas del corte.</li>
                <li>Guardar: Después de editar las coordenadas del corte, se debe hacer clic en el icono de guardar (disco) para confirmar los cambios.</li>
                <li>Eliminar: Al hacer clic en el icono de eliminación (papelera), se eliminará el corte seleccionado del proyecto.</li>
              </ul>
            </li>
            <li>Paginación: En la parte inferior de la tabla, se encuentran los controles de paginación que permiten navegar entre diferentes páginas de la tabla, mostrando un subconjunto de los cortes en cada página. Puedes seleccionar la cantidad de entradas por página y desplazarte hacia adelante o hacia atrás utilizando los botones de paginación.</li>
          </ul>
          <p>Es importante mantener actualizados los cortes registrados para cada proyecto, ya que esta información se utilizará en el proceso de corte y fabricación de los materiales necesarios para el proyecto. Además, la funcionalidad de edición y eliminación te permitirá ajustar los cortes según sea necesario.</p>
          <p>Recuerda que antes de agregar o editar cortes, debes seleccionar el proyecto correspondiente en el menú desplegable para asegurarte de que los cambios se apliquen al proyecto correcto.</p>
        </section>
    </div>
      <div class="sidebar">
        <h2>Índice</h2>
        <ul>
          <li><a @click.prevent="scrollTo('introduction')">Introducción</a></li>
          <li><a @click.prevent="scrollTo('objectives')">Objetivos</a></li>
          <li><a @click.prevent="scrollTo('login')">Inicio de Sesión</a></li>
          <li><a @click.prevent="scrollTo('sidebar')">Barra Lateral</a></li>
          <li><a @click.prevent="scrollTo('dashboard')">Dashboard</a></li>
          <li><a @click.prevent="scrollTo('summary-cards')">Tarjetas de Resumen</a></li>
          <li><a @click.prevent="scrollTo('material-table')">Tabla de Materiales más Utilizados</a></li>
          <li><a @click.prevent="scrollTo('projects-table')">Tabla de Proyectos por Operador</a></li>
          <li><a @click.prevent="scrollTo('supplier-management')">Gestión de Proveedores</a></li>
          <li><a @click.prevent="scrollTo('material-management')">Gestión de Materiales</a></li>
          <li><a @click.prevent="scrollTo('project-management')">Gestión de Proyectos</a></li>
          <li><a @click.prevent="scrollTo('cut-management')">Gestión de Cortes</a></li>
          <li><a @click.prevent="scrollTo('video')">Video de Capacitación</a></li>
        </ul>
      </div>
      </div>
	  <section id="video">
        <h2>Video de Capacitación</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/H-tJlI_gdR4"
          title="Video de Capacitación del Usuario"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
  </main>
</template>

<script>
export default {
  name: 'UserManual',
  methods: {
    scrollTo(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
.background-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f9f9;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 110%;
  max-width: 1200px;
}

#video {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
  max-width: 800px;
}

#video h2 {
  margin-bottom: 1rem;
}

.sidebar {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  width: 300px;
  margin-left: 2rem;
  position: sticky;
  top: 2rem;
  height: max-content;
}

.sidebar h2 {
  color: #1d1b31;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  margin-bottom: 0.5rem;
}

.sidebar ul li a {
  color: #1d1b31;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;
  padding: 0.2rem;
  border-radius: 4px;
  display: block;
}

.sidebar ul li a:hover {
  color: #0056b3;
  background-color: #f0f0f0;
  text-decoration: none;
}

.content {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 800px;
  width: 100%;
  overflow-y: auto;
}

h2 {
  font-size: 1.8rem;
  margin-top: 1.5rem;
}

h3 {
  font-size: 1.4rem;
  margin-top: 1rem;
}

p,
ul,
ol {
  font-size: 1rem;
  margin: 1rem 0;
  text-align: justify;
}

iframe {
  margin-top: 2rem;
  max-width: 100%;
}
</style>
