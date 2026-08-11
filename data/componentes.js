window.GC_COMPONENTS = [
  {
    id:"campo-texto",
    catalogExamples: ["gc-formulario-usuarios","gc-formulario-clientes"],
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "Nombre, cédula, cargo, teléfono, dirección (líneas 310-603)" },
      { module: "Sucursales", agregar: 127, file: "cplus/views/mostrarSucursales.php", detail: "Nombre, NIT, código, dirección, latitud/longitud (líneas 376-596)" },
      { module: "Embalajes", agregar: 106, file: "cplus/views/mostrarEmbalajes.php", detail: "Nombre y código interno (líneas 155-167) — el ejemplo más simple" },
    ],
    group:"Campos",
    name:"Campo de texto y número",
    description:"Campo base para textos cortos y valores numéricos sin flechas del navegador.",
    use:"Usarlo para nombres, códigos, cargos, teléfonos, identificaciones y datos de una línea. Para valores numéricos usa type=\"text\" con inputmode=\"numeric\" para evitar controles de incremento.",
    avoid:"No usarlo para textos largos, fechas, horas o listas de opciones.",
    deps:"Bootstrap CSS + grinclic-forms.css",
    verified: true,
    accessibility:"Cada campo debe mantener label asociado por for/id. Si es obligatorio, además del asterisco debe existir validación de frontend o backend.",
    note:"La marca obligatoria se documenta aquí y queda implícita en toda la biblioteca: <span class=\"gc-required\">*</span> dentro del label.",
    states:{
      enabled:`<div class="row g-3">
  <div class="col-md-6">
    <label for="nombre_cliente_demo" class="form-label"><span class="gc-required">*</span>Nombre cliente</label>
    <input type="text" class="form-control" id="nombre_cliente_demo" name="nombre_cliente" placeholder="Ej. Gráficas ABC S.A.S" required>
  </div>
  <div class="col-md-6">
    <label for="identificacion_demo" class="form-label"><span class="gc-required">*</span>Identificación</label>
    <input type="text" inputmode="numeric" class="form-control" id="identificacion_demo" name="identificacion" placeholder="Ej. 900123456" required>
  </div>
</div>`,
      error:`<div class="row g-3">
  <div class="col-md-6">
    <label for="nombre_cliente_error" class="form-label"><span class="gc-required">*</span>Nombre cliente</label>
    <input type="text" class="form-control is-invalid" id="nombre_cliente_error" name="nombre_cliente" placeholder="Ej. Gráficas ABC S.A.S" required aria-describedby="nombre_cliente_error_help">
    <div id="nombre_cliente_error_help" class="gc-help is-invalid">Este campo es obligatorio.</div>
  </div>
  <div class="col-md-6">
    <label for="identificacion_error" class="form-label"><span class="gc-required">*</span>Identificación</label>
    <input type="text" inputmode="numeric" class="form-control is-invalid" id="identificacion_error" name="identificacion" placeholder="Solo números" required aria-describedby="identificacion_error_help">
    <div id="identificacion_error_help" class="gc-help is-invalid">Ingresa una identificación válida.</div>
  </div>
</div>`,
      disabled:`<div class="row g-3">
  <div class="col-md-6">
    <label for="nombre_cliente_disabled" class="form-label">Nombre cliente</label>
    <input type="text" class="form-control" id="nombre_cliente_disabled" name="nombre_cliente" value="Empresa registrada" disabled>
  </div>
  <div class="col-md-6">
    <label for="identificacion_disabled" class="form-label">Identificación</label>
    <input type="text" inputmode="numeric" class="form-control" id="identificacion_disabled" name="identificacion" value="900123456" disabled>
  </div>
</div>`
    },
    snippet:`<div class="mb-3">
  <label for="nombre_cliente" class="form-label"><span class="gc-required">*</span>Nombre cliente</label>
  <input type="text" class="form-control" id="nombre_cliente" name="nombre_cliente" placeholder="Ej. Gráficas ABC S.A.S" required>
</div>

<div class="mb-3">
  <label for="identificacion" class="form-label"><span class="gc-required">*</span>Identificación</label>
  <input type="text" inputmode="numeric" class="form-control" id="identificacion" name="identificacion" placeholder="Ej. 900123456" required>
</div>`
  },
  {
    id:"campo-password",
    catalogExamples: ["gc-formulario-usuarios","gc-formulario-configuraciones"],
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "input#clave con data-gc-rule=\"password\", gc-password-summary y gc-password-rules-card, pero con type=\"text\" y la tarjeta armada en ul/li (líneas 734-767)" },
    ],
    group:"Campos",
    name:"Campo contraseña",
    description:"Input protegido que mantiene el valor oculto. Los requisitos se muestran como resumen compacto con opción Ver requisitos para no sobrecargar el formulario.",
    use:"Usarlo para claves y configuraciones sensibles. No incluye ver/ocultar porque por política interna la contraseña debe verse siempre como caracteres ocultos. La regla la aplica data-gc-rule=\"password\": gc-validate.js la resuelve contra Validators.password (mínimo 8 caracteres y al menos un número, una minúscula y una mayúscula).",
    avoid:"No repetir el listado completo debajo de cada campo cuando existan Nueva clave y Confirmar clave; documentarlo una sola vez en la sección.",
    deps:"Bootstrap CSS + Bootstrap JS Collapse + grinclic-forms.css. En producción la validación la ejecutan cplus/js/core/gc-validate.js y cplus/js/core/validators.js.",
    accessibility:"El botón Ver requisitos controla el panel colapsable con aria-controls y aria-expanded, y la tarjeta lleva aria-label. El estado de error marca is-invalid en el control y añade un div.gc-help.is-invalid, y el resumen recibe la clase is-error.",
    note:"Sin verificar a propósito: la única instancia productiva declara type=\"text\" y no type=\"password\". Mientras esa contradicción no se decida, el catálogo no puede declarar este patrón contrastado.",
    states:{
      enabled:`<div class="mb-3">
  <label for="clave_demo" class="form-label"><span class="gc-required">*</span>Clave</label>
  <input type="password" class="form-control" id="clave_demo" name="clave" placeholder="Ingresa la contraseña" required autocomplete="new-password" data-gc-rule="password">
  <div class="gc-password-summary">
    Debe tener mínimo 8 caracteres e incluir letra, mayúscula, minúscula y número.
    <button class="gc-inline-link" type="button" data-bs-toggle="collapse" data-bs-target="#clave_demo_rules" aria-expanded="false" aria-controls="clave_demo_rules">Ver requisitos</button>
  </div>
  <div class="collapse" id="clave_demo_rules">
    <div class="gc-password-rules-card" aria-label="Requisitos de contraseña">
      <div class="gc-password-rule">Debe incluir al menos una letra.</div>
      <div class="gc-password-rule">Debe incluir al menos una letra en mayúscula.</div>
      <div class="gc-password-rule">Debe incluir al menos una letra en minúscula.</div>
      <div class="gc-password-rule">Debe incluir al menos un número.</div>
      <div class="gc-password-rule">Debe tener mínimo 8 caracteres.</div>
    </div>
  </div>
</div>`,
      error:`<div class="mb-3">
  <label for="clave_error" class="form-label"><span class="gc-required">*</span>Clave</label>
  <input type="password" class="form-control is-invalid" id="clave_error" name="clave" required autocomplete="new-password" data-gc-rule="password">
  <div class="gc-help is-invalid" data-gc-error>La clave no cumple los requisitos mínimos.</div>
  <div class="gc-password-summary is-error">
    Debe tener mínimo 8 caracteres e incluir letra, mayúscula, minúscula y número.
    <button class="gc-inline-link" type="button" data-bs-toggle="collapse" data-bs-target="#clave_error_rules" aria-expanded="false" aria-controls="clave_error_rules">Ver requisitos</button>
  </div>
  <div class="collapse" id="clave_error_rules">
    <div class="gc-password-rules-card" aria-label="Requisitos de contraseña">
      <div class="gc-password-rule">Debe incluir al menos una letra.</div>
      <div class="gc-password-rule">Debe incluir al menos una letra en mayúscula.</div>
      <div class="gc-password-rule">Debe incluir al menos una letra en minúscula.</div>
      <div class="gc-password-rule">Debe incluir al menos un número.</div>
      <div class="gc-password-rule">Debe tener mínimo 8 caracteres.</div>
    </div>
  </div>
</div>`,
      disabled:`<div class="mb-3">
  <label for="clave_disabled" class="form-label">Clave</label>
  <input type="password" class="form-control" id="clave_disabled" name="clave" value="No editable" disabled>
</div>`
    },
    snippet:`<div class="mb-3">
  <label for="clave" class="form-label"><span class="gc-required">*</span>Clave</label>
  <input type="password" class="form-control" id="clave" name="clave" placeholder="Ingresa la contraseña" required autocomplete="new-password" data-gc-rule="password">
  <div class="gc-password-summary">
    Debe tener mínimo 8 caracteres e incluir letra, mayúscula, minúscula y número.
    <button class="gc-inline-link" type="button" data-bs-toggle="collapse" data-bs-target="#clave_rules" aria-expanded="false" aria-controls="clave_rules">Ver requisitos</button>
  </div>
  <div class="collapse" id="clave_rules">
    <div class="gc-password-rules-card" aria-label="Requisitos de contraseña">
      <div class="gc-password-rule">Debe incluir al menos una letra.</div>
      <div class="gc-password-rule">Debe incluir al menos una letra en mayúscula.</div>
      <div class="gc-password-rule">Debe incluir al menos una letra en minúscula.</div>
      <div class="gc-password-rule">Debe incluir al menos un número.</div>
      <div class="gc-password-rule">Debe tener mínimo 8 caracteres.</div>
    </div>
  </div>
</div>`
  },
  {
    id:"campo-fecha",
    catalogExamples: ["filtros-listado"],
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/js/entities/usuarios/form-manager.js", detail: "Flatpickr fecha+hora sobre #fecha_licencia (líneas 1000-1004)" },
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "El markup real del campo: input type=text name=fecha_licencia id=fecha_licencia con class form-control y autocomplete=off, dentro de div.input-group.date#fecha; el picker lo monta el JS, no el atributo type (líneas 851-852, comentario en la 858)" },
      { module: "Mis vehículos", agregar: 119, file: "cplus/js/entities/vehiculos/form-manager.js", detail: "Flatpickr fecha+hora en fechas de vencimiento (líneas 53-58)" },
    ],
    group:"Campos",
    name:"Campo fecha / fecha y hora",
    description:"Selector con Flatpickr para fecha y fecha con hora, manteniendo el input blanco y la clase form-control de Bootstrap.",
    use:"Usarlo cuando se necesite una selección guiada. Para solo fecha usa data-gc-flatpickr=\"date\"; para fecha y hora usa data-gc-flatpickr=\"datetime\".",
    avoid:"No usar texto libre para fechas críticas; valida el formato en backend.",
    deps:"Bootstrap CSS + grinclic-forms.css + grinclic-forms.js + Flatpickr CSS/JS",
    verified: true,
    accessibility:"Mantener label asociado y usar placeholder descriptivo. El valor enviado conserva formato YYYY-MM-DD o YYYY-MM-DD HH:mm.",
    note:"El único módulo validado con selector de fecha es Usuarios (105): input de texto en <code>cplus/views/mostrarUsuarios.php:851-852</code> inicializado a mano con Flatpickr en <code>cplus/js/entities/usuarios/form-manager.js:1000-1004</code>. El otro camino, <code>input type=\"date\"</code> auto-mejorado por <code>cplus/js/core/gc-dates.js:33-36</code>, es infraestructura transversal pero hoy no lo consume ningún módulo validado; sus 13 ocurrencias productivas están todas en módulos sin terminar. El atributo <code>data-gc-flatpickr</code> del snippet es del visor: tiene 0 ocurrencias en cplus.",
    states:{
      enabled:`<div class="row g-3">
  <div class="col-md-6">
    <label for="fecha_demo" class="form-label">Fecha</label>
    <input type="text" class="form-control" id="fecha_demo" name="fecha" placeholder="Selecciona una fecha" value="2026-07-06" data-gc-flatpickr="date" readonly>
  </div>
  <div class="col-md-6">
    <label for="fecha_hora_demo" class="form-label">Fecha y hora</label>
    <input type="text" class="form-control" id="fecha_hora_demo" name="fecha_hora" placeholder="Selecciona fecha y hora" value="2026-07-06 14:30" data-gc-flatpickr="datetime" readonly>
  </div>
</div>`,
      error:`<div class="row g-3">
  <div class="col-md-6">
    <label for="fecha_error" class="form-label">Fecha</label>
    <input type="text" class="form-control is-invalid" id="fecha_error" name="fecha" placeholder="Selecciona una fecha" data-gc-flatpickr="date" readonly aria-describedby="fecha_error_help">
    <div id="fecha_error_help" class="gc-help is-invalid">Selecciona una fecha válida.</div>
  </div>
  <div class="col-md-6">
    <label for="fecha_hora_error" class="form-label">Fecha y hora</label>
    <input type="text" class="form-control is-invalid" id="fecha_hora_error" name="fecha_hora" placeholder="Selecciona fecha y hora" data-gc-flatpickr="datetime" readonly aria-describedby="fecha_hora_error_help">
    <div id="fecha_hora_error_help" class="gc-help is-invalid">Selecciona fecha y hora válida.</div>
  </div>
</div>`,
      disabled:`<div class="row g-3">
  <div class="col-md-6">
    <label for="fecha_disabled" class="form-label">Fecha</label>
    <input type="text" class="form-control" id="fecha_disabled" name="fecha" value="2026-07-06" disabled>
  </div>
  <div class="col-md-6">
    <label for="fecha_hora_disabled" class="form-label">Fecha y hora</label>
    <input type="text" class="form-control" id="fecha_hora_disabled" name="fecha_hora" value="2026-07-06 14:30" disabled>
  </div>
</div>`
    },
    snippet:`<div class="mb-3">
  <label for="fecha" class="form-label">Fecha</label>
  <input type="text" class="form-control" id="fecha" name="fecha" placeholder="Selecciona una fecha" data-gc-flatpickr="date" readonly>
</div>

<div class="mb-3">
  <label for="fecha_hora" class="form-label">Fecha y hora</label>
  <input type="text" class="form-control" id="fecha_hora" name="fecha_hora" placeholder="Selecciona fecha y hora" data-gc-flatpickr="datetime" readonly>
</div>`
  },
  {
    id:"campo-hora",
    catalogExamples: ["gc-formulario-clientes"],
    implementations: [
      { module: "Sucursales", agregar: 127, file: "cplus/js/entities/sucursales/form-manager.js", detail: "Inputs type=text con data-gc-timepicker=\"materialize\", maxlength 5 y aria-label, dentro del modal de horarios (líneas 460-463)" },
    ],
    group:"Campos",
    name:"Campo hora",
    description:"Selector de hora visual tipo reloj con el Timepicker de Materialize en formato militar de 24 horas, sobre un input de texto que también admite digitación.",
    use:"Usarlo para horas de entrada, salida o ventanas operativas.",
    avoid:"No marcarlo readonly ni depender solo del reloj. No usarlo fuera de Sucursales sin montar antes el binder y el JS de Materialize: hoy no existe un binder global para data-gc-timepicker.",
    deps:"Bootstrap CSS + grinclic-forms.css + Materialize JS (solo Timepicker, artefacto cplus/js/dist/materialize.min.js cargado por página). El enlace lo hace el propio módulo; en producción vive en cplus/js/entities/sucursales/form-manager.js.",
    accessibility:"Cada hora necesita label asociado o aria-label. El input NO debe ser readonly: teclear la hora es la única ruta accesible por teclado. Al salir del campo el valor se normaliza a HH:MM de 24 horas.",
    note:"Sin verificar: en producción no existe una clase gc-materialize-time ni un timepicker montado sobre el input.",
    states:{
      enabled:`<div class="mb-3">
  <label for="hora_entrada_demo" class="form-label"><span class="gc-required">*</span>Horario entrada</label>
  <input type="text" class="form-control" id="hora_entrada_demo" name="hora_entrada" maxlength="5" value="08:00" data-gc-timepicker="materialize" required>
</div>`,
      error:`<div class="mb-3">
  <label for="hora_entrada_error" class="form-label"><span class="gc-required">*</span>Horario entrada</label>
  <input type="text" class="form-control is-invalid" id="hora_entrada_error" name="hora_entrada" maxlength="5" value="" data-gc-timepicker="materialize" required>
  <div class="gc-help is-invalid" data-gc-error>Falta la hora.</div>
</div>`,
      disabled:`<div class="mb-3">
  <label for="hora_entrada_disabled" class="form-label">Horario entrada</label>
  <input type="text" class="form-control" id="hora_entrada_disabled" name="hora_entrada" maxlength="5" value="08:00" disabled>
</div>`
    },
    snippet:`<div class="mb-3">
  <label for="hora_entrada" class="form-label"><span class="gc-required">*</span>Horario entrada</label>
  <input type="text" class="form-control" id="hora_entrada" name="hora_entrada" maxlength="5" value="08:00" data-gc-timepicker="materialize" required>
</div>`
  },
  {
    id:"campo-horario",
    catalogExamples: ["gc-formulario-clientes"],
    implementations: [
      { module: "Sucursales", agregar: 127, file: "cplus/views/mostrarSucursales.php", detail: "Modal #modalHorarios que hospeda las filas por día (líneas 786-801)" },
      { module: "Sucursales", agregar: 127, file: "cplus/js/entities/sucursales/form-manager.js", detail: "pintarModal() arma una fila hr-dia por día con select de estado y rangos hr-rango (líneas 523-548)" },
    ],
    group:"Bloques",
    name:"Grupo de horarios",
    description:"Bloque de horario de atención por día: una fila por jornada con estado Abierto, Abierto 24h o Cerrado y uno o varios rangos de hora, dentro de un modal.",
    use:"Usarlo cuando un registro necesita horarios distintos por día y varios rangos en el mismo día. El estado del día gobierna la visibilidad de los rangos.",
    avoid:"No usarlo para una única hora aislada; en ese caso basta con el campo hora individual. No reutilizar las clases hr-* fuera del modal: están scoped bajo #modalHorarios.",
    deps:"Bootstrap CSS + Bootstrap JS Modal + Materialize JS (solo Timepicker) + el módulo de la entidad. Las clases hr-dia, hr-label, hr-estado, hr-rangos, hr-rango, hr-desde, hr-hasta y hr-add son propias de Sucursales.",
    accessibility:"Cada input de hora lleva aria-label porque la fila no tiene espacio para un label visible. El estado del día es un select nativo. El título del modal acompaña el ícono, no lo reemplaza.",
    note:"Sin verificar: producción no tiene el patrón de dos tarjetas lunes-viernes contra fin de semana; lo que existe es este modal por día.",
    states:{
      enabled:`<div class="modal-body" id="horariosBody">
  <div class="hr-dia" data-dia="lun">
    <span class="hr-label">Lunes</span>
    <select class="hr-estado form-select">
      <option value="abierto" selected>Abierto</option>
      <option value="24h">Abierto 24h</option>
      <option value="cerrado">Cerrado</option>
    </select>
    <span class="hr-rangos">
      <span class="hr-rango">
        <input type="text" maxlength="5" aria-label="Hora de entrada" data-gc-timepicker="materialize" class="hr-desde form-control" value="08:00"> -
        <input type="text" maxlength="5" aria-label="Hora de salida" data-gc-timepicker="materialize" class="hr-hasta form-control" value="17:30">
      </span>
    </span>
    <button type="button" class="hr-add erp-btn erp-btn-secondary" title="Agregar horario">+</button>
  </div>
</div>`,
      error:`<div class="modal-body" id="horariosBody">
  <div class="hr-dia" data-dia="lun">
    <span class="hr-label">Lunes</span>
    <select class="hr-estado form-select">
      <option value="abierto" selected>Abierto</option>
      <option value="24h">Abierto 24h</option>
      <option value="cerrado">Cerrado</option>
    </select>
    <span class="hr-rangos">
      <span class="hr-rango">
        <input type="text" maxlength="5" aria-label="Hora de entrada" data-gc-timepicker="materialize" class="hr-desde form-control" value="08:00"> -
        <input type="text" maxlength="5" aria-label="Hora de salida" data-gc-timepicker="materialize" class="hr-hasta form-control is-invalid" value="">
        <div class="gc-help is-invalid" data-gc-error>Falta la hora.</div>
      </span>
    </span>
    <button type="button" class="hr-add erp-btn erp-btn-secondary" title="Agregar horario">+</button>
  </div>
</div>`,
      disabled:`<div class="modal-body" id="horariosBody">
  <div class="hr-dia" data-dia="lun">
    <span class="hr-label">Lunes</span>
    <select class="hr-estado form-select" disabled>
      <option value="abierto" selected>Abierto</option>
      <option value="24h">Abierto 24h</option>
      <option value="cerrado">Cerrado</option>
    </select>
    <span class="hr-rangos">
      <span class="hr-rango">
        <input type="text" maxlength="5" aria-label="Hora de entrada" class="hr-desde form-control" value="08:00" disabled> -
        <input type="text" maxlength="5" aria-label="Hora de salida" class="hr-hasta form-control" value="17:30" disabled>
      </span>
    </span>
  </div>
</div>`
    },
    snippet:`<div class="modal fade" id="modalHorarios" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title gc-schedule-title"><i class="bi bi-clock"></i> Horario de atención</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body" id="horariosBody">
        <div class="hr-dia" data-dia="lun">
          <span class="hr-label">Lunes</span>
          <select class="hr-estado form-select">
            <option value="abierto" selected>Abierto</option>
            <option value="24h">Abierto 24h</option>
            <option value="cerrado">Cerrado</option>
          </select>
          <span class="hr-rangos">
            <span class="hr-rango">
              <input type="text" maxlength="5" aria-label="Hora de entrada" data-gc-timepicker="materialize" class="hr-desde form-control" value="08:00"> -
              <input type="text" maxlength="5" aria-label="Hora de salida" data-gc-timepicker="materialize" class="hr-hasta form-control" value="17:30">
            </span>
          </span>
          <button type="button" class="hr-add erp-btn erp-btn-secondary" title="Agregar horario">+</button>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="erp-btn erp-btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="erp-btn erp-btn-primary" id="guardarHorarios">Guardar</button>
      </div>
    </div>
  </div>
</div>`
  },
  {
    id:"textarea",
    catalogExamples: ["gc-formulario-configuraciones","gc-formulario-roles"],
    implementations: [
      { module: "Sucursales", agregar: 127, file: "cplus/views/mostrarSucursales.php", detail: "Observación con rows=3 (líneas 669-670)" },
      { module: "Embalajes", agregar: 106, file: "cplus/views/mostrarEmbalajes.php", detail: "Descripción (líneas 171-173)" },
      { module: "Manejo del residuo", agregar: 116, file: "cplus/views/mostrarManejoResiduo.php", detail: "Descripción con rows=3, la forma mayoritaria del catálogo maestro (línea 183)" },
      { module: "Elementos de chequeo", agregar: 117, file: "cplus/views/mostrarElementosChequeo.php", detail: "Descripción con rows=2, la variante corta (línea 102)" },
    ],
    group:"Campos",
    name:"Textarea",
    description:"Area de texto Bootstrap para observaciones o descripciones.",
    use:"Usarlo para observaciones, notas y descripciones amplias.",
    avoid:"No usarlo para datos cortos que deben escanearse en columnas.",
    deps:"Bootstrap CSS + grinclic-forms.css",
    verified: true,
    accessibility:"Mantén el label asociado por for/id. Para el modo consulta usa readonly y no disabled, así el contenido sigue siendo enfocable y leíble con teclado. El mensaje de error que inyecta GcValidate es un div gc-help is-invalid sin role=\"alert\" ni aria-describedby automático: si el error debe anunciarse, enlázalo a mano como hace el estado de error de esta entrada.",
    states:{
      enabled:`<div class="mb-3">
  <label for="descripcion_demo" class="form-label">Descripcion</label>
  <textarea class="form-control" id="descripcion_demo" name="descripcion" rows="3" placeholder="Detalle la regla del chequeo"></textarea>
</div>`,
      error:`<div class="mb-3">
  <label for="descripcion_error" class="form-label">Descripcion</label>
  <textarea class="form-control is-invalid" id="descripcion_error" name="descripcion" rows="3" aria-describedby="descripcion_error_help"></textarea>
  <div id="descripcion_error_help" class="gc-help is-invalid">La descripcion es obligatoria.</div>
</div>`,
      disabled:`<div class="mb-3">
  <label for="descripcion_disabled" class="form-label">Descripcion</label>
  <textarea class="form-control" id="descripcion_disabled" name="descripcion" rows="3" disabled>No editable</textarea>
</div>`
    },
    snippet:`<div class="mb-3">
  <label for="descripcion" class="form-label">Descripcion</label>
  <textarea class="form-control" id="descripcion" name="descripcion" rows="3" placeholder="Detalle la regla del chequeo"></textarea>
</div>`
  },
  {
    id:"select-simple",
    catalogExamples: ["gc-formulario-usuarios","gc-formulario-clientes"],
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "Selects Estado y Módulo de acceso (líneas 426 y 467)" },
      { module: "Sucursales", agregar: 127, file: "cplus/views/mostrarSucursales.php", detail: "Tipo, estado, clasificación, país, ciudad… (líneas 382-559)" },
      { module: "Embalajes", agregar: 106, file: "cplus/views/mostrarEmbalajes.php", detail: "Select Activo/Inactivo (líneas 176-181)" },
      { module: "Riesgos", agregar: 143, file: "cplus/views/mostrarRiesgos.php", detail: "Select estado con name=estado, required y disabled en modo Ver (línea 167)" },
      { module: "Tipos de vehículos", agregar: 137, file: "cplus/views/mostrarTipoVehiculos.php", detail: "Select estado con name=activo, required y disabled condicionado al modo Ver (línea 146)" },
    ],
    group:"Campos",
    name:"Select",
    description:"Select nativo Bootstrap para listas cortas.",
    use:"Usarlo en estados, categorias y decisiones con pocas opciones.",
    avoid:"No usarlo para catalogos muy largos.",
    deps:"Bootstrap CSS + grinclic-forms.css",
    verified: true,
    accessibility:"Mantén el label asociado por for/id y deja como primera opción un valor vacío tipo Seleccione. El select nativo ya resuelve foco y teclado: solo cámbialo por un dropdown si necesitas búsqueda interna. En modo consulta producción aplica disabled, que saca el control del recorrido de foco y del envío del formulario; si el valor debe seguir viajando, acompáñalo de un input hidden.",
    states:{
      enabled:`<div class="mb-3">
  <label for="estado_demo" class="form-label"><span class="gc-required">*</span>Estado</label>
  <select class="form-select" id="estado_demo" name="estado" required>
    <option value="">Seleccione</option>
    <option value="Activo" selected>Activo</option>
    <option value="Inactivo">Inactivo</option>
  </select>
</div>`,
      error:`<div class="mb-3">
  <label for="estado_error" class="form-label"><span class="gc-required">*</span>Estado</label>
  <select class="form-select is-invalid" id="estado_error" name="estado" required aria-describedby="estado_error_help">
    <option value="" selected>Seleccione</option>
    <option value="Activo">Activo</option>
  </select>
  <div id="estado_error_help" class="gc-help is-invalid">Selecciona una opcion.</div>
</div>`,
      disabled:`<div class="mb-3">
  <label for="estado_disabled" class="form-label">Estado</label>
  <select class="form-select" id="estado_disabled" name="estado" disabled>
    <option selected>Activo</option>
  </select>
</div>`
    },
    snippet:`<div class="mb-3">
  <label for="estado" class="form-label"><span class="gc-required">*</span>Estado</label>
  <select class="form-select" id="estado" name="estado" required>
    <option value="">Seleccione</option>
    <option value="Activo" selected>Activo</option>
    <option value="Inactivo">Inactivo</option>
    <option value="Suspendido">Suspendido</option>
  </select>
</div>`
  },
  {
    id:"seleccion-busqueda",
    catalogExamples: ["gc-formulario-clientes","gc-formulario-usuarios"],
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "Rol, empresa, país y ciudad con data-gc-search-select (líneas 373-637)" },
    ],
    group:"Campos",
    name:"Seleccion con busqueda interna",
    description:"Dropdown Bootstrap con filtro interno y valor oculto para envío al backend, pensado para catálogos largos. El markup de esta entrada es el espejo del visor: producción genera el suyo por JavaScript.",
    use:"Usarlo para ciudades, departamentos, clientes, usuarios o residuos extensos. En una vista CPlus lo único que se escribe es el select con data-gc-search-select; el resto lo genera cplus/js/core/gc-search-select.js.",
    avoid:"No usarlo para listas de dos o tres opciones. No copiar el markup del snippet a una vista CPlus: producción no entiende data-gc-option, data-gc-search-input ni data-gc-search-label.",
    deps:"Bootstrap CSS + Bootstrap JS + grinclic-forms.css + grinclic-forms.js",
    accessibility:"El disparador es un button con aria-haspopup=\"listbox\" y el aria-expanded que alterna Bootstrap; dentro del menú las flechas recorren los .dropdown-item y Enter selecciona. Limitaciones reales: el menú no declara role=\"listbox\" ni role=\"option\", al abrir el foco se queda en el disparador en vez del buscador, el cambio de selección no se anuncia por región viva y el label no nombra al button, así que añádele aria-label.",
    note:"<strong>Sin verificar.</strong> El contrato del snippet (<code>data-gc-option</code>, <code>data-gc-search-input</code>, <code>data-gc-search-label</code> e input hidden) solo lo entiende el JS del visor. Producción escribe <code>&lt;select class=\"form-select\" data-gc-search-select&gt;</code> y <code>cplus/js/core/gc-search-select.js</code> genera el dropdown: wrapper <code>dropdown gc-search-select</code>, disparador <code>form-select text-start dropdown-toggle gc-select-trigger</code> y menú <code>dropdown-menu gc-search-menu w-100</code>, sin input hidden.",
    states:{
      enabled:`<div class="mb-3 gc-search-select" data-gc-search-select>
  <label class="form-label" for="departamento_value_demo">Departamento</label>
  <input type="hidden" id="departamento_value_demo" name="departamento" value="Antioquia">
  <button class="btn dropdown-toggle gc-select-trigger w-100" type="button" data-bs-toggle="dropdown" aria-haspopup="listbox" aria-expanded="false">
    <span data-gc-search-label>Antioquia</span>
  </button>
  <div class="dropdown-menu gc-search-menu">
    <input class="form-control mb-2" type="search" placeholder="Buscar opcion..." aria-label="Buscar opción" data-gc-search-input>
    <button class="dropdown-item active" type="button" data-gc-option="Antioquia">Antioquia</button>
    <button class="dropdown-item" type="button" data-gc-option="Bogota D.C.">Bogota D.C.</button>
    <button class="dropdown-item" type="button" data-gc-option="Valle del Cauca">Valle del Cauca</button>
  </div>
</div>`,
      error:`<div class="mb-3 gc-search-select" data-gc-search-select>
  <label class="form-label" for="departamento_value_error">Departamento</label>
  <input type="hidden" id="departamento_value_error" name="departamento" value="">
  <button class="btn dropdown-toggle gc-select-trigger is-invalid w-100" type="button" data-bs-toggle="dropdown" aria-haspopup="listbox" aria-expanded="false">
    <span data-gc-search-label>Seleccione</span>
  </button>
  <div class="gc-help is-invalid">Selecciona una opcion valida.</div>
</div>`,
      disabled:`<div class="mb-3 gc-search-select">
  <label class="form-label">Departamento</label>
  <button class="btn dropdown-toggle gc-select-trigger w-100" type="button" disabled>
    Antioquia
  </button>
</div>`
    },
    snippet:`<!-- En una vista CPlus se escribe SOLO esto y gc-search-select.js genera el resto:
     <select name="departamento" class="form-select" data-gc-search-select id="departamento">…</select>
     Lo de abajo es el espejo del visor (contrato data-gc-option / data-gc-search-input). -->
<div class="mb-3 gc-search-select" data-gc-search-select>
  <label class="form-label" for="departamento_value">Departamento</label>
  <input type="hidden" id="departamento_value" name="departamento" value="Antioquia">
  <button class="btn dropdown-toggle gc-select-trigger w-100" type="button" data-bs-toggle="dropdown" aria-haspopup="listbox" aria-expanded="false">
    <span data-gc-search-label>Antioquia</span>
  </button>
  <div class="dropdown-menu gc-search-menu">
    <input class="form-control mb-2" type="search" placeholder="Buscar opcion..." aria-label="Buscar opción" data-gc-search-input>
    <button class="dropdown-item active" type="button" data-gc-option="Antioquia">Antioquia</button>
    <button class="dropdown-item" type="button" data-gc-option="Bogota D.C.">Bogota D.C.</button>
    <button class="dropdown-item" type="button" data-gc-option="Cundinamarca">Cundinamarca</button>
    <button class="dropdown-item" type="button" data-gc-option="Valle del Cauca">Valle del Cauca</button>
  </div>
</div>`
  },
  {
    id:"seleccion-multiple-desplegable",
    catalogExamples: ["gc-formulario-usuarios"],
    implementations: [
      { module: "Infraestructura CPlus (sin consumidor en módulo validado)", agregar: 127, file: "cplus/js/core/gc-multiselect.js", detail: "Fuente del patrón: construye disparador, menú de checkboxes y resumen a partir de un select[multiple][data-gc-multiselect]; el wrapper es dropdown gc-multiselect, el disparador form-select text-start dropdown-toggle gc-select-trigger y el menú dropdown-menu gc-multiselect-menu w-100. El único módulo que hoy lo carga en MODO CAJA es Sucursales (mostrarSucursales.php:696, buscador creado en gc-multiselect.js:246-257); el modo desplegable no tiene consumidor validado" },
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "Usa el MODO CAJA, no el desplegable: div#id_sucursal_rel.suc-rel-container y div#suc_rel_cliente.suc-rel-container con data-gc-multiselect-box (ver la entrada Selección múltiple con búsqueda interna)" },
      { module: "Proveedores", agregar: 128, file: "cplus/views/mostrarProveedores.php", detail: "(variante propia, NO usa el desplegable) select multiple nativo con size=8 y sin data-gc-multiselect (líneas 102-110)" },
    ],
    group:"Campos",
    name:"Seleccion multiple en desplegable",
    description:"Dropdown con checkboxes reales y resumen de selección. El markup de esta ficha es el espejo del visor: en producción lo genera cplus/js/core/gc-multiselect.js a partir de un <code>&lt;select multiple data-gc-multiselect&gt;</code>.",
    use:"Usarlo para permisos, categorías o filtros múltiples en espacios compactos: en la vista solo se escribe el select con data-gc-multiselect y data-gc-placeholder. Aviso: el modo desplegable no tiene precedente productivo; cuando haga falta uno, usar el modo caja de Selección múltiple con búsqueda interna (Sucursales).",
    avoid:"No usarlo si las opciones deben estar siempre visibles. No copiar data-gc-multiselect-summary ni gc-selected-summary a una vista CPlus: el resumen real es un span que gc-multiselect.js crea dentro del propio disparador.",
    deps:"Bootstrap CSS + Bootstrap JS + grinclic-forms.css + grinclic-forms.js. En producción: cplus/js/core/gc-multiselect.js.",
    accessibility:"Cada opción es un checkbox real con label asociado por for/id: el menú se recorre con Tab y se marca con la barra espaciadora. El disparador necesita data-bs-auto-close=\"outside\"; sin él, un clic sobre label.form-check-label cierra el menú. Limitaciones reales: no hay región viva que anuncie el cambio, el disparador no declara aria-haspopup, el menú no expone roles de lista y el label no nombra al button, así que añádele aria-label.",
    note:"<strong>Sin verificar.</strong> <code>data-gc-multiselect-summary</code> y <code>div.gc-selected-summary</code> no existen en producción: solo los entiende el JS del visor, y ningún módulo validado usa el modo desplegable. El markup real lo genera <code>gc-multiselect.js</code>: wrapper <code>dropdown gc-multiselect</code>, disparador <code>form-select text-start dropdown-toggle gc-select-trigger</code> y menú <code>dropdown-menu gc-multiselect-menu w-100</code>.",
    states:{
      enabled:`<div class="mb-3 dropdown" data-gc-multiselect>
  <label class="form-label">Permisos</label>
  <button class="btn dropdown-toggle gc-select-trigger w-100" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside">Seleccionar permisos</button>
  <div class="dropdown-menu gc-multiselect-menu">
    <div class="form-check"><input class="form-check-input" type="checkbox" id="permiso_crear_demo" name="permisos[]" value="crear" checked><label class="form-check-label" for="permiso_crear_demo">Crear</label></div>
    <div class="form-check"><input class="form-check-input" type="checkbox" id="permiso_editar_demo" name="permisos[]" value="editar"><label class="form-check-label" for="permiso_editar_demo">Editar</label></div>
  </div>
  <div class="gc-selected-summary" data-gc-multiselect-summary>Seleccionados: ninguno</div>
</div>`,
      error:`<div class="mb-3 dropdown" data-gc-multiselect>
  <label class="form-label">Permisos</label>
  <button class="btn dropdown-toggle gc-select-trigger is-invalid w-100" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside">Seleccionar permisos</button>
  <div class="gc-help is-invalid">Selecciona al menos una opcion.</div>
</div>`,
      disabled:`<div class="mb-3 dropdown">
  <label class="form-label">Permisos</label>
  <button class="btn dropdown-toggle gc-select-trigger w-100" type="button" disabled>Crear</button>
</div>`
    },
    snippet:`<!-- En una vista CPlus se escribe SOLO esto y gc-multiselect.js genera el resto:
     <select name="permisos[]" class="form-select" multiple data-gc-multiselect
             data-gc-placeholder="Seleccionar permisos">…</select>
     Lo de abajo es el espejo del visor. data-bs-auto-close="outside" es obligatorio:
     sin él, un clic sobre label.form-check-label cierra el menú. -->
<div class="mb-3 dropdown" data-gc-multiselect>
  <label class="form-label">Permisos</label>
  <button class="btn dropdown-toggle gc-select-trigger w-100" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside">
    Seleccionar permisos
  </button>
  <div class="dropdown-menu gc-multiselect-menu">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="permiso_crear" name="permisos[]" value="crear" checked>
      <label class="form-check-label" for="permiso_crear">Crear</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="permiso_editar" name="permisos[]" value="editar">
      <label class="form-check-label" for="permiso_editar">Editar</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="permiso_aprobar" name="permisos[]" value="aprobar">
      <label class="form-check-label" for="permiso_aprobar">Aprobar</label>
    </div>
  </div>
  <div class="gc-selected-summary" data-gc-multiselect-summary>Seleccionados: ninguno</div>
</div>`
  },

  {
    id:"seleccion-multiple-busqueda",
    catalogExamples: ["gc-formulario-usuarios"],
    implementations: [
      { module: "Sucursales", agregar: 127, file: "cplus/views/mostrarSucursales.php", detail: "MODO CAJA: div#declaracionesBox.decl-box con data-gc-multiselect-box, filas label.decl-item y la casilla #declTodas; el buscador lo crea gc-multiselect.js:246-257 (líneas 696-702)" },
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "MODO CAJA sobre dos campos: Sucursales de acopio (div#id_sucursal_rel.suc-rel-container) y Relacionar sucursales (div#suc_rel_cliente.suc-rel-container), ambos con data-gc-multiselect-box, filas div.form-check y la casilla TODAS sin name; form-manager.js repuebla la caja por innerHTML y el MutationObserver de gc-multiselect.js:279-281 rehace resumen y buscador" },
    ],
    group:"Campos",
    name:"Selección múltiple con búsqueda interna",
    description:"Dropdown con checkboxes reales, búsqueda interna y resumen de selección. Es el espejo del visor: en producción el buscador lo crea gc-multiselect.js y solo se muestra cuando hay más de 8 opciones.",
    use:"Usarlo para listas múltiples largas, como sucursales o permisos. La vía general es el MODO CAJA del snippet: data-gc-multiselect-box sobre un contenedor de checkboxes; gc-multiselect.js le monta disparador, menú y buscador sin tocar names ni handlers. Es la única vía si la fila no cabe en un option o si otro JS repuebla la caja por innerHTML.",
    avoid:"No usarlo para dos o tres opciones: basta un checkbox o la selección múltiple simple. No escribir gc-multiselect-menu en la caja: lo crea el JS y duplicarlo deja doble marco y doble scroll. No añadir contador propio: el disparador ya muestra «Seleccionados: N».",
    deps:"Bootstrap CSS + Bootstrap JS + grinclic-forms.css + grinclic-forms.js. En producción: cplus/js/core/gc-multiselect.js.",
    accessibility:"Cada fila es un checkbox real con label asociado por for/id, así que el menú abierto se recorre con Tab y se marca con la barra espaciadora. Limitación real: el buscador se genera sin aria-label ni aria-controls y el filtrado oculta filas sin anunciar cuántas quedan al lector de pantalla; ponle aria-label al copiar el patrón. El label del campo tampoco queda asociado al disparador, que no declara aria-haspopup.",
    note:"El bloque <strong>Estados</strong> es el espejo del visor: sirve para ver el resultado, no para copiarlo. Lo que se lleva a una vista CPlus es el <strong>snippet</strong>, con sus convenciones comentadas.",
    states:{
      enabled:`<div class="mb-3 dropdown" data-gc-multiselect>
  <label class="form-label">Sucursales de acopio</label>
  <button class="btn dropdown-toggle gc-select-trigger w-100" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside">Seleccionar sucursales</button>
  <div class="dropdown-menu gc-multiselect-menu">
    <input class="form-control gc-multiselect-search" type="search" placeholder="Buscar sucursal..." data-gc-multiselect-search>
    <div class="form-check"><input class="form-check-input" type="checkbox" id="sucursal_principal_demo" name="sucursales[]" value="principal" checked><label class="form-check-label" for="sucursal_principal_demo">Sucursal principal</label></div>
    <div class="form-check"><input class="form-check-input" type="checkbox" id="sucursal_norte_demo" name="sucursales[]" value="norte"><label class="form-check-label" for="sucursal_norte_demo">Sucursal norte</label></div>
    <div class="form-check"><input class="form-check-input" type="checkbox" id="sucursal_sur_demo" name="sucursales[]" value="sur"><label class="form-check-label" for="sucursal_sur_demo">Sucursal sur</label></div>
  </div>
  <div class="gc-selected-summary" data-gc-multiselect-summary>Seleccionados: ninguno</div>
</div>`,
      error:`<div class="mb-3 dropdown" data-gc-multiselect>
  <label class="form-label">Sucursales de acopio</label>
  <button class="btn dropdown-toggle gc-select-trigger is-invalid w-100" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside">Seleccionar sucursales</button>
  <div class="gc-help is-invalid">Selecciona al menos una sucursal.</div>
</div>`,
      disabled:`<div class="mb-3 dropdown">
  <label class="form-label">Sucursales de acopio</label>
  <button class="btn dropdown-toggle gc-select-trigger w-100" type="button" disabled>Sucursal principal</button>
</div>`
    },
    snippet:`<!-- MODO CAJA — esto es TODO lo que se escribe en una vista CPlus.
     gc-multiselect.js (core, ya cargado) envuelve la caja en disparador + menú +
     buscador sin tocar su contenido: names, ids, values y handlers siguen igual.
     La caja NO lleva gc-multiselect-menu: ese menú lo crea el JS.
     Instancia real: cplus/views/mostrarUsuarios.php (Sucursales de acopio). -->
<div class="col-md-6">
  <label class="form-label">Sucursales de acopio</label>
  <div id="id_sucursal_rel" class="suc-rel-container"
       data-gc-multiselect-box
       data-gc-placeholder="Seleccionar sucursales de acopio"
       data-gc-search-placeholder="Buscar sucursal...">

    <!-- Fila TODAS: checkbox SIN name. El JS la reconoce por eso, no la cuenta
         en el resumen y la oculta mientras haya texto en el buscador. -->
    <div class="form-check">
      <input type="checkbox" id="selectAllSucursalesAcopio" class="form-check-input"
             onchange="toggleSelectAllSucursalesAcopio()">
      <label class="form-check-label" for="selectAllSucursalesAcopio">TODAS</label>
    </div>

    <!-- Filas reales: checkbox CON name. Solo estas cuentan para "Seleccionados: N". -->
    <div class="form-check">
      <input type="checkbox" class="form-check-input" name="id_sucursal_rel[]"
             id="suc_acopio_item_1" value="1" checked>
      <label class="form-check-label" for="suc_acopio_item_1">Sede Principal</label>
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" name="id_sucursal_rel[]"
             id="suc_acopio_item_2" value="2">
      <label class="form-check-label" for="suc_acopio_item_2">Planta Demo Madrid</label>
    </div>
  </div>
</div>

<!-- Si otro JS repuebla la caja (container.innerHTML = ...), no hay que hacer nada:
     el MutationObserver de gc-multiselect.js rehace resumen, filtro y buscador.
     Si la caja se CREA después del DOM ready: window.GcMultiselect.initBox(caja). -->`
  },
  {
    id:"radio-si-no",
    catalogExamples: ["gc-formulario-usuarios","gc-formulario-clientes"],
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "gc-question + gc-yes-no role=radiogroup: acceso al sistema (líneas 657-687)" },
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "Segundo uso del mismo patrón: envío de credenciales por correo (líneas 794-808)" },
    ],
    group:"Campos",
    name:"Radio SI/NO compacto",
    description:"Decisión binaria compacta con radios reales presentados como botones segmentados. La etiqueta y el grupo comparten la misma caja.",
    use:"Usarlo para preguntas de configuración de respuesta cerrada. El orden es NO primero y SI después, igual que en producción. El value lo define el contrato del backend: en Usuarios son 0 y 1.",
    avoid:"No usarlo para listas extensas ni opciones que requieren búsqueda. No envolver los input en .form-check: el patrón exige input.btn-check y label.btn como hijos directos de .gc-yes-no.",
    deps:"Bootstrap CSS (btn-check) + grinclic-forms.css",
    verified: true,
    accessibility:"El contenedor usa role=\"radiogroup\" y aria-labelledby apuntando al id del label, de modo que el lector de pantalla anuncia la pregunta antes de las opciones. Los radios son nativos, así que las flechas del teclado ya recorren el grupo.",
    note:"La variante triple con NO APLICA es propuesta del catálogo: <code>gc-yes-no--triple</code> no existe en el SCSS de producción y por eso no va en el snippet. <strong>El estado de error también es propuesta:</strong> ninguna instancia productiva lleva <code>required</code> y gc-validate omite los radios sin él, así que el grupo nunca se marca; de marcarse, el <code>div.gc-help.is-invalid[data-gc-error]</code> iría dentro de <code>.gc-yes-no</code>, detrás del input, y sin border-warning.",
    states:{
      enabled:`<div class="row g-3">
  <div class="col-lg-6">
    <div class="gc-question mb-3">
      <label class="form-label" id="acceder_sistema_label_demo">¿Deseas que el usuario acceda al sistema?</label>
      <div class="gc-yes-no" role="radiogroup" aria-labelledby="acceder_sistema_label_demo">
        <input class="btn-check" type="radio" name="acceder_sistema_demo" id="acceder_sistema_no_demo" value="0" checked>
        <label class="btn" for="acceder_sistema_no_demo">NO</label>
        <input class="btn-check" type="radio" name="acceder_sistema_demo" id="acceder_sistema_si_demo" value="1">
        <label class="btn" for="acceder_sistema_si_demo">SI</label>
      </div>
    </div>
  </div>
  <div class="col-lg-6">
    <div class="gc-question mb-3">
      <label class="form-label" id="enviarcorreo_label_demo">¿Desea comunicarle al usuario mediante correo electrónico sus credenciales?</label>
      <div class="gc-yes-no" role="radiogroup" aria-labelledby="enviarcorreo_label_demo">
        <input class="btn-check" type="radio" name="enviarcorreo_demo" id="enviarcorreo_no_demo" value="0">
        <label class="btn" for="enviarcorreo_no_demo">NO</label>
        <input class="btn-check" type="radio" name="enviarcorreo_demo" id="enviarcorreo_si_demo" value="1" checked>
        <label class="btn" for="enviarcorreo_si_demo">SI</label>
      </div>
    </div>
  </div>
</div>`,
      error:`<div class="gc-question mb-1 border-warning">
  <label class="form-label" id="acceder_sistema_label_error">¿Deseas que el usuario acceda al sistema?</label>
  <div class="gc-yes-no" role="radiogroup" aria-labelledby="acceder_sistema_label_error">
    <input class="btn-check" type="radio" name="acceder_sistema_error" id="acceder_sistema_no_error" value="0">
    <label class="btn" for="acceder_sistema_no_error">NO</label>
    <input class="btn-check" type="radio" name="acceder_sistema_error" id="acceder_sistema_si_error" value="1">
    <label class="btn" for="acceder_sistema_si_error">SI</label>
  </div>
</div>
<div class="gc-help is-invalid" data-gc-error>Selecciona SI o NO.</div>`,
      disabled:`<div class="gc-question mb-3">
  <label class="form-label" id="acceder_sistema_label_disabled">¿Deseas que el usuario acceda al sistema?</label>
  <div class="gc-yes-no" role="radiogroup" aria-labelledby="acceder_sistema_label_disabled">
    <input class="btn-check" type="radio" name="acceder_sistema_disabled" id="acceder_sistema_no_disabled" value="0" checked disabled>
    <label class="btn" for="acceder_sistema_no_disabled">NO</label>
    <input class="btn-check" type="radio" name="acceder_sistema_disabled" id="acceder_sistema_si_disabled" value="1" disabled>
    <label class="btn" for="acceder_sistema_si_disabled">SI</label>
  </div>
</div>`
    },
    snippet:`<div class="gc-question">
  <label class="form-label" id="acceder_sistema_label">¿Deseas que el usuario acceda al sistema?</label>
  <div class="gc-yes-no" role="radiogroup" aria-labelledby="acceder_sistema_label">
    <input class="btn-check" type="radio" name="acceder_sistema" id="acceder_sistema" value="0" checked>
    <label class="btn" for="acceder_sistema">NO</label>
    <input class="btn-check" type="radio" name="acceder_sistema" id="acceder_sistema_aux" value="1">
    <label class="btn" for="acceder_sistema_aux">SI</label>
  </div>
</div>`
  },
  {
    id:"checkbox",
    catalogExamples: ["gc-formulario-usuarios","gc-formulario-roles"],
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "Seleccionar-todas + checkboxes por sucursal + gc-review (líneas 970-1064)" },
      { module: "Sucursales", agregar: 127, file: "cplus/views/mostrarSucursales.php", detail: "aplica_acopio y declaraciones[] (líneas 683-711)" },
      { module: "Elementos de chequeo", agregar: 117, file: "cplus/views/mostrarElementosChequeo.php", detail: "Checkbox gc-review de confirmación con data-gc-review-check, que gatea el submit #guardar (líneas 119-122)" },
      { module: "Roles", agregar: 124, file: "cplus/views/mostrarRoles.php", detail: "Checkbox gc-review de confirmación (líneas 187-188)" },
      { module: "Zonas", agregar: 118, file: "cplus/views/mostrarZonas.php", detail: "TODAS + checkboxes por ciudad (líneas 227-244)" },
    ],
    group:"Campos",
    name:"Checkbox",
    description:"Checkbox Bootstrap de mayor tamaño para opciones independientes y confirmaciones de revisión.",
    use:"Usarlo para permisos, confirmaciones y opciones no excluyentes. El ejemplo con fondo verde tenue muestra cómo cerrar un formulario con confirmación de revisión.",
    avoid:"No usarlo para decisiones SI/NO que deban verse como pregunta compacta.",
    deps:"Bootstrap CSS + grinclic-forms.css + grinclic-forms.js cuando active o desactive un botón final.",
    verified: true,
    accessibility:"El área de selección es más amplia y el label se asocia por for/id para evitar selección equivocada.",
    states:{
      enabled:`<div class="form-check mb-3">
  <input class="form-check-input" type="checkbox" value="1" id="crear_demo" name="crear_solicitudes" checked>
  <label class="form-check-label" for="crear_demo">Crear solicitudes</label>
</div>
<footer class="gc-review-footer p-0 border-0 bg-transparent">
  <div class="gc-review-box">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="confirmar_revision_demo" checked data-gc-review-check="#btn_actualizar_demo">
      <label class="form-check-label" for="confirmar_revision_demo">Confirmo que revisé los campos críticos antes de actualizar.</label>
    </div>
    <div class="gc-review-actions">
      <button class="btn btn-outline-secondary" type="button">Cancelar</button>
      <button class="btn btn-success" type="submit" id="btn_actualizar_demo">Guardar</button>
    </div>
  </div>
</footer>`,
      error:`<div class="form-check mb-1">
  <input class="form-check-input is-invalid" type="checkbox" value="1" id="crear_error" name="crear_solicitudes" aria-describedby="crear_error_help">
  <label class="form-check-label" for="crear_error">Crear solicitudes</label>
</div>
<div id="crear_error_help" class="gc-help is-invalid">Debes confirmar esta opción.</div>`,
      disabled:`<div class="form-check mb-3">
  <input class="form-check-input" type="checkbox" value="1" id="crear_disabled" name="crear_solicitudes" checked disabled>
  <label class="form-check-label" for="crear_disabled">Crear solicitudes</label>
</div>`
    },
    snippet:`<div class="form-check mb-3">
  <input class="form-check-input" type="checkbox" value="1" id="crear_solicitudes" name="crear_solicitudes" checked>
  <label class="form-check-label" for="crear_solicitudes">Crear solicitudes</label>
</div>

<footer class="gc-review-footer">
  <div class="gc-review-box">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="confirmar_revision" data-gc-review-check="#btn_actualizar">
      <label class="form-check-label" for="confirmar_revision">Confirmo que revisé los campos predefinidos y configuraciones críticas antes de actualizar.</label>
    </div>
    <div class="gc-review-actions">
      <button class="btn btn-outline-secondary" type="button">Cancelar</button>
      <button class="btn btn-success" type="submit" id="btn_actualizar" disabled>Guardar</button>
    </div>
  </div>
</footer>`
  },
  {
    id:"checklist-opciones",
    catalogExamples: ["gc-formulario-configuraciones"],
    implementations: [
      { module: "Mis datos / Configuraciones", agregar: 150, file: "cplus/views/mostrarDatos.php", detail: "Sección Declaraciones del acordeón #accDatos: cinco tarjetas form-check gc-check-card en una grilla row g-3 de columnas col-md-6, incluida la trampa del checkbox invertido checkdupcampos con value=0 (líneas 553-605)" },
      { module: "Mis datos / Configuraciones", agregar: 150, file: "cplus/views/mostrarDatos.php", detail: "El mismo patrón se repite en el resto de secciones de módulos del acordeón: 23 tarjetas gc-check-card en total en la vista (líneas 555-1106)" },
      { module: "Clase compartida", agregar: 150, file: "cplus/scss/_gc-forms.scss", detail: "Definición general de gc-check-card: borde --grinc-soft, radio estándar, padding 10px 12px 10px 38px, fondo blanco, min-height 44px y centrado vertical del input (líneas 435-447)" },
    ],
    group:"Bloques",
    name:"Checklist de opciones",
    description:"Grilla de tarjetas checkbox para activar o desactivar opciones de configuración independientes: cada opción es un form-check con la clase general gc-check-card (borde suave, fondo blanco, 44px de alto mínimo) dentro de una grilla Bootstrap row g-3 de columnas col-md-6.",
    use:"Usarlo cuando una pantalla de configuración agrupa banderas independientes por módulo o sección, como los acordeones de Mis datos. La grilla es Bootstrap puro (row g-3 + col-md-6) y la tarjeta reutiliza la clase general gc-check-card de cplus/scss/_gc-forms.scss; el label va asociado por for/id y hace de área de clic completa.",
    avoid:"No usarlo para la confirmación de revisión que cierra el formulario (eso es gc-review-box) ni para decisiones SI/NO que deban leerse como pregunta (radio-si-no). No copiar del prototipo los contenedores gc-settings-grid ni gc-setting-card: no existen en producción; la grilla productiva es row g-3 con col-md-6 y la tarjeta es gc-check-card. Cuidado con los checkbox invertidos del contrato de Datos (value=\"0\" y marcado envía 0): documentar siempre la inversión en un comentario junto al campo.",
    deps:"Bootstrap CSS y la clase gc-check-card de cplus/scss/_gc-forms.scss compilada en cplus/css/main.css. En el visor, grinclic-forms.css. Si una opción necesita ayuda contextual, se compone con gc-help-button + Bootstrap Popover, como documenta tabla-campos-opciones.",
    verified: false,
    accessibility:"Cada tarjeta asocia el label por for/id, así toda la superficie de texto activa el checkbox; la tarjeta mide 44px de alto mínimo, que cubre el objetivo táctil. El input centra verticalmente con la tarjeta en flex. No convertir la tarjeta en botón ni darle foco propio: el control es el checkbox.",
    note:"verified queda en false porque Mis datos figura como parcial en el ledger de migración; la entrada no debe usarse como evidencia de migración completa. El prototipo Tabla_checkbox (Campos personalizados — Manifiesto, 2026-08-10) traía estas tarjetas como gc-setting-card con globo de ayuda artesanal: al sistema se traducen como gc-check-card productiva y, si hace falta ayuda, gc-help-button + Popover.",
    preview:`<section class="gc-form-section">
  <p class="gc-section-kicker">Cada bloque agrupa el comportamiento de un módulo del aplicativo.</p>
  <div class="row g-3">
    <div class="col-md-6">
      <div class="form-check gc-check-card">
        <input class="form-check-input" type="checkbox" value="1" id="demo_check_categorias" checked>
        <label class="form-check-label" for="demo_check_categorias">Exigir relación de categorías en el declarado</label>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-check gc-check-card">
        <input class="form-check-input" type="checkbox" value="1" id="demo_check_hoja">
        <label class="form-check-label" for="demo_check_hoja">Requerir hoja de seguridad para residuo SÍ peligroso</label>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-check gc-check-card">
        <input class="form-check-input" type="checkbox" value="0" id="demo_check_dup" checked>
        <label class="form-check-label" for="demo_check_dup">Replicar frecuencia, precio, unidad y hoja de seguridad al duplicar</label>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-check gc-check-card">
        <input class="form-check-input" type="checkbox" value="1" id="demo_check_gestores">
        <label class="form-check-label" for="demo_check_gestores">Permitir a gestores asociar sucursales tras aprobar la declaración</label>
      </div>
    </div>
  </div>
</section>`,
    snippet:`<div class="row g-3">
    <div class="col-md-6">
        <div class="form-check gc-check-card">
            <input class="form-check-input" type="checkbox" value="1" <?= $dis ?>
                   name="hab_oblig_categoria_declarado" id="hab_oblig_categoria_declarado"
                   <?= $chk('hab_oblig_categoria_declarado') ? 'checked' : '' ?>>
            <label class="form-check-label" for="hab_oblig_categoria_declarado">
                Exigir relación de categorías en el declarado
            </label>
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-check gc-check-card">
            <input class="form-check-input" type="checkbox" value="1" <?= $dis ?>
                   name="hoja_seguridad" id="hoja_seguridad"
                   <?= $chk('hoja_seguridad') ? 'checked' : '' ?>>
            <label class="form-check-label" for="hoja_seguridad">
                Requerir hoja de seguridad para residuo SÍ peligroso
            </label>
        </div>
    </div>
    <?php /* INVERTIDO: marcado envía 0 (ver update.php). */ ?>
    <div class="col-md-6">
        <div class="form-check gc-check-card">
            <input class="form-check-input" type="checkbox" value="0" <?= $dis ?>
                   name="checkdupcampos" id="checkdupcampos"
                   <?= $chkInv('checkdupcampos') ? 'checked' : '' ?>>
            <label class="form-check-label" for="checkdupcampos">
                Replicar frecuencia, precio, unidad y hoja de seguridad al duplicar
            </label>
        </div>
    </div>
</div>`
  },
  {
    id:"tabla-campos-opciones",
    catalogExamples: [],
    implementations: [
      { module:"Mis datos / Configuraciones", agregar:150, file:"cplus/views/mostrarDatos.php", detail:"Bloque interno Campos personalizados Solicitudes: tabla de dos campos, seis columnas y matriz de reglas dentro de #secSolicitudes (líneas 646-783). Conserva el submit nativo de Datos y los nombres del contrato campos_pers_solicitudes." }
    ],
    group:"Bloques",
    name:"Tabla de campos personalizados",
    description:"Tabla de configuración compacta para dos campos personalizados y sus reglas de carga/descarga. El ejemplo productivo vive dentro de Mis datos, no en otro módulo.",
    use:"Usarlo cuando una configuración autónoma necesita editar pocas filas homogéneas con texto, selección y banderas relacionadas. Combina gc-table-card, gc-table-scroll y gc-field-table para conservar columnas y semántica en escritorio y móvil.",
    avoid:"No usarlo para listados de registros, DataTables, paginación ni filtros. No sustituir la tabla por tarjetas en móvil, no nombrar las clases por una pantalla concreta y no copiar popovers o JavaScript de demostración a producción. La ayuda se inicializa de forma acotada desde el JavaScript de la vista.",
    deps:"Bootstrap CSS + Bootstrap JS (Popover) + grinclic-forms.css en el visor. En producción: cplus/scss/_gc-forms.scss, cplus/js/entities/datos/form-manager.js y el bundle Bootstrap ya cargado por CPlus.",
    verified: false,
    accessibility:"La tabla usa caption oculto, th con scope, colgroup de seis columnas y etiquetas accesibles para cada control. gc-table-scroll es enfocable y explica su contenido. Los botones gc-help-button son botones nativos con aria-label; Bootstrap Popover se abre por foco, se cierra al perderlo y también con Escape sin perder el foco del botón.",
    note:"Los previews y snippets de las variantes reproducen el markup y la lógica PHP de cplus/views/mostrarDatos.php. verified permanece en false porque Mis datos figura como parcial en el ledger de migración; la entrada no debe usarse como evidencia de migración completa.",
    variants:[
      {
        name:"Campos personalizados Solicitudes",
        description:"Dos filas y seis columnas: título, formato, disponibilidad y obligatoriedad por solicitud de carga y descarga.",
        preview:`<section class="gc-form-section">
  <h2 class="gc-section-title">Campos personalizados Solicitudes <button class="gc-help-button" type="button" data-bs-toggle="popover" data-bs-content="Defina hasta dos campos adicionales y en qué tipo de solicitud se solicitan. Un campo obligatorio debe estar disponible en el mismo tipo de solicitud." aria-describedby="ayuda-campos-solicitudes-preview" aria-label="Ver ayuda de campos personalizados Solicitudes">?</button></h2>
  <span id="ayuda-campos-solicitudes-preview" class="visually-hidden">Defina hasta dos campos adicionales y en qué tipo de solicitud se solicitan.</span>
  <p class="gc-section-kicker">Cada campo se habilita por tipo de solicitud; «Obligatorio» exige que esté disponible.</p>
  <div class="gc-table-card">
    <div class="gc-table-scroll" tabindex="0" aria-label="Configuración de campos personalizados de Solicitudes">
      <table class="gc-field-table">
        <caption class="visually-hidden">Configure los campos personalizados para solicitudes de carga y descarga.</caption>
        <colgroup>
          <col class="gc-field-table__col--title"><col class="gc-field-table__col--format">
          <col class="gc-field-table__col--flag"><col class="gc-field-table__col--flag">
          <col class="gc-field-table__col--flag"><col class="gc-field-table__col--flag">
        </colgroup>
        <thead><tr><th scope="col">Título</th><th scope="col">Formato</th><th scope="col"><span aria-hidden="true">Disp. sol. carga</span><span class="visually-hidden">Disponible en solicitud de carga</span></th><th scope="col">Oblig.</th><th scope="col"><span aria-hidden="true">Disp. sol. descarga</span><span class="visually-hidden">Disponible en solicitud de descarga</span></th><th scope="col">Oblig.</th></tr></thead>
        <tbody>
          <tr>
            <th scope="row" class="gc-field-table__cell"><input class="form-control" name="campo1S" id="campo1S" value="Nombre de contacto" aria-label="Título del campo 1"></th>
            <td class="gc-field-table__cell"><select class="form-select" name="formato1S" id="formato1S" aria-label="Formato del campo 1"><option value="1">Alfanumérico</option><option value="2" selected>Numérico</option></select></td>
            <td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" name="disp_sol_carga" id="disp_sol_carga" checked aria-label="Disponible en solicitud de carga para el campo 1"></div></td>
            <td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" name="campo1ObligS" id="campo1ObligS" checked aria-label="Obligatorio en solicitud de carga para el campo 1"></div></td>
            <td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" name="disp_sol_descarga" id="disp_sol_descarga" aria-label="Disponible en solicitud de descarga para el campo 1"></div></td>
            <td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" name="campo1ObligSdes" id="campo1ObligSdes" aria-label="Obligatorio en solicitud de descarga para el campo 1"></div></td>
          </tr>
          <tr>
            <th scope="row" class="gc-field-table__cell"><input class="form-control" name="campo2S" id="campo2S" value="Teléfono de contacto" aria-label="Título del campo 2"></th>
            <td class="gc-field-table__cell"><select class="form-select" name="formato2S" id="formato2S" aria-label="Formato del campo 2"><option value="1">Alfanumérico</option><option value="2" selected>Numérico</option></select></td>
            <td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" name="disp_sol_carga2" id="disp_sol_carga2" aria-label="Disponible en solicitud de carga para el campo 2"></div></td>
            <td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" name="campo2ObligS" id="campo2ObligS" aria-label="Obligatorio en solicitud de carga para el campo 2"></div></td>
            <td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" name="disp_sol_descarga2" id="disp_sol_descarga2" checked aria-label="Disponible en solicitud de descarga para el campo 2"></div></td>
            <td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" name="campo2ObligSdes2" id="campo2ObligSdes2" aria-label="Obligatorio en solicitud de descarga para el campo 2"></div></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>`,
        snippet:`<h5 class="gc-section-title mt-4">
  Campos personalizados Solicitudes
  <button class="gc-help-button" type="button" data-bs-toggle="popover" data-bs-content="Defina hasta dos campos adicionales y en qué tipo de solicitud se solicitan. Un campo obligatorio debe estar disponible en el mismo tipo de solicitud." aria-describedby="ayuda-campos-solicitudes" aria-label="Ver ayuda de campos personalizados Solicitudes">?</button>
</h5>
<span id="ayuda-campos-solicitudes" class="visually-hidden">Defina hasta dos campos adicionales y en qué tipo de solicitud se solicitan.</span>
<p class="gc-section-kicker">Cada campo se habilita por tipo de solicitud; «Obligatorio» exige que esté disponible.</p>
<div class="gc-table-card">
  <div class="gc-table-scroll" tabindex="0" aria-label="Configuración de campos personalizados de Solicitudes">
    <table class="gc-field-table">
      <caption class="visually-hidden">Configure los campos personalizados y sus reglas para solicitudes de carga y descarga.</caption>
      <colgroup>
        <col class="gc-field-table__col--title"><col class="gc-field-table__col--format">
        <col class="gc-field-table__col--flag"><col class="gc-field-table__col--flag">
        <col class="gc-field-table__col--flag"><col class="gc-field-table__col--flag">
      </colgroup>
      <thead><tr><th scope="col">Título</th><th scope="col">Formato</th><th scope="col"><span aria-hidden="true">Disp. sol. carga</span><span class="visually-hidden">Disponible en solicitud de carga</span></th><th scope="col">Oblig.</th><th scope="col"><span aria-hidden="true">Disp. sol. descarga</span><span class="visually-hidden">Disponible en solicitud de descarga</span></th><th scope="col">Oblig.</th></tr></thead>
      <tbody>
        <?php for ($i = 1; $i <= 2; $i++) {
          $sufDisp = $i === 1 ? 'disp_sol_carga' : 'disp_sol_carga2';
          $sufDispD = $i === 1 ? 'disp_sol_descarga' : 'disp_sol_descarga2';
          $sufOblig = $i === 1 ? 'campo1ObligS' : 'campo2ObligS';
          $sufObligD = $i === 1 ? 'campo1ObligSdes' : 'campo2ObligSdes2';
          $campoN = 'campo' . $i . 'S';
          $formatoN = 'formato' . $i . 'S';
          $fmtVal = (string) ($solVal($formatoN) ?? '');
        ?>
        <tr>
          <th scope="row" class="gc-field-table__cell"><label for="<?= $campoN ?>" class="visually-hidden">Título del campo <?= $i ?></label><input type="text" name="<?= $campoN ?>" id="<?= $campoN ?>" class="form-control" maxlength="150" value="<?= cplus_e((string) ($solVal($campoN) ?? '')) ?>" <?= $ro ?>></th>
          <td class="gc-field-table__cell"><label for="<?= $formatoN ?>" class="visually-hidden">Formato del campo <?= $i ?></label><select name="<?= $formatoN ?>" id="<?= $formatoN ?>" class="form-select" <?= $dis ?>><option value="1" <?= $fmtVal === '1' ? 'selected' : '' ?>>Alfanumérico</option><option value="2" <?= $fmtVal === '2' ? 'selected' : '' ?>>Numérico</option></select></td>
          <?php foreach ([[$sufDisp, 'Disponible en solicitud de carga'], [$sufOblig, 'Obligatorio en solicitud de carga'], [$sufDispD, 'Disponible en solicitud de descarga'], [$sufObligD, 'Obligatorio en solicitud de descarga']] as [$name, $label]) { ?>
            <td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" value="1" <?= $dis ?> name="<?= $name ?>" id="<?= $name ?>" aria-label="<?= cplus_e($label) ?> para el campo <?= $i ?>" <?= ((string) ($solVal($name) ?? '') === '1') ? 'checked' : '' ?>></div></td>
          <?php } ?>
        </tr>
        <?php } ?>
      </tbody>
    </table>
  </div>
</div>`
      },
      {
        name:"Reglas por solicitud",
        description:"La misma tabla agrupa las reglas bajo una cabecera y alinea los checkbox de carga y descarga en las dos últimas columnas.",
        preview:`<div class="gc-table-card">
  <div class="gc-table-scroll" tabindex="0" aria-label="Reglas de Solicitudes">
    <table class="gc-field-table">
      <colgroup>
        <col class="gc-field-table__col--title"><col class="gc-field-table__col--format">
        <col class="gc-field-table__col--flag"><col class="gc-field-table__col--flag">
        <col class="gc-field-table__col--flag"><col class="gc-field-table__col--flag">
      </colgroup>
      <tbody>
        <tr class="gc-field-table__section"><th colspan="6" scope="rowgroup">Regla</th></tr>
        <tr class="gc-field-table__rule-head"><th colspan="4" scope="colgroup">Regla</th><th scope="col">Sol. carga</th><th scope="col">Sol. descarga</th></tr>
        <tr>
          <th colspan="4" scope="row" class="gc-field-table__rule-label">Exigir adjunto en la solicitud <button class="gc-help-button" type="button" data-bs-toggle="popover" data-bs-content="Exige un adjunto antes de guardar la solicitud del tipo correspondiente." aria-label="Ver ayuda de exigir adjunto en la solicitud">?</button></th>
          <td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" name="obligadj_solcarga" id="obligadj_solcarga" aria-label="Exigir adjunto en la solicitud de carga"></div></td>
          <td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" name="obligadj_soldes" id="obligadj_soldes" checked aria-label="Exigir adjunto en la solicitud de descarga"></div></td>
        </tr>
        <tr>
          <th colspan="4" scope="row" class="gc-field-table__rule-label">Exigir relacionar servicios adicionales en solicitudes</th>
          <td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" name="hab_oblig_especificaciones" id="hab_oblig_especificaciones" checked aria-label="Exigir relacionar servicios adicionales en solicitud de carga"></div></td>
          <td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" name="hab_oblig_especificaciones_des" id="hab_oblig_especificaciones_des" aria-label="Exigir relacionar servicios adicionales en solicitud de descarga"></div></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
        snippet:`<?php foreach ($reglasSolicitud as $regla) { ?>
  <tr>
    <th colspan="4" scope="row" class="gc-field-table__rule-label">
      <span><?= cplus_e($regla['label']) ?></span>
      <button class="gc-help-button" type="button" data-bs-toggle="popover" data-bs-content="<?= cplus_e($regla['help']) ?>" aria-label="Ver ayuda de <?= cplus_e($regla['label']) ?>">?</button>
    </th>
    <?php foreach (['carga', 'descarga'] as $tipo) { $name = $regla[$tipo]; ?>
      <td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" value="1" <?= $dis ?> name="<?= $name ?>" id="<?= $name ?>" aria-label="<?= cplus_e($regla['label']) ?> para solicitud de <?= $tipo ?>" <?= $chk($name) ? 'checked' : '' ?>></div></td>
    <?php } ?>
  </tr>
<?php } ?>`
      }
    ],
    snippet:`<section class="gc-form-section" aria-label="Campos personalizados de Solicitudes">
  <h5 class="gc-section-title">Campos personalizados Solicitudes <button class="gc-help-button" type="button" data-bs-toggle="popover" data-bs-content="Defina hasta dos campos adicionales y en qué tipo de solicitud se solicitan. Un campo obligatorio debe estar disponible en el mismo tipo de solicitud." aria-describedby="ayuda-campos-solicitudes-codigo" aria-label="Ver ayuda de campos personalizados Solicitudes">?</button></h5>
  <span id="ayuda-campos-solicitudes-codigo" class="visually-hidden">Defina hasta dos campos adicionales y en qué tipo de solicitud se solicitan.</span>
  <p class="gc-section-kicker">Cada campo se habilita por tipo de solicitud; «Obligatorio» exige que esté disponible.</p>
  <div class="gc-table-card">
    <div class="gc-table-scroll" tabindex="0" aria-label="Configuración de campos personalizados de Solicitudes">
      <table class="gc-field-table">
        <caption class="visually-hidden">Configure los campos personalizados y sus reglas para solicitudes de carga y descarga.</caption>
        <colgroup><col class="gc-field-table__col--title"><col class="gc-field-table__col--format"><col class="gc-field-table__col--flag"><col class="gc-field-table__col--flag"><col class="gc-field-table__col--flag"><col class="gc-field-table__col--flag"></colgroup>
        <thead><tr><th scope="col">Título</th><th scope="col">Formato</th><th scope="col"><span aria-hidden="true">Disp. sol. carga</span><span class="visually-hidden">Disponible en solicitud de carga</span></th><th scope="col">Oblig.</th><th scope="col"><span aria-hidden="true">Disp. sol. descarga</span><span class="visually-hidden">Disponible en solicitud de descarga</span></th><th scope="col">Oblig.</th></tr></thead>
        <tbody>
          <tr><th scope="row" class="gc-field-table__cell"><label for="campo1S" class="visually-hidden">Título del campo 1</label><input type="text" name="campo1S" id="campo1S" class="form-control" maxlength="150" value="Nombre de contacto"></th><td class="gc-field-table__cell"><label for="formato1S" class="visually-hidden">Formato del campo 1</label><select name="formato1S" id="formato1S" class="form-select"><option value="1">Alfanumérico</option><option value="2" selected>Numérico</option></select></td><td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" value="1" name="disp_sol_carga" id="disp_sol_carga" checked aria-label="Disponible en solicitud de carga para el campo 1"></div></td><td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" value="1" name="campo1ObligS" id="campo1ObligS" checked aria-label="Obligatorio en solicitud de carga para el campo 1"></div></td><td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" value="1" name="disp_sol_descarga" id="disp_sol_descarga" aria-label="Disponible en solicitud de descarga para el campo 1"></div></td><td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" value="1" name="campo1ObligSdes" id="campo1ObligSdes" aria-label="Obligatorio en solicitud de descarga para el campo 1"></div></td></tr>
          <tr><th scope="row" class="gc-field-table__cell"><label for="campo2S" class="visually-hidden">Título del campo 2</label><input type="text" name="campo2S" id="campo2S" class="form-control" maxlength="150" value="Teléfono de contacto"></th><td class="gc-field-table__cell"><label for="formato2S" class="visually-hidden">Formato del campo 2</label><select name="formato2S" id="formato2S" class="form-select"><option value="1">Alfanumérico</option><option value="2" selected>Numérico</option></select></td><td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" value="1" name="disp_sol_carga2" id="disp_sol_carga2" aria-label="Disponible en solicitud de carga para el campo 2"></div></td><td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" value="1" name="campo2ObligS" id="campo2ObligS" aria-label="Obligatorio en solicitud de carga para el campo 2"></div></td><td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" value="1" name="disp_sol_descarga2" id="disp_sol_descarga2" checked aria-label="Disponible en solicitud de descarga para el campo 2"></div></td><td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" value="1" name="campo2ObligSdes2" id="campo2ObligSdes2" aria-label="Obligatorio en solicitud de descarga para el campo 2"></div></td></tr>
        </tbody>
        <tbody>
          <tr class="gc-field-table__section"><th colspan="6" scope="rowgroup">Regla</th></tr>
          <tr class="gc-field-table__rule-head"><th colspan="4" scope="colgroup">Regla</th><th scope="col">Sol. carga</th><th scope="col">Sol. descarga</th></tr>
          <tr><th colspan="4" scope="row" class="gc-field-table__rule-label">Exigir adjunto en la solicitud <button class="gc-help-button" type="button" data-bs-toggle="popover" data-bs-content="Exige un adjunto antes de guardar la solicitud del tipo correspondiente." aria-label="Ver ayuda de exigir adjunto en la solicitud">?</button></th><td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" value="1" name="obligadj_solcarga" id="obligadj_solcarga" aria-label="Exigir adjunto en la solicitud de carga"></div></td><td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" value="1" name="obligadj_soldes" id="obligadj_soldes" checked aria-label="Exigir adjunto en la solicitud de descarga"></div></td></tr>
          <tr><th colspan="4" scope="row" class="gc-field-table__rule-label">Exigir relacionar servicios adicionales en solicitudes <button class="gc-help-button" type="button" data-bs-toggle="popover" data-bs-content="Exige relacionar servicios adicionales antes de guardar la solicitud del tipo correspondiente." aria-label="Ver ayuda de exigir relacionar servicios adicionales en solicitudes">?</button></th><td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" value="1" name="hab_oblig_especificaciones" id="hab_oblig_especificaciones" checked aria-label="Exigir relacionar servicios adicionales en solicitud de carga"></div></td><td class="gc-field-table__cell gc-field-table__cell--flag"><div class="form-check gc-field-table__check"><input class="form-check-input" type="checkbox" value="1" name="hab_oblig_especificaciones_des" id="hab_oblig_especificaciones_des" aria-label="Exigir relacionar servicios adicionales en solicitud de descarga"></div></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>`
  },
  {
    id:"carga-pdf",
    catalogExamples: ["gc-formulario-usuarios","gc-formulario-configuraciones"],
    implementations: [
      { module: "Mis datos / Configuraciones", agregar: 150, file: "cplus/views/mostrarDatos.php", detail: "Archivo de licencia ambiental: div.gc-upload-field.mt-2 con label, input type=file class=form-control accept=\".pdf,application/pdf\" y aria-describedby, más div.gc-upload-specs con tipo y peso máximo (líneas 483-488). El visor del PDF ya cargado está diferido, así que esta instancia no trae la tarjeta gc-upload-preview (comentario en las líneas 489-490)" },
    ],
    group:"Campos",
    name:"Cargar archivo PDF",
    description:"Input file real para documentos PDF con especificaciones y enlace para ver el documento cargado en una ventana nueva.",
    use:"Usarlo para soportes, licencias, certificados y anexos administrativos en PDF.",
    avoid:"No usarlo sin aclarar tipo de archivo y peso máximo.",
    deps:"Bootstrap CSS + grinclic-forms.css",
    verified: true,
    accessibility:"El enlace de vista previa debe abrir en nueva ventana con texto claro y target=\"_blank\".",
    note:"El <code>verified</code> cubre solo el núcleo del snippet: <code>gc-upload-field</code> + label + <code>input type=\"file\"</code> + <code>gc-upload-specs</code>, contrastado contra <code>cplus/views/mostrarDatos.php:483-488</code>. Divergencia: allí el contenedor lleva <code>mt-2</code> (cuelga de un textarea), no <code>mb-3</code>, y el peso máximo real es 4 MB. <strong>Las tarjetas <code>gc-upload-empty</code> y <code>gc-upload-preview</code> de los estados son propuesta del catálogo</strong>: en esa instancia el visor del PDF ya cargado está diferido y no hay endpoint en el API, así que hoy no tienen instancia productiva en ningún módulo validado.",
    states:{
      enabled:`<div class="row g-3">
  <div class="col-lg-6">
    <div class="mb-3 gc-upload-field">
      <label for="licencia_demo_vacio" class="form-label">Archivo licencia ambiental</label>
      <input class="form-control" type="file" id="licencia_demo_vacio" name="licencia_archivo" accept=".pdf,application/pdf" aria-describedby="licencia_demo_vacio_specs">
      <div id="licencia_demo_vacio_specs" class="gc-upload-specs">Tipo permitido: PDF. Peso máximo: 4 MB.</div>
      <div class="gc-upload-empty">Sin archivo adjunto. Cuando se cargue un PDF, aquí se mostrará su nombre y el acceso para verlo.</div>
    </div>
  </div>
  <div class="col-lg-6">
    <div class="mb-3 gc-upload-field">
      <label for="licencia_demo" class="form-label">Archivo licencia ambiental</label>
      <input class="form-control" type="file" id="licencia_demo" name="licencia_archivo" accept=".pdf,application/pdf" aria-describedby="licencia_demo_specs">
      <div id="licencia_demo_specs" class="gc-upload-specs">Tipo permitido: PDF. Peso máximo: 4 MB.</div>
      <div class="gc-upload-preview" aria-label="Documento PDF cargado">
        <span class="gc-upload-file-icon" aria-hidden="true">PDF</span>
        <div class="gc-upload-meta">
          <strong>licencia_ambiental_2026.pdf</strong>
          <span>Documento legible, vigente y sin contraseña.</span>
        </div>
        <a class="btn btn-outline-secondary btn-sm ms-auto" href="#" target="_blank" rel="noopener">Ver documento</a>
      </div>
    </div>
  </div>
</div>`,
      error:`<div class="mb-3 gc-upload-field">
  <label for="licencia_error" class="form-label">Archivo licencia ambiental</label>
  <input class="form-control is-invalid" type="file" id="licencia_error" name="licencia_archivo" accept=".pdf,application/pdf" aria-describedby="licencia_error_help licencia_error_specs">
  <div id="licencia_error_help" class="gc-help is-invalid">Adjunta un archivo PDF válido.</div>
  <div id="licencia_error_specs" class="gc-upload-specs">Tipo permitido: PDF. Peso máximo: 4 MB.</div>
</div>`,
      disabled:`<div class="mb-3 gc-upload-field">
  <label for="licencia_disabled" class="form-label">Archivo licencia ambiental</label>
  <input class="form-control" type="file" id="licencia_disabled" name="licencia_archivo" accept=".pdf,application/pdf" disabled>
  <div class="gc-upload-specs">Tipo permitido: PDF. Peso máximo: 4 MB.</div>
  <div class="gc-upload-preview" aria-label="Documento PDF registrado">
    <span class="gc-upload-file-icon" aria-hidden="true">PDF</span>
    <div class="gc-upload-meta">
      <strong>licencia_ambiental_2026.pdf</strong>
      <span>Archivo registrado no editable.</span>
    </div>
    <a class="btn btn-outline-secondary btn-sm ms-auto disabled" href="#" aria-disabled="true">Ver documento</a>
  </div>
</div>`
    },
    snippet:`<!-- Núcleo verificado contra cplus/views/mostrarDatos.php:483-488.
     Las tarjetas gc-upload-empty y gc-upload-preview de los estados son
     propuesta del catálogo: no tienen instancia en un módulo validado. -->
<div class="mb-3 gc-upload-field">
  <label for="licencia_archivo" class="form-label">Archivo licencia ambiental</label>
  <input class="form-control" type="file" id="licencia_archivo" name="licencia_archivo" accept=".pdf,application/pdf" aria-describedby="licencia_archivo_specs">
  <div id="licencia_archivo_specs" class="gc-upload-specs">Tipo permitido: PDF. Peso máximo: 4 MB.</div>
</div>`
  },
  {
    id:"carga-logo-imagen",
    catalogExamples: ["gc-formulario-configuraciones"],
    implementations: [
      { module: "Proveedores", agregar: 128, file: "cplus/views/mostrarProveedores.php", detail: "(variante propia) carga de firma con croppie.js, no el patrón gc-upload del catálogo (líneas 139-156)" },
    ],
    group:"Campos",
    name:"Cargar logo o imagen",
    description:"Input file para imagen o logo con especificaciones y vista previa en modal Bootstrap pequeño antes de confirmar la carga.",
    use:"Usarlo para logos empresariales, firmas o imágenes institucionales.",
    avoid:"No usarlo para documentos PDF o soportes administrativos; para eso usa Cargar archivo PDF.",
    deps:"Bootstrap CSS + Bootstrap JS Modal + grinclic-forms.css + grinclic-forms.js",
    verified: true,
    accessibility:"El input conserva accept para limitar formatos. El modal tiene título, imagen alternativa y botones claros para cancelar o confirmar la carga.",
    states:{
      enabled:`<div class="row g-3">
  <div class="col-lg-6">
    <div class="mb-3 gc-upload-field">
      <label for="logo_vacio_demo" class="form-label">Logo o imagen corporativa</label>
      <input class="form-control" type="file" id="logo_vacio_demo" name="logo" accept="image/png,image/jpeg,image/webp,image/svg+xml" aria-describedby="logo_vacio_specs" data-gc-image-preview-input data-gc-image-preview-target="#logo_preview_modal_demo">
      <div id="logo_vacio_specs" class="gc-upload-specs">Formatos permitidos: PNG, JPG, JPEG, WEBP o SVG. Peso máximo recomendado: 5 MB.</div>
      <div class="gc-upload-empty">Sin archivo cargado. Al seleccionar una imagen se abrirá una vista previa antes de confirmar.</div>
    </div>
  </div>
  <div class="col-lg-6">
    <div class="mb-3 gc-upload-field">
      <label for="logo_cargado_demo" class="form-label">Logo o imagen corporativa</label>
      <input class="form-control" type="file" id="logo_cargado_demo" name="logo" accept="image/png,image/jpeg,image/webp,image/svg+xml" aria-describedby="logo_cargado_specs" data-gc-image-preview-input data-gc-image-preview-target="#logo_preview_modal_demo">
      <div id="logo_cargado_specs" class="gc-upload-specs">Formatos permitidos: PNG, JPG, JPEG, WEBP o SVG. Peso máximo recomendado: 5 MB.</div>
      <div class="gc-upload-preview" aria-label="Logo cargado">
        <div class="gc-upload-thumb"><img src="assets/logo-demo.svg" alt="Ejemplo de logo demo"></div>
        <div class="gc-upload-meta"><strong>logo_empresa.svg</strong><span>Imagen lista para revisar antes de cargar.</span></div>
        <button class="btn btn-outline-secondary btn-sm ms-auto" type="button" data-bs-toggle="modal" data-bs-target="#logo_preview_modal_demo">Ver vista previa</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="logo_preview_modal_demo" tabindex="-1" aria-labelledby="logo_preview_modal_demo_title" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered gc-logo-preview-dialog">
    <div class="modal-content gc-image-preview-modal">
      <div class="modal-header">
        <h2 class="modal-title fs-6" id="logo_preview_modal_demo_title">Vista previa del logo</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body">
        <div class="gc-logo-preview-stage"><img src="assets/logo-demo.svg" alt="Vista previa del logo" data-gc-image-preview-output></div>
        <p class="gc-logo-preview-name" data-gc-image-preview-name>logo_empresa.svg</p>
      </div>
      <div class="gc-logo-preview-actions">
        <button class="btn btn-outline-secondary" type="button" data-bs-dismiss="modal">Cancelar</button>
        <button class="btn btn-success" type="button" data-bs-dismiss="modal">Cargar imagen</button>
      </div>
    </div>
  </div>
</div>`,
      error:`<div class="mb-3 gc-upload-field">
  <label for="logo_error" class="form-label">Logo o imagen corporativa</label>
  <input class="form-control is-invalid" type="file" id="logo_error" name="logo" accept="image/png,image/jpeg,image/webp,image/svg+xml" aria-describedby="logo_error_help logo_error_specs">
  <div id="logo_error_help" class="gc-help is-invalid">Carga una imagen válida en PNG, JPG, JPEG, WEBP o SVG.</div>
  <div id="logo_error_specs" class="gc-upload-specs">Formatos permitidos: PNG, JPG, JPEG, WEBP o SVG. Peso máximo recomendado: 5 MB.</div>
</div>`,
      disabled:`<div class="mb-3 gc-upload-field">
  <label for="logo_disabled" class="form-label">Logo o imagen corporativa</label>
  <input class="form-control" type="file" id="logo_disabled" name="logo" accept="image/png,image/jpeg,image/webp,image/svg+xml" disabled>
  <div class="gc-upload-specs">Formatos permitidos: PNG, JPG, JPEG, WEBP o SVG. Peso máximo recomendado: 5 MB.</div>
  <div class="gc-upload-preview" aria-label="Logo registrado">
    <div class="gc-upload-thumb"><img src="assets/logo-demo.svg" alt="Logo demo registrado"></div>
    <div class="gc-upload-meta"><strong>logo_actual.svg</strong><span>Imagen registrada no editable.</span></div>
  </div>
</div>`
    },
    snippet:`<div class="mb-3 gc-upload-field">
  <label for="logo" class="form-label">Logo o imagen corporativa</label>
  <input class="form-control" type="file" id="logo" name="logo" accept="image/png,image/jpeg,image/webp,image/svg+xml" aria-describedby="logo_specs" data-gc-image-preview-input data-gc-image-preview-target="#logo_preview_modal">
  <div id="logo_specs" class="gc-upload-specs">Formatos permitidos: PNG, JPG, JPEG, WEBP o SVG. Peso máximo recomendado: 5 MB.</div>
  <div class="gc-upload-preview" aria-label="Logo cargado">
    <div class="gc-upload-thumb"><img src="assets/logo-demo.svg" alt="Ejemplo de logo demo"></div>
    <div class="gc-upload-meta"><strong>logo_empresa.svg</strong><span>Imagen lista para revisar antes de cargar.</span></div>
    <button class="btn btn-outline-secondary btn-sm ms-auto" type="button" data-bs-toggle="modal" data-bs-target="#logo_preview_modal">Ver vista previa</button>
  </div>
</div>

<div class="modal fade" id="logo_preview_modal" tabindex="-1" aria-labelledby="logo_preview_modal_title" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered gc-logo-preview-dialog">
    <div class="modal-content gc-image-preview-modal">
      <div class="modal-header">
        <h2 class="modal-title fs-6" id="logo_preview_modal_title">Vista previa del logo</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body">
        <div class="gc-logo-preview-stage"><img src="assets/logo-demo.svg" alt="Vista previa del logo" data-gc-image-preview-output></div>
        <p class="gc-logo-preview-name" data-gc-image-preview-name>logo_empresa.svg</p>
      </div>
      <div class="gc-logo-preview-actions">
        <button class="btn btn-outline-secondary" type="button" data-bs-dismiss="modal">Cancelar</button>
        <button class="btn btn-success" type="button" data-bs-dismiss="modal">Cargar imagen</button>
      </div>
    </div>
  </div>
</div>`
  },
  {
    id:"campo-validado",
    catalogExamples: ["gc-formulario-configuraciones"],
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "(variante propia) gc-help como texto de ayuda estático bajo el campo, sin botón ? con popover (líneas 724-784)" },
      { module: "Embalajes", agregar: 106, file: "cplus/views/mostrarEmbalajes.php", detail: "(variante propia) gc-help estático bajo nombre (línea 159) y bajo código (línea 167)" },
    ],
    group:"Campos",
    name:"Campo con validación",
    description:"Input con mensaje de validación y ayuda contextual en globo. La ayuda aparece al lado del botón de interrogación como popover, sin abrir espacio debajo del campo.",
    use:"Usarlo para correos, URLs o datos con regla de formato verificable.",
    avoid:"No usarlo cuando no exista validación real o regla de negocio.",
    deps:"Bootstrap CSS + grinclic-forms.css. El botón de ayuda con globo necesita además el Popover de Bootstrap JS, que CPlus no inicializa.",
    accessibility:"El botón de ayuda usa data-bs-toggle=\"popover\" y aria-label. El aria-describedby del mensaje de validación hay que declararlo a mano en la vista: el div de error que inyecta GcValidate se crea sin id y sin role=\"alert\", así que el mensaje dinámico no queda asociado al control.",
    note:"<strong>Sin verificar.</strong> El botón <code>gc-help-button</code> con <code>data-bs-toggle=\"popover\"</code> no tiene consumidor en cplus: ningún JS inicializa el Popover. Lo productivo es input + <code>div.gc-help</code> estático + <code>data-gc-validate</code> / <code>data-gc-rule</code>. En <code>cplus/js/core/gc-validate.js</code>, <code>data-gc-validate</code> va en el form y le añade <code>novalidate</code>; <code>data-gc-rule</code> va por campo y solo admite <code>email</code>, <code>nit</code> y <code>password</code>; el mensaje lo inserta GcValidate como <code>div.gc-help.is-invalid[data-gc-error]</code> detrás del control. Mismas reglas en PHP: <code>cplus/runtime/validators.php</code>.",
    states:{
      enabled:`<div class="mb-3">
  <label for="sitio_web_demo" class="form-label">Sitio web <button class="gc-help-button" type="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="right" data-bs-content="Incluye https:// para evitar enlaces incompletos." aria-label="Ver ayuda del sitio web">?</button></label>
  <input type="url" class="form-control" id="sitio_web_demo" name="sitio_web" placeholder="https://www.empresa.com" value="https://www.demo.com" aria-describedby="sitio_web_demo_help">
  <div id="sitio_web_demo_help" class="gc-help is-valid">URL válida.</div>
</div>`,
      error:`<div class="mb-3">
  <label for="sitio_web_error" class="form-label">Sitio web <button class="gc-help-button" type="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="right" data-bs-content="Ejemplo: https://www.empresa.com" aria-label="Ver ayuda del sitio web">?</button></label>
  <input type="url" class="form-control is-invalid" id="sitio_web_error" name="sitio_web" value="correo" aria-describedby="sitio_web_error_help">
  <div id="sitio_web_error_help" class="gc-help is-invalid">Ingresa una URL válida.</div>
</div>`,
      disabled:`<div class="mb-3">
  <label for="sitio_web_disabled" class="form-label">Sitio web</label>
  <input type="url" class="form-control" id="sitio_web_disabled" name="sitio_web" value="https://www.demo.com" disabled>
</div>`
    },
    snippet:`<form data-gc-validate>
  <div class="mb-3">
    <label for="correo" class="form-label"><span class="gc-required">*</span>Correo <button class="gc-help-button" type="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="right" data-bs-content="Recibe notificaciones del sistema y recuperacion de clave." aria-label="Ver ayuda del correo">?</button></label>
    <input type="email" class="form-control" id="correo" name="correo" placeholder="Correo" maxlength="300" required data-gc-rule="email">
    <div class="gc-help">Recibe notificaciones del sistema y recuperacion de clave</div>
  </div>
</form>`
  },
  {
    id:"alertas-librerias",
    catalogExamples: ["gc-formulario-usuarios","gc-formulario-roles","campo-validado"],
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/js/entities/usuarios/form-manager.js", detail: "El consumidor más denso: error/warning/info con override de título y showLoading/hideLoading alrededor del guardado (líneas 46-94, 459-467, 752-809)" },
      { module: "Embalajes", agregar: 106, file: "cplus/js/entities/embalajes/datatable.js", detail: "CplusAlerts.error con título propio al detectar código duplicado (línea 101)" },
      { module: "Sucursales", agregar: 127, file: "cplus/js/entities/sucursales/form-manager.js", detail: "CplusAlerts.warning para reglas de negocio del formulario (código duplicado en la línea 413, origen no elegido de la lista en la 666) y showLoading al guardar (líneas 675-676)" },
      { module: "Unidades de negocio", agregar: 120, file: "cplus/js/entities/lineas_negocio/datatable.js", detail: "Helper confirmThen sobre CplusAlerts.confirm, con window.confirm nativo como respaldo (líneas 105-112, el respaldo en la 111); al lado, notifyOk envuelve el toast de éxito (líneas 96-99)" },
      { module: "Embalajes", agregar: 106, file: "cplus/js/core/entity-actions.js", detail: "confirm danger y toast genéricos del CRUD estándar: Embalajes los hereda vía CplusStandardActions.crud (embalajes/datatable.js:20 → standard-actions.js:130-138 → entity-actions.js:36-98)" },
      { module: "Roles", agregar: 124, file: "cplus/js/entities/roles/form-manager.js", detail: "Helpers locales sobre CplusAlerts: notify() elige error o toast según el tipo (líneas 50-54) y el guardado envuelve showLoading/hideLoading (líneas 193-198, mensaje de redirección en la 246)" },
    ],
    group:"Feedback",
    name:"Alertas CplusAlerts (motor SweetAlert2)",
    description:"Superficie de alertas de CPlus: window.CplusAlerts, definida en cplus/js/core/alerts.js. El motor es SweetAlert2 con la skin gc-swal-*. Dos formatos: modal para lo que exige lectura o decisión, y toast para confirmaciones breves que no interrumpen el flujo.",
    use:"Usar success, error, warning e info para lo que el usuario debe leer antes de continuar, y toast para resultados rápidos ya consumados. Usar confirm antes de cualquier acción destructiva, encadenando then sobre su promesa. Usar flashFromSession para los mensajes flash_* que llegan del servidor.",
    avoid:"No llamar Swal.fire ni cargar SweetAlert2 por CDN en una vista CPlus: se pierden la skin, el mapeo de tonos y el z-index sobre el overlay de carga. No usar toast para decisiones ni para errores que bloquean. No ignorar el booleano que devuelve confirm.",
    deps:"cplus/js/core/alerts.js, ya servido por el bloque core de cplus/js/sources.php. SweetAlert2 11 viaja en cplus-vendor.bundle.min.js y la skin gc-swal-* se compila desde _gc-forms.scss. showLoading y hideLoading delegan en CplusLoading.",
    verified: true,
    accessibility:"El overlay de carga se marca con role=alert y aria-busy=true. Los toasts se cierran solos a los 3200 ms: no deben llevar información crítica ni la única vía de acción. confirm resuelve false ante cancelar, clic fuera o ESC, así que el teclado nunca deja el flujo a medias. Tras cerrar, el foco debe volver al control que la disparó.",
    note:"Cadena de respaldo en <code>cplus/js/core/alerts.js</code>: si <code>window.Swal</code> falta, prueba <code>window.swal</code> y cae a <code>alert()</code> y <code>confirm()</code> nativos; en CPlus el bundle define <code>window.swal</code> como alias de SweetAlert2, así que el escalón intermedio no existe. <strong>Divergencia:</strong> <code>residuos_inventariables/form-manager.js</code> llama al global <code>swal(...)</code> con sintaxis v1 sin pasar por CplusAlerts.",
    variants:[
      {
        name:"Guía: modal o toast",
        description:"Criterio de selección entre los dos formatos, con un ejemplo de cada caso.",
        preview:`<div class="gc-alert-guide">
  <section class="gc-alert-guide-card">
    <h3>Alertas modales / modal dialogs</h3>
    <p>Interrumpen el flujo y se usan cuando el usuario debe confirmar, decidir o leer un bloqueo antes de continuar.</p>
    <div class="gc-alert-subgrid">
      <div class="gc-alert-example-block">
        <h4>Confirmar actualización</h4>
        <p>Antes de guardar datos sensibles o configuraciones críticas.</p>
        <button class="btn btn-success" type="button" data-gc-swal-demo="modal-update">Ver ejemplo</button>
      </div>
      <div class="gc-alert-example-block">
        <h4>Confirmar eliminación</h4>
        <p>Antes de eliminar registros o información con trazabilidad.</p>
        <button class="btn btn-outline-secondary" type="button" data-gc-swal-demo="modal-delete">Ver ejemplo</button>
      </div>
      <div class="gc-alert-example-block">
        <h4>Advertir cambio sensible</h4>
        <p>Cuando el cambio afecta permisos, navegación o reglas operativas.</p>
        <button class="btn btn-outline-secondary" type="button" data-gc-swal-demo="modal-sensitive">Ver ejemplo</button>
      </div>
      <div class="gc-alert-example-block">
        <h4>Error que impide continuar</h4>
        <p>Cuando el usuario debe corregir algo antes de seguir.</p>
        <button class="btn btn-outline-secondary" type="button" data-gc-swal-demo="modal-error">Ver ejemplo</button>
      </div>
      <div class="gc-alert-example-block">
        <h4>Éxito final de acción importante</h4>
        <p>Cuando una actualización crítica terminó correctamente.</p>
        <button class="btn btn-success" type="button" data-gc-swal-demo="modal-success">Ver ejemplo</button>
      </div>
    </div>
  </section>
  <section class="gc-alert-guide-card">
    <h3>Notificaciones toast / toast notifications</h3>
    <p>No bloquean la navegación. Se usan para confirmar resultados rápidos y desaparecen automáticamente.</p>
    <div class="gc-alert-subgrid">
      <div class="gc-alert-example-block">
        <h4>Cambios guardados</h4>
        <p>Confirmación breve de guardado exitoso.</p>
        <button class="btn btn-success" type="button" data-gc-swal-demo="toast-saved">Ver toast</button>
      </div>
      <div class="gc-alert-example-block">
        <h4>Código copiado</h4>
        <p>Confirmación al copiar código o datos.</p>
        <button class="btn btn-success" type="button" data-gc-swal-demo="toast-copied">Ver toast</button>
      </div>
      <div class="gc-alert-example-block">
        <h4>Archivo cargado correctamente</h4>
        <p>Confirmación tras cargar un documento o imagen.</p>
        <button class="btn btn-success" type="button" data-gc-swal-demo="toast-uploaded">Ver toast</button>
      </div>
      <div class="gc-alert-example-block">
        <h4>Filtro aplicado</h4>
        <p>Confirmación de un cambio de vista o filtro.</p>
        <button class="btn btn-outline-secondary" type="button" data-gc-swal-demo="toast-filtered">Ver toast</button>
      </div>
      <div class="gc-alert-example-block">
        <h4>Registro actualizado</h4>
        <p>Confirmación rápida de actualización puntual.</p>
        <button class="btn btn-success" type="button" data-gc-swal-demo="toast-updated">Ver toast</button>
      </div>
    </div>
  </section>
</div>
<div class="gc-alert-rules mt-3">
  <strong>Regla para el equipo:</strong> modal dialog para decisiones críticas; toast notification para resultados rápidos. Ambos deben usar clases gc-swal-* y los tonos definidos por la identidad Grinclic.
</div>`,
        snippet:`// Superficie completa. La vista CPlus no carga nada por CDN ni define mixins:
// SweetAlert2 ya viene en cplus/js/dist/cplus-vendor.bundle.min.js y la skin
// gc-swal-* se compila desde cplus/scss/_gc-forms.scss.

CplusAlerts.success('Proveedor guardado correctamente.');
CplusAlerts.error('El código interno ya existe. Ingrese uno diferente.');
CplusAlerts.warning('Revisa la información antes de continuar.');
CplusAlerts.info('No hay registros para exportar con los filtros seleccionados.');

CplusAlerts.toast('Cambios guardados.');
CplusAlerts.toast('Filtro aplicado.', 'warning');

CplusAlerts.confirm({
  title: '¿Confirmar?',
  text: '¿Eliminar este registro? Esta acción no se puede deshacer.',
  confirmText: 'Eliminar',
  cancelText: 'Cancelar',
  danger: true
}).then(function (confirmado) {
  if (!confirmado) return;
  // ejecutar la acción
});

CplusAlerts.showLoading('Guardando…');
CplusAlerts.hideLoading();`
      },
      {
        name:"Éxito",
        description:"Modal de cierre para una acción importante que terminó bien. Título por defecto ¡Éxito! y un único botón verde Entendido. Para un guardado rutinario usa mejor el toast.",
        preview:`<section class="gc-alert-guide-card">
  <h3>Modal de éxito</h3>
  <p>Botón de confirmación con btn btn-success gc-swal-confirm, el mismo par de clases que arma CplusAlerts.</p>
  <div class="gc-swal-popup p-4 text-center">
    <div class="gc-swal-title mb-2">¡Éxito!</div>
    <div class="gc-swal-text mb-3">Proveedor guardado correctamente.</div>
    <div class="d-flex justify-content-center">
      <button class="btn btn-success gc-swal-confirm" type="button">Entendido</button>
    </div>
  </div>
  <div class="gc-alert-actions">
    <button class="btn btn-success" type="button" data-gc-swal-demo="modal-success">Ver la demo del visor</button>
  </div>
</section>`,
        snippet:`// Título por defecto: '¡Éxito!'. Botón: 'Entendido'. No devuelve valor.
CplusAlerts.success('Proveedor guardado correctamente.');

// Segundo argumento: override de opciones del motor, útil para el título.
CplusAlerts.success('Registro creado.', { title: 'Operación completada' });`
      },
      {
        name:"Error",
        description:"Modal de bloqueo: el usuario debe corregir algo antes de seguir. Es el único nivel cuyo botón sale naranja, con gc-swal-confirm--warning en lugar de btn-success.",
        preview:`<section class="gc-alert-guide-card">
  <h3>Modal de error</h3>
  <p>Para el nivel error, CplusAlerts cambia el botón a btn gc-swal-confirm--warning: naranja y sin btn-success.</p>
  <div class="gc-swal-popup p-4 text-center">
    <div class="gc-swal-title mb-2">¡Código duplicado!</div>
    <div class="gc-swal-text mb-3">El código interno ya existe. Ingrese uno diferente.</div>
    <div class="d-flex justify-content-center">
      <button class="btn gc-swal-confirm--warning" type="button">Entendido</button>
    </div>
  </div>
  <div class="gc-alert-actions">
    <button class="btn btn-outline-secondary" type="button" data-gc-swal-demo="modal-error">Ver la demo del visor</button>
  </div>
</section>`,
        snippet:`// Título por defecto: '¡Error!'. El botón usa gc-swal-confirm--warning.
CplusAlerts.error('No fue posible cargar las ciudades del país seleccionado.');

// Con título propio, como en la validación de duplicados de Embalajes.
CplusAlerts.error('El código interno ya existe. Ingrese uno diferente.', { title: '¡Código duplicado!' });`
      },
      {
        name:"Advertencia",
        description:"Modal informativo sobre una regla de negocio que impide o condiciona la acción, sin ser un fallo técnico. Un solo botón; si necesitas decisión, usa la variante Confirmación.",
        preview:`<section class="gc-alert-guide-card">
  <h3>Modal de advertencia</h3>
  <p>Mismas clases que el modal de éxito: la advertencia no cambia el color del botón, solo el ícono y el título.</p>
  <div class="gc-swal-popup p-4 text-center">
    <div class="gc-swal-title mb-2">Atención</div>
    <div class="gc-swal-text mb-3">No se puede modificar el rol de este usuario porque tiene trazabilidad registrada en el sistema.</div>
    <div class="d-flex justify-content-center">
      <button class="btn btn-success gc-swal-confirm" type="button">Entendido</button>
    </div>
  </div>
</section>`,
        snippet:`// Título por defecto: 'Atención'. Nivel info: título por defecto 'Aviso'.
CplusAlerts.warning('No se puede modificar el rol de este usuario porque tiene trazabilidad registrada en el sistema.');

CplusAlerts.warning('El código ya está relacionado a otra sucursal de este tercero.', { title: 'Advertencia' });

CplusAlerts.info('La firma del usuario será usada para la generación de actas.');`
      },
      {
        name:"Toast",
        description:"Aviso breve arriba a la derecha que se cierra solo a los 3200 ms con barra de tiempo. Para resultados ya consumados que el usuario no necesita confirmar.",
        preview:`<section class="gc-alert-guide-card">
  <h3>Tonos de toast</h3>
  <p>Tres tonos reales: success, warning y danger. El tipo info se pinta con el tono success y conserva su propio ícono.</p>
  <div class="d-flex flex-column gap-2">
    <div class="gc-swal-toast gc-swal-toast--success p-3">
      <div class="gc-swal-toast-title">Cambios guardados.</div>
    </div>
    <div class="gc-swal-toast gc-swal-toast--warning p-3">
      <div class="gc-swal-toast-title">Revisa la información antes de continuar.</div>
    </div>
    <div class="gc-swal-toast gc-swal-toast--danger p-3">
      <div class="gc-swal-toast-title">No fue posible exportar el informe.</div>
    </div>
  </div>
  <div class="gc-alert-actions">
    <button class="btn btn-success" type="button" data-gc-swal-demo="toast-saved">Ver toast de éxito</button>
    <button class="btn btn-outline-secondary" type="button" data-gc-swal-demo="toast-filtered">Ver toast de advertencia</button>
  </div>
</section>`,
        snippet:`// toast(texto[, tipo]). Sin tipo, 'success'.
CplusAlerts.toast('Informe generado.');
CplusAlerts.toast('La planilla fue eliminada.', 'success');

// Mapeo de tipo a tono de la skin:
//   'error' y 'danger'  -> gc-swal-toast--danger
//   'warning'           -> gc-swal-toast--warning
//   'success', 'info' y cualquier otro -> gc-swal-toast--success
// 'info' conserva su ícono propio aunque el fondo sea el verde de success.
CplusAlerts.toast('Revisa la información antes de continuar.', 'warning');
CplusAlerts.toast('No fue posible exportar el informe.', 'error');`
      },
      {
        name:"Confirmación",
        description:"Modal de decisión con dos botones. Devuelve una promesa de booleano: cancelar, clic fuera o ESC resuelven false. Con danger true el botón de confirmar sale naranja y los textos por defecto pasan a los de eliminación.",
        preview:`<section class="gc-alert-guide-card">
  <h3>Confirmación destructiva</h3>
  <p>Con reverseButtons el orden visual es Cancelar y luego confirmar. Con danger true el confirmar usa gc-swal-confirm--warning.</p>
  <div class="gc-swal-popup p-4 text-center">
    <div class="gc-swal-title mb-2">¿Eliminar este registro?</div>
    <div class="gc-swal-text mb-3">Esta acción eliminará la información asociada y no podrá visualizarse nuevamente.</div>
    <div class="d-flex justify-content-center gap-2">
      <button class="btn btn-outline-secondary gc-swal-cancel" type="button">Cancelar</button>
      <button class="btn gc-swal-confirm--warning" type="button">Eliminar</button>
    </div>
  </div>
  <div class="gc-alert-actions">
    <button class="btn btn-outline-secondary" type="button" data-gc-swal-demo="modal-delete">Ver la demo del visor</button>
    <button class="btn btn-success" type="button" data-gc-swal-demo="modal-update">Ver la demo no destructiva del visor</button>
  </div>
</section>`,
        snippet:`// confirm(opciones) devuelve Promise de booleano. Siempre encadenar then.
CplusAlerts.confirm({
  title: '¿Está seguro de que desea eliminar este registro?',
  text: 'Esta acción eliminará la información asociada y no podrá visualizarse nuevamente.',
  confirmText: 'Eliminar',
  cancelText: 'Cancelar',
  danger: true
}).then(function (ok) {
  if (ok) doDelete();
});

// Sin danger: botón verde y textos por defecto '¿Confirmas la actualización?'
// y 'Sí, actualizar'. Con danger: '¿Eliminar este registro?' y 'Sí, eliminar'.
CplusAlerts.confirm({ text: 'Se actualizarán los datos del tercero.' })
  .then(function (ok) { if (ok) guardar(); });`
      }
    ],
    snippet:`// Superficie pública de window.CplusAlerts (cplus/js/core/alerts.js).
// text es string; opts es un override de opciones del motor.

CplusAlerts.success(text[, opts]);   // modal, título por defecto '¡Éxito!'
CplusAlerts.error(text[, opts]);     // modal, título '¡Error!', botón naranja
CplusAlerts.warning(text[, opts]);   // modal, título 'Atención'
CplusAlerts.info(text[, opts]);      // modal, título 'Aviso'
CplusAlerts.toast(text[, type]);     // toast 3200 ms; type: success|warning|error|danger|info
CplusAlerts.confirm(opts);           // Promise de booleano; opts: title, text, confirmText, cancelText, danger
CplusAlerts.flashFromSession(p);     // p: objeto con claves error, warning, success, info
CplusAlerts.showLoading(mensaje);    // overlay de carga a pantalla completa
CplusAlerts.hideLoading();           // cierra el overlay

// Los cuatro niveles y toast no devuelven valor. Solo confirm devuelve promesa.
// flashFromSession dispara únicamente el nivel más severo presente:
// error, luego warning, luego success, luego info.`
  },
  {
    id:"encabezado-formulario",
    catalogExamples: ["gc-formulario-usuarios","gc-formulario-clientes"],
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "Include del parcial dentro de form#form pasando solo $phIcono bi-people-fill (líneas 267-270); la retícula de auditoría sale sola de $rowsActualizar y en modo crear el parcial aplica --table-simple" },
      { module: "Embalajes", agregar: 106, file: "cplus/views/mostrarEmbalajes.php", detail: "Formulario con la acción dentro del encabezado: $phAcciones lleva el botón submit Guardar salvo en modo consulta (líneas 139-146)" },
      { module: "Roles", agregar: 124, file: "cplus/views/mostrarRoles.php", detail: "Include del formulario en la línea 95, dentro de form#form-role-permissions" },
      { module: "Sucursales", agregar: 127, file: "cplus/views/mostrarSucursales.php", detail: "Include del formulario en la línea 365" },
    ],
    group:"Organización",
    name:"Encabezado de página (formulario)",
    description:"Encabezado único de pantalla gc-page-header en su variante de formulario: h1 con icono y descripción a la izquierda, retícula de auditoría a la derecha (Fecha de creación, Creado por, Último cambio, Elaborado por) y, cuando la vista lo pide, las acciones principales dentro del propio encabezado.",
    use:"Primer bloque del formulario de crear/editar. En CPlus no se copia el marcado: la vista define $titulo, $subtitulo y $phIcono e incluye el parcial compartido cplus/views/partials/page-head.php, que mapea fecha, elaboro, fecha_actualizacion y elaboro_actualizacion de la fila en edición ($fhRow, por defecto $rowsActualizar). Un botón Guardar u otra acción principal se pasa ya escapado en $phAcciones.",
    avoid:"No usar gc-form-head, gc-form-title ni gc-meta-grid: los reemplazó este parcial el 2026-08-10 y el antiguo form-head.php ya no existe. No declarar dos encabezados con título en la misma pantalla ni copiar el marcado renderizado a la vista. El pie con checkbox de confirmación (gc-review-*) no entra al encabezado: se queda al final del formulario.",
    deps:"Bootstrap Icons y la hoja compilada cplus/css/main.css (fuente cplus/scss/_gc-page-header.scss). En el visor, grinclic-forms.css.",
    verified: true,
    accessibility:"El título es el único h1 de la pantalla y el header lo referencia con aria-labelledby; el parcial numera el id por include para las pantallas que montan listado y formulario a la vez. El icono bi-* es decorativo (aria-hidden=\"true\"). La retícula se agrupa con role=\"group\" y aria-label \"Información de auditoría\"; cada valor recorta con ellipsis en una línea, por eso el parcial repite el texto completo en title.",
    note:"El parcial se autorregula: pinta solo las celdas de auditoría con valor, en modo crear no emite retícula y aplica el modificador <code>--table-simple</code>, y la columna lateral desaparece si no hay ni metadatos ni acciones. El verde del icono del título es <code>--screen-primary</code> (#1b7f4d), distinto a propósito del verde #328539 de los botones de acción.",
    preview:`<header class="gc-page-header" aria-labelledby="gc-page-header-title-form-demo">
  <div class="gc-page-header__layout">
    <div class="gc-page-header__heading">
      <h1 class="gc-page-header__title" id="gc-page-header-title-form-demo">
        <i class="bi bi-people-fill gc-page-header__title-icon" aria-hidden="true"></i>
        <span>Mis usuarios</span>
      </h1>
      <p class="gc-page-header__desc">Datos del usuario, acceso al sistema, credenciales, adjuntos y comunicación.</p>
    </div>
    <aside class="gc-page-header__side">
      <div class="gc-page-header__meta" role="group" aria-label="Información de auditoría">
        <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Fecha de creación</span><span class="gc-page-header__meta-value" title="12/03/2026">12/03/2026</span></div>
        <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Creado por</span><span class="gc-page-header__meta-value" title="Laura Méndez">Laura Méndez</span></div>
        <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Último cambio</span><span class="gc-page-header__meta-value" title="04/08/2026">04/08/2026</span></div>
        <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Elaborado por</span><span class="gc-page-header__meta-value" title="Andrés Rojas">Andrés Rojas</span></div>
      </div>
    </aside>
  </div>
</header>`,
    snippet:`<!-- Dentro del <form> de la vista. El parcial emite el marcado; la vista solo declara variables. -->
<?php
$phIcono = 'bi-people-fill';
include 'cplus/views/partials/page-head.php';
?>

<!-- Con la acción principal dentro del encabezado (mostrarEmbalajes.php): -->
<?php
$phIcono    = 'bi-box-seam';
$phAcciones = empty($ver)
    ? '<button type="submit" class="erp-btn erp-btn-primary" id="guardar" name="guardar">'
        . '<i class="bi bi-save"></i> ' . cplus_e($mensaje) . '</button>'
    : '';
include 'cplus/views/partials/page-head.php';
?>`
  },
  {
    id:"opciones-acordeon",
    catalogExamples: ["gc-formulario-configuraciones","gc-formulario-usuarios"],
    implementations: [
      { module: "Unidades de negocio / Líneas de servicio", agregar: 120, file: "cplus/views/mostrarLineasNegocio.php", detail: "Contenedor accordion gc-business-accordion que el JS rellena (líneas 314-328)" },
      { module: "Unidades de negocio / Líneas de servicio", agregar: 120, file: "cplus/js/entities/lineas_negocio/datatable.js", detail: "buildUnitArticle() arma article.gc-business-unit con cabecera en columnas y botón Crear L.Negocio (líneas 171-200)" },
      { module: "Roles", agregar: 124, file: "cplus/js/lib/RbacPermissionMatrix.js", detail: "Acordeón gc-business-accordion generado por JS para la matriz RBAC (líneas 414-437)" },
      { module: "Configuraciones", agregar: 150, file: "cplus/views/mostrarDatos.php", detail: "Acordeón Bootstrap simple, un accordion-item por módulo dentro de div.accordion#accDatos (líneas 541-551). Salvedad: 150 es el código que la propia producción declara para esta vista (cplus/config/entities.php:1042 y el hidden de mostrarDatos.php:302, más el enlace de :1108), pero NO está registrado en includes/funciones.php, cuyo mapa cplus termina en 149 (línea 194); el enlace Abrir vista no resuelve hoy" },
    ],
    group:"Organización",
    name:"Opciones por acordeon",
    description:"Acordeón Bootstrap con tres composiciones de encabezado: simple, con columnas de datos y con botón de crear registros a la derecha.",
    use:"Usarlo cuando se necesita agrupar información en bloques desplegables. Para acordeones operativos con tablas internas, usa la variante Con columnas y su Ejemplo completo en pantalla amplia.",
    avoid:"No usarlo para campos obligatorios: un panel cerrado los saca del recorrido de foco y la validación no puede enfocarlos sin abrirlo antes.",
    deps:"Bootstrap CSS, Bootstrap JS (Accordion/Collapse), Bootstrap Icons y grinclic-forms.css. En producción la flecha y el estado los aporta cplus/js/core/gc-accordion.js, API window.GcAccordion = { init(root) }, con opt-in por data-gc-accordion y data-gc-business-guide; bindBusinessUnitGuides() es el equivalente solo del visor.",
    accessibility:"Cada cabecera es un encabezado (h2 en producción) con un button que declara aria-expanded y aria-controls hacia su panel; en Con columnas ese button lleva title, que le da nombre accesible. La matriz RBAC de Roles usa un span con role=\"button\" y tabindex=\"0\": maneja Enter y espacio, pero solo contiene el chevron, sin texto ni aria-label, así que el lector lo anuncia como botón sin nombre; ponle aria-label al reutilizarlo.",
    note:"Versión completa en <a href='ejemplos/acordeon-unidades-negocio.html' target='_blank' rel='noopener'>ejemplos/acordeon-unidades-negocio.html</a>, con buscador, exportación, tabla interna y paginación. Sin verificar: solo la variante simple tiene equivalente literal en producción; la de columnas no trae marcado en su snippet y la del botón de acción es una propuesta de diseño.",
    variants:[
      {
        name:"Acordeón simple",
        description:"Úsalo cuando el encabezado solo necesita título y descripción breve.",
        preview:`<section class="gc-accordion-options-preview">
  <article class="gc-accordion-option-card">
    <div class="accordion gc-simple-accordion-demo" id="accordionSimpleCatalogo">
      <div class="accordion-item">
        <h4 class="accordion-header" id="simpleHeadingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#simpleCollapseOne" aria-expanded="true" aria-controls="simpleCollapseOne">
            Información general
          </button>
        </h4>
        <div id="simpleCollapseOne" class="accordion-collapse collapse show" aria-labelledby="simpleHeadingOne" data-bs-parent="#accordionSimpleCatalogo">
          <div class="accordion-body">
            Contenido breve del acordeón. Mantén textos concretos y evita sobrecargar el encabezado.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h4 class="accordion-header" id="simpleHeadingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#simpleCollapseTwo" aria-expanded="false" aria-controls="simpleCollapseTwo">
            Configuración operativa
          </button>
        </h4>
        <div id="simpleCollapseTwo" class="accordion-collapse collapse" aria-labelledby="simpleHeadingTwo" data-bs-parent="#accordionSimpleCatalogo">
          <div class="accordion-body">
            Aquí puede ir una lista corta de campos o controles relacionados.
          </div>
        </div>
      </div>
    </div>
  </article>
</section>`,
        snippet:`<div class="accordion" id="accordionSimple">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Información general
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionSimple">
      <div class="accordion-body">
        Contenido del acordeón.
      </div>
    </div>
  </div>
</div>`
      },
      {
        name:"Con columnas (Unidades de negocio)",
        description:"El encabezado muestra nombre, código y descripción a la izquierda y las acciones al final de la fila.",
        example:"ejemplos/acordeon-unidades-negocio.html",
        preview:`<section class="gc-accordion-options-preview">
  <article class="gc-accordion-option-card">
    <figure class="gc-accordion-preview-figure">
      <img src="assets/acordeon-unidades-preview.png" alt="Vista previa del acordeón de unidades de negocio con tabla interna de líneas de servicio" class="gc-accordion-preview-image">
      <figcaption>Vista previa reducida del ejemplo real para orientar el uso del patrón.</figcaption>
    </figure>
  </article>
</section>`,
        snippet:`<!-- Acordeón con columnas en encabezado -->
<!-- Revisa la implementación completa en: ejemplos/acordeon-unidades-negocio.html -->
<a class="btn btn-success" href="ejemplos/acordeon-unidades-negocio.html" target="_blank" rel="noopener">
  Ejemplo completo
</a>`
      },
      {
        name:"Con botón de acción",
        description:"Título más el botón de crear (gc-create-business-btn) reducido a +, hermano del toggle para que crear no abra el acordeón. Propuesta: en producción solo existe con columnas, donde el botón es erp-btn erp-btn-secondary con texto.",
        preview:`<section class="gc-accordion-options-preview">
  <article class="gc-accordion-option-card">
    <div class="accordion gc-simple-accordion-demo gc-accordion-with-create" id="accordionAccionCatalogo">
      <div class="accordion-item">
        <h4 class="accordion-header" id="accionHeadingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accionCollapseOne" aria-expanded="true" aria-controls="accionCollapseOne">
            Inventariable
          </button>
          <button type="button" class="gc-create-business-btn gc-accordion-create" title="Crear registro" aria-label="Crear registro">
            <i class="bi bi-plus-lg"></i>
          </button>
        </h4>
        <div id="accionCollapseOne" class="accordion-collapse collapse show" aria-labelledby="accionHeadingOne" data-bs-parent="#accordionAccionCatalogo">
          <div class="accordion-body">
            Aquí van los registros hijos de esta unidad (por ejemplo, sus líneas de servicio). El botón del encabezado crea uno nuevo sin abrir ni cerrar el acordeón.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h4 class="accordion-header" id="accionHeadingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accionCollapseTwo" aria-expanded="false" aria-controls="accionCollapseTwo">
            Servicios especiales
          </button>
          <button type="button" class="gc-create-business-btn gc-accordion-create" title="Crear registro" aria-label="Crear registro">
            <i class="bi bi-plus-lg"></i>
          </button>
        </h4>
        <div id="accionCollapseTwo" class="accordion-collapse collapse" aria-labelledby="accionHeadingTwo" data-bs-parent="#accordionAccionCatalogo">
          <div class="accordion-body">
            Segundo bloque para ver el estado colapsado con su propio botón de crear.
          </div>
        </div>
      </div>
    </div>
  </article>
</section>`,
        snippet:`<!-- Botón estándar de crear (gc-create-business-btn) reducido a solo el símbolo +, superpuesto dentro del encabezado (hermano del toggle: crear NO dispara el colapso). z-index:4 obligatorio: el hover/focus del accordion-button de Bootstrap sube a z-index 2/3 y taparía el botón -->
<style>
  .gc-accordion-with-create .accordion-header{position:relative}
  .gc-accordion-with-create .accordion-button{padding-right:64px}
  .gc-accordion-with-create .accordion-button::after{order:-1;margin-left:0;margin-right:12px}
  .gc-accordion-create{position:absolute;right:12px;top:50%;transform:translateY(-50%);z-index:4;display:inline-flex;align-items:center;justify-content:center;width:36px!important;height:36px!important;min-width:0!important;min-height:0!important;padding:0!important;border:1px solid #8bc991;border-radius:10px;font-size:1rem;line-height:1}
</style>
<div class="accordion gc-accordion-with-create" id="accordionConAccion">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingAccion1">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAccion1" aria-expanded="true" aria-controls="collapseAccion1">
        Inventariable
      </button>
      <button type="button" class="gc-create-business-btn gc-accordion-create" id="crear_registro_accion1" title="Crear registro" aria-label="Crear registro">
        <i class="bi bi-plus-lg"></i>
      </button>
    </h2>
    <div id="collapseAccion1" class="accordion-collapse collapse show" aria-labelledby="headingAccion1" data-bs-parent="#accordionConAccion">
      <div class="accordion-body">
        Contenido del acordeón (los registros hijos de este grupo).
      </div>
    </div>
  </div>
</div>`
      }
    ]
  },
  {
    id:"pestanas-internas",
    catalogExamples: ["gc-formulario-usuarios","gc-formulario-clientes"],
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "nav-tabs con 3 pestañas: Datos del usuario / Credenciales / Información adicional (líneas 293-305)" },
      { module: "Usuarios", agregar: 105, file: "cplus/js/entities/usuarios/form-manager.js", detail: "toggleTabCredenciales(visible) oculta o muestra el BOTÓN de la pestaña Credenciales, localizándolo por [data-bs-toggle=\"tab\"][data-bs-target=\"#usuario-credenciales\"] y alternando d-none sobre su .nav-item; si estaba activa, activa la primera pestaña (líneas 475-482)" },
    ],
    group:"Organización",
    name:"Pestañas internas",
    description:"Tabs de Bootstrap para navegar subsecciones dentro de un mismo formulario o pantalla.",
    use:"Usarlo cuando varias subsecciones comparten el mismo contexto y el usuario las revisa de una en una. El primer botón lleva active y su panel show active.",
    avoid:"No usarlo para información que el usuario debe comparar toda al mismo tiempo, ni para esconder campos obligatorios sin avisar del error en la pestaña que lo contiene.",
    deps:"Bootstrap CSS + Bootstrap JS (Tabs) + grinclic-forms.css",
    verified: true,
    accessibility:"La lista lleva role=\"tablist\", cada button role=\"tab\" con aria-controls y aria-selected, y cada panel role=\"tabpanel\" con tabindex=\"0\" y aria-labelledby apuntando a su pestaña. Bootstrap solo actualiza aria-selected y el tabindex de las pestañas si el botón declara role=\"tab\": sin ese atributo las pestañas se ven bien pero no se anuncian. Si validas campos que viven en otra pestaña, revela la pestaña antes de enfocar el campo, porque focus() sobre un panel inactivo falla en silencio.",
    note:"En CPlus la validación busca la pestaña dueña de un campo inválido por [data-bs-toggle=\"tab\"][data-bs-target=\"#id\"], así que los paneles deben conservar su id.",
    snippet:`<ul class="nav nav-tabs mb-3" id="config_tabs" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="basicos-tab" data-bs-toggle="tab" data-bs-target="#basicos" type="button" role="tab" aria-controls="basicos" aria-selected="true">Básicos</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="operacion-tab" data-bs-toggle="tab" data-bs-target="#operacion" type="button" role="tab" aria-controls="operacion" aria-selected="false">Operación</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="alertas-tab" data-bs-toggle="tab" data-bs-target="#alertas" type="button" role="tab" aria-controls="alertas" aria-selected="false">Alertas</button>
  </li>
</ul>
<div class="tab-content" id="config_tabs_content">
  <div class="tab-pane fade show active" id="basicos" role="tabpanel" tabindex="0" aria-labelledby="basicos-tab">
    <div class="form-check"><input class="form-check-input" type="checkbox" id="cliente_activo" name="cliente_activo" value="1" checked><label class="form-check-label" for="cliente_activo">Cliente activo</label></div>
  </div>
  <div class="tab-pane fade" id="operacion" role="tabpanel" tabindex="0" aria-labelledby="operacion-tab">
    <div class="form-check"><input class="form-check-input" type="checkbox" id="requiere_oc" name="requiere_oc" value="1"><label class="form-check-label" for="requiere_oc">Requiere orden de compra</label></div>
  </div>
  <div class="tab-pane fade" id="alertas" role="tabpanel" tabindex="0" aria-labelledby="alertas-tab">
    <div class="form-check"><input class="form-check-input" type="checkbox" id="notificar_cambio" name="notificar_cambio" value="1"><label class="form-check-label" for="notificar_cambio">Notificar cambio de estado</label></div>
  </div>
</div>`
  },
  {
    id:"gc-formulario-clientes",
    implementations: [
      { module: "Mis clientes (formulario legacy, sin migrar a CPlus)", agregar: 130, file: "formularios/administradorClientes.php", detail: "Mismas 8 secciones y en el mismo orden que el organismo: Datos generales, Ubicación, Contactos, Datos legales, Información comercial, Información adicional, Configuración e Integración EMLAZE (líneas 685, 746, 817, 898, 921, 951, 1068, 1133). Usa h3 y span.text-danger, no gc-section-title ni gc-required" },
      { module: "Mis clientes (listado CPlus)", agregar: 130, file: "cplus/views/mostrarClientes.php", detail: "Lo único migrado a CPlus: formulario de filtros form#search dentro de section.card.filters-card (líneas 54-114). No hay formulario de alta ni edición" },
    ],
    group:"Formularios",
    name:"Mis clientes / Actualizar cliente",
    description:"Organismo administrativo para actualizar información general, ubicación, contactos, datos legales, configuración comercial e integración del cliente.",
    use:"Usarlo para actualizar clientes con datos prellenados editables. Las pestañas reducen scroll y el cierre con revisión evita guardar sin validar campos sensibles.",
    avoid:"No pegarlo sin ajustar action, names, valores precargados, permisos, validaciones de backend y reglas de sincronización con EMLAZE.",
    deps:"Bootstrap CSS + Bootstrap JS + grinclic-forms.css + grinclic-forms.js",
    accessibility:"El formulario usa labels asociados, controles nativos, pestañas Bootstrap con roles, valores SI/NO explícitos y confirmación final antes del submit.",
    note:"Propuesta de diseño, sin marcar como verificada: hoy no existe formulario de clientes en CPlus. La vista <code>cplus/views/mostrarClientes.php</code> solo tiene filtros y listado; el alta y la edición siguen en el formulario legacy <code>formularios/administradorClientes.php</code> (<code>cplus/MIGRATION_LEDGER.md:59</code>). Además el snippet incluye dos campos de prueba (PRUEBA AUTOLLENADO) que no existen en producción.",
    example:"ejemplos/formulario-clientes.html",
    snippet:`<!-- Organismo: gc-formulario-clientes -->
    <!-- Uso conceptual: <gc-formulario-clientes></gc-formulario-clientes> -->
    <form class="gc-form-shell" method="post" action="/clientes/actualizar">
      <header class="gc-page-header" aria-labelledby="gc-page-header-title-1">
        <div class="gc-page-header__layout">
          <div class="gc-page-header__heading">
            <h1 class="gc-page-header__title" id="gc-page-header-title-1">
              <i class="bi bi-person-vcard gc-page-header__title-icon" aria-hidden="true"></i>
              <span>Mis clientes</span>
            </h1>
            <p class="gc-page-header__desc">Actualización de información general, ubicación, contactos, configuración comercial e integración.</p>
          </div>
          <aside class="gc-page-header__side">
            <div class="gc-page-header__meta" role="group" aria-label="Información de auditoría">
              <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Fecha de creación</span><span class="gc-page-header__meta-value" title="12/03/2026">12/03/2026</span></div>
              <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Creado por</span><span class="gc-page-header__meta-value" title="Laura Méndez">Laura Méndez</span></div>
              <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Último cambio</span><span class="gc-page-header__meta-value" title="04/08/2026">04/08/2026</span></div>
              <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Elaborado por</span><span class="gc-page-header__meta-value" title="Andrés Rojas">Andrés Rojas</span></div>
            </div>
          </aside>
        </div>
      </header>
    
      <section class="gc-form-section">
<ul class="nav nav-tabs mb-3" id="cliente_tabs" role="tablist">
          <li class="nav-item" role="presentation"><button class="nav-link active" id="cliente-general-tab" data-bs-toggle="tab" data-bs-target="#cliente-general" type="button" role="tab" aria-controls="cliente-general" aria-selected="true">General y ubicación</button></li>
          <li class="nav-item" role="presentation"><button class="nav-link" id="cliente-contactos-tab" data-bs-toggle="tab" data-bs-target="#cliente-contactos" type="button" role="tab" aria-controls="cliente-contactos" aria-selected="false">Contactos y legales</button></li>
          <li class="nav-item" role="presentation"><button class="nav-link" id="cliente-comercial-tab" data-bs-toggle="tab" data-bs-target="#cliente-comercial" type="button" role="tab" aria-controls="cliente-comercial" aria-selected="false">Comercial y horarios</button></li>
          <li class="nav-item" role="presentation"><button class="nav-link" id="cliente-configuracion-tab" data-bs-toggle="tab" data-bs-target="#cliente-configuracion" type="button" role="tab" aria-controls="cliente-configuracion" aria-selected="false">Configuración</button></li>
        </ul>
    
        <div class="tab-content" id="cliente_tabs_content">
          <div class="tab-pane fade show active" id="cliente-general" role="tabpanel" tabindex="0" aria-labelledby="cliente-general-tab">
            <div class="row g-3">
              <div class="col-12">
                <section class="border rounded-3 p-3 bg-white">
                  <h2 class="gc-section-title">Datos generales</h2>
                  <div class="row g-3">
                    <div class="col-lg-6">
                      <label for="cliente_nombre" class="form-label"><span class="gc-required">*</span>Nombre cliente</label>
                      <input type="text" class="form-control" id="cliente_nombre" name="nombre_cliente" value="Cliente demo S.A.S." required>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <label for="cliente_estado" class="form-label"><span class="gc-required">*</span>Estado</label>
                      <select class="form-select" id="cliente_estado" name="estado" required>
                        <option value="">Seleccione</option>
                        <option value="Activo" selected>Activo</option>
                        <option value="Inactivo">Inactivo</option>
                        <option value="Suspendido">Suspendido</option>
                      </select>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <label for="cliente_categoria" class="form-label"><span class="gc-required">*</span>Categoría</label>
                      <select class="form-select" id="cliente_categoria" name="categoria" required>
                        <option value="">Seleccione</option>
                        <option value="Directo" selected>Directo</option>
                        <option value="Indirecto">Indirecto</option>
                        <option value="Gestor">Gestor</option>
                      </select>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <label for="cliente_tipo_identificacion" class="form-label"><span class="gc-required">*</span>Tipo de identificación</label>
                      <select class="form-select" id="cliente_tipo_identificacion" name="tipo_identificacion" required>
                        <option value="NIT" selected>NIT</option>
                        <option value="CC">CC</option>
                        <option value="CE">CE</option>
                        <option value="PAS">PAS</option>
                      </select>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <label for="cliente_identificacion" class="form-label"><span class="gc-required">*</span>Identificación</label>
                      <input type="text" class="form-control" id="cliente_identificacion" name="identificacion" value="900123456" required inputmode="numeric" pattern="[0-9]*">
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <label for="cliente_digito_verificacion" class="form-label"><span class="gc-required">*</span>Dígito de verificación</label>
                      <input type="text" inputmode="numeric" class="form-control" id="cliente_digito_verificacion" name="digito_verificacion" value="1" required min="0" max="9">
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <label for="cliente_codigo" class="form-label">Código cliente</label>
                      <input type="text" class="form-control" id="cliente_codigo" name="codigo_cliente" value="CL-001" readonly>
                    </div>
                    <div class="col-lg-6">
                      <label for="cliente_prueba_autollenado" class="form-label"><span class="gc-required">*</span>PRUEBA AUTOLLENADO</label>
                      <input type="text" class="form-control" id="cliente_prueba_autollenado" name="prueba_autollenado" value="Valor prellenado" required>
                    </div>
                    <div class="col-lg-6">
                      <label for="cliente_prueba_autollenado_2" class="form-label"><span class="gc-required">*</span>PRUEBA AUTOLLENADO 2</label>
                      <input type="text" class="form-control" id="cliente_prueba_autollenado_2" name="prueba_autollenado_2" value="Valor prellenado 2" required>
                    </div>
                  </div>
                </section>
              </div>
    
              <div class="col-12">
                <section class="border rounded-3 p-3 bg-white">
                  <h2 class="gc-section-title">Ubicación</h2>
                  <div class="row g-3">
                    <div class="col-lg-6">
                      <label for="cliente_direccion_administrativa" class="form-label"><span class="gc-required">*</span>Dirección administrativa</label>
                      <input type="text" class="form-control" id="cliente_direccion_administrativa" name="direccion_administrativa" value="Calle 123 # 45 - 67" required>
                    </div>
                    <div class="col-lg-6">
                      <label for="cliente_direccion_correspondencia" class="form-label"><span class="gc-required">*</span>Dirección correspondencia</label>
                      <input type="text" class="form-control" id="cliente_direccion_correspondencia" name="direccion_correspondencia" value="Carrera 10 # 20 - 30" required>
                    </div>
                    <div class="col-lg-4">
                      <label for="cliente_pais" class="form-label"><span class="gc-required">*</span>País</label>
                      <select class="form-select" id="cliente_pais" name="pais" required>
                        <option value="">Seleccione</option>
                        <option value="Colombia" selected>Colombia</option>
                        <option value="Perú">Perú</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="México">México</option>
                      </select>
                    </div>
                    <div class="col-lg-4">
                      <div class="mb-0 gc-search-select" data-gc-search-select>
                        <label class="form-label" for="cliente_ciudad_depto_value"><span class="gc-required">*</span>Ciudad / Depto</label>
                        <input type="hidden" id="cliente_ciudad_depto_value" name="ciudad_depto" value="Bogotá D.C. / Cundinamarca">
                        <button class="btn dropdown-toggle gc-select-trigger w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span data-gc-search-label>Bogotá D.C. / Cundinamarca</span>
                        </button>
                        <div class="dropdown-menu gc-search-menu">
                          <input class="form-control mb-2" type="search" placeholder="Buscar ciudad o departamento..." data-gc-search-input>
                          <button class="dropdown-item active" type="button" data-gc-option="Bogotá D.C. / Cundinamarca">Bogotá D.C. / Cundinamarca</button>
                          <button class="dropdown-item" type="button" data-gc-option="Medellín / Antioquia">Medellín / Antioquia</button>
                          <button class="dropdown-item" type="button" data-gc-option="Cali / Valle del Cauca">Cali / Valle del Cauca</button>
                          <button class="dropdown-item" type="button" data-gc-option="Barranquilla / Atlántico">Barranquilla / Atlántico</button>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <label for="cliente_vereda_barrio" class="form-label">Vereda o Barrio</label>
                      <input type="text" class="form-control" id="cliente_vereda_barrio" name="vereda_barrio" value="Barrio demo">
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
    
          <div class="tab-pane fade" id="cliente-contactos" role="tabpanel" tabindex="0" aria-labelledby="cliente-contactos-tab">
            <div class="row g-3">
              <div class="col-12">
                <section class="border rounded-3 p-3 bg-white">
                  <h2 class="gc-section-title">Contactos</h2>
                  <div class="row g-3">
                    <div class="col-lg-6">
                      <label for="cliente_telefono" class="form-label"><span class="gc-required">*</span>Teléfono</label>
                      <input type="tel" class="form-control" id="cliente_telefono" name="telefono" value="6010000000" required>
                    </div>
                    <div class="col-lg-6">
                      <label for="cliente_sitio_web" class="form-label">Sitio web</label>
                      <input type="url" class="form-control" id="cliente_sitio_web" name="sitio_web" value="https://www.demo.com" placeholder="https://www.empresa.com">
                      <div class="gc-help is-valid">URL con protocolo incluido.</div>
                    </div>
                    <div class="col-lg-6">
                      <label for="cliente_contacto_general" class="form-label"><span class="gc-required">*</span>Contacto general</label>
                      <input type="text" class="form-control" id="cliente_contacto_general" name="contacto_general" value="Contacto general" required>
                    </div>
                    <div class="col-lg-6">
                      <label for="cliente_correo_general" class="form-label"><span class="gc-required">*</span>Correo contacto general</label>
                      <input type="email" class="form-control" id="cliente_correo_general" name="correo_contacto_general" value="contacto@demo.com" required>
                    </div>
                    <div class="col-lg-6">
                      <label for="cliente_contacto_comercial" class="form-label">Contacto de comercial</label>
                      <input type="text" class="form-control" id="cliente_contacto_comercial" name="contacto_comercial" value="Contacto comercial">
                    </div>
                    <div class="col-lg-6">
                      <label for="cliente_correo_comercial" class="form-label">Correo contacto comercial</label>
                      <input type="email" class="form-control" id="cliente_correo_comercial" name="correo_contacto_comercial" value="comercial@demo.com">
                    </div>
                    <div class="col-lg-6">
                      <label for="cliente_contacto_facturacion" class="form-label">Contacto de facturación</label>
                      <input type="text" class="form-control" id="cliente_contacto_facturacion" name="contacto_facturacion" value="Contacto facturación">
                    </div>
                    <div class="col-lg-6">
                      <label for="cliente_correo_facturacion" class="form-label">Correo de facturación</label>
                      <input type="email" class="form-control" id="cliente_correo_facturacion" name="correo_facturacion" value="facturacion@demo.com">
                    </div>
                    <div class="col-lg-6">
                      <label for="cliente_direccion_facturacion" class="form-label">Dirección de facturación</label>
                      <input type="text" class="form-control" id="cliente_direccion_facturacion" name="direccion_facturacion" value="Dirección de facturación">
                    </div>
                  </div>
                </section>
              </div>
    
              <div class="col-12">
                <section class="border rounded-3 p-3 bg-white">
                  <h2 class="gc-section-title">Datos legales</h2>
                  <div class="row g-3">
                    <div class="col-lg-6">
                      <label for="cliente_representante_legal" class="form-label">Representante legal</label>
                      <input type="text" class="form-control" id="cliente_representante_legal" name="representante_legal" value="Representante demo">
                    </div>
                    <div class="col-lg-6">
                      <label for="cliente_actividad_economica" class="form-label">Actividad económica</label>
                      <input type="text" class="form-control" id="cliente_actividad_economica" name="actividad_economica" value="3811 - Recolección de desechos no peligrosos">
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
    
          <div class="tab-pane fade" id="cliente-comercial" role="tabpanel" tabindex="0" aria-labelledby="cliente-comercial-tab">
            <div class="row g-3">
              <div class="col-12">
                <section class="border rounded-3 p-3 bg-white">
                  <h2 class="gc-section-title">Información comercial</h2>
                  <div class="row g-3">
                    <div class="col-lg-6">
                      <div class="mb-0 gc-search-select" data-gc-search-select>
                        <label class="form-label" for="cliente_asesor_comercial_value"><span class="gc-required">*</span>Asesor comercial</label>
                        <input type="hidden" id="cliente_asesor_comercial_value" name="asesor_comercial" value="Asesor comercial demo">
                        <button class="btn dropdown-toggle gc-select-trigger w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span data-gc-search-label>Asesor comercial demo</span>
                        </button>
                        <div class="dropdown-menu gc-search-menu">
                          <input class="form-control mb-2" type="search" placeholder="Buscar asesor..." data-gc-search-input>
                          <button class="dropdown-item active" type="button" data-gc-option="Asesor comercial demo">Asesor comercial demo</button>
                          <button class="dropdown-item" type="button" data-gc-option="Asesor principal">Asesor principal</button>
                          <button class="dropdown-item" type="button" data-gc-option="Equipo comercial">Equipo comercial</button>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <label for="cliente_ref_cotizacion" class="form-label">Ref. cotización</label>
                      <input type="text" class="form-control" id="cliente_ref_cotizacion" name="ref_cotizacion" value="12345" inputmode="numeric">
                    </div>
                  </div>
                </section>
              </div>
    
              <div class="col-12">
                <section class="border rounded-3 p-3 bg-white">
                  <h2 class="gc-section-title">Información adicional</h2>
                  <div class="row g-3">
                    <div class="col-lg-4">
                      <label for="cliente_clasificacion_interna" class="form-label">Clasificación interna</label>
                      <select class="form-select" id="cliente_clasificacion_interna" name="clasificacion_interna">
                        <option value="">Seleccione</option>
                        <option value="A" selected>Cliente A</option>
                        <option value="B">Cliente B</option>
                        <option value="C">Cliente C</option>
                        <option value="Especial">Especial</option>
                      </select>
                    </div>
                    <div class="col-lg-8">
                      <div class="gc-help mt-lg-4">Los horarios se agrupan para facilitar revisión en desktop y mantener lectura clara en responsive.</div>
                    </div>
                    <div class="col-12">
                      <div class="row g-3 gc-schedule-groups">
                        <div class="col-lg-6">
                          <section class="border rounded-3 p-3 bg-white h-100 gc-schedule-card">
                            <h3 class="h6 fw-bold mb-3 gc-schedule-title"><svg class="gc-section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5v5l3.5 2"></path></svg>Horario principal</h3>
                            <div class="row g-3">
                              <div class="col-md-6">
                                <label for="cliente_horario_entrada" class="form-label"><span class="gc-required">*</span>Horario entrada</label>
                                <input type="text" class="form-control" data-gc-timepicker="materialize" maxlength="5" id="cliente_horario_entrada" name="horario_entrada" value="08:00" required>
                              </div>
                              <div class="col-md-6">
                                <label for="cliente_horario_salida" class="form-label"><span class="gc-required">*</span>Horario salida</label>
                                <input type="text" class="form-control" data-gc-timepicker="materialize" maxlength="5" id="cliente_horario_salida" name="horario_salida" value="17:00" required>
                              </div>
                            </div>
                          </section>
                        </div>
                        <div class="col-lg-6">
                          <section class="border rounded-3 p-3 bg-white h-100 gc-schedule-card">
                            <h3 class="h6 fw-bold mb-3 gc-schedule-title"><svg class="gc-section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5v5l3.5 2"></path></svg>Horario adicional</h3>
                            <div class="row g-3">
                              <div class="col-md-6">
                                <label for="cliente_horario_entrada_adicional" class="form-label">Horario entrada adicional</label>
                                <input type="text" class="form-control" data-gc-timepicker="materialize" maxlength="5" id="cliente_horario_entrada_adicional" name="horario_entrada_adicional" value="18:00">
                              </div>
                              <div class="col-md-6">
                                <label for="cliente_horario_salida_adicional" class="form-label">Horario salida adicional</label>
                                <input type="text" class="form-control" data-gc-timepicker="materialize" maxlength="5" id="cliente_horario_salida_adicional" name="horario_salida_adicional" value="20:00">
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <label for="cliente_observaciones_generales" class="form-label">Observaciones generales</label>
                      <textarea class="form-control" id="cliente_observaciones_generales" name="observaciones_generales" rows="4" placeholder="Registra observaciones operativas o comerciales relevantes.">Cliente con condiciones operativas predefinidas. Validar antes de actualizar.</textarea>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
    
          <div class="tab-pane fade" id="cliente-configuracion" role="tabpanel" tabindex="0" aria-labelledby="cliente-configuracion-tab">
            <div class="row g-3">
              <div class="col-12">
                <section class="border rounded-3 p-3 bg-white">
                  <h2 class="gc-section-title">Configuración</h2>
                  <div class="row g-3">
                    <div class="col-lg-6">
                      <div class="gc-question">
                        <label class="form-label" id="cliente_descarga_acta_label">¿Permitir descargar acta independiente de estado de pago de la factura?</label>
                        <div class="gc-yes-no" role="radiogroup" aria-labelledby="cliente_descarga_acta_label">
                          <input class="btn-check" type="radio" name="descargar_acta_independiente" id="cliente_descarga_acta_no" value="NO" checked>
                          <label class="btn" for="cliente_descarga_acta_no">NO</label>
                          <input class="btn-check" type="radio" name="descargar_acta_independiente" id="cliente_descarga_acta_si" value="SI">
                          <label class="btn" for="cliente_descarga_acta_si">SI</label>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="gc-question">
                        <label class="form-label" id="cliente_orden_compra_label">¿Requiere la obligatoriedad de relacionar orden de compra para aprobar solicitud?</label>
                        <div class="gc-yes-no" role="radiogroup" aria-labelledby="cliente_orden_compra_label">
                          <input class="btn-check" type="radio" name="obligar_orden_compra" id="cliente_orden_compra_no" value="NO" checked>
                          <label class="btn" for="cliente_orden_compra_no">NO</label>
                          <input class="btn-check" type="radio" name="obligar_orden_compra" id="cliente_orden_compra_si" value="SI">
                          <label class="btn" for="cliente_orden_compra_si">SI</label>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="gc-question">
                        <label class="form-label" id="cliente_validar_cantidades_label">¿Desea validar cantidades solicitadas en el Manifiesto de descarga?</label>
                        <div class="gc-yes-no" role="radiogroup" aria-labelledby="cliente_validar_cantidades_label">
                          <input class="btn-check" type="radio" name="validar_cantidades_manifiesto_descarga" id="cliente_validar_cantidades_no" value="NO" checked>
                          <label class="btn" for="cliente_validar_cantidades_no">NO</label>
                          <input class="btn-check" type="radio" name="validar_cantidades_manifiesto_descarga" id="cliente_validar_cantidades_si" value="SI">
                          <label class="btn" for="cliente_validar_cantidades_si">SI</label>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="gc-question">
                        <label class="form-label" id="cliente_acta_agrupada_label">Aplica generar acta agrupada por sucursal manual?</label>
                        <div class="gc-yes-no" role="radiogroup" aria-labelledby="cliente_acta_agrupada_label">
                          <input class="btn-check" type="radio" name="acta_agrupada_sucursal_manual" id="cliente_acta_agrupada_no" value="NO" checked>
                          <label class="btn" for="cliente_acta_agrupada_no">NO</label>
                          <input class="btn-check" type="radio" name="acta_agrupada_sucursal_manual" id="cliente_acta_agrupada_si" value="SI">
                          <label class="btn" for="cliente_acta_agrupada_si">SI</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
    
              <div class="col-12">
                <section class="border rounded-3 p-3 bg-white">
                  <h2 class="gc-section-title">Integración EMLAZE</h2>
                  <div class="form-check gc-check-card">
                    <input class="form-check-input" type="checkbox" id="cliente_modificar_emlaze" name="modificar_cliente_emlaze" value="1" checked>
                    <label class="form-check-label" for="cliente_modificar_emlaze">¿Desea modificar el cliente en EMLAZE?</label>
                  </div>
                  <div class="gc-help">Al marcar esta opción, el cambio puede sincronizar información hacia el ERP.</div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <footer class="gc-review-footer">
        <div class="gc-review-box">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="cliente_confirmar_revision" data-gc-review-check="#cliente_btn_actualizar">
            <label class="form-check-label" for="cliente_confirmar_revision">Confirmo que revisé los datos prellenados, campos obligatorios y configuraciones críticas antes de actualizar el cliente.</label>
          </div>
          <div class="gc-review-actions">
            <button class="btn btn-outline-secondary" type="button">Cancelar</button>
            <button class="btn btn-success" type="submit" id="cliente_btn_actualizar" disabled>Guardar</button>
          </div>
        </div>
      </footer>
    </form>`
  },
  {
    id:"gc-formulario-usuarios",
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "Shell del formulario: include de partials/page-head.php y las 3 pestañas con los mismos ids del organismo (líneas 267-270, 288-301)" },
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "Panes Datos del usuario y Credenciales de acceso, cada uno con section.border.rounded-3.p-3.bg-white y h2.gc-section-title (líneas 305-307 y 693-695)" },
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "Cierre gc-review-footer con checkbox data-gc-review-check que gatea el botón guardar (líneas 1059-1077)" },
    ],
    group:"Formularios",
    name:"Mis usuarios / Actualizar usuario",
    description:"Organismo administrativo para administrar datos del usuario, acceso al sistema, credenciales, adjuntos y comunicación de credenciales.",
    use:"Usarlo para crear o actualizar usuarios con acceso al sistema, permisos, correo, credenciales y documentos asociados. Las pestañas separan datos, credenciales e información adicional para reducir scroll.",
    avoid:"No pegarlo sin ajustar action, permisos, roles disponibles, cliente asociado, validaciones de contraseña, almacenamiento de adjuntos y reglas reales de notificación por correo.",
    deps:"Bootstrap CSS + Bootstrap JS + grinclic-forms.css + grinclic-forms.js",
    accessibility:"El formulario usa labels asociados, controles nativos, pestañas y acordeones Bootstrap, radiogroups SI/NO con valores explícitos, campos de clave protegidos y confirmación final antes del submit.",
    note:"<strong>Sin verificar:</strong> es propuesta de diseño y difiere de la vista productiva <code>cplus/views/mostrarUsuarios.php</code> en cuatro puntos: no usa <code>gc-form-shell</code> ni <code>gc-form-section</code> (las secciones son <code>section.border.rounded-3.p-3.bg-white</code>), la pestaña Información adicional no lleva acordeón Bootstrap y el encabezado no se escribe en línea sino que incluye el parcial <code>cplus/views/partials/page-head.php</code>, que emite el mismo gc-page-header del organismo.",
    example:"ejemplos/formulario-usuarios.html",
    snippet:`<!-- Organismo: gc-formulario-usuarios -->
<!-- Uso conceptual: <gc-formulario-usuarios></gc-formulario-usuarios> -->
<form class="gc-form-shell" method="post" action="/usuarios/actualizar" enctype="multipart/form-data">
  <header class="gc-page-header" aria-labelledby="gc-page-header-title-1">
    <div class="gc-page-header__layout">
      <div class="gc-page-header__heading">
        <h1 class="gc-page-header__title" id="gc-page-header-title-1">
          <i class="bi bi-people-fill gc-page-header__title-icon" aria-hidden="true"></i>
          <span>Mis usuarios</span>
        </h1>
        <p class="gc-page-header__desc">Datos del usuario, acceso al sistema, credenciales, adjuntos y comunicación.</p>
      </div>
      <aside class="gc-page-header__side">
        <div class="gc-page-header__meta" role="group" aria-label="Información de auditoría">
          <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Fecha de creación</span><span class="gc-page-header__meta-value" title="12/03/2026">12/03/2026</span></div>
          <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Creado por</span><span class="gc-page-header__meta-value" title="Laura Méndez">Laura Méndez</span></div>
          <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Último cambio</span><span class="gc-page-header__meta-value" title="04/08/2026">04/08/2026</span></div>
          <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Elaborado por</span><span class="gc-page-header__meta-value" title="Andrés Rojas">Andrés Rojas</span></div>
        </div>
      </aside>
    </div>
  </header>

  <section class="gc-form-section">
<ul class="nav nav-tabs mb-3" id="usuario_tabs" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="usuario-datos-tab" data-bs-toggle="tab" data-bs-target="#usuario-datos" type="button" role="tab" aria-controls="usuario-datos" aria-selected="true">Datos del usuario</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="usuario-credenciales-tab" data-bs-toggle="tab" data-bs-target="#usuario-credenciales" type="button" role="tab" aria-controls="usuario-credenciales" aria-selected="false">Credenciales</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="usuario-adicional-tab" data-bs-toggle="tab" data-bs-target="#usuario-adicional" type="button" role="tab" aria-controls="usuario-adicional" aria-selected="false">Información adicional</button>
      </li>
    </ul>

    <div class="tab-content" id="usuario_tabs_content">
      <div class="tab-pane fade show active" id="usuario-datos" role="tabpanel" tabindex="0" aria-labelledby="usuario-datos-tab">
        <section class="border rounded-3 p-3 bg-white">
          <h2 class="gc-section-title">Datos del usuario</h2>
          <div class="row g-3">
            <div class="col-lg-4">
              <label for="usuario_nombre" class="form-label"><span class="gc-required">*</span>Nombre</label>
              <input type="text" class="form-control" id="usuario_nombre" name="nombre" value="Usuario demo" required>
            </div>
            <div class="col-lg-4">
              <label for="usuario_identificacion" class="form-label"><span class="gc-required">*</span>Identificación</label>
              <input type="text" class="form-control" id="usuario_identificacion" name="identificacion" value="1020304050" required inputmode="numeric" pattern="[0-9]*">
            </div>
            <div class="col-lg-4">
              <label for="usuario_cargo" class="form-label">Cargo</label>
              <input type="text" class="form-control" id="usuario_cargo" name="cargo" value="Coordinador operativo">
            </div>
            <div class="col-lg-3 col-md-6">
              <label for="usuario_rol" class="form-label"><span class="gc-required">*</span>Rol</label>
              <select class="form-select" id="usuario_rol" name="rol" required>
                <option value="">Seleccione</option>
                <option value="administrador">Administrador</option>
                <option value="logistica" selected>Logística</option>
                <option value="sac">Servicio al cliente</option>
                <option value="cliente">Cliente</option>
              </select>
            </div>
            <div class="col-lg-3 col-md-6">
              <label for="usuario_estado" class="form-label"><span class="gc-required">*</span>Estado</label>
              <select class="form-select" id="usuario_estado" name="estado" required>
                <option value="Activo" selected>Activo</option>
                <option value="Inactivo">Inactivo</option>
                <option value="Suspendido">Suspendido</option>
              </select>
            </div>
            <div class="col-lg-3 col-md-6">
              <label for="usuario_codigo" class="form-label">Código</label>
              <input type="text" class="form-control" id="usuario_codigo" name="codigo" value="USR-001" readonly>
            </div>
            <div class="col-lg-3 col-md-6">
              <label for="usuario_modulo_acceso" class="form-label">Módulo de acceso</label>
              <select class="form-select" id="usuario_modulo_acceso" name="modulo_acceso">
                <option value="">Seleccione</option>
                <option value="Administración" selected>Administración</option>
                <option value="Logística">Logística</option>
                <option value="Cliente">Cliente</option>
              </select>
            </div>
            <div class="col-lg-4">
              <div class="mb-0 gc-search-select" data-gc-search-select>
                <label class="form-label" for="usuario_cliente_value">Cliente</label>
                <input type="hidden" id="usuario_cliente_value" name="cliente" value="Cliente demo S.A.S.">
                <button class="btn dropdown-toggle gc-select-trigger w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span data-gc-search-label>Cliente demo S.A.S.</span>
                </button>
                <div class="dropdown-menu gc-search-menu">
                  <input class="form-control mb-2" type="search" placeholder="Buscar cliente..." data-gc-search-input>
                  <button class="dropdown-item active" type="button" data-gc-option="Cliente demo S.A.S.">Cliente demo S.A.S.</button>
                  <button class="dropdown-item" type="button" data-gc-option="Cliente industrial">Cliente industrial</button>
                  <button class="dropdown-item" type="button" data-gc-option="Cliente gestor">Cliente gestor</button>
                  <button class="dropdown-item" type="button" data-gc-option="Cliente transportador">Cliente transportador</button>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <label for="usuario_telefono" class="form-label">Teléfono</label>
              <input type="tel" class="form-control" id="usuario_telefono" name="telefono" value="6010000000">
            </div>
            <div class="col-lg-4">
              <label for="usuario_celular" class="form-label">Celular</label>
              <input type="tel" class="form-control" id="usuario_celular" name="celular" value="3000000000">
            </div>
            <div class="col-lg-6">
              <label for="usuario_direccion" class="form-label">Dirección</label>
              <input type="text" class="form-control" id="usuario_direccion" name="direccion" value="Dirección de contacto">
            </div>
            <div class="col-lg-3 col-md-6">
              <label for="usuario_pais" class="form-label">País</label>
              <select class="form-select" id="usuario_pais" name="pais">
                <option value="Colombia" selected>Colombia</option>
                <option value="Perú">Perú</option>
                <option value="Ecuador">Ecuador</option>
                <option value="México">México</option>
              </select>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="mb-0 gc-search-select" data-gc-search-select>
                <label class="form-label" for="usuario_ciudad_depto_value">Ciudad / Depto</label>
                <input type="hidden" id="usuario_ciudad_depto_value" name="ciudad_depto" value="Bogotá D.C.">
                <button class="btn dropdown-toggle gc-select-trigger w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span data-gc-search-label>Bogotá D.C.</span>
                </button>
                <div class="dropdown-menu gc-search-menu">
                  <input class="form-control mb-2" type="search" placeholder="Buscar ciudad o departamento..." data-gc-search-input>
                  <button class="dropdown-item active" type="button" data-gc-option="Bogotá D.C.">Bogotá D.C.</button>
                  <button class="dropdown-item" type="button" data-gc-option="Medellín / Antioquia">Medellín / Antioquia</button>
                  <button class="dropdown-item" type="button" data-gc-option="Cali / Valle del Cauca">Cali / Valle del Cauca</button>
                  <button class="dropdown-item" type="button" data-gc-option="Barranquilla / Atlántico">Barranquilla / Atlántico</button>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="gc-question">
                <label class="form-label" id="usuario_acceso_sistema_label">¿Deseas que el usuario acceda al sistema?</label>
                <div class="gc-yes-no" role="radiogroup" aria-labelledby="usuario_acceso_sistema_label">
                  <input class="btn-check" type="radio" name="acceso_sistema" id="usuario_acceso_no" value="NO">
                  <label class="btn" for="usuario_acceso_no">NO</label>
                  <input class="btn-check" type="radio" name="acceso_sistema" id="usuario_acceso_si" value="SI" checked>
                  <label class="btn" for="usuario_acceso_si">SI</label>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="tab-pane fade" id="usuario-credenciales" role="tabpanel" tabindex="0" aria-labelledby="usuario-credenciales-tab">
        <section class="border rounded-3 p-3 bg-white">
          <h2 class="gc-section-title">Credenciales de acceso</h2>
<div class="row g-3">
            <div class="col-lg-4">
              <label for="usuario_correo" class="form-label"><span class="gc-required">*</span>Correo</label>
              <input type="email" class="form-control" id="usuario_correo" name="correo" value="usuario@empresa.com" required autocomplete="email">
            </div>
            <div class="col-lg-4">
              <label for="usuario_nueva_clave" class="form-label"><span class="gc-required">*</span>Nueva clave</label>
              <input type="password" class="form-control" id="usuario_nueva_clave" name="nueva_clave" required autocomplete="new-password">
            </div>
            <div class="col-lg-4">
              <label for="usuario_confirmar_clave" class="form-label"><span class="gc-required">*</span>Confirmar clave</label>
              <input type="password" class="form-control" id="usuario_confirmar_clave" name="confirmar_clave" required autocomplete="new-password">
            </div>
          </div>
        </section>
      </div>

      <div class="tab-pane fade" id="usuario-adicional" role="tabpanel" tabindex="0" aria-labelledby="usuario-adicional-tab">
        <div class="accordion" id="usuario_info_adicional_accordion">
          <div class="accordion-item">
            <h2 class="accordion-header" id="usuario_adjuntos_heading">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#usuario_adjuntos_panel" aria-expanded="true" aria-controls="usuario_adjuntos_panel">Adjuntos</button>
            </h2>
            <div id="usuario_adjuntos_panel" class="accordion-collapse collapse show" aria-labelledby="usuario_adjuntos_heading" data-bs-parent="#usuario_info_adicional_accordion">
              <div class="accordion-body">
                <div class="row g-3">
                  <div class="col-lg-6">
                    <label for="usuario_firma" class="form-label">Cargar firma png, jpg, jpeg, gif</label>
                    <input type="file" class="form-control" id="usuario_firma" name="firma" accept="image/png,image/jpeg,image/gif">
                    <div class="gc-upload-preview" aria-label="Ejemplo de firma esperada">
                      <span class="gc-upload-file-icon" aria-hidden="true">IMG</span>
                      <div class="gc-upload-meta">
                        <strong>Ejemplo: firma_usuario.png</strong>
                        <span>PNG, JPG, JPEG o GIF. Usar una imagen legible y con fondo limpio.</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <label for="usuario_parafiscales" class="form-label">Parafiscales</label>
                    <input type="file" class="form-control" id="usuario_parafiscales" name="parafiscales" accept="application/pdf">
                    <div class="gc-upload-preview" aria-label="Ejemplo de PDF esperado">
                      <span class="gc-upload-file-icon" aria-hidden="true">PDF</span>
                      <div class="gc-upload-meta">
                        <strong>Ejemplo: parafiscales_vigentes.pdf</strong>
                        <span>PDF legible, vigente y sin contraseña.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="usuario_sucursales_heading">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#usuario_sucursales_panel" aria-expanded="false" aria-controls="usuario_sucursales_panel">Sucursales y comunicación</button>
            </h2>
            <div id="usuario_sucursales_panel" class="accordion-collapse collapse" aria-labelledby="usuario_sucursales_heading" data-bs-parent="#usuario_info_adicional_accordion">
              <div class="accordion-body">
                <div class="row g-3">
                  <div class="col-lg-6">
                    <div class="mb-0 dropdown" data-gc-multiselect>
                      <label class="form-label">Sucursales de acopio</label>
                      <button class="btn dropdown-toggle gc-select-trigger w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">Seleccionar sucursales</button>
                      <div class="dropdown-menu gc-multiselect-menu">
                        <input class="form-control gc-multiselect-search" type="search" placeholder="Buscar sucursal..." data-gc-multiselect-search>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="usuario_sucursal_principal" name="sucursales_acopio[]" value="principal" checked>
                          <label class="form-check-label" for="usuario_sucursal_principal">Sucursal principal</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="usuario_sucursal_norte" name="sucursales_acopio[]" value="norte">
                          <label class="form-check-label" for="usuario_sucursal_norte">Sucursal norte</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="usuario_sucursal_sur" name="sucursales_acopio[]" value="sur">
                          <label class="form-check-label" for="usuario_sucursal_sur">Sucursal sur</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="usuario_sucursal_occidente" name="sucursales_acopio[]" value="occidente">
                          <label class="form-check-label" for="usuario_sucursal_occidente">Sucursal occidente</label>
                        </div>
                      </div>
                      <div class="gc-selected-summary" data-gc-multiselect-summary>Seleccionados: ninguno</div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="gc-question">
                      <label class="form-label" id="usuario_comunicar_credenciales_label">¿Desea comunicarle al usuario mediante correo electrónico sus credenciales?</label>
                      <div class="gc-yes-no" role="radiogroup" aria-labelledby="usuario_comunicar_credenciales_label">
                        <input class="btn-check" type="radio" name="comunicar_credenciales" id="usuario_comunicar_no" value="NO" checked>
                        <label class="btn" for="usuario_comunicar_no">NO</label>
                        <input class="btn-check" type="radio" name="comunicar_credenciales" id="usuario_comunicar_si" value="SI">
                        <label class="btn" for="usuario_comunicar_si">SI</label>
                      </div>
                    </div>
                    <div class="gc-help">Antes de activar el envío, valida correo, rol y clave.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="gc-review-footer">
    <div class="gc-review-box">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="usuario_confirmar_revision" data-gc-review-check="#usuario_btn_actualizar">
        <label class="form-check-label" for="usuario_confirmar_revision">Confirmo que revisé datos personales, acceso, credenciales, correo, adjuntos y permisos antes de actualizar el usuario.</label>
      </div>
      <div class="gc-review-actions">
        <button class="btn btn-outline-secondary" type="button">Cancelar</button>
        <button class="btn btn-success" type="submit" id="usuario_btn_actualizar" disabled>Guardar</button>
      </div>
    </div>
  </footer>
</form>`
  },
  {
    id:"gc-formulario-configuraciones",
    implementations: [
      { module: "Mis datos / Configuraciones", agregar: 150, file: "cplus/views/mostrarDatos.php", detail: "El form ES el organismo: form.gc-form-shell con data-gc-validate; el comentario de la vista declara la maqueta formulario-configuraciones.html (líneas 292-300)" },
      { module: "Mis datos / Configuraciones", agregar: 150, file: "cplus/views/mostrarDatos.php", detail: "Cinco section.gc-form-section con h2.gc-section-title: Plan contratado, Información del negocio, Logo y licencia ambiental, Correos de notificación y Configuraciones por módulo (líneas 312, 331, 452, 496, 537)" },
      { module: "Mis datos / Configuraciones", agregar: 150, file: "cplus/views/mostrarDatos.php", detail: "Acordeón BS5 nativo #accDatos con 8 bloques y cierre gc-review-box con data-gc-review-check (líneas 541-1090 y 1099-1116)" },
    ],
    group:"Formularios",
    name:"Mis datos / Configuraciones",
    description:"Organismo administrativo para datos generales de empresa, parámetros operativos, alertas y funcionalidades del sistema.",
    use:"Usarlo como formulario principal de configuración de empresa. Las pestañas reducen scroll y los acordeones concentran listas largas de opciones críticas.",
    avoid:"No pegarlo sin ajustar action, permisos, valores precargados, validaciones de backend y names según el modelo de datos real.",
    deps:"Bootstrap CSS + Bootstrap JS + grinclic-forms.css + grinclic-forms.js",
    accessibility:"Las cabeceras del acordeón #accDatos son button con aria-expanded y aria-controls; Bootstrap sincroniza aria-expanded, así que no se escribe como valor fijo. Limitación real: un panel cerrado saca sus campos del recorrido de foco, así que si la validación marca un campo en un panel colapsado hay que abrirlo antes de enfocarlo, porque focus() falla en silencio. El checkbox gc-review-box deshabilita los submit y les pone un title con el motivo.",
    note:"No se marca como verificada: producción reorganizó el organismo. En vez de las 5 pestañas del snippet, <code>cplus/views/mostrarDatos.php</code> usa 5 <code>section.gc-form-section</code> más el acordeón nativo <code>#accDatos</code>, y añade Plan contratado, Logo y licencia ambiental y Correos de notificación. <strong>Divergencia:</strong> el <code>agregar=150</code> que declara la vista no existe en el enrutador (<code>Menu()</code> termina en 149), así que «Abrir vista» no resuelve.",
    example:"ejemplos/formulario-configuraciones.html",
    snippet:`<!-- Organismo: gc-formulario-configuraciones -->
<form class="gc-form-shell" method="post" action="/configuraciones/actualizar" enctype="multipart/form-data">
  <header class="gc-page-header" aria-labelledby="gc-page-header-title-1">
    <div class="gc-page-header__layout">
      <div class="gc-page-header__heading">
        <h1 class="gc-page-header__title" id="gc-page-header-title-1">
          <i class="bi bi-sliders gc-page-header__title-icon" aria-hidden="true"></i>
          <span>Mis datos / Configuraciones</span>
        </h1>
        <p class="gc-page-header__desc">Datos generales de la empresa, parámetros operativos, alertas y funcionalidades del sistema.</p>
      </div>
      <aside class="gc-page-header__side">
        <div class="gc-page-header__meta" role="group" aria-label="Información de auditoría">
          <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Fecha de creación</span><span class="gc-page-header__meta-value" title="12/03/2026">12/03/2026</span></div>
          <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Creado por</span><span class="gc-page-header__meta-value" title="Laura Méndez">Laura Méndez</span></div>
          <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Último cambio</span><span class="gc-page-header__meta-value" title="04/08/2026">04/08/2026</span></div>
          <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Elaborado por</span><span class="gc-page-header__meta-value" title="Andrés Rojas">Andrés Rojas</span></div>
        </div>
      </aside>
    </div>
  </header>

  <section class="gc-form-section">
<ul class="nav nav-tabs mb-3" id="config_empresa_tabs" role="tablist">
      <li class="nav-item" role="presentation"><button class="nav-link active" id="datos-generales-tab" data-bs-toggle="tab" data-bs-target="#datos-generales" type="button" role="tab">Información del negocio</button></li>
      <li class="nav-item" role="presentation"><button class="nav-link" id="alertas-vigencia-tab" data-bs-toggle="tab" data-bs-target="#alertas-vigencia" type="button" role="tab">Alertas y vigencia</button></li>
      <li class="nav-item" role="presentation"><button class="nav-link" id="manifiesto-tab" data-bs-toggle="tab" data-bs-target="#campos-manifiesto" type="button" role="tab">Campos Manifiesto</button></li>
      <li class="nav-item" role="presentation"><button class="nav-link" id="solicitudes-tab" data-bs-toggle="tab" data-bs-target="#campos-solicitudes" type="button" role="tab">Campos Solicitudes</button></li>
      <li class="nav-item" role="presentation"><button class="nav-link" id="funcionalidad-tab" data-bs-toggle="tab" data-bs-target="#funcionalidad" type="button" role="tab">Funcionalidad</button></li>
    </ul>

    <div class="tab-content" id="config_empresa_tabs_content">
      <div class="tab-pane fade show active" id="datos-generales" role="tabpanel" tabindex="0" aria-labelledby="datos-generales-tab">
        <h2 class="gc-section-title">Información del negocio</h2>
        <div class="row g-3">
      <div class="col-lg-6">
        <label for="config_nombre" class="form-label"><span class="gc-required">*</span>Nombre</label>
        <input type="text" class="form-control" id="config_nombre" name="nombre" value="Empresa demo" required>
      </div>
      <div class="col-lg-3 col-md-6">
        <label for="config_identificacion" class="form-label"><span class="gc-required">*</span>Identificación</label>
        <input type="text" class="form-control" id="config_identificacion" name="identificacion" value="900123456" required inputmode="numeric" pattern="[0-9]*">
      </div>
      <div class="col-lg-3 col-md-6">
        <label for="config_digito_verificacion" class="form-label"><span class="gc-required">*</span>Dígito de verificación</label>
        <input type="text" inputmode="numeric" class="form-control" id="config_digito_verificacion" name="digito_verificacion" value="1" required min="0" max="9">
      </div>
      <div class="col-lg-4">
        <label for="config_representante_legal" class="form-label">Representante legal</label>
        <input type="text" class="form-control" id="config_representante_legal" name="representante_legal" value="Usuario representante">
      </div>
      <div class="col-lg-4">
        <label for="config_telefono" class="form-label"><span class="gc-required">*</span>Teléfono</label>
        <input type="tel" class="form-control" id="config_telefono" name="telefono" value="6010000000" required>
      </div>
      <div class="col-lg-6">
        <label for="config_direccion" class="form-label"><span class="gc-required">*</span>Dirección</label>
        <input type="text" class="form-control" id="config_direccion" name="direccion" value="Dirección principal" required>
      </div>
      <div class="col-lg-6">
        <label for="config_contacto_general" class="form-label"><span class="gc-required">*</span>Contacto general</label>
        <input type="text" class="form-control" id="config_contacto_general" name="contacto_general" value="Contacto general" required>
      </div>
      <div class="col-lg-4">
        <label for="config_pais" class="form-label"><span class="gc-required">*</span>País</label>
        <select class="form-select" id="config_pais" name="pais" required>
          <option value="">Seleccione</option>
          <option value="CO" selected>Colombia</option>
          <option value="PE">Perú</option>
          <option value="EC">Ecuador</option>
          <option value="MX">México</option>
        </select>
      </div>
      <div class="col-lg-4">
        <label for="config_ciudad_depto" class="form-label"><span class="gc-required">*</span>Ciudad / Depto</label>
        <select class="form-select" id="config_ciudad_depto" name="ciudad_depto" required>
          <option value="bogota_cundinamarca" selected>Bogotá D.C. / Cundinamarca</option>
          <option value="medellin_antioquia">Medellín / Antioquia</option>
          <option value="cali_valle">Cali / Valle del Cauca</option>
          <option value="barranquilla_atlantico">Barranquilla / Atlántico</option>
        </select>
      </div>
      <div class="col-lg-6">
        <label for="config_correos_admon" class="form-label">Correo/s electrónicos de Admon</label>
        <input type="email" class="form-control" id="config_correos_admon" name="correos_admon" value="admon@empresa.com" multiple>
        <div class="gc-help">Separar varios correos con coma.</div>
      </div>
      <div class="col-lg-6">
        <label for="config_correos_tecnicos" class="form-label">Correo/s electrónicos Técnicos</label>
        <input type="email" class="form-control" id="config_correos_tecnicos" name="correos_tecnicos" value="tecnico@empresa.com" multiple>
        <div class="gc-help">Separar varios correos con coma.</div>
      </div>
      <div class="col-lg-6">
        <label for="config_correos_comercial" class="form-label">Correo/s electrónicos Ger. comercial</label>
        <input type="email" class="form-control" id="config_correos_comercial" name="correos_comercial" value="comercial@empresa.com" multiple>
      </div>
      <div class="col-lg-6">
        <label for="config_correos_logistica" class="form-label">Correo/s electrónicos de Logística</label>
        <input type="email" class="form-control" id="config_correos_logistica" name="correos_logistica" value="logistica@empresa.com" multiple>
      </div>
      <div class="col-lg-6">
        <label for="config_correos_conciliaciones" class="form-label">Correo/s electrónicos de conciliaciones</label>
        <input type="email" class="form-control" id="config_correos_conciliaciones" name="correos_conciliaciones" value="conciliaciones@empresa.com" multiple>
      </div>
      <div class="col-lg-6">
        <label for="config_clave" class="form-label"><span class="gc-required">*</span>Clave</label>
        <input type="password" class="form-control" id="config_clave" name="clave" value="Configuracion123" required autocomplete="new-password">
        <div id="config_clave_summary" class="gc-password-summary">
          Debe tener mínimo 8 caracteres e incluir letra, mayúscula, minúscula y número.
          <button class="gc-inline-link" type="button" data-bs-toggle="collapse" data-bs-target="#config_clave_rules" aria-expanded="false" aria-controls="config_clave_rules">Ver requisitos</button>
        </div>
        <div class="collapse" id="config_clave_rules">
          <div class="gc-password-rules-card" aria-label="Requisitos de contraseña">
            <div class="gc-password-rule">Debe incluir al menos una letra.</div>
            <div class="gc-password-rule">Debe incluir al menos una letra en mayúscula.</div>
            <div class="gc-password-rule">Debe incluir al menos una letra en minúscula.</div>
            <div class="gc-password-rule">Debe incluir al menos un número.</div>
            <div class="gc-password-rule">Debe tener mínimo 8 caracteres.</div>
          </div>
        </div>
        <div class="gc-help">Dato sensible. Debe revisarse antes de actualizar.</div>
      </div>
      <div class="col-lg-3 col-md-6">
        <label for="config_prefijo" class="form-label">Prefijo</label>
        <input type="text" class="form-control" id="config_prefijo" name="prefijo" value="GC" maxlength="10">
      </div>
      <div class="col-lg-3 col-md-6">
        <label for="config_sitio_web" class="form-label">Sitio web</label>
        <input type="url" class="form-control" id="config_sitio_web" name="sitio_web" value="https://www.empresa-demo.com" placeholder="https://">
      </div>

      <div class="col-12">
        <hr class="my-1">
        <h3 class="h6 fw-bold mb-0">Logo e imagen corporativa</h3>
        <p class="gc-help mb-0">Carga primero el logo que se usará como referencia visual en encabezados, documentos y comunicaciones.</p>
      </div>
      <div class="col-lg-6">
        <div class="mb-3 gc-upload-field">
          <label for="config_logo" class="form-label">Logo o imagen corporativa</label>
          <input type="file" class="form-control" id="config_logo" name="logo" accept="image/png,image/jpeg,image/webp,image/svg+xml" aria-describedby="config_logo_specs" data-gc-image-preview-input data-gc-image-preview-target="#config_logo_preview_modal">
          <div id="config_logo_specs" class="gc-upload-specs">Formatos permitidos: PNG, JPG, JPEG, WEBP o SVG. Peso máximo recomendado: 5 MB.</div>
          <div class="gc-upload-preview" aria-label="Ejemplo de logo esperado">
            <div class="gc-upload-thumb"><img src="assets/logo-demo.svg" alt="Ejemplo de logo demo"></div>
            <div class="gc-upload-meta">
              <strong>logo_empresa.svg</strong>
              <span>Imagen lista para revisar antes de cargar.</span>
            </div>
            <button class="btn btn-outline-secondary btn-sm ms-auto" type="button" data-bs-toggle="modal" data-bs-target="#config_logo_preview_modal">Ver vista previa</button>
          </div>
        </div>
        <div class="modal fade" id="config_logo_preview_modal" tabindex="-1" aria-labelledby="config_logo_preview_modal_title" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered gc-logo-preview-dialog">
            <div class="modal-content gc-image-preview-modal">
              <div class="modal-header">
                <h2 class="modal-title fs-6" id="config_logo_preview_modal_title">Vista previa del logo</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
              </div>
              <div class="modal-body">
                <div class="gc-logo-preview-stage"><img src="assets/logo-demo.svg" alt="Vista previa del logo" data-gc-image-preview-output></div>
                <p class="gc-logo-preview-name" data-gc-image-preview-name>logo_empresa.svg</p>
              </div>
              <div class="gc-logo-preview-actions">
                <button class="btn btn-outline-secondary" type="button" data-bs-dismiss="modal">Cancelar</button>
                <button class="btn btn-success" type="button" data-bs-dismiss="modal">Cargar imagen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <hr class="my-1">
        <h3 class="h6 fw-bold mb-0">Licencia ambiental y contactos críticos</h3>
      </div>
      <div class="col-lg-6">
        <label for="config_licencia_ambiental" class="form-label">Licencia ambiental</label>
        <input type="text" class="form-control" id="config_licencia_ambiental" name="licencia_ambiental" value="Resolución ambiental vigente">
      </div>
      <div class="col-lg-6">
        <div class="mb-3 gc-upload-field">
          <label for="config_archivo_licencia_ambiental" class="form-label">Archivo licencia ambiental</label>
          <input type="file" class="form-control" id="config_archivo_licencia_ambiental" name="archivo_licencia_ambiental" accept="application/pdf,.pdf" aria-describedby="config_archivo_licencia_specs">
          <div id="config_archivo_licencia_specs" class="gc-upload-specs">Tipo permitido: PDF. Peso máximo: 15 MB.</div>
          <div class="gc-upload-preview" aria-label="Archivo licencia ambiental cargado">
            <span class="gc-upload-file-icon" aria-hidden="true">PDF</span>
            <div class="gc-upload-meta">
              <strong>licencia_ambiental.pdf</strong>
              <span>Adjuntar PDF legible, vigente y sin contraseña.</span>
            </div>
            <a class="btn btn-outline-secondary btn-sm ms-auto" href="#" target="_blank" rel="noopener">Ver documento</a>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <label for="config_contacto_logistico" class="form-label">Contacto logístico</label>
        <input type="text" class="form-control" id="config_contacto_logistico" name="contacto_logistico" value="Contacto logístico">
      </div>
      <div class="col-lg-6 gc-search-select" data-gc-search-select>
        <label class="form-label" for="config_responsable_contingencia_value">Responsable plan de contingencia</label>
        <input type="hidden" id="config_responsable_contingencia_value" name="responsable_plan_contingencia" value="Responsable operativo">
        <button class="btn dropdown-toggle gc-select-trigger w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span data-gc-search-label>Responsable operativo</span>
        </button>
        <div class="dropdown-menu gc-search-menu">
          <input class="form-control mb-2" type="search" placeholder="Buscar responsable..." data-gc-search-input>
          <button class="dropdown-item active" type="button" data-gc-option="Responsable operativo">Responsable operativo</button>
          <button class="dropdown-item" type="button" data-gc-option="Coordinador logístico">Coordinador logístico</button>
          <button class="dropdown-item" type="button" data-gc-option="Director técnico">Director técnico</button>
          <button class="dropdown-item" type="button" data-gc-option="Administrador del sistema">Administrador del sistema</button>
        </div>
      </div>
      <div class="col-12">
        <label for="config_contactos_emergencia" class="form-label">Contactos en caso de emergencia</label>
        <textarea class="form-control" id="config_contactos_emergencia" name="contactos_emergencia" rows="4" placeholder="Nombre, teléfono, cargo y horario de contacto."></textarea>
      </div>
        </div>
      </div>

      <div class="tab-pane fade" id="alertas-vigencia" role="tabpanel" tabindex="0" aria-labelledby="alertas-vigencia-tab">
        <h2 class="gc-section-title">Alertas</h2>
        <div class="row g-3 mb-4">
      <div class="col-lg-4">
        <label for="alerta_vencimiento_tecnico_mecanica" class="form-label">Alerta F. venc. Técnico mecánica</label>
        <input type="text" inputmode="numeric" class="form-control" id="alerta_vencimiento_tecnico_mecanica" name="alerta_vencimiento_tecnico_mecanica" value="30" min="0">
      </div>
      <div class="col-lg-4">
        <label for="alerta_vencimiento_soat" class="form-label">Alerta F. venc. SOAT</label>
        <input type="text" inputmode="numeric" class="form-control" id="alerta_vencimiento_soat" name="alerta_vencimiento_soat" value="30" min="0">
      </div>
      <div class="col-lg-4">
        <label for="alerta_vencimiento_certificados_sanitarios" class="form-label">Alerta F. venc. de certificados sanitarios</label>
        <input type="text" inputmode="numeric" class="form-control" id="alerta_vencimiento_certificados_sanitarios" name="alerta_vencimiento_certificados_sanitarios" value="30" min="0">
      </div>
        </div>
        <h2 class="gc-section-title">Vigencia solicitudes</h2>
        <div class="row g-3">
      <div class="col-lg-4">
        <label for="vigencia_maxima_dias" class="form-label">Indique vigencia máxima en días</label>
        <input type="text" inputmode="numeric" class="form-control" id="vigencia_maxima_dias" name="vigencia_maxima_dias" value="15" min="1">
      </div>
      <div class="col-lg-4">
        <label for="observacion_solicitud_carga" class="form-label">Observación solicitud de carga</label>
        <textarea class="form-control" id="observacion_solicitud_carga" name="observacion_solicitud_carga" rows="3" placeholder="Mensaje visible para solicitudes de carga."></textarea>
      </div>
      <div class="col-lg-4">
        <label for="observacion_solicitud_descarga" class="form-label">Observación solicitud de descarga</label>
        <textarea class="form-control" id="observacion_solicitud_descarga" name="observacion_solicitud_descarga" rows="3" placeholder="Mensaje visible para solicitudes de descarga."></textarea>
      </div>
        </div>
      </div>

      <div class="tab-pane fade" id="campos-manifiesto" role="tabpanel" tabindex="0" aria-labelledby="manifiesto-tab">
        <h2 class="gc-section-title">Campos personalizados del Manifiesto</h2>
        <p class="gc-section-kicker">Configura hasta cinco campos adicionales para Manifiesto. Cada grupo conserva título, unidad, formato y obligatoriedad.</p>
        <div class="accordion" id="configManifiestoAccordion">
    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#config_manifiesto_campo_1">
          Campo personalizado Manifiesto 1
        </button>
      </h3>
      <div id="config_manifiesto_campo_1" class="accordion-collapse collapse show" data-bs-parent="#configManifiestoAccordion">
        <div class="accordion-body">
          <div class="row g-3">
      <div class="col-lg-5">
        <label for="manifiesto_titulo_campo_1" class="form-label">Título campo 1</label>
        <input type="text" class="form-control" id="manifiesto_titulo_campo_1" name="manifiesto_titulo_campo_1" maxlength="80">
      </div>
      <div class="col-lg-3">
        <label for="manifiesto_unidad_campo_1" class="form-label">Unidad</label>
        <select class="form-select" id="manifiesto_unidad_campo_1" name="manifiesto_unidad_campo_1">
          <option value="kg" selected>kg</option>
          <option value="Ton">Ton</option>
          <option value="Und">Und</option>
          <option value="m3">m³</option>
          <option value="Gal">Gal</option>
          <option value="Lot">Lot</option>
        </select>
      </div>
      <div class="col-lg-3">
        <label for="manifiesto_formato_campo_1" class="form-label">Formato</label>
        <select class="form-select" id="manifiesto_formato_campo_1" name="manifiesto_formato_campo_1">
          <option value="texto" selected>Texto</option>
          <option value="numero">Número</option>
          <option value="decimal">Decimal</option>
          <option value="fecha">Fecha</option>
          <option value="lista">Lista desplegable</option>
        </select>
      </div>
      <div class="col-lg-1 d-flex align-items-end">
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" id="manifiesto_obligatorio_campo_1" name="manifiesto_obligatorio_campo_1" value="1">
          <label class="form-check-label" for="manifiesto_obligatorio_campo_1">Obligatorio</label>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#config_manifiesto_campo_2">
          Campo personalizado Manifiesto 2
        </button>
      </h3>
      <div id="config_manifiesto_campo_2" class="accordion-collapse collapse" data-bs-parent="#configManifiestoAccordion">
        <div class="accordion-body">
          <div class="row g-3">
      <div class="col-lg-5">
        <label for="manifiesto_titulo_campo_2" class="form-label">Título campo 2</label>
        <input type="text" class="form-control" id="manifiesto_titulo_campo_2" name="manifiesto_titulo_campo_2" maxlength="80">
      </div>
      <div class="col-lg-3">
        <label for="manifiesto_unidad_campo_2" class="form-label">Unidad</label>
        <select class="form-select" id="manifiesto_unidad_campo_2" name="manifiesto_unidad_campo_2">
          <option value="kg" selected>kg</option>
          <option value="Ton">Ton</option>
          <option value="Und">Und</option>
          <option value="m3">m³</option>
          <option value="Gal">Gal</option>
          <option value="Lot">Lot</option>
        </select>
      </div>
      <div class="col-lg-3">
        <label for="manifiesto_formato_campo_2" class="form-label">Formato</label>
        <select class="form-select" id="manifiesto_formato_campo_2" name="manifiesto_formato_campo_2">
          <option value="texto" selected>Texto</option>
          <option value="numero">Número</option>
          <option value="decimal">Decimal</option>
          <option value="fecha">Fecha</option>
          <option value="lista">Lista desplegable</option>
        </select>
      </div>
      <div class="col-lg-1 d-flex align-items-end">
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" id="manifiesto_obligatorio_campo_2" name="manifiesto_obligatorio_campo_2" value="1">
          <label class="form-check-label" for="manifiesto_obligatorio_campo_2">Obligatorio</label>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#config_manifiesto_campo_3">
          Campo personalizado Manifiesto 3
        </button>
      </h3>
      <div id="config_manifiesto_campo_3" class="accordion-collapse collapse" data-bs-parent="#configManifiestoAccordion">
        <div class="accordion-body">
          <div class="row g-3">
      <div class="col-lg-5">
        <label for="manifiesto_titulo_campo_3" class="form-label">Título campo 3</label>
        <input type="text" class="form-control" id="manifiesto_titulo_campo_3" name="manifiesto_titulo_campo_3" maxlength="80">
      </div>
      <div class="col-lg-3">
        <label for="manifiesto_unidad_campo_3" class="form-label">Unidad</label>
        <select class="form-select" id="manifiesto_unidad_campo_3" name="manifiesto_unidad_campo_3">
          <option value="kg" selected>kg</option>
          <option value="Ton">Ton</option>
          <option value="Und">Und</option>
          <option value="m3">m³</option>
          <option value="Gal">Gal</option>
          <option value="Lot">Lot</option>
        </select>
      </div>
      <div class="col-lg-3">
        <label for="manifiesto_formato_campo_3" class="form-label">Formato</label>
        <select class="form-select" id="manifiesto_formato_campo_3" name="manifiesto_formato_campo_3">
          <option value="texto" selected>Texto</option>
          <option value="numero">Número</option>
          <option value="decimal">Decimal</option>
          <option value="fecha">Fecha</option>
          <option value="lista">Lista desplegable</option>
        </select>
      </div>
      <div class="col-lg-1 d-flex align-items-end">
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" id="manifiesto_obligatorio_campo_3" name="manifiesto_obligatorio_campo_3" value="1">
          <label class="form-check-label" for="manifiesto_obligatorio_campo_3">Obligatorio</label>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#config_manifiesto_campo_4">
          Campo personalizado Manifiesto 4
        </button>
      </h3>
      <div id="config_manifiesto_campo_4" class="accordion-collapse collapse" data-bs-parent="#configManifiestoAccordion">
        <div class="accordion-body">
          <div class="row g-3">
      <div class="col-lg-5">
        <label for="manifiesto_titulo_campo_4" class="form-label">Título campo 4</label>
        <input type="text" class="form-control" id="manifiesto_titulo_campo_4" name="manifiesto_titulo_campo_4" maxlength="80">
      </div>
      <div class="col-lg-3">
        <label for="manifiesto_unidad_campo_4" class="form-label">Unidad</label>
        <select class="form-select" id="manifiesto_unidad_campo_4" name="manifiesto_unidad_campo_4">
          <option value="kg" selected>kg</option>
          <option value="Ton">Ton</option>
          <option value="Und">Und</option>
          <option value="m3">m³</option>
          <option value="Gal">Gal</option>
          <option value="Lot">Lot</option>
        </select>
      </div>
      <div class="col-lg-3">
        <label for="manifiesto_formato_campo_4" class="form-label">Formato</label>
        <select class="form-select" id="manifiesto_formato_campo_4" name="manifiesto_formato_campo_4">
          <option value="texto" selected>Texto</option>
          <option value="numero">Número</option>
          <option value="decimal">Decimal</option>
          <option value="fecha">Fecha</option>
          <option value="lista">Lista desplegable</option>
        </select>
      </div>
      <div class="col-lg-1 d-flex align-items-end">
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" id="manifiesto_obligatorio_campo_4" name="manifiesto_obligatorio_campo_4" value="1">
          <label class="form-check-label" for="manifiesto_obligatorio_campo_4">Obligatorio</label>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#config_manifiesto_campo_5">
          Campo personalizado Manifiesto 5
        </button>
      </h3>
      <div id="config_manifiesto_campo_5" class="accordion-collapse collapse" data-bs-parent="#configManifiestoAccordion">
        <div class="accordion-body">
          <div class="row g-3">
      <div class="col-lg-5">
        <label for="manifiesto_titulo_campo_5" class="form-label">Título campo 5</label>
        <input type="text" class="form-control" id="manifiesto_titulo_campo_5" name="manifiesto_titulo_campo_5" maxlength="80">
      </div>
      <div class="col-lg-3">
        <label for="manifiesto_unidad_campo_5" class="form-label">Unidad</label>
        <select class="form-select" id="manifiesto_unidad_campo_5" name="manifiesto_unidad_campo_5">
          <option value="kg" selected>kg</option>
          <option value="Ton">Ton</option>
          <option value="Und">Und</option>
          <option value="m3">m³</option>
          <option value="Gal">Gal</option>
          <option value="Lot">Lot</option>
        </select>
      </div>
      <div class="col-lg-3">
        <label for="manifiesto_formato_campo_5" class="form-label">Formato</label>
        <select class="form-select" id="manifiesto_formato_campo_5" name="manifiesto_formato_campo_5">
          <option value="texto" selected>Texto</option>
          <option value="numero">Número</option>
          <option value="decimal">Decimal</option>
          <option value="fecha">Fecha</option>
          <option value="lista">Lista desplegable</option>
        </select>
      </div>
      <div class="col-lg-1 d-flex align-items-end">
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" id="manifiesto_obligatorio_campo_5" name="manifiesto_obligatorio_campo_5" value="1">
          <label class="form-check-label" for="manifiesto_obligatorio_campo_5">Obligatorio</label>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>

      <div class="tab-pane fade" id="campos-solicitudes" role="tabpanel" tabindex="0" aria-labelledby="solicitudes-tab">
        <h2 class="gc-section-title">Campos personalizados Solicitudes</h2>
        <p class="gc-section-kicker">Configura hasta dos campos adicionales para solicitudes.</p>
        <div class="accordion" id="configSolicitudesAccordion">
    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#config_solicitudes_campo_1">
          Campo personalizado Solicitudes 1
        </button>
      </h3>
      <div id="config_solicitudes_campo_1" class="accordion-collapse collapse show" data-bs-parent="#configSolicitudesAccordion">
        <div class="accordion-body">
          <div class="row g-3">
      <div class="col-lg-5">
        <label for="solicitudes_titulo_campo_1" class="form-label">Título campo 1</label>
        <input type="text" class="form-control" id="solicitudes_titulo_campo_1" name="solicitudes_titulo_campo_1" maxlength="80">
      </div>
      <div class="col-lg-5">
        <label for="solicitudes_formato_campo_1" class="form-label">Formato</label>
        <select class="form-select" id="solicitudes_formato_campo_1" name="solicitudes_formato_campo_1">
          <option value="texto" selected>Texto</option>
          <option value="numero">Número</option>
          <option value="decimal">Decimal</option>
          <option value="fecha">Fecha</option>
          <option value="lista">Lista desplegable</option>
        </select>
      </div>
      <div class="col-lg-1 d-flex align-items-end">
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" id="solicitudes_obligatorio_campo_1" name="solicitudes_obligatorio_campo_1" value="1">
          <label class="form-check-label" for="solicitudes_obligatorio_campo_1">Obligatorio</label>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#config_solicitudes_campo_2">
          Campo personalizado Solicitudes 2
        </button>
      </h3>
      <div id="config_solicitudes_campo_2" class="accordion-collapse collapse" data-bs-parent="#configSolicitudesAccordion">
        <div class="accordion-body">
          <div class="row g-3">
      <div class="col-lg-5">
        <label for="solicitudes_titulo_campo_2" class="form-label">Título campo 2</label>
        <input type="text" class="form-control" id="solicitudes_titulo_campo_2" name="solicitudes_titulo_campo_2" maxlength="80">
      </div>
      <div class="col-lg-5">
        <label for="solicitudes_formato_campo_2" class="form-label">Formato</label>
        <select class="form-select" id="solicitudes_formato_campo_2" name="solicitudes_formato_campo_2">
          <option value="texto" selected>Texto</option>
          <option value="numero">Número</option>
          <option value="decimal">Decimal</option>
          <option value="fecha">Fecha</option>
          <option value="lista">Lista desplegable</option>
        </select>
      </div>
      <div class="col-lg-1 d-flex align-items-end">
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" id="solicitudes_obligatorio_campo_2" name="solicitudes_obligatorio_campo_2" value="1">
          <label class="form-check-label" for="solicitudes_obligatorio_campo_2">Obligatorio</label>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>

      <div class="tab-pane fade" id="funcionalidad" role="tabpanel" tabindex="0" aria-labelledby="funcionalidad-tab">
        <h2 class="gc-section-title">Funcionalidad</h2>
        <p class="gc-section-kicker">Las opciones se agrupan en acordeones para reducir scroll y facilitar la revisión de configuraciones críticas.</p>
        <div class="accordion" id="configFuncionalidadAccordion">
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#func_solicitudes_manifiesto">
        Solicitudes y Manifiesto
      </button>
    </h3>
    <div id="func_solicitudes_manifiesto" class="accordion-collapse collapse show" data-bs-parent="#configFuncionalidadAccordion">
      <div class="accordion-body">
        <div class="row g-3">
      <div class="col-lg-6">
        <label for="porcentaje_solicitudes_preprogramadas" class="form-label">Porcentaje aparición solicitudes pre-programadas según frecuencia</label>
        <input type="text" inputmode="numeric" class="form-control" id="porcentaje_solicitudes_preprogramadas" name="porcentaje_solicitudes_preprogramadas" value="80" min="0" max="100" step="1">
      </div>
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="habilitar_lista_chequeo_campo_label">Desea habilitar lista de chequeo en campo desde el diligenciamiento del Manifiesto?</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="habilitar_lista_chequeo_campo_label">
            <input class="btn-check" type="radio" name="habilitar_lista_chequeo_campo" id="habilitar_lista_chequeo_campo_no" value="NO">
            <label class="btn" for="habilitar_lista_chequeo_campo_no">NO</label>
            <input class="btn-check" type="radio" name="habilitar_lista_chequeo_campo" id="habilitar_lista_chequeo_campo_si" value="SI" checked>
            <label class="btn" for="habilitar_lista_chequeo_campo_si">SI</label>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="inhabilitar_obligatoriedad_lista_chequeo_campo_label">Desea inhabilitar obligatoriedad en lista de chequeo en campo desde el diligenciamiento del Manifiesto?</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="inhabilitar_obligatoriedad_lista_chequeo_campo_label">
            <input class="btn-check" type="radio" name="inhabilitar_obligatoriedad_lista_chequeo_campo" id="inhabilitar_obligatoriedad_lista_chequeo_campo_no" value="NO" checked>
            <label class="btn" for="inhabilitar_obligatoriedad_lista_chequeo_campo_no">NO</label>
            <input class="btn-check" type="radio" name="inhabilitar_obligatoriedad_lista_chequeo_campo" id="inhabilitar_obligatoriedad_lista_chequeo_campo_si" value="SI">
            <label class="btn" for="inhabilitar_obligatoriedad_lista_chequeo_campo_si">SI</label>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="habilitar_otro_residuo_label">Habilitar campo “Otro residuo” al diligenciar Manifiesto</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="habilitar_otro_residuo_label">
            <input class="btn-check" type="radio" name="habilitar_otro_residuo" id="habilitar_otro_residuo_no" value="NO" checked>
            <label class="btn" for="habilitar_otro_residuo_no">NO</label>
            <input class="btn-check" type="radio" name="habilitar_otro_residuo" id="habilitar_otro_residuo_si" value="SI">
            <label class="btn" for="habilitar_otro_residuo_si">SI</label>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="duplicar_declarado_replicar_datos_label">Desea que al duplicar declarado/servicio replique precio, frecuencia y hoja de seguridad/caracterización</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="duplicar_declarado_replicar_datos_label">
            <input class="btn-check" type="radio" name="duplicar_declarado_replicar_datos" id="duplicar_declarado_replicar_datos_no" value="NO" checked>
            <label class="btn" for="duplicar_declarado_replicar_datos_no">NO</label>
            <input class="btn-check" type="radio" name="duplicar_declarado_replicar_datos" id="duplicar_declarado_replicar_datos_si" value="SI">
            <label class="btn" for="duplicar_declarado_replicar_datos_si">SI</label>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="obligar_peso_lleno_vacio_label">Obligatoriedad en el registro de peso lleno y peso vacío en el Manifiesto de carga</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="obligar_peso_lleno_vacio_label">
            <input class="btn-check" type="radio" name="obligar_peso_lleno_vacio" id="obligar_peso_lleno_vacio_no" value="NO" checked>
            <label class="btn" for="obligar_peso_lleno_vacio_no">NO</label>
            <input class="btn-check" type="radio" name="obligar_peso_lleno_vacio" id="obligar_peso_lleno_vacio_si" value="SI">
            <label class="btn" for="obligar_peso_lleno_vacio_si">SI</label>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="habilitar_observacion_respuestas_cerradas_label">Desea habilitar una observación para las respuestas cerradas de la lista de chequeo interna y en campo?</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="habilitar_observacion_respuestas_cerradas_label">
            <input class="btn-check" type="radio" name="habilitar_observacion_respuestas_cerradas" id="habilitar_observacion_respuestas_cerradas_no" value="NO" checked>
            <label class="btn" for="habilitar_observacion_respuestas_cerradas_no">NO</label>
            <input class="btn-check" type="radio" name="habilitar_observacion_respuestas_cerradas" id="habilitar_observacion_respuestas_cerradas_si" value="SI">
            <label class="btn" for="habilitar_observacion_respuestas_cerradas_si">SI</label>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="obligar_especificaciones_adicionales_label">Habilitar obligatoriedad en especificaciones adicionales desde solicitudes?</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="obligar_especificaciones_adicionales_label">
            <input class="btn-check" type="radio" name="obligar_especificaciones_adicionales" id="obligar_especificaciones_adicionales_no" value="NO" checked>
            <label class="btn" for="obligar_especificaciones_adicionales_no">NO</label>
            <input class="btn-check" type="radio" name="obligar_especificaciones_adicionales" id="obligar_especificaciones_adicionales_si" value="SI">
            <label class="btn" for="obligar_especificaciones_adicionales_si">SI</label>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="obligar_categorias_declarado_label">Desea habilitar obligatoriedad para relacionar categorías del declarado?</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="obligar_categorias_declarado_label">
            <input class="btn-check" type="radio" name="obligar_categorias_declarado" id="obligar_categorias_declarado_no" value="NO" checked>
            <label class="btn" for="obligar_categorias_declarado_no">NO</label>
            <input class="btn-check" type="radio" name="obligar_categorias_declarado" id="obligar_categorias_declarado_si" value="SI">
            <label class="btn" for="obligar_categorias_declarado_si">SI</label>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#func_conciliacion_indicadores">
        Conciliación e indicadores
      </button>
    </h3>
    <div id="func_conciliacion_indicadores" class="accordion-collapse collapse" data-bs-parent="#configFuncionalidadAccordion">
      <div class="accordion-body">
        <div class="row g-3">
      <div class="col-lg-7">
        <label for="tipo_desviacion_peso" class="form-label">Desviación de peso en conciliaciones</label>
        <div class="row g-2">
          <div class="col-md-6">
            <select class="form-select" id="tipo_desviacion_peso" name="tipo_desviacion_peso">
              <option value="porcentaje" selected>Porcentaje</option>
              <option value="valor_absoluto">Valor absoluto</option>
            </select>
          </div>
          <div class="col-md-6">
            <input type="text" inputmode="numeric" class="form-control" id="valor_desviacion_peso" name="valor_desviacion_peso" value="5.00" step="0.01" min="0">
          </div>
        </div>
      </div>
      <div class="col-lg-5">
        <label for="unidad_medida_indicadores" class="form-label">Unidad de medida de indicadores</label>
        <select class="form-select" id="unidad_medida_indicadores" name="unidad_medida_indicadores">
          <option value="kg" selected>kg</option>
          <option value="Ton">Ton</option>
          <option value="Und">Und</option>
          <option value="m3">m³</option>
          <option value="Gal">Gal</option>
        </select>
      </div>
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="replicar_datos_conciliar_cliente_label">Habilitar replicación de datos al conciliar CLIENTE</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="replicar_datos_conciliar_cliente_label">
            <input class="btn-check" type="radio" name="replicar_datos_conciliar_cliente" id="replicar_datos_conciliar_cliente_no" value="NO">
            <label class="btn" for="replicar_datos_conciliar_cliente_no">NO</label>
            <input class="btn-check" type="radio" name="replicar_datos_conciliar_cliente" id="replicar_datos_conciliar_cliente_si" value="SI" checked>
            <label class="btn" for="replicar_datos_conciliar_cliente_si">SI</label>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="replicar_datos_conciliar_proveedor_label">Habilitar replicación de datos al conciliar PROVEEDOR</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="replicar_datos_conciliar_proveedor_label">
            <input class="btn-check" type="radio" name="replicar_datos_conciliar_proveedor" id="replicar_datos_conciliar_proveedor_no" value="NO">
            <label class="btn" for="replicar_datos_conciliar_proveedor_no">NO</label>
            <input class="btn-check" type="radio" name="replicar_datos_conciliar_proveedor" id="replicar_datos_conciliar_proveedor_si" value="SI" checked>
            <label class="btn" for="replicar_datos_conciliar_proveedor_si">SI</label>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#func_actas_facturacion">
        Actas y facturación
      </button>
    </h3>
    <div id="func_actas_facturacion" class="accordion-collapse collapse" data-bs-parent="#configFuncionalidadAccordion">
      <div class="accordion-body">
        <div class="row g-3">
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="habilitar_descarga_actas_estado_factura_label">Desea habilitar descarga de actas por estado de factura?</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="habilitar_descarga_actas_estado_factura_label">
            <input class="btn-check" type="radio" name="habilitar_descarga_actas_estado_factura" id="habilitar_descarga_actas_estado_factura_no" value="NO" checked>
            <label class="btn" for="habilitar_descarga_actas_estado_factura_no">NO</label>
            <input class="btn-check" type="radio" name="habilitar_descarga_actas_estado_factura" id="habilitar_descarga_actas_estado_factura_si" value="SI">
            <label class="btn" for="habilitar_descarga_actas_estado_factura_si">SI</label>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="habilitar_aprobacion_actas_label">Habilitar aprobación de actas</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="habilitar_aprobacion_actas_label">
            <input class="btn-check" type="radio" name="habilitar_aprobacion_actas" id="habilitar_aprobacion_actas_no" value="NO">
            <label class="btn" for="habilitar_aprobacion_actas_no">NO</label>
            <input class="btn-check" type="radio" name="habilitar_aprobacion_actas" id="habilitar_aprobacion_actas_si" value="SI" checked>
            <label class="btn" for="habilitar_aprobacion_actas_si">SI</label>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="obligar_imagen_aprobacion_actas_label">Habilitar obligatoriedad de carga de imagen en la aprobación de actas</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="obligar_imagen_aprobacion_actas_label">
            <input class="btn-check" type="radio" name="obligar_imagen_aprobacion_actas" id="obligar_imagen_aprobacion_actas_no" value="NO" checked>
            <label class="btn" for="obligar_imagen_aprobacion_actas_no">NO</label>
            <input class="btn-check" type="radio" name="obligar_imagen_aprobacion_actas" id="obligar_imagen_aprobacion_actas_si" value="SI">
            <label class="btn" for="obligar_imagen_aprobacion_actas_si">SI</label>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="habilitar_acta_por_residuo_label">Habilitar generación de acta por residuo</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="habilitar_acta_por_residuo_label">
            <input class="btn-check" type="radio" name="habilitar_acta_por_residuo" id="habilitar_acta_por_residuo_no" value="NO" checked>
            <label class="btn" for="habilitar_acta_por_residuo_no">NO</label>
            <input class="btn-check" type="radio" name="habilitar_acta_por_residuo" id="habilitar_acta_por_residuo_si" value="SI">
            <label class="btn" for="habilitar_acta_por_residuo_si">SI</label>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-check gc-check-card">
          <input class="form-check-input" type="checkbox" id="acta_automatica_formato" name="acta_automatica_formato" value="1">
          <label class="form-check-label" for="acta_automatica_formato">Habilitar generación de acta automática por tipo de formato de acta</label>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-check gc-check-card">
          <input class="form-check-input" type="checkbox" id="acta_automatica_factura_pagada_api_emlaze" name="acta_automatica_factura_pagada_api_emlaze" value="1">
          <label class="form-check-label" for="acta_automatica_factura_pagada_api_emlaze">Generar Acta automática por estado de factura pagada Api Emlaze</label>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="visualizar_precio_compra_manifiesto_descarga_label">Habilitar visualización de precio de compra en Manifiesto de descarga?</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="visualizar_precio_compra_manifiesto_descarga_label">
            <input class="btn-check" type="radio" name="visualizar_precio_compra_manifiesto_descarga" id="visualizar_precio_compra_manifiesto_descarga_no" value="NO" checked>
            <label class="btn" for="visualizar_precio_compra_manifiesto_descarga_no">NO</label>
            <input class="btn-check" type="radio" name="visualizar_precio_compra_manifiesto_descarga" id="visualizar_precio_compra_manifiesto_descarga_si" value="SI">
            <label class="btn" for="visualizar_precio_compra_manifiesto_descarga_si">SI</label>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="habilitar_formato_tirilla_recibo_descarga_label">Habilitar formato tipo tirilla para el recibo del Manifiesto de descarga?</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="habilitar_formato_tirilla_recibo_descarga_label">
            <input class="btn-check" type="radio" name="habilitar_formato_tirilla_recibo_descarga" id="habilitar_formato_tirilla_recibo_descarga_no" value="NO" checked>
            <label class="btn" for="habilitar_formato_tirilla_recibo_descarga_no">NO</label>
            <input class="btn-check" type="radio" name="habilitar_formato_tirilla_recibo_descarga" id="habilitar_formato_tirilla_recibo_descarga_si" value="SI">
            <label class="btn" for="habilitar_formato_tirilla_recibo_descarga_si">SI</label>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#func_app_proveedores_rutas">
        APP, proveedores y rutas
      </button>
    </h3>
    <div id="func_app_proveedores_rutas" class="accordion-collapse collapse" data-bs-parent="#configFuncionalidadAccordion">
      <div class="accordion-body">
        <div class="row g-3">
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="obligar_ficha_residuo_peligroso_label">Obligatorio cargue ficha de datos de seguridad/caracterización residuo peligroso</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="obligar_ficha_residuo_peligroso_label">
            <input class="btn-check" type="radio" name="obligar_ficha_residuo_peligroso" id="obligar_ficha_residuo_peligroso_no" value="NO">
            <label class="btn" for="obligar_ficha_residuo_peligroso_no">NO</label>
            <input class="btn-check" type="radio" name="obligar_ficha_residuo_peligroso" id="obligar_ficha_residuo_peligroso_si" value="SI" checked>
            <label class="btn" for="obligar_ficha_residuo_peligroso_si">SI</label>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="obligar_ficha_residuo_no_peligroso_label">Obligatorio cargue ficha de datos de seguridad/caracterización residuo NO peligroso</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="obligar_ficha_residuo_no_peligroso_label">
            <input class="btn-check" type="radio" name="obligar_ficha_residuo_no_peligroso" id="obligar_ficha_residuo_no_peligroso_no" value="NO" checked>
            <label class="btn" for="obligar_ficha_residuo_no_peligroso_no">NO</label>
            <input class="btn-check" type="radio" name="obligar_ficha_residuo_no_peligroso" id="obligar_ficha_residuo_no_peligroso_si" value="SI">
            <label class="btn" for="obligar_ficha_residuo_no_peligroso_si">SI</label>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="obligar_lista_chequeo_interna_app_label">Obligar el registro de la lista de chequeo interna para cargar Manifiesto desde APP</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="obligar_lista_chequeo_interna_app_label">
            <input class="btn-check" type="radio" name="obligar_lista_chequeo_interna_app" id="obligar_lista_chequeo_interna_app_no" value="NO" checked>
            <label class="btn" for="obligar_lista_chequeo_interna_app_no">NO</label>
            <input class="btn-check" type="radio" name="obligar_lista_chequeo_interna_app" id="obligar_lista_chequeo_interna_app_si" value="SI">
            <label class="btn" for="obligar_lista_chequeo_interna_app_si">SI</label>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="obligar_adjunto_solicitud_descarga_label">Obligar adjunto en solicitud de descarga</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="obligar_adjunto_solicitud_descarga_label">
            <input class="btn-check" type="radio" name="obligar_adjunto_solicitud_descarga" id="obligar_adjunto_solicitud_descarga_no" value="NO" checked>
            <label class="btn" for="obligar_adjunto_solicitud_descarga_no">NO</label>
            <input class="btn-check" type="radio" name="obligar_adjunto_solicitud_descarga" id="obligar_adjunto_solicitud_descarga_si" value="SI">
            <label class="btn" for="obligar_adjunto_solicitud_descarga_si">SI</label>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="permitir_gestores_sucursales_declaraciones_label">Permitir a clientes gestores relacionar sucursales a declaraciones</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="permitir_gestores_sucursales_declaraciones_label">
            <input class="btn-check" type="radio" name="permitir_gestores_sucursales_declaraciones" id="permitir_gestores_sucursales_declaraciones_no" value="NO" checked>
            <label class="btn" for="permitir_gestores_sucursales_declaraciones_no">NO</label>
            <input class="btn-check" type="radio" name="permitir_gestores_sucursales_declaraciones" id="permitir_gestores_sucursales_declaraciones_si" value="SI">
            <label class="btn" for="permitir_gestores_sucursales_declaraciones_si">SI</label>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="habilitar_correos_doble_via_proveedores_label">Desea habilitar envío de correos en doble vía de proveedores?</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="habilitar_correos_doble_via_proveedores_label">
            <input class="btn-check" type="radio" name="habilitar_correos_doble_via_proveedores" id="habilitar_correos_doble_via_proveedores_no" value="NO" checked>
            <label class="btn" for="habilitar_correos_doble_via_proveedores_no">NO</label>
            <input class="btn-check" type="radio" name="habilitar_correos_doble_via_proveedores" id="habilitar_correos_doble_via_proveedores_si" value="SI">
            <label class="btn" for="habilitar_correos_doble_via_proveedores_si">SI</label>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="gc-question">
          <label class="form-label" id="permitir_rutas_mismo_vehiculo_diferentes_conductores_label">Desea permitir registrar rutas con el mismo vehículo para diferentes conductores?</label>
          <div class="gc-yes-no" role="radiogroup" aria-labelledby="permitir_rutas_mismo_vehiculo_diferentes_conductores_label">
            <input class="btn-check" type="radio" name="permitir_rutas_mismo_vehiculo_diferentes_conductores" id="permitir_rutas_mismo_vehiculo_diferentes_conductores_no" value="NO" checked>
            <label class="btn" for="permitir_rutas_mismo_vehiculo_diferentes_conductores_no">NO</label>
            <input class="btn-check" type="radio" name="permitir_rutas_mismo_vehiculo_diferentes_conductores" id="permitir_rutas_mismo_vehiculo_diferentes_conductores_si" value="SI">
            <label class="btn" for="permitir_rutas_mismo_vehiculo_diferentes_conductores_si">SI</label>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="gc-review-footer">
    <div class="gc-review-box">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="confirmar_revision_configuracion" data-gc-review-check="#btn_actualizar_configuracion">
        <label class="form-check-label" for="confirmar_revision_configuracion">Confirmo que revisé los datos sensibles, alertas y funcionalidades críticas antes de actualizar.</label>
      </div>
      <div class="gc-review-actions">
        <button class="btn btn-outline-secondary" type="button">Cancelar</button>
        <button class="btn btn-success" type="submit" id="btn_actualizar_configuracion" disabled>Guardar</button>
      </div>
    </div>
  </footer>
</form>`
  },
  {
    id:"gc-formulario-roles",
    implementations: [
      { module: "Roles", agregar: 124, file: "cplus/views/mostrarRoles.php", detail: "form#form-role-permissions con include de partials/page-head.php y la fila Nombre / Descripción / Estado (líneas 94-125)" },
      { module: "Roles", agregar: 124, file: "cplus/views/mostrarRoles.php", detail: "Selector de módulo real: div#rbac-form-modules con role=radiogroup y radios por módulo, no el select del organismo (líneas 152-171)" },
      { module: "Roles", agregar: 124, file: "cplus/views/mostrarRoles.php", detail: "Cierre gc-review-footer con #gc_review_roles que gatea #btn-submit-role (líneas 185-197)" },
    ],
    group:"Formularios",
    name:"Mis roles / Actualizar rol o perfil",
    description:"Organismo compacto para crear o actualizar roles/perfiles del sistema, con módulo asociado, descripción funcional y cierre con revisión.",
    use:"Usarlo para administrar roles o perfiles que afectan permisos, navegación y acceso a módulos del sistema. El ancho controlado evita que el formulario se vea vacío y mantiene una lectura rápida.",
    avoid:"No pegarlo sin ajustar action, listado real de módulos, validaciones de permisos y reglas de autorización del backend.",
    deps:"Bootstrap CSS + Bootstrap JS + grinclic-forms.css + grinclic-forms.js",
    accessibility:"El formulario usa labels asociados, controles nativos, mensaje informativo visible y confirmación final antes del submit para reducir cambios accidentales en perfiles de acceso.",
    note:"No se marca como verificada: el organismo modela el módulo como un select con opciones fijas, mientras producción lo construye desde RBAC como radiogroup (<code>#rbac-form-modules</code> en <code>cplus/views/mostrarRoles.php</code>). Producción añade además el campo Estado en modo creación y la matriz completa de permisos RBAC, poblada por <code>cplus/js/lib/RbacPermissionMatrix.js</code>, que el organismo no documenta.",
    example:"ejemplos/formulario-roles.html",
    snippet:`<!-- Organismo: gc-formulario-roles -->
<!-- Uso conceptual: <gc-formulario-roles></gc-formulario-roles> -->
<form class="gc-form-shell" method="post" action="/roles/actualizar">
  <header class="gc-page-header" aria-labelledby="gc-page-header-title-1">
    <div class="gc-page-header__layout">
      <div class="gc-page-header__heading">
        <h1 class="gc-page-header__title" id="gc-page-header-title-1">
          <i class="bi bi-shield-lock gc-page-header__title-icon" aria-hidden="true"></i>
          <span>Mis roles</span>
        </h1>
        <p class="gc-page-header__desc">Configuración básica del rol, módulo asociado y descripción funcional.</p>
      </div>
      <aside class="gc-page-header__side">
        <div class="gc-page-header__meta" role="group" aria-label="Información de auditoría">
          <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Fecha de creación</span><span class="gc-page-header__meta-value" title="12/03/2026">12/03/2026</span></div>
          <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Creado por</span><span class="gc-page-header__meta-value" title="Laura Méndez">Laura Méndez</span></div>
          <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Último cambio</span><span class="gc-page-header__meta-value" title="04/08/2026">04/08/2026</span></div>
          <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Elaborado por</span><span class="gc-page-header__meta-value" title="Andrés Rojas">Andrés Rojas</span></div>
        </div>
      </aside>
    </div>
  </header>

  <section class="gc-form-section">
    <div class="row justify-content-center">
      <div class="col-xl-8 col-lg-9">
<section class="border rounded-3 p-3 bg-white">
          <h2 class="gc-section-title">Datos del rol/perfil</h2>
          <p class="gc-section-kicker">Mantén nombres claros y descripciones breves para que el equipo pueda identificar el alcance del perfil sin ambigüedad.</p>

          <div class="row g-3">
            <div class="col-lg-7">
              <label for="rol_nombre" class="form-label"><span class="gc-required">*</span>Nombre del rol</label>
              <input type="text" class="form-control" id="rol_nombre" name="nombre_rol" value="Coordinador logístico" required autocomplete="off">
            </div>
            <div class="col-lg-5">
              <label for="rol_modulo" class="form-label"><span class="gc-required">*</span>Módulo</label>
              <select class="form-select" id="rol_modulo" name="modulo" required>
                <option value="">Seleccione</option>
                <option value="Administración">Administración</option>
                <option value="Logística" selected>Logística</option>
                <option value="Operación">Operación</option>
                <option value="Comercial">Comercial</option>
                <option value="Reportes">Reportes</option>
                <option value="APP">APP</option>
              </select>
            </div>
            <div class="col-12">
              <label for="rol_descripcion" class="form-label">Descripción</label>
              <textarea class="form-control" id="rol_descripcion" name="descripcion" rows="4" placeholder="Describe el alcance funcional del rol y los permisos asociados.">Perfil encargado de administrar sucursales, usuarios y catálogos maestros del tenant.</textarea>
              <div class="gc-help">Documenta el alcance para facilitar soporte, auditoría y mantenimiento de permisos.</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>

  <footer class="gc-review-footer">
    <div class="gc-review-box">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="rol_confirmar_revision" data-gc-review-check="#rol_btn_actualizar">
        <label class="form-check-label" for="rol_confirmar_revision">Confirmo que revisé el nombre del rol, el módulo asociado y el alcance funcional antes de actualizar.</label>
      </div>
      <div class="gc-review-actions">
        <button class="btn btn-outline-secondary" type="button">Cancelar</button>
        <button class="btn btn-success" type="submit" id="rol_btn_actualizar" disabled>Guardar</button>
      </div>
    </div>
  </footer>
</form>`
  },
  {
    id:"gc-formulario-elementos-chequeo",
    implementations: [
      { module: "Elementos de chequeo", agregar: 117, file: "cplus/views/mostrarElementosChequeo.php", detail: "form#formularioRegistrar con include de partials/page-head.php y la caja informativa gc-info-box (líneas 84-92)" },
      { module: "Elementos de chequeo", agregar: 117, file: "cplus/views/mostrarElementosChequeo.php", detail: "Los tres únicos campos reales hoy: Nombre, Descripción y Estado en una sola fila (líneas 94-112)" },
      { module: "Elementos de chequeo", agregar: 117, file: "cplus/views/mostrarElementosChequeo.php", detail: "Cierre gc-review-footer con #gc_review_elementos que gatea #guardar (líneas 117-133)" },
    ],
    group:"Formularios",
    name:"Elementos de chequeo / Actualizar elemento de chequeo",
    description:"Organismo operativo para configurar preguntas de chequeo, obligatoriedad, respuesta esperada, clasificación, verificación, sección y orden de visualización.",
    use:"Usarlo para crear o actualizar elementos que impactan listas de chequeo internas o en campo. La estructura compacta permite revisar la configuración principal, clasificación y descripción sin usar pestañas innecesarias.",
    avoid:"No pegarlo sin ajustar action, catálogos reales, reglas de obligatoriedad, dependencias entre tipo de respuesta y respuesta esperada, permisos y validaciones de backend.",
    deps:"Bootstrap CSS + Bootstrap JS + grinclic-forms.css + grinclic-forms.js",
    accessibility:"El formulario usa labels asociados, controles nativos, ayudas cercanas a los campos, selectores para valores controlados y cierre con confirmación antes del submit.",
    note:"No se marca como verificada: el organismo declara 9 campos en 3 secciones y producción tiene solo 3 campos en una sola fila, Nombre, Descripción y Estado (<code>cplus/views/mostrarElementosChequeo.php</code>), sin secciones ni <code>gc-section-title</code>. El subtítulo de la vista promete obligatoriedad, respuesta esperada, sección y orden, pero esos campos no están implementados.",
    example:"ejemplos/formulario-elementos-chequeo.html",
    snippet:`<!-- Organismo: gc-formulario-elementos-chequeo -->
<!-- Uso conceptual: <gc-formulario-elementos-chequeo></gc-formulario-elementos-chequeo> -->
<form class="gc-form-shell" method="post" action="/elementos-chequeo/actualizar">
  <header class="gc-page-header" aria-labelledby="gc-page-header-title-1">
    <div class="gc-page-header__layout">
      <div class="gc-page-header__heading">
        <h1 class="gc-page-header__title" id="gc-page-header-title-1">
          <i class="bi bi-clipboard-check gc-page-header__title-icon" aria-hidden="true"></i>
          <span>Elementos de chequeo</span>
        </h1>
        <p class="gc-page-header__desc">Configuración de preguntas, obligatoriedad, respuesta esperada, sección y orden de visualización.</p>
      </div>
      <aside class="gc-page-header__side">
        <div class="gc-page-header__meta" role="group" aria-label="Información de auditoría">
          <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Fecha de creación</span><span class="gc-page-header__meta-value" title="12/03/2026">12/03/2026</span></div>
          <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Creado por</span><span class="gc-page-header__meta-value" title="Laura Méndez">Laura Méndez</span></div>
          <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Último cambio</span><span class="gc-page-header__meta-value" title="04/08/2026">04/08/2026</span></div>
          <div class="gc-page-header__meta-cell"><span class="gc-page-header__meta-label">Elaborado por</span><span class="gc-page-header__meta-value" title="Andrés Rojas">Andrés Rojas</span></div>
        </div>
      </aside>
    </div>
  </header>

  <section class="gc-form-section">
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-11">
<div class="row g-3">
          <div class="col-12">
            <section class="border rounded-3 p-3 bg-white">
              <h2 class="gc-section-title">Configuración principal</h2>
              <p class="gc-section-kicker">Define la pregunta, su estado, tipo de respuesta y obligatoriedad dentro de la lista de chequeo.</p>

              <div class="row g-3">
                <div class="col-lg-6">
                  <label for="chequeo_nombre" class="form-label"><span class="gc-required">*</span>Chequeo</label>
                  <input type="text" class="form-control" id="chequeo_nombre" name="chequeo" value="¿El vehículo posee Número UN color naranja?" required>
                </div>
                <div class="col-lg-3">
                  <label for="chequeo_activo" class="form-label"><span class="gc-required">*</span>Activo</label>
                  <select class="form-select" id="chequeo_activo" name="activo" required>
                    <option value="">Seleccione</option>
                    <option value="Activo" selected>Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
                </div>
                <div class="col-lg-3">
                  <label for="chequeo_obligatoriedad" class="form-label"><span class="gc-required">*</span>Obligatoriedad</label>
                  <select class="form-select" id="chequeo_obligatoriedad" name="obligatoriedad" required>
                    <option value="">Seleccione</option>
                    <option value="SI">SI</option>
                    <option value="NO" selected>NO</option>
                  </select>
                </div>
                <div class="col-lg-6">
                  <label for="chequeo_tipo_respuesta" class="form-label"><span class="gc-required">*</span>Tipo de respuesta</label>
                  <select class="form-select" id="chequeo_tipo_respuesta" name="tipo_respuesta" required aria-describedby="chequeo_tipo_respuesta_help">
                    <option value="">Seleccione</option>
                    <option value="Cerrada" selected>Cerrada</option>
                    <option value="Abierta">Abierta</option>
                    <option value="Numérica">Numérica</option>
                  </select>
                  <div id="chequeo_tipo_respuesta_help" class="gc-help">Cuando la respuesta sea cerrada, valida si debe existir una respuesta esperada.</div>
                </div>
                <div class="col-lg-6">
                  <label for="chequeo_respuesta_esperada" class="form-label">Respuesta esperada</label>
                  <select class="form-select" id="chequeo_respuesta_esperada" name="respuesta_esperada" aria-describedby="chequeo_respuesta_esperada_help">
                    <option value="">Seleccione</option>
                    <option value="SI" selected>SI</option>
                    <option value="NO">NO</option>
                    <option value="N/A">N/A</option>
                    <option value="No aplica">No aplica</option>
                  </select>
                  <div id="chequeo_respuesta_esperada_help" class="gc-help">Campo relevante principalmente para respuestas cerradas.</div>
                </div>
              </div>
            </section>
          </div>

          <div class="col-12">
            <section class="border rounded-3 p-3 bg-white">
              <h2 class="gc-section-title">Clasificación y verificación</h2>
              <p class="gc-section-kicker">Ubica el elemento dentro de la lista y define quién debe verificarlo.</p>

              <div class="row g-3">
                <div class="col-lg-4">
                  <label for="chequeo_verificacion" class="form-label"><span class="gc-required">*</span>Verificación por parte del</label>
                  <select class="form-select" id="chequeo_verificacion" name="verificacion_por_parte_del" required>
                    <option value="">Seleccione</option>
                    <option value="Conductor">Conductor</option>
                    <option value="Gestor" selected>Gestor</option>
                    <option value="Proveedor">Proveedor</option>
                    <option value="Cliente">Cliente</option>
                    <option value="Equipo interno">Equipo interno</option>
                  </select>
                </div>
                <div class="col-lg-5">
                  <label for="chequeo_seccion" class="form-label"><span class="gc-required">*</span>Sección a la que pertenece</label>
                  <select class="form-select" id="chequeo_seccion" name="seccion" required>
                    <option value="">Seleccione</option>
                    <option value="Vehículo" selected>Vehículo</option>
                    <option value="Conductor">Conductor</option>
                    <option value="Documentación">Documentación</option>
                    <option value="Elementos de seguridad">Elementos de seguridad</option>
                    <option value="Manifiesto">Manifiesto</option>
                    <option value="General">General</option>
                  </select>
                </div>
                <div class="col-lg-3">
                  <label for="chequeo_orden" class="form-label">Orden</label>
                  <input type="text" inputmode="numeric" class="form-control" id="chequeo_orden" name="orden" value="1" min="1" step="1" inputmode="numeric">
                  <div class="gc-help">Controla la posición visual del elemento.</div>
                </div>
              </div>
            </section>
          </div>

          <div class="col-12">
            <section class="border rounded-3 p-3 bg-white">
              <h2 class="gc-section-title">Descripción</h2>
              <div class="row g-3">
                <div class="col-12">
                  <label for="chequeo_descripcion" class="form-label">Descripción</label>
                  <textarea class="form-control" id="chequeo_descripcion" name="descripcion" rows="4" placeholder="Describe la regla, alcance o criterio de validación del elemento.">Validar que el vehículo cuente con identificación visible cuando aplique para el tipo de residuo transportado.</textarea>
                  <div class="gc-help">Usa este campo para aclarar criterios de revisión y evitar interpretaciones distintas en operación.</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="gc-review-footer">
    <div class="gc-review-box">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="chequeo_confirmar_revision" data-gc-review-check="#chequeo_btn_actualizar">
        <label class="form-check-label" for="chequeo_confirmar_revision">Confirmo que revisé la pregunta, obligatoriedad, respuesta esperada, sección y orden antes de actualizar el elemento de chequeo.</label>
      </div>
      <div class="gc-review-actions">
        <button class="btn btn-outline-secondary" type="button">Cancelar</button>
        <button class="btn btn-success" type="submit" id="chequeo_btn_actualizar" disabled>Guardar</button>
      </div>
    </div>
  </footer>
</form>`
  },
  {
    id:"boton",
    catalogExamples: ["opciones-acordeon"],
    implementations: [
      { module: "Embalajes", agregar: 106, file: "cplus/views/mostrarEmbalajes.php", detail: "El kit en el módulo más simple: Nuevo del encabezado del listado (líneas 115-124) y Guardar dentro del encabezado del formulario vía $phAcciones (líneas 139-146). Ojo: la tarjeta de filtros con su botón Buscar está COMENTADA, así que ese botón no se renderiza" },
      { module: "Clientes", agregar: 130, file: "cplus/views/mostrarClientes.php", detail: "Buscar de la tarjeta de filtros, con el bloque vivo: erp-btn erp-btn-primary dentro de div.filters-actions (líneas 107-111)" },
      { module: "Sucursales", agregar: 127, file: "cplus/views/mostrarSucursales.php", detail: "Cancelar secundario + Guardar primario en form-actions (líneas 750-755) y el mismo par en el pie del modal de horarios (líneas 796-797)" },
      { module: "Usuarios / Roles / Elementos de chequeo", agregar: 105, file: "cplus/js/core/gc-validate.js", detail: "La forma CPlus real de deshabilitar: bindReviewCheck fija targets[i].disabled = !check.checked sobre los submit del formulario (línea 117) y les pone el title de bloqueo (líneas 120-124). Lo activan los checkbox data-gc-review-check de mostrarUsuarios.php:1062, mostrarRoles.php:188 y mostrarElementosChequeo.php:120" },
      { module: "Cargue de sucursales (parte de la migración validada de Sucursales, REQ-1026)", agregar: 146, file: "cplus/views/mostrarCarguesSucursales.php", detail: "Descargar plantilla con erp-btn erp-btn-excel pasado en $phAcciones del encabezado único, apuntando al endpoint BFF de plantilla por modo (líneas 109-115)" },
      { module: "Sucursales", agregar: 127, file: "cplus/js/core/datatable-v2-shell.js", detail: "buildToolbar arma el botón Exportar con erp-btn erp-btn-excel table-tool-btn: modo dropdown en las líneas 163-177 y botón único en las 179-186. Sucursales lo activa en modo dropdown declarando export: 'dropdown' en cplus/js/entities/sucursales/datatable.js:104, que GrincDataTable traduce a data-cplus-export-mode (GrincDataTable.js:386-391)" },
    ],
    group:"Acciones",
    name:"Botón",
    description:"Kit de botones estándar de CPlus. La clase base <code>.erp-btn</code> da forma, altura y tipografía; una segunda clase declara la intención: primario (verde de marca), secundario (blanco con borde), Excel (icono verde) y solo icono. El estado deshabilitado se resuelve con el atributo <code>disabled</code>, nunca con una clase.",
    use:"Usarlo en toda acción de pantalla CPlus: Nuevo del encabezado, Guardar y Cancelar del formulario, Buscar de la tarjeta de filtros, pies de modal y exportación a Excel. Una sola acción primaria por bloque; el resto en secundario, con icono bi dentro del botón.",
    avoid:"No usar la clase btn de Bootstrap cruda para acciones de pantalla, ni gc-module-btn, que es otro botón con otro verde y otro radio. No inventar modificadores: erp-btn-danger se escribe en algunas vistas pero no está definido en el CSS de CPlus, así que no pinta nada. Y .erp-btn sola, sin modificador, no declara fondo ni color.",
    deps:"CSS propio de CPlus (cplus/scss/_components.scss, compilado en cplus/css/main.css) y Bootstrap Icons. No requiere Bootstrap JS, salvo el pie de modal del snippet Secundario, que cierra con data-bs-dismiss.",
    verified: true,
    accessibility:"Usar button para acciones y a solo cuando hay navegación real: el enlace del encabezado de módulo no admite el atributo disabled. El icono no debe ser el único contenido salvo en la variante solo icono, donde aria-label y title son obligatorios. Limitación real: .erp-btn-icon mide 38x38px, por debajo del objetivo táctil de 44px, así que conviene reservarlo para barras de escritorio. No anular el foco del navegador.",
    variants:[
      {
        name:"Primario",
        description:"La acción principal del bloque: Guardar, Buscar, Nuevo, confirmar en un modal. Verde de marca, una sola por bloque. A la derecha, el mismo botón con disabled.",
        preview:`<section class="d-flex gap-4 flex-wrap align-items-start">
  <div>
    <p class="small text-muted mb-2">Habilitado</p>
    <button type="submit" class="erp-btn erp-btn-primary">
      <i class="bi bi-save"></i> Guardar
    </button>
  </div>
  <div>
    <p class="small text-muted mb-2">Deshabilitado (atributo disabled)</p>
    <button type="submit" class="erp-btn erp-btn-primary" disabled title="Confirma la revisión antes de guardar">
      <i class="bi bi-save"></i> Guardar
    </button>
  </div>
</section>`,
        snippet:`<button type="submit" class="erp-btn erp-btn-primary" id="guardarBtn" name="guardarBtn">
  <i class="bi bi-save"></i> Guardar
</button>

<!-- Deshabilitado: atributo disabled, nunca una clase extra -->
<button type="submit" class="erp-btn erp-btn-primary" id="guardarBtn" disabled>
  <i class="bi bi-save"></i> Guardar
</button>

<!-- Buscar de la tarjeta de filtros (cplus/views/mostrarClientes.php:107-111).
     En Embalajes esta tarjeta existe pero está comentada, así que no sirve de referencia viva. -->
<div class="filters-actions">
  <button type="submit" class="erp-btn erp-btn-primary">
    <i class="bi bi-search"></i> Buscar
  </button>
</div>`
      },
      {
        name:"Secundario",
        description:"Acción de salida o de apoyo junto a la primaria: Cancelar, Volver, Cerrar, Limpiar. Fondo blanco con borde gris y texto oscuro. Va siempre a la izquierda de la primaria en pies de formulario y de modal.",
        preview:`<section class="d-flex gap-3 flex-wrap justify-content-end">
  <a href="#" class="erp-btn erp-btn-secondary">
    <i class="bi bi-x-lg"></i> Cancelar
  </a>
  <button type="submit" class="erp-btn erp-btn-primary">
    <i class="bi bi-save"></i> Guardar
  </button>
</section>`,
        snippet:`<!-- Pie de formulario genérico: col-md-12 text-end basta.
     No se copia la clase form-actions de Sucursales: compila como
     #formularioRegistrar .form-actions (cplus/scss/_sucursales.scss:16 y :29-31)
     y fuera de esa vista no aporta nada. -->
<div class="col-md-12 text-end">
  <a href="incluir.php?agregar=127" class="erp-btn erp-btn-secondary" id="cancelarBtn">
    <i class="bi bi-x-lg"></i> Cancelar
  </a>
  <button type="submit" class="erp-btn erp-btn-primary" id="guardarBtn">
    <i class="bi bi-save"></i> Guardar
  </button>
</div>

<!-- Pie de modal: mismo par, mismo orden. Requiere el JS de Bootstrap por data-bs-dismiss. -->
<div class="modal-footer">
  <button type="button" class="erp-btn erp-btn-secondary" data-bs-dismiss="modal">Cancelar</button>
  <button type="button" class="erp-btn erp-btn-primary" id="guardarHorarios">Guardar</button>
</div>`
      },
      {
        name:"Excel",
        description:"Descarga o exportación a Excel: misma silueta que el secundario, con el icono en verde. Suelto en el encabezado para plantillas, o con table-tool-btn en la barra de herramientas de la tabla, donde lo genera el shell.",
        preview:`<section class="d-flex gap-3 flex-wrap align-items-center">
  <a class="erp-btn erp-btn-excel" href="#">
    <i class="bi bi-file-earmark-excel"></i> Descargar plantilla
  </a>
  <button type="button" class="erp-btn erp-btn-excel table-tool-btn" title="Exportar a Excel">
    <i class="bi bi-file-earmark-excel-fill"></i> Exportar
  </button>
</section>`,
        snippet:`<!-- Encabezado de módulo: descarga directa -->
<a class="erp-btn erp-btn-excel" href="/cplus/bff/entities/sucursales/import/template.php?modo=1">
  <i class="bi bi-file-earmark-excel"></i> Descargar plantilla
</a>

<!-- Barra de herramientas de tabla: lo inyecta cplus/js/core/datatable-v2-shell.js.
     La clase standard-table NO se escribe en la vista: la añade el shell en runtime
     (datatable-v2-shell.js:282).
     En Sucursales la vista solo declara la tabla (cplus/views/mostrarSucursales.php:806): -->
<table id="informe" class="table table-bordered table-sm" style="width:100%"></table>

<!-- El modo de exportación se declara en el JS, no en la vista:
     export: 'dropdown' en cplus/js/entities/sucursales/datatable.js:104;
     GrincDataTable lo publica como data-cplus-export-mode (GrincDataTable.js:386-391)
     y datatable-v2-shell.js:163-177 arma el dropdown Exportar / Exportar detallado. -->

<!-- Markup resultante del shell -->
<button type="button" class="erp-btn erp-btn-excel table-tool-btn" title="Exportar a Excel">
  <i class="bi bi-file-earmark-excel-fill"></i> Exportar
</button>`
      },
      {
        name:"Solo icono (sin instancia productiva)",
        description:"Botón cuadrado de 38x38px para barras de herramientas compactas. No lleva .erp-btn: .erp-btn-icon es autónoma, con borde, fondo y foco propios. No es .icon-action, que actúa dentro de las celdas de tabla. La clase existe en el kit pero ninguna vista ni JS la usa: patrón disponible, no precedente.",
        preview:`<section class="d-flex gap-2 flex-wrap align-items-center">
  <button type="button" class="erp-btn-icon" title="Recargar" aria-label="Recargar">
    <i class="bi bi-arrow-clockwise"></i>
  </button>
  <button type="button" class="erp-btn-icon erp-btn-excel" title="Exportar a Excel" aria-label="Exportar a Excel">
    <i class="bi bi-file-earmark-excel-fill"></i>
  </button>
</section>`,
        snippet:`<button type="button" class="erp-btn-icon" title="Recargar" aria-label="Recargar">
  <i class="bi bi-arrow-clockwise"></i>
</button>

<!-- Variante Excel: mismo cuadro, icono verde -->
<button type="button" class="erp-btn-icon erp-btn-excel" title="Exportar a Excel" aria-label="Exportar a Excel">
  <i class="bi bi-file-earmark-excel-fill"></i>
</button>`
      },
      {
        name:"Nuevo del encabezado de módulo",
        description:"El botón de creación del encabezado, dentro de gc-page-header__actions: primario con gc-page-header__new-btn (52px de alto mínimo), icono bi-plus-lg y etiqueta Nuevo. En producción es un enlace con onclick que la vista pasa en $phAcciones, así que no admite disabled: si la acción no está disponible, se omite el botón. Cuando está condicionada, el disabled lo pone gc-validate.js sobre el submit.",
        preview:`<header class="gc-page-header gc-page-header--table-simple" aria-labelledby="gc-page-header-title-btn-demo">
  <div class="gc-page-header__layout">
    <div class="gc-page-header__heading">
      <h1 class="gc-page-header__title" id="gc-page-header-title-btn-demo">
        <i class="bi bi-box-seam gc-page-header__title-icon" aria-hidden="true"></i>
        <span>Tipo de embalaje</span>
      </h1>
    </div>
    <aside class="gc-page-header__side">
      <div class="gc-page-header__actions" role="group" aria-label="Acciones principales">
        <a href="#" class="erp-btn erp-btn-primary gc-page-header__new-btn" onclick="return false;"><i class="bi bi-plus-lg"></i><span>Nuevo</span></a>
      </div>
    </aside>
  </div>
</header>`,
        snippet:`<?php
$phAcciones = (empty($actualizar) && $canCreate)
    ? '<a href="#" class="erp-btn erp-btn-primary gc-page-header__new-btn" onclick="mostrar(); return false;">'
        . '<i class="bi bi-plus-lg"></i><span>Nuevo</span></a>'
    : '';
include 'cplus/views/partials/page-head.php';
?>

<!-- Acción condicionada: el disabled lo pone gc-validate.js:117-124 al leer el checkbox de revisión -->
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="gc_review_elementos" data-gc-review-check>
  <label class="form-check-label" for="gc_review_elementos">He revisado la información antes de guardar.</label>
</div>
<button type="submit" class="erp-btn erp-btn-primary" id="guardar" name="guardar">
  <i class="bi bi-save"></i> Guardar
</button>`
      }
    ],
    snippet:`<button type="submit" class="erp-btn erp-btn-primary" id="guardarBtn">
  <i class="bi bi-save"></i> Guardar
</button>`
  },
  {
    id:"botonera-formulario",
    catalogExamples: ["gc-formulario-clientes","gc-formulario-usuarios","gc-formulario-roles"],
    implementations: [
      { module: "Elementos de chequeo", agregar: 117, file: "cplus/views/mostrarElementosChequeo.php", detail: "Cierre gc-review-footer / gc-review-box con el checkbox data-gc-review-check y, dentro de gc-review-actions, el submit Guardar más los hidden _csrf, accion, id y agregar=117 (líneas 117-133)" },
      { module: "Sucursales", agregar: 127, file: "cplus/views/mostrarSucursales.php", detail: "Mismo par de botones, pero el contenedor es div.row SIN mt-3 y con la clase extra form-actions (scoped a #formularioRegistrar en cplus/scss/_sucursales.scss:16 y :29-31); en solo lectura se sustituye por el enlace Volver (líneas 747-781)" },
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "Botonera dentro de gc-review-actions, con el submit gateado por el checkbox de revisión (líneas 1059-1075)" },
      { module: "Tipos de vehículos", agregar: 137, file: "cplus/views/mostrarTipoVehiculos.php", detail: "Caso mayoritario, solo Guardar: div.row.mt-3 > div.col-md-12.text-end con el submit erp-btn erp-btn-primary rotulado por la variable PHP y los hidden _csrf, id y agregar=137; todo el bloque va bajo el gate empty($ver) (líneas 153-164)" },
      { module: "Residuos inventariables", agregar: 126, file: "cplus/views/mostrarResiduosInventariables.php", detail: "Variante degradada: el Cancelar usa erp-btn sin erp-btn-secondary y sin icono (líneas 631-638)" },
      { module: "Riesgos", agregar: 143, file: "cplus/views/mostrarRiesgos.php", detail: "Mismo contenedor con SOLO el submit Guardar y los ocultos _csrf, id y agregar=143, sin enlace Cancelar; el gate añade además $canCreate (líneas 175-186)" },
    ],
    group:"Acciones",
    name:"Botonera de formulario (Cancelar y Guardar)",
    description:"Pie que cierra los formularios CPlus: una fila propia <code>div.row.mt-3</code> con <code>div.col-md-12.text-end</code> dentro, el submit Guardar del kit erp-btn y los campos ocultos. Cancelar es opcional. En modo ver el pie se reduce a Volver. El rótulo del submit es siempre <strong>Guardar</strong>, al crear y al editar.",
    use:"Usarlo al cierre de cualquier formulario de alta o edición; Guardar es el único submit del bloque. Cancelar, cuando se añade, es siempre un enlace a incluir.php?agregar=N del módulo, nunca un button. Para un módulo nuevo la variante por defecto es Solo guardar.",
    avoid:"No usar btn btn-success ni btn btn-lg de Bootstrap crudo para el guardado: el estándar es erp-btn erp-btn-primary. No convertir Cancelar en button ni darle type=\"reset\". En modo consulta (ver=1) solo va Volver. Para el pie con checkbox de revisión el contenedor es gc-review-footer, no este. No copiar el pie de las maquetas gc-formulario-*.",
    deps:"Bootstrap CSS (grid y text-end), Bootstrap Icons (bi-x-lg, bi-save, bi-arrow-left), el kit erp-btn de cplus/scss/_components.scss y, en el patrón gc-review, cplus/js/core/gc-validate.js.",
    verified: true,
    accessibility:"El orden en el DOM es Cancelar y luego Guardar, así el foco llega primero a la acción reversible. Cancelar es un enlace real con href: admite Enter y abrir en otra pestaña. Los iconos bi son decorativos, así que el botón nunca va solo con icono. El alto mínimo del kit erp-btn es 42px, suficiente como objetivo táctil.",
    note:"Los campos ocultos van DENTRO del bloque: el token CSRF (<code>_csrf</code>), el id del registro (<code>id</code>), el número de módulo (<code>agregar</code>) y, según el módulo, <code>accion</code>, <code>elaboro</code> o <code>k</code>.",
    variants:[
      {
        name:"Los tres botones, según el modo",
        description:"Guardar, Cancelar y Volver no conviven en el mismo pie: dependen del modo. En crear y editar manda Guardar, con Cancelar al lado si el módulo lo incluye; en ver, solo Volver.",
        preview:`<section>
  <p style="margin:0 0 6px;color:#575756;font-size:.85rem">Crear o editar: Guardar, con Cancelar al lado cuando el módulo lo incluye.</p>
  <div class="row mt-3">
    <div class="col-md-12 text-end">
      <a href="#" class="erp-btn erp-btn-secondary">
        <i class="bi bi-x-lg"></i> Cancelar
      </a>
      <button type="button" class="erp-btn erp-btn-primary">
        <i class="bi bi-save"></i> Guardar
      </button>
    </div>
  </div>
  <p style="margin:22px 0 6px;color:#575756;font-size:.85rem">Ver: no hay nada que guardar, el pie se reduce a Volver.</p>
  <div class="row">
    <div class="col-md-12 text-end form-actions">
      <a href="#" class="erp-btn erp-btn-secondary">
        <i class="bi bi-arrow-left"></i> Volver
      </a>
    </div>
  </div>
</section>`,
        snippet:`<!-- Crear o editar -->
<div class="row mt-3">
  <div class="col-md-12 text-end">
    <a href="incluir.php?agregar=127" class="erp-btn erp-btn-secondary">
      <i class="bi bi-x-lg"></i> Cancelar
    </a>
    <button type="submit" class="erp-btn erp-btn-primary" id="guardarBtn">
      <i class="bi bi-save"></i> Guardar
    </button>
  </div>
</div>

<!-- Ver -->
<div class="row">
  <div class="col-md-12 text-end form-actions">
    <a href="incluir.php?agregar=127" class="erp-btn erp-btn-secondary">
      <i class="bi bi-arrow-left"></i> Volver
    </a>
  </div>
</div>`
      },
      {
        name:"Solo guardar (mayoritario)",
        description:"El cierre más común en producción: el contenedor canónico con un único submit Guardar y los ocultos, sin enlace Cancelar.",
        preview:`<section class="row mt-3">
  <div class="col-md-12 text-end">
    <button type="button" class="erp-btn erp-btn-primary">
      <i class="bi bi-save"></i> Guardar
    </button>
  </div>
</section>`,
        snippet:`<div class="row mt-3">
  <div class="col-md-12 text-end">
    <button type="submit" class="erp-btn erp-btn-primary" id="guardar" name="guardar">
      <i class="bi bi-save"></i> Guardar
    </button>
    <!-- Los ocultos del formulario van aquí dentro -->
    <input type="hidden" name="_csrf" value="">
    <input type="hidden" name="id" value="">
    <input type="hidden" name="agregar" value="143">
  </div>
</div>`
      },
      {
        name:"Crear",
        description:"Alta de un registro nuevo con la opción Cancelar: el submit dice Guardar y el oculto id viaja vacío. El snippet usa el contenedor genérico div.row.mt-3 con div.col-md-12.text-end.",
        preview:`<section class="row mt-3">
  <div class="col-md-12 text-end">
    <a href="#" class="erp-btn erp-btn-secondary">
      <i class="bi bi-x-lg"></i> Cancelar
    </a>
    <button type="button" class="erp-btn erp-btn-primary">
      <i class="bi bi-save"></i> Guardar
    </button>
  </div>
</section>`,
        snippet:`<div class="row mt-3">
  <div class="col-md-12 text-end">
    <a href="incluir.php?agregar=127" class="erp-btn erp-btn-secondary" id="cancelarBtn">
      <i class="bi bi-x-lg"></i> Cancelar
    </a>
    <button type="submit" class="erp-btn erp-btn-primary" id="guardarBtn">
      <i class="bi bi-save"></i> Guardar
    </button>
    <!-- Los ocultos del formulario van aquí dentro -->
    <input type="hidden" name="_csrf" value="">
    <input type="hidden" name="id" value="">
    <input type="hidden" name="agregar" value="127">
    <input type="hidden" name="elaboro" value="">
  </div>
</div>`
      },
      {
        name:"Volver",
        description:"Modo consulta: no hay nada que guardar, la botonera se reduce a un enlace de regreso al listado con bi-arrow-left. El snippet copia Sucursales: div.row sin mt-3 y con form-actions.",
        preview:`<section class="row">
  <div class="col-md-12 text-end form-actions">
    <a href="#" class="erp-btn erp-btn-secondary">
      <i class="bi bi-arrow-left"></i> Volver
    </a>
  </div>
</section>`,
        snippet:`<div class="row">
  <div class="col-md-12 text-end form-actions">
    <a href="incluir.php?agregar=127" class="erp-btn erp-btn-secondary">
      <i class="bi bi-arrow-left"></i> Volver
    </a>
  </div>
</div>`
      },
      {
        name:"Guardar deshabilitado (gc-review)",
        description:"El gating no usa el contenedor row mt-3 sino gc-review-footer / gc-review-box / gc-review-actions con el checkbox data-gc-review-check. La vista no trae el atributo disabled: lo aplica en runtime cplus/js/core/gc-validate.js mientras la casilla esté sin marcar. Cancelar nunca se deshabilita.",
        preview:`<section class="gc-review-footer">
  <div class="gc-review-box">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gc_review_demo">
      <label class="form-check-label" for="gc_review_demo">Confirmo que revisé datos personales, acceso, credenciales, correo, adjuntos y permisos antes de guardar la información del usuario.</label>
    </div>
    <div class="gc-review-actions">
      <a href="#" class="erp-btn erp-btn-secondary">
        <i class="bi bi-x-lg"></i> Cancelar
      </a>
      <button type="button" class="erp-btn erp-btn-primary" disabled title="Marca la confirmación de revisión para habilitar esta acción.">
        <i class="bi bi-save"></i> Guardar
      </button>
    </div>
  </div>
</section>`,
        snippet:`<div class="gc-review-footer">
  <div class="gc-review-box">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gc_review_usuarios" data-gc-review-check>
      <label class="form-check-label" for="gc_review_usuarios">Confirmo que revisé datos personales, acceso, credenciales, correo, adjuntos y permisos antes de guardar la información del usuario.</label>
    </div>
    <div class="gc-review-actions">
      <a href="incluir.php?agregar=105" class="erp-btn erp-btn-secondary" id="cancelarUsuario">
        <i class="bi bi-x-lg"></i> Cancelar
      </a>
      <!-- Sin disabled: lo pone gc-validate.js:117 mientras la casilla esté sin marcar. -->
      <button type="submit" class="erp-btn erp-btn-primary submit" id="guardarBtn" name="guardarBtn">
        <i class="bi bi-save"></i> Guardar
      </button>
      <input type="hidden" name="_csrf" value="">
      <input type="hidden" name="id" value="">
      <input type="hidden" name="agregar" value="105">
    </div>
  </div>
</div>`
      }
    ],
    snippet:`<div class="row mt-3">
  <div class="col-md-12 text-end">
    <a href="incluir.php?agregar=127" class="erp-btn erp-btn-secondary" id="cancelarBtn">
      <i class="bi bi-x-lg"></i> Cancelar
    </a>
    <button type="submit" class="erp-btn erp-btn-primary" id="guardarBtn">
      <i class="bi bi-save"></i> Guardar
    </button>
    <!-- Los ocultos del formulario van aquí dentro -->
    <input type="hidden" name="_csrf" value="">
    <input type="hidden" name="id" value="">
    <input type="hidden" name="agregar" value="127">
  </div>
</div>`
  },
  {
    id:"acciones-de-fila",
    catalogExamples: ["opciones-acordeon","alertas-librerias"],
    implementations: [
      { module: "Embalajes", agregar: 106, file: "cplus/js/entities/embalajes/datatable.js", detail: "Caso canónico: crud({entityKey:'embalajes', agregarCase:106, label:'embalaje', withTraza:true}) en una línea (línea 20) y columna { type: 'actions' } (línea 71)" },
      { module: "Clasificación interna", agregar: 122, file: "cplus/js/entities/clasificaciones/datatable.js", detail: "Caso del catálogo maestro simple: la columna de acciones (línea 26) más el badge de estado escrito a mano en el render de la columna Estado (líneas 28-34)" },
      { module: "Roles", agregar: 124, file: "cplus/js/entities/roles/datatable.js", detail: "crud() con withTraza (línea 9) y traza condicionada al historial real del registro: visibleIf con row.has_traza (líneas 14-17), que deja placeholder en las filas sin traza" },
      { module: "Usuarios", agregar: 105, file: "cplus/js/entities/usuarios/datatable.js", detail: "crud() multilínea (líneas 25-30); cambia el permiso de la traza de 'view' a 'traza' (línea 37) y fija el orden ver·editar·eliminar·toggle·traza (líneas 38-40)" },
      { module: "Sucursales", agregar: 127, file: "cplus/js/entities/sucursales/datatable.js", detail: "crud({entityKey:'sucursales', agregarCase:127, label:'sucursal', withTraza:true}) (líneas 19-24) y columna { type: 'actions' } (línea 106)" },
    ],
    group:"Acciones",
    name:"Acciones de fila",
    description:"Grupo de iconos que opera un registro desde la tabla: ver, editar, eliminar, activar/desactivar y trazabilidad. No se escribe a mano: lo emite <code>CplusActionButtons.render</code> desde el descriptor de <code>CplusStandardActions.crud</code>, y la columna la arma <code>GrincDataTable</code> con <code>{ type: 'actions' }</code>.",
    use:"Usarlo como única columna de acciones de un listado CPlus, siempre en la primera. Los cinco tipos estándar son ver, editar, eliminar, toggle y traza; para una acción propia, añadir un descriptor con su tipo, icono, evento y permiso al array de crud().",
    avoid:"No escribir los iconos a mano ni inventar clases por módulo: el markup lo emite el factory. Tampoco es la barra de acciones de pantalla (crear, exportar, refrescar), que usa erp-btn y erp-btn-icon.",
    deps:"Bootstrap Icons (bi-*) y Bootstrap Tooltip, reinicializado por CplusInitTooltips en cada draw. En producción: action-buttons.js, action-icons.js, standard-actions.js, entity-actions.js, GrincDataTable.js y CplusAlerts.",
    verified: true,
    accessibility:"Cada acción es un enlace o un botón, alcanzable por teclado. El texto accesible sale solo del atributo title: no hay aria-label ni texto oculto, y el icono no lleva aria-hidden. El contenedor declara aria-label=\"Acciones del registro\", sin role. El hueco de una acción oculta por estado sí marca aria-hidden=\"true\" y queda fuera del foco. El objetivo táctil es 26x26 px, por debajo del mínimo recomendado de 44x44.",
    note:"Dos reglas deciden si un icono se ve. <strong>Sin permiso</strong> (row._can) la acción desaparece y no reserva espacio. <strong>Oculta por estado</strong> (visibleIf, como editar en un registro inactivo) sí deja un hueco con <code>.icon-action-placeholder</code>, para que los iconos restantes no se muevan.",
    variants:[
      {
        name:"CRUD completo (fila activa)",
        description:"Fila activa con todos los permisos. withTraza:true añade el quinto icono; la traza usa el permiso 'view'. El orden ver, editar, eliminar, toggle, traza lo fija el sort de la vista, no crud().",
        preview:`<div class="mb-3">
  <p class="text-muted small mb-2">Fila activa, usuario con permisos view, edit, delete y toggle.</p>
  <div class="actions-group" aria-label="Acciones del registro">
    <a href="incluir.php?agregar=106&actualizar=12&ver=1" class="icon-action" title="Ver" data-bs-toggle="tooltip"><i class="bi bi-eye"></i></a>
    <a href="incluir.php?agregar=106&actualizar=12" class="icon-action" title="Editar" data-bs-toggle="tooltip"><i class="bi bi-pencil"></i></a>
    <button type="button" class="icon-action delete text-danger" title="Eliminar" data-bs-toggle="tooltip" data-cplus-action="embalajes:delete" data-cplus-row="{&quot;id&quot;:12,&quot;nombre&quot;:&quot;Caja plástica&quot;,&quot;activo&quot;:1}"><i class="bi bi-trash3"></i></button>
    <button type="button" class="icon-action" title="Activar/Desactivar" data-bs-toggle="tooltip" data-cplus-action="embalajes:toggle-status" data-cplus-row="{&quot;id&quot;:12,&quot;nombre&quot;:&quot;Caja plástica&quot;,&quot;activo&quot;:1}"><i class="bi bi-toggle-on"></i></button>
    <button type="button" class="icon-action" title="Trazabilidad" data-bs-toggle="tooltip" data-cplus-action="embalajes:traza" data-cplus-row="{&quot;id&quot;:12,&quot;nombre&quot;:&quot;Caja plástica&quot;,&quot;activo&quot;:1}"><i class="bi bi-clock-history"></i></button>
  </div>
</div>`,
        snippet:`<!-- Resultado que emite CplusActionButtons.render; el <td> recibe la clase table-actions del factory -->
<td class="table-actions">
  <div class="actions-group" aria-label="Acciones del registro">
    <a href="incluir.php?agregar=106&actualizar=12&ver=1" class="icon-action" title="Ver" data-bs-toggle="tooltip"><i class="bi bi-eye"></i></a>
    <a href="incluir.php?agregar=106&actualizar=12" class="icon-action" title="Editar" data-bs-toggle="tooltip"><i class="bi bi-pencil"></i></a>
    <button type="button" class="icon-action delete text-danger" title="Eliminar" data-bs-toggle="tooltip" data-cplus-action="embalajes:delete" data-cplus-row="{&quot;id&quot;:12,&quot;nombre&quot;:&quot;Caja plástica&quot;,&quot;activo&quot;:1}"><i class="bi bi-trash3"></i></button>
    <button type="button" class="icon-action" title="Activar/Desactivar" data-bs-toggle="tooltip" data-cplus-action="embalajes:toggle-status" data-cplus-row="{&quot;id&quot;:12,&quot;nombre&quot;:&quot;Caja plástica&quot;,&quot;activo&quot;:1}"><i class="bi bi-toggle-on"></i></button>
    <button type="button" class="icon-action" title="Trazabilidad" data-bs-toggle="tooltip" data-cplus-action="embalajes:traza" data-cplus-row="{&quot;id&quot;:12,&quot;nombre&quot;:&quot;Caja plástica&quot;,&quot;activo&quot;:1}"><i class="bi bi-clock-history"></i></button>
  </div>
</td>`
      },
      {
        name:"Solo lectura",
        description:"row._can llega solo con view. Las acciones sin permiso no se pintan ni reservan hueco. La traza sobrevive porque su permiso también es 'view'; para condicionarla aparte hay que redefinirlo a 'traza'.",
        preview:`<div class="mb-3">
  <p class="text-muted small mb-2">Usuario sin edit, delete ni toggle: esas acciones colapsan, no queda hueco. Ver y Trazabilidad comparten el permiso view.</p>
  <div class="actions-group" aria-label="Acciones del registro">
    <a href="incluir.php?agregar=106&actualizar=12&ver=1" class="icon-action" title="Ver" data-bs-toggle="tooltip"><i class="bi bi-eye"></i></a>
    <button type="button" class="icon-action" title="Trazabilidad" data-bs-toggle="tooltip" data-cplus-action="embalajes:traza" data-cplus-row="{&quot;id&quot;:12,&quot;nombre&quot;:&quot;Caja plástica&quot;,&quot;activo&quot;:1}"><i class="bi bi-clock-history"></i></button>
  </div>
</div>`,
        snippet:`<!-- row._can = { view: true }. Las acciones sin permiso devuelven cadena vacía (action-buttons.js:39).
     La traza sobrevive porque su permiso también es 'view' (standard-actions.js:104). -->
<td class="table-actions">
  <div class="actions-group" aria-label="Acciones del registro">
    <a href="incluir.php?agregar=106&actualizar=12&ver=1" class="icon-action" title="Ver" data-bs-toggle="tooltip"><i class="bi bi-eye"></i></a>
    <button type="button" class="icon-action" title="Trazabilidad" data-bs-toggle="tooltip" data-cplus-action="embalajes:traza" data-cplus-row="{&quot;id&quot;:12,&quot;nombre&quot;:&quot;Caja plástica&quot;,&quot;activo&quot;:1}"><i class="bi bi-clock-history"></i></button>
  </div>
</td>`
      },
      {
        name:"Con traza y fila inactiva",
        description:"En un registro inactivo, editar y eliminar se ocultan por visibleIf y dejan un hueco del mismo tamaño; el toggle cambia a bi-toggle-off.",
        preview:`<div class="mb-3">
  <p class="text-muted small mb-2">Fila inactiva: editar y eliminar dejan su hueco; el toggle muestra bi-toggle-off.</p>
  <div class="actions-group" aria-label="Acciones del registro">
    <a href="incluir.php?agregar=106&actualizar=31&ver=1" class="icon-action" title="Ver" data-bs-toggle="tooltip"><i class="bi bi-eye"></i></a>
    <span class="icon-action-placeholder" aria-hidden="true"></span>
    <span class="icon-action-placeholder" aria-hidden="true"></span>
    <button type="button" class="icon-action" title="Activar/Desactivar" data-bs-toggle="tooltip" data-cplus-action="embalajes:toggle-status" data-cplus-row="{&quot;id&quot;:31,&quot;nombre&quot;:&quot;Estiba retirada&quot;,&quot;activo&quot;:0}"><i class="bi bi-toggle-off"></i></button>
    <button type="button" class="icon-action" title="Trazabilidad" data-bs-toggle="tooltip" data-cplus-action="embalajes:traza" data-cplus-row="{&quot;id&quot;:31,&quot;nombre&quot;:&quot;Estiba retirada&quot;,&quot;activo&quot;:0}"><i class="bi bi-clock-history"></i></button>
  </div>
</div>`,
        snippet:`<!-- Fila inactiva: visibleIf oculta editar y eliminar y en su lugar queda el placeholder (action-buttons.js:31-33 y 43-45) -->
<td class="table-actions">
  <div class="actions-group" aria-label="Acciones del registro">
    <a href="incluir.php?agregar=106&actualizar=31&ver=1" class="icon-action" title="Ver" data-bs-toggle="tooltip"><i class="bi bi-eye"></i></a>
    <span class="icon-action-placeholder" aria-hidden="true"></span>
    <span class="icon-action-placeholder" aria-hidden="true"></span>
    <button type="button" class="icon-action" title="Activar/Desactivar" data-bs-toggle="tooltip" data-cplus-action="embalajes:toggle-status" data-cplus-row="{&quot;id&quot;:31,&quot;nombre&quot;:&quot;Estiba retirada&quot;,&quot;activo&quot;:0}"><i class="bi bi-toggle-off"></i></button>
    <button type="button" class="icon-action" title="Trazabilidad" data-bs-toggle="tooltip" data-cplus-action="embalajes:traza" data-cplus-row="{&quot;id&quot;:31,&quot;nombre&quot;:&quot;Estiba retirada&quot;,&quot;activo&quot;:0}"><i class="bi bi-clock-history"></i></button>
  </div>
</td>`
      },
      {
        name:"Declaración en JavaScript (factory)",
        description:"La declaración real. crud(opts) recibe entityKey, agregarCase, label y withTraza, y devuelve el array como editar, ver, toggle, eliminar y traza. También registra los handlers de toggle-status, delete y traza.",
        preview:`<div class="mb-3">
  <p class="text-muted small mb-2">Resultado de la llamada del bloque de código: el factory pinta el grupo completo.</p>
  <div class="actions-group" aria-label="Acciones del registro">
    <a href="incluir.php?agregar=106&actualizar=12&ver=1" class="icon-action" title="Ver" data-bs-toggle="tooltip"><i class="bi bi-eye"></i></a>
    <a href="incluir.php?agregar=106&actualizar=12" class="icon-action" title="Editar" data-bs-toggle="tooltip"><i class="bi bi-pencil"></i></a>
    <button type="button" class="icon-action delete text-danger" title="Eliminar" data-bs-toggle="tooltip" data-cplus-action="embalajes:delete" data-cplus-row="{&quot;id&quot;:12,&quot;nombre&quot;:&quot;Caja plástica&quot;,&quot;activo&quot;:1}"><i class="bi bi-trash3"></i></button>
    <button type="button" class="icon-action" title="Activar/Desactivar" data-bs-toggle="tooltip" data-cplus-action="embalajes:toggle-status" data-cplus-row="{&quot;id&quot;:12,&quot;nombre&quot;:&quot;Caja plástica&quot;,&quot;activo&quot;:1}"><i class="bi bi-toggle-on"></i></button>
    <button type="button" class="icon-action" title="Trazabilidad" data-bs-toggle="tooltip" data-cplus-action="embalajes:traza" data-cplus-row="{&quot;id&quot;:12,&quot;nombre&quot;:&quot;Caja plástica&quot;,&quot;activo&quot;:1}"><i class="bi bi-clock-history"></i></button>
  </div>
</div>`,
        snippet:`// cplus/js/entities/embalajes/datatable.js:19-37 — declaración de las acciones.
// La rama alternativa NO es []: es un fallback explícito de 5 descriptores (líneas 21-37),
// por si standard-actions.js no cargó. Quien sí usa ': []' es roles/datatable.js:8-10.
var ACCIONES_EMBALAJES = window.CplusStandardActions
  ? window.CplusStandardActions.crud({ entityKey: 'embalajes', agregarCase: 106, label: 'embalaje', withTraza: true })
  : [ /* fallback: editar, ver, toggle, eliminar, traza escritos a mano */ ];

// cplus/js/entities/embalajes/datatable.js:39-44 — el orden del preview lo fija ESTE sort,
// no crud(), que devuelve editar · ver · toggle · eliminar · traza.
ACCIONES_EMBALAJES.sort(function (a, b) {
  var ORD = { ver: 0, editar: 1, eliminar: 2, toggle: 3, traza: 4 };
  var ia = ORD[a.tipo]; var ib = ORD[b.tipo];
  return (ia === undefined ? 99 : ia) - (ib === undefined ? 99 : ib);
});

// cplus/js/entities/embalajes/datatable.js:71 — la columna de acciones del factory
window.GrincDataTable.init({
  entityKey: 'embalajes',
  buildHead: true,
  columns: [
    { type: 'actions', actions: ACCIONES_EMBALAJES },
    { data: 'nombre', title: 'Nombre' }
  ]
});

// cplus/js/lib/GrincDataTable.js:300-306 — lo que el factory hace con esa columna:
//   columns.push({ data: null, defaultContent: '' });
//   columnDefs.push({ targets: i, className: 'table-actions', orderable: false, searchable: false,
//     render: function (_d, _t, row) {
//       return window.CplusActionButtons.render(actions, row, row._can || {});
//     } });

// Acción propia además de las cinco estándar (cplus/js/core/standard-actions.js:16-17):
ACCIONES_EMBALAJES.push({ tipo: 'export', icono: 'bi-download',
  evento: 'embalajes:export', permiso: 'view', titulo: 'Exportar' });`
      }
    ],
    snippet:`<td class="table-actions">
  <div class="actions-group" aria-label="Acciones del registro">
    <a href="incluir.php?agregar=106&actualizar=12&ver=1" class="icon-action" title="Ver" data-bs-toggle="tooltip"><i class="bi bi-eye"></i></a>
    <a href="incluir.php?agregar=106&actualizar=12" class="icon-action" title="Editar" data-bs-toggle="tooltip"><i class="bi bi-pencil"></i></a>
    <button type="button" class="icon-action delete text-danger" title="Eliminar" data-bs-toggle="tooltip" data-cplus-action="embalajes:delete" data-cplus-row="{&quot;id&quot;:12,&quot;nombre&quot;:&quot;Caja plástica&quot;,&quot;activo&quot;:1}"><i class="bi bi-trash3"></i></button>
    <button type="button" class="icon-action" title="Activar/Desactivar" data-bs-toggle="tooltip" data-cplus-action="embalajes:toggle-status" data-cplus-row="{&quot;id&quot;:12,&quot;nombre&quot;:&quot;Caja plástica&quot;,&quot;activo&quot;:1}"><i class="bi bi-toggle-on"></i></button>
    <button type="button" class="icon-action" title="Trazabilidad" data-bs-toggle="tooltip" data-cplus-action="embalajes:traza" data-cplus-row="{&quot;id&quot;:12,&quot;nombre&quot;:&quot;Caja plástica&quot;,&quot;activo&quot;:1}"><i class="bi bi-clock-history"></i></button>
  </div>
</td>`
  },
  {
    id:"modal",
    catalogExamples: ["alertas-librerias","campo-horario"],
    implementations: [
      { module: "Sucursales", agregar: 127, file: "cplus/views/mostrarSucursales.php", detail: "Modal #modalHorarios, el canónico: es el único cuyo footer usa el kit erp-btn en los dos botones (líneas 787-801)" },
      { module: "Roles", agregar: 124, file: "cplus/js/entities/roles/datatable-constructor.js", detail: "Sobrescribe window.vertraza con una versión propia que consulta por BFF y pinta el MISMO modal centralizado #myModalT: localiza #myModalT, #trazainfo y #titulotraza, mete un spinner en el cuerpo y abre con bootstrap.Modal.getOrCreateInstance (líneas 100-125)" },
      { module: "Residuos inventariables", agregar: 126, file: "cplus/views/mostrarResiduosInventariables.php", detail: "Tres modales de formulario: #modalAcopios en modal-lg (línea 398), #modalDeclarados en modal-xl (484) y #modalDuplicarResiduo (653), este último con el form POST al proxy BFF DENTRO del .modal-content y el cuerpo en row g-3 con dos col-md-6 (líneas 662-670)" },
      { module: "Traza global (transversal; consumida por Embalajes 106, Usuarios 105, Sucursales 127 y Roles 124)", agregar: 106, file: "cplus/js/lib/GrincUtils.js", detail: "Markup de #myModalT inyectado en toda vista C+ (líneas 19-42, rediseño v2: encabezado con gc-trace-modal__heading/__detail y pie de un solo botón «Entendido» en las 36-37) y window.vertraza() que lo abre (líneas 154-214). El camino genérico es cplus/js/core/standard-actions.js:139-147, que registra el evento de traza para toda entidad declarada con withTraza: true — así lo hacen embalajes/datatable.js:20, usuarios/datatable.js:25-30, sucursales/datatable.js:19-24 y roles/datatable.js:9" },
    ],
    group:"Modales",
    name:"Modal",
    description:"Diálogo Bootstrap 5 estándar de CPlus: envoltorio .modal.fade con .modal-dialog y .modal-content, y dentro cabecera con título y botón de cierre, cuerpo, y pie con las acciones.",
    use:"Usarlo cuando la acción necesita capturar datos adicionales, mostrar una tabla o un contenido que no cabe en la fila, o presentar información sin sacar al usuario del listado. El disparo va por la API JS de Bootstrap 5: bootstrap.Modal.getOrCreateInstance(el).show().",
    avoid:"No usarlo para una confirmación de sí/no sin datos extra: para eso está CplusAlerts.confirm. No anidar un modal dentro de otro. No duplicar el modal de trazabilidad: ya existe uno global. No usarlo como reemplazo de una vista de formulario completa.",
    deps:"Bootstrap CSS y JS (componente Modal), Bootstrap Icons y el kit erp-btn de cplus/scss/_components.scss.",
    verified: true,
    accessibility:"El button.btn-close no lleva texto, así que siempre necesita aria-label=\"Cerrar\". Todo contenedor .modal lleva tabindex=\"-1\" y aria-hidden=\"true\". Limitación real: aria-labelledby solo lo declara el modal transversal #myModalT; ningún modal escrito en la vista de un módulo validado lo tiene, así que es mejora recomendada, no patrón productivo. El foco y el cierre con ESC los gestiona Bootstrap: no hay trampa de foco propia en cplus/js.",
    note:"Los previews se pintan <strong>ya abiertos y estáticos</strong>: solo el <code>.modal-content</code>, sin <code>.modal fade</code> ni backdrop. Copia siempre el bloque «Código HTML para copiar», que trae el envoltorio productivo completo.",
    variants:[
      {
        name:"Básico",
        description:"Modal informativo: muestra contenido y se cierra sin mutar nada, con un único botón en el pie. Sin precedente productivo: ningún módulo validado tiene un modal puramente informativo.",
        preview:`<section class="gc-modal-static">
  <div class="gc-modal-static-frame">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Compartir enlace de la sucursal <span class="fw-bold">SUC-01234</span></h5>
        <button type="button" class="btn-close" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body">
        <label class="form-label" for="compartir_url_demo">Enlace de consulta</label>
        <div class="input-group">
          <input type="text" id="compartir_url_demo" class="form-control" value="https://dev.grinclic.com/incluir.php?agregar=127&amp;ver=8f2c1a" readonly>
          <button type="button" class="btn btn-outline-secondary" title="Copiar enlace">
            <i class="bi bi-clipboard"></i> Copiar
          </button>
        </div>
        <div class="form-text">El enlace caduca en 8 horas.</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="erp-btn erp-btn-secondary">Cerrar</button>
      </div>
    </div>
  </div>
</section>`,
        snippet:`<!-- Footer con el kit erp-btn, como el modal canónico de Sucursales (cplus/views/mostrarSucursales.php:796-797).
     Divergencia abierta: el modal transversal #myModalT cierra con "btn btn-secondary" crudo
     (cplus/js/lib/GrincUtils.js:36-37), no con el kit erp-btn. -->
<div class="modal fade" id="modalCompartir" tabindex="-1" aria-labelledby="modalCompartirLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalCompartirLabel">Compartir enlace de la sucursal <span id="compartir_doc_label" class="fw-bold"></span></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body">
        <label class="form-label" for="compartir_url">Enlace de consulta</label>
        <div class="input-group">
          <input type="text" id="compartir_url" class="form-control" readonly>
          <button type="button" class="btn btn-outline-secondary" id="btnCopiarCompartir" title="Copiar enlace">
            <i class="bi bi-clipboard"></i> Copiar
          </button>
        </div>
        <div class="form-text" id="compartir_expira"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="erp-btn erp-btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

<script>
  // Apertura: API de Bootstrap 5, nunca el plugin jQuery.
  bootstrap.Modal.getOrCreateInstance(document.getElementById('modalCompartir')).show();
</script>`
      },
      {
        name:"Confirmación",
        description:"Para un sí/no simple no se usa modal sino CplusAlerts.confirm({title, text, confirmText, cancelText, danger}), que devuelve una promesa booleana y resuelve false ante cancelar, cierre o ESC. El modal solo se justifica cuando la confirmación exige capturar datos extra; hoy ningún módulo validado tiene uno así.",
        preview:`<section class="gc-modal-static">
  <div class="gc-modal-static-frame">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Anular documento <span class="fw-bold">DOC-01234</span></h5>
        <button type="button" class="btn-close" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label class="form-label" for="anular_causal_demo">Causal de anulación <span class="gc-required">*</span></label>
          <select id="anular_causal_demo" class="form-select">
            <option>Error de digitación</option>
            <option>Servicio no prestado</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label" for="anular_motivo_demo">Motivo <span class="gc-required">*</span></label>
          <textarea id="anular_motivo_demo" class="form-control" rows="3" placeholder="Describe el motivo de la anulación (mínimo 5 caracteres)"></textarea>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="anular_correo_demo">
          <label class="form-check-label" for="anular_correo_demo">Enviar correo de anulación</label>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="erp-btn erp-btn-secondary">Cancelar</button>
        <button type="button" class="erp-btn erp-btn-primary"><i class="bi bi-x-circle"></i> Anular</button>
      </div>
    </div>
  </div>
</section>`,
        snippet:`<!-- 1) Confirmación simple (sin datos extra): NO va modal. API real en cplus/js/core/alerts.js:140-159 y 244. -->
<script>
  CplusAlerts.confirm({
    title: '¿Eliminar esta sucursal?',
    text: 'Esta acción no se puede deshacer.',
    danger: true,
    confirmText: 'Eliminar',
    cancelText: 'Cancelar'
  }).then(function (confirmado) {
    // Promise<bool>: cancelar, cerrar o ESC devuelven false.
    if (!confirmado) { return; }
    // ... acción real (proxy BFF)
  });
</script>

<!-- 2) Solo si la confirmación exige capturar datos (causal, motivo, banderas): ahí sí un modal. -->
<div class="modal fade" id="modalAnularDoc" tabindex="-1" aria-labelledby="modalAnularDocLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalAnularDocLabel">Anular documento <span id="anular_doc_label" class="fw-bold"></span></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body">
        <input type="hidden" id="anular_id" value="">
        <div class="mb-3">
          <label class="form-label" for="anular_causal">Causal de anulación <span class="gc-required">*</span></label>
          <select id="anular_causal" class="form-select"></select>
        </div>
        <div class="mb-3">
          <label class="form-label" for="anular_motivo">Motivo <span class="gc-required">*</span></label>
          <textarea id="anular_motivo" class="form-control" rows="3" maxlength="1000"
                    placeholder="Describe el motivo de la anulación (mínimo 5 caracteres)"></textarea>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="anular_correo">
          <label class="form-check-label" for="anular_correo">Enviar correo de anulación</label>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="erp-btn erp-btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="erp-btn erp-btn-primary" id="btnAnularDoc"><i class="bi bi-x-circle"></i> Anular</button>
      </div>
    </div>
  </div>
</div>`
      },
      {
        name:"Formulario",
        description:"Captura un formulario completo sin salir del listado: se abre desde la acción de la fila, valida, llama al proxy BFF y refresca la tabla. Usa modal-lg o modal-xl según el ancho necesario.",
        preview:`<section class="gc-modal-static gc-modal-static--lg">
  <div class="gc-modal-static-frame">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Duplicar residuo</h5>
        <button type="button" class="btn-close" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body">
        <div class="row g-3">
          <div class="col-md-6">
            <label class="form-label" for="dup_codigo_demo">Código <span class="gc-required">*</span></label>
            <input type="text" id="dup_codigo_demo" class="form-control" maxlength="50" autocomplete="off" placeholder="Ej. RES-0042">
          </div>
          <div class="col-md-6">
            <label class="form-label" for="dup_nombre_demo">Nombre <span class="gc-required">*</span></label>
            <input type="text" id="dup_nombre_demo" class="form-control" maxlength="300" autocomplete="off" placeholder="Ej. Aceite usado (copia)">
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="erp-btn erp-btn-secondary">Cancelar</button>
        <button type="button" class="erp-btn erp-btn-primary"><i class="bi bi-files"></i> Duplicar</button>
      </div>
    </div>
  </div>
</section>`,
        snippet:`<!-- Base: cplus/views/mostrarResiduosInventariables.php:653-682. En producción el
     Cancelar usa "erp-btn" SIN erp-btn-secondary (línea 674) — la misma degradación
     documentada en la entrada Botonera de formulario. Aquí se normaliza al kit. -->
<div class="modal fade" id="modalDuplicarResiduo" tabindex="-1" aria-labelledby="modalDuplicarResiduoLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <form method="post" action="/cplus/bff/entities/residuos_inventariables/proxies/duplicate.php" autocomplete="off">
        <div class="modal-header">
          <h5 class="modal-title" id="modalDuplicarResiduoLabel">Duplicar residuo</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        <div class="modal-body">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label" for="dup_codigo">Código <span class="gc-required">*</span></label>
              <input type="text" name="codigo" id="dup_codigo" class="form-control" maxlength="50" required>
            </div>
            <div class="col-md-6">
              <label class="form-label" for="dup_nombre">Nombre <span class="gc-required">*</span></label>
              <input type="text" name="nombre" id="dup_nombre" class="form-control" maxlength="300" required>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="erp-btn erp-btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="submit" class="erp-btn erp-btn-primary"><i class="bi bi-files"></i> Duplicar</button>
          <input type="hidden" name="id" value="">
          <input type="hidden" name="agregar" value="126">
          <input type="hidden" name="_csrf" value="">
        </div>
      </form>
    </div>
  </div>
</div>

<script>
  // Abrir desde la acción de la fila; el submit lo cierra al navegar al proxy BFF.
  var elDuplicar = document.getElementById('modalDuplicarResiduo');
  bootstrap.Modal.getOrCreateInstance(elDuplicar).show();
</script>`
      },
      {
        name:"Trazabilidad",
        description:"Modal centralizado #myModalT, inyectado por cplus/js/lib/GrincUtils.js en toda vista C+. Rediseño v2 del 2026-08-10: encabezado blanco con el título fuerte y una línea de detalle fija (gc-trace-modal__detail), tabla con encabezado gris pegajoso y pie con un único botón verde «Entendido». Una vista nueva no copia markup: declara tipoTrza de su entidad en cplus/config/entities.php y llama a window.vertraza(documento, nombre) desde la acción de la fila. La columna Sucursal solo la emite el renderer legacy cuando tipo=1; el resto de entidades pinta Fecha/Elaboró/Motivo/Detalle.",
        preview:`<section class="gc-modal-static gc-modal-static--lg gc-modal-trace">
  <div class="gc-modal-static-frame">
    <div class="modal-content">
      <div class="modal-header">
        <div class="gc-trace-modal__heading">
          <h5 class="modal-title">Trazabilidad (Aceite usado)</h5>
          <p class="gc-trace-modal__detail">Consulta el historial de cambios registrados para este registro: qué se modificó, cuándo, quién lo hizo y el detalle de cada cambio.</p>
        </div>
        <button type="button" class="btn-close" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body">
        <div class="table-responsive">
          <table class="table table-bordered table-condensed informe">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Elaboro</th>
                <th>Motivo</th>
                <th>Detalle</th>
                <th>Sucursal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="tc-center"><strong>2026-07-25</strong></td>
                <td class="tc-center"><strong>NATALIA BOTERO</strong></td>
                <td>Actualización de manejo</td>
                <td>Se deseleccionó «Celda de seguridad» del declarado Aceite usado.</td>
                <td>Sede principal - Cra 12 # 34-56</td>
              </tr>
              <tr>
                <td class="tc-center"><strong>2026-07-24</strong></td>
                <td class="tc-center"><strong>ANDREA MURCIA</strong></td>
                <td>Cambio de sucursal</td>
                <td>Se añadió la sucursal Patio industrial norte al declarado.</td>
                <td>Centro logístico - Cll 80 # 10-20</td>
              </tr>
              <tr>
                <td class="tc-center"><strong>2026-07-22</strong></td>
                <td class="tc-center"><strong>CARLOS RAMÍREZ</strong></td>
                <td>Creación</td>
                <td>Creación inicial del declarado con manejo, sucursal y criterios de validación.</td>
                <td>Sede principal - Cra 12 # 34-56</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary">Entendido</button>
      </div>
    </div>
  </div>
</section>`,
        snippet:`<!-- NO copies el markup: #myModalT lo inyecta cplus/js/lib/GrincUtils.js (líneas 19-42) en toda vista C+.
     1) Declara 'tipoTrza' de la entidad en cplus/config/entities.php; includes/menu_cplus.php lo publica
        en window.CplusEntityTrza y GrincUtils.js lo resuelve solo.
     2) Dispara el modal desde la acción de trazabilidad de la fila. -->
<script>
  // Camino genérico: declarar withTraza: true en crud() y dejar que lo dispare
  // cplus/js/core/standard-actions.js:139-147, como hacen Embalajes (embalajes/datatable.js:20),
  // Usuarios (usuarios/datatable.js:25-30), Sucursales (sucursales/datatable.js:19-24)
  // y Roles (roles/datatable.js:9).
  window.vertraza(row.id, row.nombre || '');
  // Nota: Roles sobrescribe window.vertraza con su propia versión por BFF, que pinta
  // el mismo #myModalT (cplus/js/entities/roles/datatable-constructor.js:100-125).
</script>`
      }
    ],
    snippet:`<!-- Esqueleto recomendado del modal C+. Base: cplus/views/mostrarSucursales.php:787-801,
     el único modal de un módulo validado y el único con el kit erp-btn en los dos botones del pie.
     El aria-labelledby del contenedor .modal es una MEJORA PROPUESTA del catálogo: ninguna vista
     de módulo validado lo declara; el único precedente en el árbol es el modal transversal
     #myModalT (cplus/js/lib/GrincUtils.js:20-22, que además referencia el título real con
     aria-labelledby="titulotraza" y el detalle con aria-describedby="trazadetalle"). -->
<div class="modal fade" id="modalEjemplo" tabindex="-1" aria-labelledby="modalEjemploLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalEjemploLabel"><i class="bi bi-clock"></i> Título del modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body"><!-- contenido --></div>
      <div class="modal-footer">
        <button type="button" class="erp-btn erp-btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="erp-btn erp-btn-primary" id="guardarEjemplo">Guardar</button>
      </div>
    </div>
  </div>
</div>`
  },
  {
    id:"tabla-listado",
    catalogExamples: ["acciones-de-fila","boton","modal"],
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/js/entities/usuarios/datatable.js", detail: "12 columnas declarativas con buildHead y embudos filter:'select' en Módulo de acceso, Estado, Cliente, Rol y Asesor comercial (líneas 76-118)" },
      { module: "Embalajes", agregar: 106, file: "cplus/js/entities/embalajes/datatable.js", detail: "El caso más simple: acciones + nombre/código/estado/descripción (líneas 64-77). La vista solo aporta la tabla vacía en cplus/views/mostrarEmbalajes.php (líneas 243-247)" },
      { module: "Zonas", agregar: 118, file: "cplus/js/entities/zonas/datatable.js", detail: "pinRecentOnSave:true y filtros select alimentados por el BFF filters/zones antes de construir la tabla (líneas 69-97)" },
      { module: "Sucursales", agregar: 127, file: "cplus/js/entities/sucursales/datatable.js", detail: "22 columnas (1 de acciones + 21 de datos) y export:'dropdown' en la línea 104, que activa el menú Exportar / Exportar detallado en la toolbar (líneas 99-132)" },
      { module: "Riesgos", agregar: 143, file: "cplus/js/entities/Riesgos/datatable.js", detail: "render propio del badge para un estado entero: data === 1 pinta badge bg-success, cualquier otro valor badge bg-secondary (línea 84)" }
    ],
    group:"Listados",
    name:"Tabla de listado",
    description:"Listado estándar de CPlus. La vista solo deja el contenedor y una etiqueta <code>table</code> vacía; <code>GrincDataTable.init(config)</code> lo construye por POST contra el BFF con <code>serverSide</code>, y <code>datatable-v2-shell.js</code> lo envuelve en el shell V2: toolbar, tarjeta y footer con paginación.",
    use:"Usarlo como referencia del listado de cualquier módulo CPlus. Opciones de configuración: entityKey, columns, columnDefs, tableId, excelPath, pinRecentOnSave, dataCallback, onInit, buildHead, export y dom. Los anchos canónicos se piden por columna con width:'nombre', 'codigo', 'fecha' o 'descripcion'.",
    avoid:"No copiar este HTML a una vista: el listado lo genera JavaScript contra el BFF. No armar el thead a mano con buildHead. No usarlo en tablas de detalle de modal o acordeón, que no llevan shell V2.",
    deps:"jQuery, DataTables (build Bootstrap 5), Bootstrap CSS y Bootstrap Icons. En CPlus: cplus/js/lib/GrincDataTable.js más el bloque core declarado en cplus/js/sources.php; estilos productivos en cplus/scss/_datatables.scss.",
    verified: true,
    accessibility:"Cada botón de acción lleva title con tooltip de Bootstrap, que CplusInitTooltips reinicializa tras cada redibujado. El embudo declara aria-expanded y aria-label 'Filtrar' más el título de la columna. La paginación va en un contenedor role='navigation' aria-label='Paginación', cada botón trae su aria-label y los no disponibles usan disabled, no solo opacidad.",
    note:"Una tabla se deja fuera del shell V2 con <code>data-cplus-shell=\"off\"</code> y el botón de Excel se apaga con <code>data-cplus-toolbar-excel=\"off\"</code> (cplus/js/core/datatable-v2-shell.js). <strong>Salvedad:</strong> el shell está contrastado contra producción, pero el juego de columnas es una composición del catálogo: ninguna vista tiene exactamente estas.",
    stateOrder:["enabled","cargando","vacio"],
    stateLabels:{
      enabled:"Con datos: shell V2 completo, columna de acciones, badge de estado y footer con rango y paginación. La tercera fila está inactiva, por eso Editar y Eliminar dejan su hueco reservado.",
      cargando:"Cargando: el shell y el thead ya están pintados antes de la primera respuesta del BFF y el footer muestra el texto de arranque. El loader que cablea la tabla es el overlay GLOBAL #cplus-loading-overlay que enciende CplusLoading.show('Cargando…') desde GrincDataTable.js: position:fixed, z-index 20000, fondo rgba(15,23,42,0.55) con desenfoque, spinner de 3rem y el mensaje. Aquí se emula a escala de la tarjeta porque position:fixed no es representable dentro del preview; en producción cubre toda la ventana, no solo la tabla.",
      vacio:"Vacío: la consulta no devolvió filas. El texto es el literal de datatable-defaults.js, emptyTable: 'No hay datos disponibles'. Con un filtro aplicado el literal sería otro, zeroRecords: 'No se encontraron registros'."
    },
    states:{
      enabled:`<section class="gc-table-listado-preview">
  <section class="erp-card table-card cplus-v2-card">
    <div class="table-toolbar">
      <h2 class="card-title">Embalajes<span class="text-muted cplus-shell-count"> (3)</span></h2>
      <div class="table-toolbar-actions">
        <div class="dataTables_filter">
          <label><input type="search" placeholder="Buscar..." aria-label="Buscar en la tabla"></label>
        </div>
        <button type="button" class="erp-btn erp-btn-excel table-tool-btn" data-cplus-excel="../../cplus/bff/shared/export-excel.php?entity=embalajes" title="Exportar a Excel">
          <i class="bi bi-file-earmark-excel-fill"></i> Exportar
        </button>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-bordered table-sm dataTable standard-table" style="width:100%">
        <thead>
          <tr>
            <th class="table-actions">Acciones</th>
            <th class="table-id">ID</th>
            <th class="table-nombre"><span class="th-content"><span class="th-title">Nombre</span><button class="column-filter-btn" type="button" data-column="2" data-label="Nombre" data-type="text" aria-expanded="false" aria-label="Filtrar Nombre"><i class="bi bi-funnel"></i></button></span></th>
            <th class="table-codigo"><span class="th-content"><span class="th-title">Código</span><button class="column-filter-btn" type="button" data-column="3" data-label="Código" data-type="text" aria-expanded="false" aria-label="Filtrar Código"><i class="bi bi-funnel"></i></button></span></th>
            <th class="table-estado"><span class="th-content"><span class="th-title">Estado</span><button class="column-filter-btn is-active" type="button" data-column="4" data-label="Estado" data-type="select" aria-expanded="false" aria-label="Filtrar Estado"><i class="bi bi-funnel"></i></button></span></th>
            <th class="table-fecha">Fecha ingreso</th>
            <th class="table-descripcion">Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="table-actions">
              <div class="actions-group" aria-label="Acciones del registro">
                <a href="incluir.php?agregar=106&actualizar=1&ver=1" class="icon-action" title="Ver" data-bs-toggle="tooltip"><i class="bi bi-eye"></i></a>
                <a href="incluir.php?agregar=106&actualizar=1" class="icon-action" title="Editar" data-bs-toggle="tooltip"><i class="bi bi-pencil"></i></a>
                <button type="button" class="icon-action delete text-danger" title="Eliminar" data-bs-toggle="tooltip"><i class="bi bi-trash3"></i></button>
                <button type="button" class="icon-action" title="Activar/Desactivar" data-bs-toggle="tooltip"><i class="bi bi-toggle-on"></i></button>
                <button type="button" class="icon-action" title="Trazabilidad" data-bs-toggle="tooltip"><i class="bi bi-clock-history"></i></button>
              </div>
            </td>
            <td class="table-id">1</td>
            <td class="table-nombre">Caneca plástica 120 L</td>
            <td class="table-codigo">EMB-001</td>
            <td class="table-estado"><span class="badge bg-success">Activo</span></td>
            <td class="table-fecha">2026-01-14</td>
            <td class="table-descripcion table-truncate" title="Caneca con tapa para residuos ordinarios en punto ecológico">Caneca con tapa para residuos ordinarios en punto ecológico</td>
          </tr>
          <tr>
            <td class="table-actions">
              <div class="actions-group" aria-label="Acciones del registro">
                <a href="incluir.php?agregar=106&actualizar=2&ver=1" class="icon-action" title="Ver" data-bs-toggle="tooltip"><i class="bi bi-eye"></i></a>
                <a href="incluir.php?agregar=106&actualizar=2" class="icon-action" title="Editar" data-bs-toggle="tooltip"><i class="bi bi-pencil"></i></a>
                <button type="button" class="icon-action delete text-danger" title="Eliminar" data-bs-toggle="tooltip"><i class="bi bi-trash3"></i></button>
                <button type="button" class="icon-action" title="Activar/Desactivar" data-bs-toggle="tooltip"><i class="bi bi-toggle-on"></i></button>
                <button type="button" class="icon-action" title="Trazabilidad" data-bs-toggle="tooltip"><i class="bi bi-clock-history"></i></button>
              </div>
            </td>
            <td class="table-id">2</td>
            <td class="table-nombre">Guardián 2 L</td>
            <td class="table-codigo">EMB-014</td>
            <td class="table-estado"><span class="badge bg-success">Activo</span></td>
            <td class="table-fecha">2026-02-03</td>
            <td class="table-descripcion table-truncate" title="Recipiente rígido para cortopunzantes">Recipiente rígido para cortopunzantes</td>
          </tr>
          <tr>
            <td class="table-actions">
              <div class="actions-group" aria-label="Acciones del registro">
                <a href="incluir.php?agregar=106&actualizar=3&ver=1" class="icon-action" title="Ver" data-bs-toggle="tooltip"><i class="bi bi-eye"></i></a>
                <span class="icon-action-placeholder" aria-hidden="true"></span>
                <span class="icon-action-placeholder" aria-hidden="true"></span>
                <button type="button" class="icon-action" title="Activar/Desactivar" data-bs-toggle="tooltip"><i class="bi bi-toggle-off"></i></button>
                <button type="button" class="icon-action" title="Trazabilidad" data-bs-toggle="tooltip"><i class="bi bi-clock-history"></i></button>
              </div>
            </td>
            <td class="table-id">3</td>
            <td class="table-nombre">Bolsa roja 60 x 90</td>
            <td class="table-codigo">EMB-022</td>
            <td class="table-estado"><span class="badge bg-secondary">Inactivo</span></td>
            <td class="table-fecha">2025-11-27</td>
            <td class="table-descripcion table-truncate" title="Descontinuada: reemplazada por la referencia de 70 x 100">Descontinuada: reemplazada por la referencia de 70 x 100</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-footer">
      <span class="cplus-shell-range">Mostrando 1 a 3 de 3 registros</span>
      <div class="pagination" role="navigation" aria-label="Paginación">
        <button class="page-btn" data-cplus-page="first" disabled aria-label="Primera">&laquo;</button>
        <button class="page-btn" data-cplus-page="prev" disabled aria-label="Anterior">&lsaquo;</button>
        <button class="page-btn active" data-cplus-page="0" aria-label="Página 1">1</button>
        <button class="page-btn" data-cplus-page="next" disabled aria-label="Siguiente">&rsaquo;</button>
        <button class="page-btn" data-cplus-page="last" disabled aria-label="Última">&raquo;</button>
      </div>
    </div>
  </section>
</section>`,
      cargando:`<section class="gc-table-listado-preview">
  <section class="erp-card table-card cplus-v2-card" style="position:relative">
    <div class="table-toolbar">
      <h2 class="card-title">Embalajes<span class="text-muted cplus-shell-count"></span></h2>
      <div class="table-toolbar-actions">
        <div class="dataTables_filter">
          <label><input type="search" placeholder="Buscar..." aria-label="Buscar en la tabla"></label>
        </div>
        <button type="button" class="erp-btn erp-btn-excel table-tool-btn" data-cplus-excel="../../cplus/bff/shared/export-excel.php?entity=embalajes" title="Exportar a Excel">
          <i class="bi bi-file-earmark-excel-fill"></i> Exportar
        </button>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-bordered table-sm dataTable standard-table" style="width:100%">
        <thead>
          <tr>
            <th class="table-actions">Acciones</th>
            <th class="table-id">ID</th>
            <th class="table-nombre"><span class="th-content"><span class="th-title">Nombre</span><button class="column-filter-btn" type="button" data-column="2" data-label="Nombre" data-type="text" aria-expanded="false" aria-label="Filtrar Nombre"><i class="bi bi-funnel"></i></button></span></th>
            <th class="table-codigo"><span class="th-content"><span class="th-title">Código</span><button class="column-filter-btn" type="button" data-column="3" data-label="Código" data-type="text" aria-expanded="false" aria-label="Filtrar Código"><i class="bi bi-funnel"></i></button></span></th>
            <th class="table-estado"><span class="th-content"><span class="th-title">Estado</span><button class="column-filter-btn" type="button" data-column="4" data-label="Estado" data-type="select" aria-expanded="false" aria-label="Filtrar Estado"><i class="bi bi-funnel"></i></button></span></th>
            <th class="table-fecha">Fecha ingreso</th>
            <th class="table-descripcion">Descripción</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
    <div class="table-footer">
      <span class="cplus-shell-range">Cargando...</span>
      <div class="pagination" role="navigation" aria-label="Paginación"></div>
    </div>
    <!-- Emulación del overlay GLOBAL #cplus-loading-overlay (loading.js:37-44). En producción es
         position:fixed sobre toda la ventana; aquí se acota a la tarjeta solo para poder verlo. -->
    <div id="cplus-loading-overlay" role="alert" aria-busy="true" style="position:absolute;inset:0;z-index:20000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;background:rgba(15,23,42,0.55);backdrop-filter:blur(2px)">
      <div class="spinner-border text-light" style="width:3rem;height:3rem;border-width:0.3em" role="status" aria-hidden="true"></div>
      <div class="cplus-loading__msg" style="color:#fff;font-weight:600;font-size:1.05rem;letter-spacing:0.2px">Cargando…</div>
    </div>
  </section>
</section>`,
      vacio:`<section class="gc-table-listado-preview">
  <section class="erp-card table-card cplus-v2-card">
    <div class="table-toolbar">
      <h2 class="card-title">Embalajes<span class="text-muted cplus-shell-count"></span></h2>
      <div class="table-toolbar-actions">
        <div class="dataTables_filter">
          <label><input type="search" placeholder="Buscar..." aria-label="Buscar en la tabla"></label>
        </div>
        <button type="button" class="erp-btn erp-btn-excel table-tool-btn" data-cplus-excel="../../cplus/bff/shared/export-excel.php?entity=embalajes" title="Exportar a Excel">
          <i class="bi bi-file-earmark-excel-fill"></i> Exportar
        </button>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-bordered table-sm dataTable standard-table" style="width:100%">
        <thead>
          <tr>
            <th class="table-actions">Acciones</th>
            <th class="table-id">ID</th>
            <th class="table-nombre"><span class="th-content"><span class="th-title">Nombre</span><button class="column-filter-btn" type="button" data-column="2" data-label="Nombre" data-type="text" aria-expanded="false" aria-label="Filtrar Nombre"><i class="bi bi-funnel"></i></button></span></th>
            <th class="table-codigo"><span class="th-content"><span class="th-title">Código</span><button class="column-filter-btn" type="button" data-column="3" data-label="Código" data-type="text" aria-expanded="false" aria-label="Filtrar Código"><i class="bi bi-funnel"></i></button></span></th>
            <th class="table-estado"><span class="th-content"><span class="th-title">Estado</span><button class="column-filter-btn" type="button" data-column="4" data-label="Estado" data-type="select" aria-expanded="false" aria-label="Filtrar Estado"><i class="bi bi-funnel"></i></button></span></th>
            <th class="table-fecha">Fecha ingreso</th>
            <th class="table-descripcion">Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="dataTables_empty" colspan="7">No hay datos disponibles</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-footer">
      <span class="cplus-shell-range">Mostrando 0 a 0 de 0 registros</span>
      <div class="pagination" role="navigation" aria-label="Paginación">
        <button class="page-btn active" disabled>1</button>
      </div>
    </div>
  </section>
</section>`
    },
    snippet:`<!-- Referencia de DOM. En producción la vista NO escribe esta tabla:
     solo deja <div class="table-responsive"><table id="informe" class="table table-bordered table-sm"></table></div>
     y el listado lo genera GrincDataTable.init({ entityKey, tableId, buildHead, columns, ... }).
     El shell erp-card/table-toolbar/table-footer lo aplica solo datatable-v2-shell.js.
     Las clases de ancho se repiten aquí en el th para que el ejemplo estático se vea alineado;
     buildHead emite el th sin clase (cplus/js/lib/GrincDataTable.js, líneas 341-349). -->
<section class="erp-card table-card cplus-v2-card">
  <div class="table-toolbar">
    <h2 class="card-title">Embalajes<span class="text-muted cplus-shell-count"> (3)</span></h2>
    <div class="table-toolbar-actions">
      <div class="dataTables_filter">
        <label><input type="search" placeholder="Buscar..." aria-label="Buscar en la tabla"></label>
      </div>
      <button type="button" class="erp-btn erp-btn-excel table-tool-btn" data-cplus-excel="../../cplus/bff/shared/export-excel.php?entity=embalajes" title="Exportar a Excel">
        <i class="bi bi-file-earmark-excel-fill"></i> Exportar
      </button>
    </div>
  </div>
  <div class="table-responsive">
    <table class="table table-bordered table-sm dataTable standard-table" style="width:100%">
      <thead>
        <tr>
          <th class="table-actions">Acciones</th>
          <th class="table-id">ID</th>
          <th class="table-nombre"><span class="th-content"><span class="th-title">Nombre</span><button class="column-filter-btn" type="button" data-column="2" data-label="Nombre" data-type="text" aria-expanded="false" aria-label="Filtrar Nombre"><i class="bi bi-funnel"></i></button></span></th>
          <th class="table-codigo">Código</th>
          <th class="table-estado">Estado</th>
          <th class="table-fecha">Fecha ingreso</th>
          <th class="table-descripcion">Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="table-actions">
            <div class="actions-group" aria-label="Acciones del registro">
              <a href="incluir.php?agregar=106&actualizar=1&ver=1" class="icon-action" title="Ver" data-bs-toggle="tooltip"><i class="bi bi-eye"></i></a>
              <a href="incluir.php?agregar=106&actualizar=1" class="icon-action" title="Editar" data-bs-toggle="tooltip"><i class="bi bi-pencil"></i></a>
              <button type="button" class="icon-action delete text-danger" title="Eliminar" data-bs-toggle="tooltip"><i class="bi bi-trash3"></i></button>
              <button type="button" class="icon-action" title="Activar/Desactivar" data-bs-toggle="tooltip"><i class="bi bi-toggle-on"></i></button>
              <button type="button" class="icon-action" title="Trazabilidad" data-bs-toggle="tooltip"><i class="bi bi-clock-history"></i></button>
            </div>
          </td>
          <td class="table-id">1</td>
          <td class="table-nombre">Caneca plástica 120 L</td>
          <td class="table-codigo">EMB-001</td>
          <td class="table-estado"><span class="badge bg-success">Activo</span></td>
          <td class="table-fecha">2026-01-14</td>
          <td class="table-descripcion table-truncate" title="Caneca con tapa para residuos ordinarios en punto ecológico">Caneca con tapa para residuos ordinarios en punto ecológico</td>
        </tr>
        <tr>
          <td class="table-actions">
            <div class="actions-group" aria-label="Acciones del registro">
              <a href="incluir.php?agregar=106&actualizar=2&ver=1" class="icon-action" title="Ver" data-bs-toggle="tooltip"><i class="bi bi-eye"></i></a>
              <a href="incluir.php?agregar=106&actualizar=2" class="icon-action" title="Editar" data-bs-toggle="tooltip"><i class="bi bi-pencil"></i></a>
              <button type="button" class="icon-action delete text-danger" title="Eliminar" data-bs-toggle="tooltip"><i class="bi bi-trash3"></i></button>
              <button type="button" class="icon-action" title="Activar/Desactivar" data-bs-toggle="tooltip"><i class="bi bi-toggle-on"></i></button>
              <button type="button" class="icon-action" title="Trazabilidad" data-bs-toggle="tooltip"><i class="bi bi-clock-history"></i></button>
            </div>
          </td>
          <td class="table-id">2</td>
          <td class="table-nombre">Guardián 2 L</td>
          <td class="table-codigo">EMB-014</td>
          <td class="table-estado"><span class="badge bg-success">Activo</span></td>
          <td class="table-fecha">2026-02-03</td>
          <td class="table-descripcion table-truncate" title="Recipiente rígido para cortopunzantes">Recipiente rígido para cortopunzantes</td>
        </tr>
        <tr>
          <td class="table-actions">
            <div class="actions-group" aria-label="Acciones del registro">
              <a href="incluir.php?agregar=106&actualizar=3&ver=1" class="icon-action" title="Ver" data-bs-toggle="tooltip"><i class="bi bi-eye"></i></a>
              <span class="icon-action-placeholder" aria-hidden="true"></span>
              <span class="icon-action-placeholder" aria-hidden="true"></span>
              <button type="button" class="icon-action" title="Activar/Desactivar" data-bs-toggle="tooltip"><i class="bi bi-toggle-off"></i></button>
              <button type="button" class="icon-action" title="Trazabilidad" data-bs-toggle="tooltip"><i class="bi bi-clock-history"></i></button>
            </div>
          </td>
          <td class="table-id">3</td>
          <td class="table-nombre">Bolsa roja 60 x 90</td>
          <td class="table-codigo">EMB-022</td>
          <td class="table-estado"><span class="badge bg-secondary">Inactivo</span></td>
          <td class="table-fecha">2025-11-27</td>
          <td class="table-descripcion table-truncate" title="Descontinuada: reemplazada por la referencia de 70 x 100">Descontinuada: reemplazada por la referencia de 70 x 100</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="table-footer">
    <span class="cplus-shell-range">Mostrando 1 a 3 de 3 registros</span>
    <div class="pagination" role="navigation" aria-label="Paginación">
      <button class="page-btn" data-cplus-page="first" disabled aria-label="Primera">&laquo;</button>
      <button class="page-btn" data-cplus-page="prev" disabled aria-label="Anterior">&lsaquo;</button>
      <button class="page-btn active" data-cplus-page="0" aria-label="Página 1">1</button>
      <button class="page-btn" data-cplus-page="next" disabled aria-label="Siguiente">&rsaquo;</button>
      <button class="page-btn" data-cplus-page="last" disabled aria-label="Última">&raquo;</button>
    </div>
  </div>
</section>`
  },
  {
    id:"filtros-listado",
    catalogExamples: ["boton","campo-texto","campo-fecha","select-simple","seleccion-busqueda","tabla-listado"],
    implementations: [
      { module: "Clientes", agregar: 130, file: "cplus/views/mostrarClientes.php", detail: "Grid completa de 6 filtros: Nombre/ID, Clasificación interna, Asesor, Estado, Categoría y Ubicación, con botón Buscar (líneas 54-114)" },
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "Variante por GET a incluir.php con id de colapso propio usuariosFiltersCollapse (líneas 1084-1137)" },
      { module: "Tipos de vehículo", agregar: 137, file: "cplus/views/mostrarTipoVehiculos.php", detail: "Versión mínima de dos filtros; usa label.form-label en vez de .form-group (líneas 170-204)" }
    ],
    group:"Listados",
    name:"Filtros de listado",
    description:"Tarjeta estándar que precede al listado en los módulos con búsqueda por formulario; no todos la llevan. Agrupa los campos en una rejilla de seis columnas y cierra con la botonera de consulta a la derecha. Bajo 768px el título se vuelve un botón que colapsa los filtros.",
    use:"Usarlo como bloque estándar entre el encabezado del módulo y la tabla del listado. Los campos se arman con los patrones de la biblioteca: form-label o label suelto más form-control, form-select o select con búsqueda. El botón es el kit erp-btn en su variante erp-btn-primary.",
    avoid:"No usarlo para el formulario de crear o editar: ese comparte el aspecto pero se llama form-card. No meter dentro acciones del módulo como Crear o Exportar: van en el encabezado o en la barra de la tabla. No sustituye al embudo de filtro por columna.",
    deps:"Bootstrap CSS, Bootstrap JS Collapse (colapso móvil) y Bootstrap Icons. En producción los estilos salen de cplus/scss/_components.scss; los selects con búsqueda añaden chosen-select.",
    verified: true,
    accessibility:"Cada campo mantiene su label asociado por for/id. El título móvil es un button con aria-expanded y aria-controls hacia el id de .filters-collapse; el chevron rota por el selector [aria-expanded=\"true\"], así que ese atributo debe ser real y no decorativo. El botón de consulta es type=\"submit\", así que Enter busca desde cualquier campo. Los iconos son decorativos y deberían llevar aria-hidden=\"true\", cosa que producción no hace.",
    note:"El id del contenedor colapsable debe ser único por página: producción usa <code>filtersCollapse</code> y, en Usuarios, <code>usuariosFiltersCollapse</code>.",
    snippet:`<section class="card filters-card">
  <div class="filters-card-header">
    <h2 class="card-title filters-title-desktop">Filtros de búsqueda</h2>
    <button type="button" class="filters-title-mobile"
            data-bs-toggle="collapse" data-bs-target="#filtersCollapse"
            aria-expanded="false" aria-controls="filtersCollapse">
      <span><i class="bi bi-funnel"></i> Filtros de búsqueda</span>
      <i class="bi bi-chevron-down filters-toggle-icon"></i>
    </button>
  </div>
  <div class="collapse filters-collapse" id="filtersCollapse">
    <form id="search" action="" method="post">
      <div class="filters-grid">
        <div class="form-group">
          <label for="fechabusqueda">Desde</label>
          <input type="date" class="form-control" id="fechabusqueda" name="fechabusqueda">
        </div>
        <div class="form-group">
          <label for="fechabusqueda_hasta">Hasta</label>
          <input type="date" class="form-control" id="fechabusqueda_hasta" name="fechabusqueda_hasta">
        </div>
        <div class="form-group">
          <label for="clientebusqueda">Cliente</label>
          <select class="form-select chosen-select" id="clientebusqueda" name="clientebusqueda">
            <option value="" selected>Seleccione</option>
          </select>
        </div>
        <div class="form-group">
          <label for="codigo">Código</label>
          <input type="text" class="form-control" id="codigo" name="codigo" placeholder="Ingrese código">
        </div>
        <div class="form-group">
          <label for="estadobusqueda">Estado</label>
          <select class="form-select" id="estadobusqueda" name="estadobusqueda">
            <option value="" selected>Seleccione</option>
            <option value="1">Activo</option>
            <option value="0">Inactivo</option>
          </select>
        </div>
        <div class="form-group">
          <label for="docbusqueda">Documento</label>
          <input type="text" class="form-control" id="docbusqueda" name="docbusqueda" placeholder="N&deg; de documento">
        </div>
      </div>
      <div class="filters-actions">
        <button type="submit" class="erp-btn erp-btn-primary">
          <i class="bi bi-search"></i> Buscar
        </button>
      </div>
    </form>
  </div>
</section>`,
    preview:`<section class="gc-filters-demo">
  <section class="card filters-card">
    <div class="filters-card-header">
      <h2 class="card-title filters-title-desktop">Filtros de búsqueda</h2>
      <button type="button" class="filters-title-mobile"
              data-bs-toggle="collapse" data-bs-target="#filtersCollapseDemo"
              aria-expanded="false" aria-controls="filtersCollapseDemo">
        <span><i class="bi bi-funnel"></i> Filtros de búsqueda</span>
        <i class="bi bi-chevron-down filters-toggle-icon"></i>
      </button>
    </div>
    <div class="collapse filters-collapse" id="filtersCollapseDemo">
      <form id="searchFiltrosDemo" action="" method="post" onsubmit="return false;">
        <div class="filters-grid">
          <div class="form-group">
            <label for="filtro_demo_desde">Desde</label>
            <input type="date" class="form-control" id="filtro_demo_desde" name="filtro_demo_desde">
          </div>
          <div class="form-group">
            <label for="filtro_demo_hasta">Hasta</label>
            <input type="date" class="form-control" id="filtro_demo_hasta" name="filtro_demo_hasta">
          </div>
          <div class="form-group">
            <label for="filtro_demo_cliente">Cliente</label>
            <select class="form-select" id="filtro_demo_cliente" name="filtro_demo_cliente">
              <option value="" selected>Seleccione</option>
              <option value="1">Gráficas ABC S.A.S</option>
            </select>
          </div>
          <div class="form-group">
            <label for="filtro_demo_codigo">Código</label>
            <input type="text" class="form-control" id="filtro_demo_codigo" name="filtro_demo_codigo" placeholder="Ingrese código">
          </div>
          <div class="form-group">
            <label for="filtro_demo_estado">Estado</label>
            <select class="form-select" id="filtro_demo_estado" name="filtro_demo_estado">
              <option value="" selected>Seleccione</option>
              <option value="1">Activo</option>
              <option value="0">Inactivo</option>
            </select>
          </div>
          <div class="form-group">
            <label for="filtro_demo_doc">Documento</label>
            <input type="text" class="form-control" id="filtro_demo_doc" name="filtro_demo_doc" placeholder="N&deg; de documento">
          </div>
        </div>
        <div class="filters-actions">
          <button type="submit" class="erp-btn erp-btn-primary">
            <i class="bi bi-search"></i> Buscar
          </button>
        </div>
      </form>
    </div>
  </section>
</section>`
  },
  {
    id:"loader-overlay",
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/js/core/loading.js", detail: "Definición del patrón: crea el nodo cplus-loading-overlay y lleva el conteo de referencias (líneas 22-75)" },
      { module: "Embalajes", agregar: 106, file: "cplus/js/lib/GrincDataTable.js", detail: "wireTableLoading ata show/hide al ciclo preXhr/xhr de la tabla y bindNavLoadingOnce lo enciende al navegar (líneas 44-99)" },
      { module: "Usuarios", agregar: 105, file: "cplus/js/entities/usuarios/form-manager.js", detail: "showLoading al salir del formulario y CplusLoading.hideAll en beforeunload (líneas 782-812)" },
      { module: "Roles", agregar: 124, file: "cplus/js/entities/roles/form-manager.js", detail: "showLoading/hideLoading envueltos en helpers locales alrededor del guardado, delegando en CplusLoading vía CplusAlerts (líneas 193-198), y un segundo showLoading con mensaje de redirección tras el éxito (línea 246)" },
      { module: "Sucursales", agregar: 127, file: "cplus/js/entities/sucursales/cargues.js", detail: "showLoading manual antes de subir el archivo del cargue masivo, con la guarda de existencia de CplusAlerts (líneas 74-75)" },
    ],
    group:"Feedback",
    name:"Overlay de carga",
    description:"Overlay oscuro que CPlus muestra mientras una operación está en curso. No se escribe en la vista: lo crea y lo oculta <code>CplusLoading</code> (cplus/js/core/loading.js), que mantiene un único nodo global con spinner y mensaje. También ofrece una forma localizada sobre un contenedor.",
    use:"Usarlo en cualquier espera que deba bloquear la pantalla: primera carga de una tabla, paginación o filtrado que pase de 300 ms, envío de formulario, navegación y consultas remotas. Siempre por API: CplusLoading.show(mensaje), hide(), hideAll(), during(promesaOFuncion, mensaje) y overlayOn(elemento, opciones).",
    avoid:"No escribir el markup en una vista ni crear otro overlay: el nodo es único y global. No llamar hide() sin show() previo: desbalancea el conteo y apaga el overlay de otra operación en curso. No dejarlo encendido al abrir un SweetAlert2: el fondo oscuro queda detrás del modal.",
    deps:"Bootstrap 5 CSS (spinner-border, text-light) y cplus/js/core/loading.js, que cplus/js/sources.php carga en todas las vistas cplus. Sin SCSS propio: loading.js escribe los estilos en línea.",
    verified: true,
    accessibility:"El overlay se crea con role=alert y aria-busy=true, y el spinner con role=status y aria-hidden=true, así que lo único anunciado es el mensaje. Limitación real: no atrapa el foco ni marca inerte el fondo, de modo que el resto de la página sigue alcanzable con el tabulador durante la carga. Mantén el mensaje corto y en español (Cargando…, Guardando…).",
    note:"Dos operaciones concurrentes comparten el overlay y la primera en terminar no lo apaga; <code>hideAll()</code> fuerza el contador a cero y <code>during()</code> oculta en éxito y en error. <strong>Salvedad:</strong> <code>overlayOn()</code> no tiene hoy ningún call-site en cplus. <strong>Divergencia:</strong> el nodo está duplicado en <code>cplus/js/core/alerts.js</code> sin conteo de referencias; editar el markup exige tocar los dos archivos.",
    stateOrder:["pantalla","localizado"],
    stateLabels:{
      pantalla:"Pantalla completa. Lo que produce CplusLoading.show(mensaje): position:fixed, inset:0, z-index 20000, fondo rgba(15,23,42,0.55) con desenfoque, spinner de 3rem y mensaje debajo. Aquí se muestra dentro de una caja de demostración; en producción cubre toda la ventana.",
      localizado:"Localizado sobre un elemento. Lo que produce CplusLoading.overlayOn(elemento): position:absolute, inset:0, z-index 5, fondo rgba(15,23,42,0.45) y spinner de 2.5rem, sin mensaje. El handle devuelto expone done(), que REMUEVE el nodo del DOM, y hay un timeout de seguridad de 4000 ms."
    },
    states:{
      pantalla:`<div style="position:relative;min-height:230px;border:1px solid #d7dce2;border-radius:10px;overflow:hidden;background:#ffffff">
  <div style="padding:18px;color:#575756">Contenido de la vista que queda debajo del overlay mientras carga.</div>
  <div role="alert" aria-busy="true" style="position:absolute;inset:0;z-index:20000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;background:rgba(15,23,42,0.55);backdrop-filter:blur(2px)">
    <div class="spinner-border text-light" style="width:3rem;height:3rem;border-width:0.3em" role="status" aria-hidden="true"></div>
    <div class="cplus-loading__msg" style="color:#fff;font-weight:600;font-size:1.05rem;letter-spacing:0.2px">Cargando...</div>
  </div>
</div>`,
      localizado:`<div style="position:relative;min-height:190px;border:1px solid #d7dce2;border-radius:10px;overflow:hidden;background:#ffffff">
  <div style="padding:18px;color:#575756">Solo este bloque queda tapado. El resto de la pantalla sigue operativo.</div>
  <div class="cplus-inline-loading" aria-busy="true" style="position:absolute;inset:0;z-index:5;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.45)">
    <div class="spinner-border text-light" style="width:2.5rem;height:2.5rem" role="status" aria-hidden="true"></div>
  </div>
</div>`
    },
    snippet:`<!-- No se escribe HTML en la vista: el overlay lo crea y lo destruye CplusLoading. -->
<script>
  // 1. Pantalla completa manual. SIEMPRE emparejar show/hide (conteo de referencias).
  CplusLoading.show('Cargando…');
  fetch(url).finally(function () { CplusLoading.hide(); });

  // 2. Pantalla completa envolviendo una promesa: hide() automático en éxito y en error.
  CplusLoading.during(fetch(url), 'Guardando…');

  // 3. Reset duro (navegación, beforeunload): apaga aunque el contador siga en 2 o 3.
  CplusLoading.hideAll();

  // 4. Localizado sobre un contenedor. done() REMUEVE el nodo; hay timeout de seguridad.
  var handle = CplusLoading.overlayOn(document.querySelector('.table-responsive'), { timeoutMs: 4000 });
  handle.done();
</script>

<!-- Markup que genera CplusLoading.show(). Referencia: no copiarlo a una vista. -->
<div id="cplus-loading-overlay" role="alert" aria-busy="true" style="position:fixed;inset:0;z-index:20000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;background:rgba(15,23,42,0.55);backdrop-filter:blur(2px)">
  <div class="spinner-border text-light" style="width:3rem;height:3rem;border-width:0.3em" role="status" aria-hidden="true"></div>
  <div class="cplus-loading__msg" style="color:#fff;font-weight:600;font-size:1.05rem;letter-spacing:0.2px">Cargando...</div>
</div>

<!-- Markup que genera CplusLoading.overlayOn(elemento). Referencia. -->
<div class="cplus-inline-loading" aria-busy="true" style="position:absolute;inset:0;z-index:5;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.45)">
  <div class="spinner-border text-light" style="width:2.5rem;height:2.5rem" role="status" aria-hidden="true"></div>
</div>`
  },
  {
    id:"estado-vacio",
    catalogExamples: ["opciones-acordeon"],
    implementations: [
      { module: "Embalajes", agregar: 106, file: "cplus/js/core/datatable-defaults.js", detail: "Textos literales emptyTable y zeroRecords que comparten todas las tablas cplus (líneas 6 y 14)" },
      { module: "Usuarios", agregar: 105, file: "cplus/js/lib/GrincDataTable.js", detail: "La factory inyecta CplusDataTableDefaults.language en cada tabla que construye (líneas 425-428)" },
      { module: "Embalajes", agregar: 106, file: "cplus/views/mostrarEmbalajes.php", detail: "Tabla informe que pinta la fila dataTables_empty cuando el BFF no devuelve registros (líneas 243-247)" },
      { module: "Líneas de negocio", agregar: 120, file: "cplus/js/entities/lineas_negocio/datatable.js", detail: "gc-empty-accordion-note para lista vacía y la misma clase con text-danger para error (líneas 267-271 y 281)" },
      { module: "Roles", agregar: 124, file: "cplus/js/lib/RbacPermissionMatrix.js", detail: "gc-empty-accordion-note cuando un módulo del acordeón RBAC no tiene permisos configurados (líneas 419-423)" },
    ],
    group:"Feedback",
    name:"Estado vacío",
    description:"Cómo se comunica que no hay nada que mostrar. Hay dos formas productivas: la fila que pinta DataTables con los textos de datatable-defaults.js, y la nota gc-empty-accordion-note en bloques y acordeones.",
    use:"En tablas no se escribe nada: inicializar por GrincDataTable, que hereda los textos en español. En bloques, acordeones y paneles rellenados por JavaScript, pintar un p.gc-empty-accordion-note que diga qué falta y cómo crearlo; con text-danger, el error de carga.",
    avoid:"No inventar textos propios para la tabla vacía: son globales y cambiarlos rompe la consistencia. No dejar el contenedor en blanco ni con el placeholder de carga. No usar modal ni toast.",
    deps:"Bootstrap CSS. Tablas: DataTables BS5 del bundle cplus-vendor.bundle.min.js, datatable-defaults.js y GrincDataTable.js. Bloques: gc-empty-accordion-note de cplus/scss/_gc-accordion.scss.",
    verified: true,
    accessibility:"La fila vacía es una fila real del tbody: el lector de pantalla la lee sin aria adicional. La nota de bloque es texto visible, no solo un icono. Si el contenedor se rellena por JavaScript, sustituir el placeholder de carga por la nota en el mismo nodo.",
    variants:[
      {
        name:"Tabla sin registros",
        description:"La entidad no tiene ni un registro: el listado se ve igual y solo cambia el cuerpo, una celda dataTables_empty a todo el ancho con el texto de emptyTable.",
        preview:`<section class="gc-table-listado-preview">
  <section class="erp-card table-card cplus-v2-card">
    <div class="table-toolbar">
      <h2 class="card-title">Embalajes<span class="text-muted cplus-shell-count"></span></h2>
      <div class="table-toolbar-actions">
        <div class="dataTables_filter">
          <label><input type="search" placeholder="Buscar..." aria-label="Buscar en la tabla"></label>
        </div>
        <button type="button" class="erp-btn erp-btn-excel table-tool-btn" data-cplus-excel="../../cplus/bff/shared/export-excel.php?entity=embalajes" title="Exportar a Excel">
          <i class="bi bi-file-earmark-excel-fill"></i> Exportar
        </button>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-bordered table-sm dataTable standard-table" style="width:100%">
        <thead>
          <tr>
            <th class="table-actions">Acciones</th>
            <th class="table-id">ID</th>
            <th class="table-nombre"><span class="th-content"><span class="th-title">Nombre</span><button class="column-filter-btn" type="button" data-column="2" data-label="Nombre" data-type="text" aria-expanded="false" aria-label="Filtrar Nombre"><i class="bi bi-funnel"></i></button></span></th>
            <th class="table-codigo"><span class="th-content"><span class="th-title">Código</span><button class="column-filter-btn" type="button" data-column="3" data-label="Código" data-type="text" aria-expanded="false" aria-label="Filtrar Código"><i class="bi bi-funnel"></i></button></span></th>
            <th class="table-estado"><span class="th-content"><span class="th-title">Estado</span><button class="column-filter-btn" type="button" data-column="4" data-label="Estado" data-type="select" aria-expanded="false" aria-label="Filtrar Estado"><i class="bi bi-funnel"></i></button></span></th>
            <th class="table-fecha">Fecha ingreso</th>
            <th class="table-descripcion">Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="dataTables_empty" colspan="7">No hay datos disponibles</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-footer">
      <span class="cplus-shell-range">Mostrando 0 a 0 de 0 registros</span>
      <div class="pagination" role="navigation" aria-label="Paginación">
        <button class="page-btn active" disabled>1</button>
      </div>
    </div>
  </section>
</section>`,
        snippet:`<!-- La fila vacía no se escribe: la emite DataTables cuando el body llega sin filas. -->
<div class="table-responsive">
  <table id="informe" class="table table-bordered table-sm" style="width:100%">
    <!-- thead generado por GrincDataTable (buildHead) -->
  </table>
</div>

<!-- Fila que emite DataTables. Referencia, no copiarla a una vista: -->
<tr><td class="dataTables_empty" colspan="7">No hay datos disponibles</td></tr>`
      },
      {
        name:"Tabla sin coincidencias",
        description:"Hay registros pero el filtro no devolvió ninguno: texto de zeroRecords, el buscador conserva lo escrito y el pie añade el total sin filtrar.",
        preview:`<section class="gc-table-listado-preview">
  <section class="erp-card table-card cplus-v2-card">
    <div class="table-toolbar">
      <h2 class="card-title">Embalajes<span class="text-muted cplus-shell-count"></span></h2>
      <div class="table-toolbar-actions">
        <div class="dataTables_filter">
          <label><input type="search" placeholder="Buscar..." aria-label="Buscar en la tabla" value="caneca azul"></label>
        </div>
        <button type="button" class="erp-btn erp-btn-excel table-tool-btn" data-cplus-excel="../../cplus/bff/shared/export-excel.php?entity=embalajes" title="Exportar a Excel">
          <i class="bi bi-file-earmark-excel-fill"></i> Exportar
        </button>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-bordered table-sm dataTable standard-table" style="width:100%">
        <thead>
          <tr>
            <th class="table-actions">Acciones</th>
            <th class="table-id">ID</th>
            <th class="table-nombre"><span class="th-content"><span class="th-title">Nombre</span><button class="column-filter-btn" type="button" data-column="2" data-label="Nombre" data-type="text" aria-expanded="false" aria-label="Filtrar Nombre"><i class="bi bi-funnel"></i></button></span></th>
            <th class="table-codigo"><span class="th-content"><span class="th-title">Código</span><button class="column-filter-btn" type="button" data-column="3" data-label="Código" data-type="text" aria-expanded="false" aria-label="Filtrar Código"><i class="bi bi-funnel"></i></button></span></th>
            <th class="table-estado"><span class="th-content"><span class="th-title">Estado</span><button class="column-filter-btn" type="button" data-column="4" data-label="Estado" data-type="select" aria-expanded="false" aria-label="Filtrar Estado"><i class="bi bi-funnel"></i></button></span></th>
            <th class="table-fecha">Fecha ingreso</th>
            <th class="table-descripcion">Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="dataTables_empty" colspan="7">No se encontraron registros</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-footer">
      <span class="cplus-shell-range">Mostrando 0 a 0 de 0 registros (filtrado de 3 registros totales)</span>
      <div class="pagination" role="navigation" aria-label="Paginación">
        <button class="page-btn active" disabled>1</button>
      </div>
    </div>
  </section>
</section>`,
        snippet:`<!-- Mismo listado: este estado no tiene markup propio. -->
<!-- Textos en window.CplusDataTableDefaults.language (cplus/js/core/datatable-defaults.js): -->
<!--   emptyTable:   No hay datos disponibles       -> la entidad no tiene registros -->
<!--   zeroRecords:  No se encontraron registros    -> hay registros, el filtro no devolvió ninguno -->
<!--   infoEmpty:    Mostrando 0 a 0 de 0 registros -->
<!--   infoFiltered: (filtrado de _MAX_ registros totales) -->
<!-- GrincDataTable.init los hereda solo: no redefinir language por entidad. -->
<tr><td class="dataTables_empty" colspan="7">No se encontraron registros</td></tr>`
      },
      {
        name:"Bloque o acordeón vacío",
        description:"La nota gc-empty-accordion-note dentro de un acordeón o de cualquier contenedor rellenado por JavaScript: lista vacía, módulo sin permisos y, con text-danger, error de carga.",
        preview:`<section>
  <div class="gc-business-unit-body">
    <p class="gc-empty-accordion-note">No hay unidades de negocio registradas.</p>
  </div>
  <div class="gc-business-unit-body">
    <p class="gc-empty-accordion-note">Este módulo no tiene permisos configurados.</p>
  </div>
  <div class="gc-business-unit-body">
    <p class="gc-empty-accordion-note text-danger">No se pudo cargar el listado de unidades de negocio.</p>
  </div>
</section>`,
        snippet:`<!-- Lista vacía dentro del cuerpo de un acordeón -->
<div class="gc-business-unit-body">
  <p class="gc-empty-accordion-note">No hay unidades de negocio registradas.</p>
</div>

<!-- Error de carga: misma nota + text-danger de Bootstrap -->
<div class="gc-business-unit-body">
  <p class="gc-empty-accordion-note text-danger">No se pudo cargar el listado de unidades de negocio.</p>
</div>

<script>
  // Patrón real (cplus/js/entities/lineas_negocio/datatable.js:267-271):
  // el mismo contenedor pasa de placeholder de carga a nota vacía o a nota de error.
  if (!units.length) {
    $c.html('<p class="gc-empty-accordion-note">No hay unidades de negocio registradas.</p>');
  }
</script>`
      },
      {
        name:"PROPUESTA — Bloque genérico (sin instancia productiva)",
        description:"Propuesta para pantallas que no son tabla ni acordeón (paneles de detalle, resúmenes, pestañas). Reutiliza gc-empty-accordion-note con el icono y la fila de gc-accordion-loading. Sin instancia productiva: el sello de verificado no cubre esta variante.",
        preview:`<section>
  <div class="gc-empty-accordion-note" style="display:flex;align-items:center;gap:10px">
    <i class="bi bi-info-circle" aria-hidden="true"></i>
    <span>Aún no hay documentos adjuntos para este registro.</span>
  </div>
</section>`,
        snippet:`<!-- PROPUESTA: sin instancia productiva en cplus a la fecha de este catálogo. -->
<!-- Reutiliza gc-empty-accordion-note; el flex/gap replica gc-accordion-loading. -->
<div class="gc-empty-accordion-note" style="display:flex;align-items:center;gap:10px">
  <i class="bi bi-info-circle" aria-hidden="true"></i>
  <span>Aún no hay documentos adjuntos para este registro.</span>
</div>`
      }
    ],
    snippet:`<!-- Tabla: la fila vacía la emite DataTables, no se escribe en la vista. -->
<tr><td valign="top" colspan="5" class="dataTables_empty">No hay datos disponibles</td></tr>

<!-- Bloque o acordeón: nota visible en el mismo contenedor que se rellena por JavaScript. -->
<div class="gc-business-unit-body">
  <p class="gc-empty-accordion-note">No hay unidades de negocio registradas.</p>
</div>`
  },
  {
    id:"encabezado-modulo",
    catalogExamples: ["encabezado-formulario","badge-estado","opciones-acordeon"],
    implementations: [
      { module: "Embalajes", agregar: 106, file: "cplus/views/mostrarEmbalajes.php", detail: "Listado canónico: $phVariante 'listado', icono bi-box-seam y $phAcciones con el Nuevo primario gc-page-header__new-btn, omitido si no hay permiso de crear (líneas 115-124)" },
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "Mismo patrón con bi-people-fill; el botón Nuevo se autooculta al abrir el formulario (líneas 243-255)" },
      { module: "Configuraciones del sistema", agregar: 133, file: "cplus/views/mostrarConfiguracionesSistema.php", detail: "Variante solo título: la vista no define $phAcciones y el parcial omite la columna lateral completa (líneas 115-121)" },
      { module: "Unidades de negocio / Líneas de servicio", agregar: 120, file: "cplus/views/mostrarLineasNegocio.php", detail: "Con acción secundaria: $phAcciones concatena el Nuevo primario y el Volver erp-btn-secondary según el modo, y pasa $subtitulo solo en el listado (líneas 150-172)" },
    ],
    group:"Organización",
    name:"Encabezado de página (listado)",
    description:"Encabezado único de pantalla gc-page-header con el modificador --table-simple: h1 con icono y descripción a la izquierda y las acciones globales del módulo (Nuevo, Volver) dentro del propio encabezado, con la columna lateral encogida a su contenido. Es el primer bloque de las vistas cplus, antes de la card de filtros y la tabla.",
    use:"Primer bloque de una vista de listado cplus (mostrarXxx.php). La vista define $titulo, $subtitulo, $phVariante = 'listado' y $phIcono, arma $phAcciones con el enlace Nuevo (erp-btn erp-btn-primary gc-page-header__new-btn) e incluye el parcial compartido cplus/views/partials/page-head.php. En 'listado' el parcial nunca pinta metadatos de auditoría y aplica --table-simple por sí solo.",
    avoid:"No escribir module-header, section-title ni module-actions nuevos: los reemplazó gc-page-header el 2026-08-10 y sobreviven solo en vistas aún no migradas (Informe general, Parafiscales, Tutoriales y el listado de Declaraciones). No usar gc-module-header, gc-module-title ni gc-module-btn, y no declarar dos encabezados con título en la misma pantalla.",
    deps:"Bootstrap Icons y la hoja compilada cplus/css/main.css (fuente cplus/scss/_gc-page-header.scss). No necesita JavaScript propio. En el visor, grinclic-forms.css.",
    verified: true,
    accessibility:"El h1 del encabezado debe ser el único h1 de la vista; el header lo referencia con aria-labelledby y el icono bi-* va con aria-hidden=\"true\". Las acciones se agrupan con role=\"group\" y aria-label \"Acciones principales\". El botón Nuevo es un enlace con onclick: mantén el texto visible junto al icono.",
    note:"data-cplus-skip-header=\"1\" sigue declarado en el section.standard-screen por convención, pero el shell lo lee solo en document.body: lo que evita la doble inyección es el encabezado ya presente en la vista. El CTA Nuevo se realza con <code>gc-page-header__new-btn</code> (52px de alto mínimo). En pantallas que montan listado y formulario, el parcial numera el id del título por include.",
    variants:[
      {
        name:"Título más botón Nuevo (canónico)",
        description:"La forma estándar del listado: h1 con icono y descripción a la izquierda y el botón primario Nuevo, realzado con gc-page-header__new-btn, dentro de las acciones del encabezado.",
        preview:`<header class="gc-page-header gc-page-header--table-simple" aria-labelledby="gc-page-header-title-list-demo">
  <div class="gc-page-header__layout">
    <div class="gc-page-header__heading">
      <h1 class="gc-page-header__title" id="gc-page-header-title-list-demo">
        <i class="bi bi-box-seam gc-page-header__title-icon" aria-hidden="true"></i>
        <span>Tipo de embalaje</span>
      </h1>
      <p class="gc-page-header__desc">Nombre del embalaje, capacidad, unidad de medida y estado.</p>
    </div>
    <aside class="gc-page-header__side">
      <div class="gc-page-header__actions" role="group" aria-label="Acciones principales">
        <a href="#" class="erp-btn erp-btn-primary gc-page-header__new-btn" onclick="return false;"><i class="bi bi-plus-lg"></i><span>Nuevo</span></a>
      </div>
    </aside>
  </div>
</header>`,
        snippet:`<section class="standard-screen container" data-cplus-skip-header="1">

    <!-- Encabezado único de pantalla (título + botón Nuevo) — cplus/views/partials/page-head.php -->
    <?php
    $phVariante = 'listado';
    $phIcono    = 'bi-box-seam';
    $phAcciones = (empty($actualizar) && $canCreate)
        ? '<a href="#" class="erp-btn erp-btn-primary gc-page-header__new-btn" onclick="mostrar(); return false;">'
            . '<i class="bi bi-plus-lg"></i><span>Nuevo</span></a>'
        : '';
    include 'cplus/views/partials/page-head.php';
    ?>`
      },
      {
        name:"Solo título",
        description:"Cuando el módulo no crea registros la vista no define $phAcciones y el parcial omite la columna lateral completa: solo el h1 con su icono.",
        preview:`<header class="gc-page-header gc-page-header--table-simple" aria-labelledby="gc-page-header-title-solo-demo">
  <div class="gc-page-header__layout">
    <div class="gc-page-header__heading">
      <h1 class="gc-page-header__title" id="gc-page-header-title-solo-demo">
        <i class="bi bi-gear-fill gc-page-header__title-icon" aria-hidden="true"></i>
        <span>Configuraciones del sistema</span>
      </h1>
    </div>
  </div>
</header>`,
        snippet:`<!-- Encabezado único de pantalla — cplus/views/partials/page-head.php -->
<?php
$titulo     = 'Configuraciones del sistema';
$phVariante = 'listado';
$phIcono    = 'bi-gear-fill';
include 'cplus/views/partials/page-head.php';
?>`
      },
      {
        name:"Con acción secundaria",
        description:"En vistas que abren detalle o formulario a página completa, $phAcciones concatena un erp-btn-secondary de retorno junto al Nuevo primario.",
        preview:`<header class="gc-page-header gc-page-header--table-simple" aria-labelledby="gc-page-header-title-sec-demo">
  <div class="gc-page-header__layout">
    <div class="gc-page-header__heading">
      <h1 class="gc-page-header__title" id="gc-page-header-title-sec-demo">
        <i class="bi bi-diagram-3 gc-page-header__title-icon" aria-hidden="true"></i>
        <span>Unidades de negocio / Líneas de servicio</span>
      </h1>
      <p class="gc-page-header__desc">Administra las unidades de negocio y sus líneas de servicio.</p>
    </div>
    <aside class="gc-page-header__side">
      <div class="gc-page-header__actions" role="group" aria-label="Acciones principales">
        <a href="#" class="erp-btn erp-btn-primary gc-page-header__new-btn" onclick="return false;"><i class="bi bi-plus-lg"></i><span>Nuevo</span></a>
        <a href="#" class="erp-btn erp-btn-secondary" onclick="return false;"><i class="bi bi-arrow-left"></i> Volver al listado</a>
      </div>
    </aside>
  </div>
</header>`,
        snippet:`<?php
if ($isView && ! $esLinea) {
    $phAcciones .= '<a href="incluir.php?agregar=120" class="erp-btn erp-btn-secondary">'
        . '<i class="bi bi-arrow-left"></i> Volver al listado</a>';
} elseif ($isLineCreate) {
    $phAcciones .= '<a href="incluir.php?agregar=120" class="erp-btn erp-btn-secondary">'
        . '<i class="bi bi-arrow-left"></i> Volver a unidades</a>';
}

$titulo     = $pageTitulo;
$subtitulo  = $isListOnly ? 'Administra las unidades de negocio y sus líneas de servicio.' : '';
$phVariante = 'listado';
$phIcono    = 'bi-diagram-3';
include 'cplus/views/partials/page-head.php';
?>`
      }
    ],
    snippet:`<section class="standard-screen container" data-cplus-skip-header="1">

    <!-- Encabezado único de pantalla (título + botón Nuevo) — cplus/views/partials/page-head.php -->
    <?php
    $phVariante = 'listado';
    $phIcono    = 'bi-box-seam';
    $phAcciones = (empty($actualizar) && $canCreate)
        ? '<a href="#" class="erp-btn erp-btn-primary gc-page-header__new-btn" onclick="mostrar(); return false;">'
            . '<i class="bi bi-plus-lg"></i><span>Nuevo</span></a>'
        : '';
    include 'cplus/views/partials/page-head.php';
    ?>

</section>`
  },
  {
    id:"badge-estado",
    catalogExamples: ["encabezado-modulo","alertas-librerias"],
    implementations: [
      { module: "Embalajes", agregar: 106, file: "cplus/js/entities/embalajes/datatable.js", detail: "Columna declarativa type: 'badge' (línea 74) — el HTML lo pinta el render centralizado INTERNO de GrincDataTable (función privada renderBadge, cplus/js/lib/GrincDataTable.js:261-270, cableada en :324). No es API pública: window.GrincDataTable solo expone init (GrincDataTable.js:474)" },
      { module: "Clasificación interna", agregar: 122, file: "cplus/js/entities/clasificaciones/datatable.js", detail: "El mismo badge escrito a mano en el render de la columna Estado (líneas 28-34). Es el patrón MAYORITARIO: 15 entidades lo escriben así frente a 7 declarativas" },
      { module: "Usuarios", agregar: 105, file: "cplus/js/entities/usuarios/form-manager.js", detail: "Única píldora erp-badge de un módulo validado: renderParafiscalItem compone span.erp-badge con erp-badge-danger o erp-badge-success y el texto Vencida/Vigente, fuera de la tabla, dentro del bloque de documentos del formulario (líneas 567-574)" },
      { module: "Categorías del declarado", agregar: 115, file: "cplus/js/entities/categorias_declarado/datatable.js", detail: "El badge escrito a mano en el render de la columna Estado, igual que Clasificación interna: badge bg-success / badge bg-secondary (líneas 81-82)" },
      { module: "Roles", agregar: 124, file: "cplus/js/entities/roles/datatable.js", detail: "Columna declarativa type: 'badge' sobre el campo status_label, la forma a la que el catálogo quiere converger (línea 41)" },
    ],
    group:"Organización",
    name:"Badge de estado",
    description:"Píldora pastel que comunica el estado de un registro. En listados es un badge de Bootstrap (badge bg-success / badge bg-secondary) al que el SCSS de tablas da forma de píldora dentro de .dataTable o #informe. Fuera de la tabla, la misma píldora es erp-badge.",
    use:"En un listado, declarar la columna con type: 'badge' y dejar que la pinte el render centralizado de GrincDataTable; es el objetivo al que converger. Fuera de la tabla usar erp-badge con erp-badge-success o erp-badge-danger: verde para el estado favorable y rojo para el desfavorable.",
    avoid:"No usar grinc-badge ni gc-badge: existen en el SCSS pero sin consumidores y no son la píldora V2. table-estado es el ancho de la columna, no un badge. Fuera de .dataTable o #informe, bg-success queda con el verde crudo de Bootstrap: ahí va erp-badge.",
    deps:"Listado: Bootstrap CSS, cplus/css/main.css y cplus/js/lib/GrincDataTable.js. erp-badge: solo cplus/css/main.css.",
    verified: true,
    accessibility:"El badge es texto, no solo color: la palabra Activo o Inactivo debe estar siempre presente. Si se rellena por JavaScript conviene declararlo con aria-live='polite'; es una mejora propuesta, ninguna instancia validada lo emite hoy. No es un control: no es clicable ni recibe foco.",
    note:"Trampa verificada: en la tabla, Inactivo se marca con <code>bg-secondary</code>, pero el SCSS le aplica el pastel rojo (--screen-danger-bg): la clase dice secundario y el color dice peligro. <strong>Divergencia:</strong> no hay píldora V2 para un estado «en curso»; solo existen erp-badge-success y erp-badge-danger.",
    variants:[
      {
        name:"Estado en listado (Activo / Inactivo)",
        description:"El badge canónico de las tablas cplus: lo emite GrincDataTable cuando la columna declara type: 'badge', y solo es píldora dentro de .dataTable o #informe. renderBadge es privado; la API pública es GrincDataTable.init.",
        preview:`<table class="dataTable">
  <tbody>
    <tr>
      <td>Ruta urbana</td>
      <td class="table-estado"><span class="badge bg-success">Activo</span></td>
    </tr>
    <tr>
      <td>Barrido y limpieza</td>
      <td class="table-estado"><span class="badge bg-secondary">Inactivo</span></td>
    </tr>
  </tbody>
</table>`,
        snippet:`<!-- Forma recomendada: declarar la columna y dejar que GrincDataTable pinte el badge.
     type: 'badge' añade la clase table-estado y el render centralizado renderBadge().
{ data: 'activo', title: 'Estado', type: 'badge', className: 'table-estado' }
-->

<!-- HTML resultante (solo se ve como píldora dentro de .dataTable o #informe): -->
<span class="badge bg-success">Activo</span>
<span class="badge bg-secondary">Inactivo</span>`
      },
      {
        name:"Píldora fuera de la tabla (erp-badge)",
        description:"Misma píldora para formularios, resúmenes y estados que no son Activo/Inactivo, como Vigente/Vencida en la lista de documentos del formulario de Usuarios.",
        preview:`<div class="gc-badge-estado-demo">
  <span class="erp-badge erp-badge-success">Vigente</span>
  <span class="erp-badge erp-badge-danger">Vencida</span>
</div>`,
        snippet:`<span class="erp-badge erp-badge-success">Vigente</span>
<span class="erp-badge erp-badge-danger">Vencida</span>

<!-- Span compuesto por el JS del formulario (patrón de Usuarios,
     cplus/js/entities/usuarios/form-manager.js:567-574): el script arma el nodo
     completo alternando erp-badge-success / erp-badge-danger.
     El id va genérico: no acoplarlo al selector de un módulo. -->
<!-- aria-live: mejora propuesta, ninguna instancia validada lo emite hoy. -->
<span id="estadoBadge" class="erp-badge" aria-live="polite"></span>`
      }
    ],
    snippet:`<!-- En listado: el badge lo pinta GrincDataTable a partir de la columna declarativa.
{ data: 'activo', title: 'Estado', type: 'badge', className: 'table-estado' }
-->
<span class="badge bg-success">Activo</span>
<span class="badge bg-secondary">Inactivo</span>

<!-- Fuera de la tabla (formularios, resúmenes): misma píldora con erp-badge. -->
<span class="erp-badge erp-badge-success">Vigente</span>
<span class="erp-badge erp-badge-danger">Vencida</span>`
  },
  {
    id:"caja-informativa",
    catalogExamples: ["encabezado-formulario","alertas-librerias","gc-formulario-elementos-chequeo"],
    implementations: [
      { module: "Embalajes", agregar: 106, file: "cplus/views/mostrarEmbalajes.php", detail: "Forma mayoritaria: h4 + p justo después del include de page-head.php, dentro del gate empty($ver) (líneas 148-153)" },
      { module: "Manejo del residuo", agregar: 116, file: "cplus/views/mostrarManejoResiduo.php", detail: "Forma corta solo h4 tras el include de page-head.php, dentro del gate empty($ver) (líneas 148-152)" },
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "Dos cajas en la misma vista: la de cabecera con h4 + p tras el include de page-head.php (líneas 271-275) y la de \"Información adicional\", solo h4, que abre el bloque #optadd" },
      { module: "Elementos de chequeo", agregar: 117, file: "cplus/views/mostrarElementosChequeo.php", detail: "Forma corta en una sola línea, solo h4 y sin párrafo: div.gc-info-box con h4 «Información del elemento de chequeo» (línea 91). La misma forma corta está en mostrarClasificaciones.php:91, mostrarEstadosRecorrido.php:91 y mostrarDestinoAliado.php:91" },
      { module: "Proveedores", agregar: 128, file: "cplus/views/mostrarProveedores.php", detail: "Única instancia sin el gate empty($ver): también se pinta en modo Ver (líneas 58-61)" },
    ],
    group:"Organización",
    name:"Caja informativa de formulario",
    description:"Callout estático que abre un formulario y explica en una frase qué se va a registrar. Es texto fijo escrito en la vista, no una respuesta del sistema: nunca cambia. Va después del encabezado de formulario y antes de la primera fila de campos.",
    use:"Usarla como primer bloque dentro de form-card, justo tras el include de cplus/views/partials/page-head.php, para decir de qué registro se trata. La forma mayoritaria es un h4 con la entidad y un p con la instrucción. Envolverla en el gate empty($ver) para que no salga en modo Ver.",
    avoid:"No usarla para feedback: los mensajes que responden a una acción son de CplusAlerts. Para la ayuda de un campo está gc-help. Sin botones, sin JavaScript y sin repetir el título del encabezado de página gc-page-header.",
    deps:"Bootstrap CSS. La clase se define en cplus/scss/_gc-forms.scss y se compila a cplus/css/main.css. No necesita JavaScript.",
    verified: true,
    accessibility:"Es texto estático: no lleva role=\"alert\" ni aria-live, porque anunciarlo como alerta interrumpiría al lector de pantalla con información que ya estaba en la página. Su título es h4 y el del encabezado es h2, así que se salta el nivel h3; si la vista añade luego sus propios h3, la jerarquía queda desordenada. No es un control: no debe recibir foco. Contraste del cuerpo: 9,7:1.",
    note:"El modificador <code>is-open</code> es inerte: la regla base ya declara <code>display:block</code> y <code>.gc-info-box.is-open</code> repite lo mismo. El bloque nació como desplegable en formularios_v2, pero ese toggle no se adoptó y aquí se usa siempre como callout estático visible.",
    variants:[
      {
        name:"Título y párrafo",
        description:"Forma mayoritaria: 12 de las 20 instancias productivas. El h4 nombra la entidad y el p da la instrucción. Es la que se copia por defecto.",
        preview:`<section>
  <div class="gc-info-box">
    <h4>Información sobre el tipo de embalaje</h4>
    <p>Complete los campos requeridos para registrar un nuevo tipo de embalaje.</p>
  </div>
</section>`,
        snippet:`<?php if (empty($ver)) { ?>
    <div class="gc-info-box">
        <h4>Información sobre el tipo de embalaje</h4>
        <p>Complete los campos requeridos para registrar un nuevo tipo de embalaje.</p>
    </div>
<?php } ?>`
      },
      {
        name:"Solo título",
        description:"Forma corta: 8 de las 20 instancias. Se usa cuando el nombre de la entidad basta, o cuando la caja solo separa un bloque interno, como «Información adicional» en Usuarios.",
        preview:`<section>
  <div class="gc-info-box"><h4>Información del elemento de chequeo</h4></div>
  <div class="gc-info-box"><h4>Información adicional</h4></div>
</section>`,
        snippet:`<?php if (empty($ver)) { ?>
    <div class="gc-info-box"><h4>Información del elemento de chequeo</h4></div>
<?php } ?>`
      },
      {
        name:"SIN USO PRODUCTIVO — Modificador compacto",
        description:"El modificador gc-info-box--compact existe en el SCSS y viaja compilado, pero ninguna vista de cplus lo usa: reduce relleno, margen superior y tamaño de letra. El sello de verificado de la entrada no cubre esta variante.",
        preview:`<section>
  <div class="gc-info-box gc-info-box--compact">
    <h4>Información sobre el tipo de vehículo</h4>
    <p>Complete los campos requeridos para registrar un nuevo tipo de vehículo.</p>
  </div>
</section>`,
        snippet:`<!-- SIN USO PRODUCTIVO: cero instancias en cplus/views a 2026-08-05. -->
<!-- Definición: cplus/scss/_gc-forms.scss:467-473. Antes de usarlo, acordar si el modificador se adopta o se borra. -->
<div class="gc-info-box gc-info-box--compact">
    <h4>Información sobre el tipo de vehículo</h4>
    <p>Complete los campos requeridos para registrar un nuevo tipo de vehículo.</p>
</div>`
      }
    ],
    snippet:`<div id="adicionar" class="form-card">
    <form name="formularioRegistrar" id="formularioRegistrar" method="post" autocomplete="off">

        <?php include 'cplus/views/partials/page-head.php'; ?>

        <?php if (empty($ver)) { ?>
            <div class="gc-info-box">
                <h4>Información sobre el tipo de embalaje</h4>
                <p>Complete los campos requeridos para registrar un nuevo tipo de embalaje.</p>
            </div>
        <?php } ?>

        <div class="row g-3">
            <!-- campos del formulario -->
        </div>
    </form>
</div>`
  },
  {
    id:"alerta-estatica",
    catalogExamples: ["alertas-librerias","estado-vacio","gc-formulario-roles"],
    implementations: [
      { module: "Roles", agregar: 124, file: "cplus/views/mostrarRoles.php", detail: "La vista más densa del patrón: 5 alertas estáticas en un solo formulario — info de modo lectura (línea 88), warning de rol multimódulo (144), danger de validación que arranca oculto con style display:none (151), success como pista de la matriz RBAC (175) y warning de catálogo vacío (201)" },
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "El ejemplo canónico de advertencia dentro de un formulario: alert-warning con role=alert, icono bi-info-circle y remate en strong, envuelto en row + col-md-12 y condicionado a que el usuario tenga trazabilidad (líneas 280-289)" },
      { module: "Residuos inventariables", agregar: 126, file: "cplus/views/mostrarResiduosInventariables.php", detail: "Corte por error de carga: echo de div.alert.alert-danger.m-4 con el mensaje y salida inmediata, sin emitir el resto del módulo (línea 124)" },
      { module: "Unidades de negocio / Líneas de servicio", agregar: 120, file: "cplus/views/mostrarLineasNegocio.php", detail: "Alerta de error del servidor escrita en la vista con role=alert y el mensaje escapado con cplus_e (línea 200)" },
    ],
    group:"Feedback",
    name:"Alerta estática en la vista",
    description:"Mensaje de bloque que la vista .php ya trae escrito cuando la página carga: el <code>div.alert.alert-*</code> de Bootstrap 5. Es feedback de contexto, no de reacción; ocupa sitio en el flujo y sigue ahí mientras la condición siga siendo cierta. El texto sale de variables PHP de la propia vista.",
    use:"Usarla cuando el mensaje describe el estado de la pantalla y sigue siendo cierto mientras el usuario la mira: permiso denegado, modo solo lectura, un registro que no cargó. También como contenedor que el JavaScript rellena o destapa después. El tono lo elige el significado: danger bloquea, warning condiciona, info encuadra el modo, success confirma un hecho ya presente.",
    avoid:"No usarla para el resultado de una acción (guardar, eliminar, exportar, un fallo de red): eso es CplusAlerts. No añadir botón de cierre: en producción ninguna alerta estática lleva alert-dismissible ni btn-close. No escribir CSS propio para .alert. No dejar el tono como único portador del significado. Y no copiar una alerta que el JavaScript destapa sin copiar también ese JavaScript.",
    deps:"Bootstrap 5 CSS, ya compilado en cplus/css/main.min.css, con los tonos sobrescritos en cplus/scss/_variables.scss. Iconos bootstrap-icons. No requiere JavaScript: CPlus no usa el plugin Alert de Bootstrap.",
    verified: true,
    accessibility:"Producción casi nunca declara rol. Criterio: si el mensaje ya está en el HTML al cargar, el rol no aporta nada; sí importa cuando el JavaScript la inserta, destapa o rellena después, con role=alert para lo urgente y role=status para lo informativo. El color no puede ser el único portador del significado: el texto debe decir por sí solo qué pasa. Si la alerta contiene controles, no lleva role=alert, porque interrumpe la lectura en cada cambio.",
    note:"<strong>No es la alerta de CplusAlerts.</strong> Si el mensaje describe el estado de la pantalla, es alerta estática; si describe el resultado de una acción, es el modal o el toast de <code>window.CplusAlerts</code>. Y si llega del servidor tras un redirect, <code>cplus/lib/flash.php</code> lo convierte en un modal de CplusAlerts. El icono es opcional y minoritario.",
    variants:[
      {
        name:"Peligro — alert-danger (12 de 24)",
        description:"El tono mayoritario, en dos formas reales: el corte por permisos, que se emite y hace return para que el módulo no se renderice, y el aviso de carga fallida dentro de una pantalla que sí se pinta.",
        preview:`<section>
  <p style="margin:0 0 8px;color:#575756;font-size:.9rem">Corte por permisos (5 vistas idénticas):</p>
  <section class="standard-screen container">
    <div class="alert alert-danger mt-4">
      <strong>Acceso denegado.</strong> No tiene los permisos para ingresar a esta funcionalidad.
    </div>
  </section>
  <p style="margin:20px 0 8px;color:#575756;font-size:.9rem">Registro que no se pudo cargar, dentro del formulario:</p>
  <div class="alert alert-danger" role="alert">No se pudo cargar el registro. Verifique que exista e intente de nuevo.</div>
  <p style="margin:20px 0 8px;color:#575756;font-size:.9rem">Contenedor de validación que arranca oculto y destapa el JavaScript:</p>
  <div id="module-validation-message" class="alert alert-danger">Debe seleccionar un módulo para el rol.</div>
</section>`,
        snippet:`<!-- 1. Corte por permisos. Bloque literal repetido en 5 vistas de cplus/views;
     hoy ninguna pertenece a un módulo validado, así que el catálogo lo documenta
     como patrón vigente de producción sin citarlas como ejemplo. -->
<section class="standard-screen container">
  <div class="alert alert-danger mt-4">
    <strong>Acceso denegado.</strong> No tiene los permisos para ingresar a esta funcionalidad.
  </div>
</section>

<!-- 2. Registro que no se pudo cargar (mostrarLineasNegocio.php:200).
     El texto sale de una variable PHP del request, ya escapada con cplus_e(). -->
<div class="alert alert-danger" role="alert">No se pudo cargar el registro. Verifique que exista e intente de nuevo.</div>

<!-- 3. Contenedor de validación vacío que el JS rellena y destapa
     (mostrarRoles.php:151). En producción arranca con style="display:none". -->
<div id="module-validation-message" class="alert alert-danger" style="display:none"></div>`
      },
      {
        name:"Advertencia — alert-warning (7 de 24)",
        description:"Regla de negocio que condiciona lo que el usuario puede hacer, sin ser un fallo técnico. Tres usos: aviso dentro del formulario, banner que destapa el JavaScript y contenedor que se rellena al abrir un modal.",
        preview:`<section>
  <p style="margin:0 0 8px;color:#575756;font-size:.9rem">Aviso dentro del formulario (el único con icono y strong):</p>
  <div class="row">
    <div class="col-md-12">
      <div class="alert alert-warning" role="alert">
        <strong><i class="bi bi-info-circle"></i> Advertencia:</strong>
        Este usuario tiene registros asociados, por lo tanto <strong>no se puede modificar el Rol ni el Cliente</strong> para mantener la integridad de los datos históricos del sistema.
      </div>
    </div>
  </div>
  <p style="margin:20px 0 8px;color:#575756;font-size:.9rem">Banner que nace oculto y lo destapa el JS:</p>
  <div class="alert alert-warning" role="alert">
    <i class="bi bi-exclamation-triangle me-1"></i>
    El servicio no está activo — avise al administrador.
  </div>
  <p style="margin:20px 0 8px;color:#575756;font-size:.9rem">Aviso compacto de regla de negocio (py-2 px-3 small):</p>
  <div class="alert alert-warning py-2 px-3 small mt-2" role="alert">Ya existe un registro con ese código en este tenant.</div>
</section>`,
        snippet:`<!-- 1. Aviso dentro del formulario (mostrarUsuarios.php:281-288).
     Único de los 24 que combina icono y strong de encabezado. -->
<div class="row">
  <div class="col-md-12">
    <div class="alert alert-warning" role="alert">
      <strong><i class="bi bi-info-circle"></i> Advertencia:</strong>
      Este usuario tiene registros asociados, por lo tanto <strong>no se puede modificar el Rol ni el Cliente</strong> para mantener la integridad de los datos históricos del sistema.
    </div>
  </div>
</div>

<!-- 2. Banner que el JS destapa quitando d-none. Patrón disponible: hoy ninguna
     instancia con role=alert + icono destapada por JS vive en un módulo validado. -->
<div id="healthBanner" class="alert alert-warning d-none" role="alert">
  <i class="bi bi-exclamation-triangle me-1"></i>
  El servicio no está activo — avise al administrador.
</div>

<!-- 3. Aviso que el JS rellena y destapa (mostrarRoles.php:151).
     Divergencia real: Roles oculta con style="display:none" inline, no con la
     utilidad d-none; recomendar d-none es una mejora propuesta del catálogo. -->
<div id="module-validation-message" class="alert alert-danger" style="display:none"></div>`
      },
      {
        name:"Información — alert-info (3 de 24)",
        description:"Explica en qué modo se está viendo la pantalla, o que un bloque no tiene contenido adicional. No anuncia problema ni éxito: solo encuadra lo que el usuario mira. Ninguna instancia lleva icono ni rol.",
        preview:`<section>
  <p style="margin:0 0 8px;color:#575756;font-size:.9rem">Modo lectura de un formulario:</p>
  <div class="alert alert-info">
    Está consultando este rol en modo lectura. Use el botón <strong>Editar</strong> en la tabla para habilitar los cambios.
  </div>
  <p style="margin:20px 0 8px;color:#575756;font-size:.9rem">Modo consulta por falta de permiso de modificación:</p>
  <div class="alert alert-info">
    Modo consulta: no tiene el permiso de modificación (<code>1a1</code>) sobre este módulo.
  </div>
</section>`,
        snippet:`<!-- 1. Modo lectura del formulario (mostrarRoles.php:88-90). -->
<div class="alert alert-info">
  Está consultando este rol en modo lectura. Use el botón <strong>Editar</strong> en la tabla para habilitar los cambios.
</div>

<!-- 2. Modo consulta por permiso ausente (mostrarDatos.php:287-289).
     El code del permiso se muestra literal dentro de code. -->
<div class="alert alert-info">
  Modo consulta: no tiene el permiso de modificación (<code>1a1</code>) sobre este módulo.
</div>`
      },
      {
        name:"Éxito — alert-success (2 de 24)",
        description:"El tono menos usado. No confirma una acción recién hecha, sino un hecho ya presente en el registro: un archivo adjunto, o una pista que acompaña un panel vacío. Para confirmar un guardado, el toast de CplusAlerts.",
        preview:`<section>
  <p style="margin:0 0 8px;color:#575756;font-size:.9rem">Archivo ya adjunto en el registro (único success con icono):</p>
  <div class="alert alert-success py-2 mb-0">
    <i class="bi bi-file-earmark-pdf"></i>
    Ficha de caracterización cargada: <strong>ficha_residuo_2026.pdf</strong>.
    Adjuntar un nuevo PDF la reemplaza.
  </div>
  <p style="margin:20px 0 8px;color:#575756;font-size:.9rem">Pista dentro del panel de la matriz RBAC:</p>
  <div class="tab-content">
    <div class="alert alert-success rbac-matrix__hint" id="rbac-matrix-hint">
      Seleccione uno o varios módulos para visualizar y ajustar los permisos disponibles.
    </div>
  </div>
</section>`,
        snippet:`<!-- 1. Alerta de confirmación con icono. Patrón disponible: hoy no hay instancia
     en un módulo validado (la única del árbol está en un módulo sin terminar).
     py-2 mb-0 lo aprieta para que quepa al pie del bloque de carga. -->
<div class="alert alert-success py-2 mb-0">
  <i class="bi bi-file-earmark-pdf"></i>
  Ficha de caracterización cargada: <strong>ficha_residuo_2026.pdf</strong>.
  Adjuntar un nuevo PDF la reemplaza.
</div>

<!-- 2. Pista de panel vacío (mostrarRoles.php:175-177).
     rbac-matrix__hint solo anula el margin-bottom (cplus/scss/_rbac-matrix.scss:56-58). -->
<div class="alert alert-success rbac-matrix__hint" id="rbac-matrix-hint">
  Seleccione uno o varios módulos para visualizar y ajustar los permisos disponibles.
</div>`
      }
    ],
    snippet:`<!-- Esqueleto del patrón. Solo dos clases: la base y el tono.
     Sin botón de cierre: alert-dismissible y data-bs-dismiss="alert"
     tienen 0 apariciones en todo cplus/. -->
<div class="alert alert-danger">
  <strong>Acceso denegado.</strong> No tiene los permisos para ingresar a esta funcionalidad.
</div>

<div class="alert alert-warning" role="alert">
  Este usuario tiene registros asociados, por lo tanto no se puede modificar el Rol ni el Cliente.
</div>

<div class="alert alert-info">
  Está consultando este registro en modo lectura.
</div>

<div class="alert alert-success py-2 mb-0">
  Ficha de caracterización cargada.
</div>

<!-- Cuando el JavaScript lo rellena o lo destapa después, sí conviene el rol:
     role="alert" para lo urgente, role="status" para lo informativo. -->
<div id="healthBanner" class="alert alert-warning d-none" role="alert"></div>`
  },
  {
    id:"filtros-columna",
    catalogExamples: ["tabla-listado","filtros-listado","boton"],
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/js/entities/usuarios/datatable.js", detail: "Referencia del patrón: cinco columnas con filter select — Módulo de acceso, Estado, Cliente, Rol y Asesor comercial — con sus filterOptions (líneas 104-114)" },
      { module: "Sucursales", agregar: 127, file: "cplus/js/entities/sucursales/datatable.js", detail: "Mezcla los dos tipos: Nombre e ID con filter text, y Código, Tipo, Estado y Clasificación interna con filter select (líneas 107-112)" },
      { module: "Roles", agregar: 124, file: "cplus/js/entities/roles/datatable.js", detail: "Columna Estado declarativa con type: 'badge' dentro del mismo bloque de columnas declarativas del listado (línea 41)" },
      { module: "Zonas", agregar: 118, file: "cplus/js/entities/zonas/datatable.js", detail: "Cuatro columnas select alimentadas por buildOptions sobre los filtros que devuelve el BFF (líneas 78-87)" },
      { module: "Residuos inventariables", agregar: 126, file: "cplus/js/entities/residuos_inventariables/datatable.js", detail: "Cinco columnas select consecutivas, el caso más denso del patrón (líneas 121-151)" }
    ],
    group:"Listados",
    name:"Filtros por columna (embudo)",
    description:"Filtro por columna en el encabezado de la tabla: cada columna filtrable muestra un embudo junto a su título y al pulsarlo se abre un popover único, colgado del body, que se reposiciona bajo el embudo activo.",
    use:"Para filtrar un listado por una columna concreta. No se escribe a mano: se declara en GrincDataTable.init con filter text o filter select, y filterOptions alimenta la lista del select. Para criterios que no son columna, usar la tarjeta de filtros de listado.",
    avoid:"No usar el filtro retirado del pie (th class filter o selectfilter en el tfoot): este embudo lo reemplaza. No escribir a mano el markup del embudo ni del popover, ni filtrar en el navegador: la tabla es serverSide.",
    deps:"main.css de CPlus (kit erp-btn y estilos de _datatables.scss) + bootstrap-icons + jQuery + DataTables + cplus/js/lib/GrincDataTable.js + cplus/js/core/column-filters.js.",
    verified: true,
    accessibility:"El embudo es un button con aria-label «Filtrar» más el título de la columna y alterna aria-expanded. El popover declara aria-hidden y al abrirse mueve el foco a su primer control; en el filtro de texto, Enter aplica. Limitación real: el popover cuelga del body, no declara role de diálogo ni devuelve el foco al embudo al cerrarse.",
    note:"El preview muestra el popover abierto para poder verlo; en producción es <code>position:fixed</code>, arranca oculto y solo aparece al pulsar el embudo.",
    variants:[
      {
        name:"Embudo en el encabezado",
        description:"Celda de encabezado de una columna filtrable: título y embudo dentro del mismo contenedor para que no se separen al ajustar anchos. Lo genera GrincDataTable.",
        preview:`<div class="gc-demo-colfilter">
  <table class="table dataTable" style="margin:0">
    <thead>
      <tr>
        <th><span class="th-content"><span class="th-title">Nombre</span></span></th>
        <th><span class="th-content"><span class="th-title">Módulo de acceso</span><button class="column-filter-btn" type="button" data-column="1" data-label="Módulo de acceso" data-type="select" aria-expanded="false" aria-label="Filtrar Módulo de acceso"><i class="bi bi-funnel"></i></button></span></th>
        <th><span class="th-content"><span class="th-title">Estado</span><button class="column-filter-btn is-active" type="button" data-column="2" data-label="Estado" data-type="select" aria-expanded="false" aria-label="Filtrar Estado"><i class="bi bi-funnel"></i></button></span></th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Ana Mendez</td><td>Logística</td><td>Activo</td></tr>
      <tr><td>Andrea Cabrera</td><td>Administrativo</td><td>Activo</td></tr>
    </tbody>
  </table>
</div>`,
        snippet:`<!-- Generado por GrincDataTable a partir de la config de columnas. No se escribe a mano. -->
<th>
  <span class="th-content">
    <span class="th-title">Módulo de acceso</span>
    <button class="column-filter-btn" type="button"
            data-column="1" data-label="Módulo de acceso" data-type="select"
            aria-expanded="false" aria-label="Filtrar Módulo de acceso">
      <i class="bi bi-funnel"></i>
    </button>
  </span>
</th>`
      },
      {
        name:"Popover de selección",
        description:"El de filter select. Subtítulo «Seleccione una opción» y lista que siempre empieza por Todos, equivalente a quitar el filtro.",
        preview:`<div class="gc-demo-colfilter">
  <div class="column-filter-popover is-open" aria-hidden="false">
    <div class="column-filter-popover-header"><strong>Módulo de acceso</strong><span>Seleccione una opción</span></div>
    <select class="column-filter-control" data-filter-select>
      <option value="">Todos</option>
      <option value="logistica">Logística</option>
      <option value="administrativo">Administrativo</option>
      <option value="cliente">Cliente</option>
    </select>
    <div class="column-filter-actions">
      <button class="erp-btn erp-btn-secondary" type="button" data-filter-clear>Limpiar</button>
      <button class="erp-btn erp-btn-secondary" type="button" data-filter-cancel>Cancelar</button>
      <button class="erp-btn erp-btn-primary" type="button" data-filter-apply>Aplicar</button>
    </div>
  </div>
</div>`,
        snippet:`<!-- Lo construye CplusColumnFilters dentro de #columnFilterPopover, único en el body. -->
<div class="column-filter-popover is-open" aria-hidden="false">
  <div class="column-filter-popover-header">
    <strong>Módulo de acceso</strong><span>Seleccione una opción</span>
  </div>
  <select class="column-filter-control" data-filter-select>
    <option value="">Todos</option>
    <option value="logistica">Logística</option>
  </select>
  <div class="column-filter-actions">
    <button class="erp-btn erp-btn-secondary" type="button" data-filter-clear>Limpiar</button>
    <button class="erp-btn erp-btn-secondary" type="button" data-filter-cancel>Cancelar</button>
    <button class="erp-btn erp-btn-primary" type="button" data-filter-apply>Aplicar</button>
  </div>
</div>`
      },
      {
        name:"Popover de texto",
        description:"El de filter text. Subtítulo «Búsqueda por texto»; el campo aplica también con Enter, sin pulsar Aplicar.",
        preview:`<div class="gc-demo-colfilter">
  <div class="column-filter-popover is-open" aria-hidden="false">
    <div class="column-filter-popover-header"><strong>Nombre</strong><span>Búsqueda por texto</span></div>
    <input class="column-filter-control" type="text" placeholder="Escriba para filtrar..." data-filter-text value="">
    <div class="column-filter-actions">
      <button class="erp-btn erp-btn-secondary" type="button" data-filter-clear>Limpiar</button>
      <button class="erp-btn erp-btn-secondary" type="button" data-filter-cancel>Cancelar</button>
      <button class="erp-btn erp-btn-primary" type="button" data-filter-apply>Aplicar</button>
    </div>
  </div>
</div>`,
        snippet:`<div class="column-filter-popover is-open" aria-hidden="false">
  <div class="column-filter-popover-header">
    <strong>Nombre</strong><span>Búsqueda por texto</span>
  </div>
  <input class="column-filter-control" type="text" placeholder="Escriba para filtrar..." data-filter-text value="">
  <div class="column-filter-actions">
    <button class="erp-btn erp-btn-secondary" type="button" data-filter-clear>Limpiar</button>
    <button class="erp-btn erp-btn-secondary" type="button" data-filter-cancel>Cancelar</button>
    <button class="erp-btn erp-btn-primary" type="button" data-filter-apply>Aplicar</button>
  </div>
</div>`
      },
      {
        name:"Declaración en JavaScript",
        description:"El origen de todo lo anterior: en la práctica solo se escribe esto. GrincDataTable.init pasa a CplusColumnFilters las columnas que declaren filter.",
        preview:`<div class="gc-demo-colfilter gc-demo-colfilter-code">
  <p>Las columnas con <code>filter</code> reciben embudo automáticamente. <code>filterOptions</code> alimenta la lista del tipo <code>select</code>.</p>
</div>`,
        snippet:`GrincDataTable.init({
  tableId: "#informe",
  entity: "usuarios",
  columns: [
    { data: "nombre", title: "Nombre", filter: "text" },
    { data: "tipo",   title: "Módulo de acceso", filter: "select", filterOptions: buildOptions(filters.tipo) },
    { data: "estado", title: "Estado", type: "badge", filter: "select", filterOptions: buildOptions(filters.estado) }
  ]
});`
      }
    ]
  }


];
