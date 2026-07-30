window.GC_COMPONENTS = [
  {
    id:"campo-texto",
    catalogExamples: ["gc-formulario-usuarios","gc-formulario-clientes"],
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "Nombre, cédula, cargo, teléfono, dirección (líneas 310-603)" },
      { module: "Sucursales", agregar: 127, file: "cplus/views/mostrarSucursales.php", detail: "Nombre, NIT, código, dirección, latitud/longitud (líneas 376-596)" },
      { module: "Embalajes", agregar: 106, file: "cplus/views/mostrarEmbalajes.php", detail: "Nombre y código interno (líneas 155-167) — el ejemplo más simple" },
      { module: "Métricas", agregar: 139, file: "cplus/views/mostrarMetrica.php", detail: "Nombre, código y abreviación (líneas 148-171)" },
      { module: "Mesa de ayuda", agregar: 148, file: "cplus/views/mostrarMesaAyuda.php", detail: "Campo Detalle del filtro (líneas 97-98)" },
    ],
    group:"Campos",
    name:"Campo de texto y número",
    description:"Campo base para textos cortos y valores numéricos sin flechas del navegador. Desde este componente se muestra el estilo de etiqueta obligatoria que aplica también a los siguientes campos.",
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
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "(variante propia) input#clave con data-gc-rule=\"password\" y gc-password-summary/gc-password-rules-card, pero sin type=password (líneas 735-768)" },
    ],
    group:"Campos",
    name:"Campo contraseña",
    description:"Input protegido que siempre mantiene el valor oculto. Los requisitos se muestran como resumen compacto con opción Ver requisitos para evitar sobrecargar el formulario.",
    use:"Usarlo para claves y configuraciones sensibles. No incluye ver/ocultar porque por política interna la contraseña debe verse siempre como caracteres ocultos.",
    avoid:"No repetir el listado completo debajo de cada campo cuando existan Nueva clave y Confirmar clave; documentarlo una sola vez en la sección.",
    deps:"Bootstrap CSS + Bootstrap JS Collapse + grinclic-forms.css",
    accessibility:"El botón Ver requisitos controla un panel colapsable mediante aria-controls y aria-expanded. El input mantiene aria-describedby hacia el resumen.",
    states:{
      enabled:`<div class="mb-3 gc-password-field">
  <label for="clave_demo" class="form-label"><span class="gc-required">*</span>Clave</label>
  <input type="password" class="form-control" id="clave_demo" name="clave" placeholder="Ingresa la contraseña" required autocomplete="new-password" aria-describedby="clave_demo_summary">
  <div id="clave_demo_summary" class="gc-password-summary">
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
      error:`<div class="mb-3 gc-password-field">
  <label for="clave_error" class="form-label"><span class="gc-required">*</span>Clave</label>
  <input type="password" class="form-control is-invalid" id="clave_error" name="clave" required aria-describedby="clave_error_help clave_error_summary" autocomplete="new-password">
  <div id="clave_error_help" class="gc-help is-invalid">La clave no cumple los requisitos mínimos.</div>
  <div id="clave_error_summary" class="gc-password-summary is-error">
    Debe tener mínimo 8 caracteres e incluir letra, mayúscula, minúscula y número.
    <button class="gc-inline-link" type="button" data-bs-toggle="collapse" data-bs-target="#clave_error_rules" aria-expanded="false" aria-controls="clave_error_rules">Ver requisitos</button>
  </div>
  <div class="collapse" id="clave_error_rules">
    <div class="gc-password-rules-card is-error" aria-label="Requisitos de contraseña">
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
    snippet:`<div class="mb-3 gc-password-field">
  <label for="clave" class="form-label"><span class="gc-required">*</span>Clave</label>
  <input type="password" class="form-control" id="clave" name="clave" placeholder="Ingresa la contraseña" required autocomplete="new-password" aria-describedby="clave_summary">
  <div id="clave_summary" class="gc-password-summary">
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
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/js/entities/usuarios/form-manager.js", detail: "Flatpickr fecha+hora sobre #fecha_licencia (líneas 1000-1004)" },
      { module: "Mesa de ayuda", agregar: 148, file: "cplus/views/mostrarMesaAyuda.php", detail: "Inputs type=date auto-mejorados a Flatpickr por cplus/js/core/gc-dates.js (líneas 78-82)" },
      { module: "Parafiscales", agregar: 144, file: "cplus/views/mostrarParafiscales.php", detail: "Vigencia desde/hasta con type=date (líneas 196-204)" },
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
      { module: "Sucursales", agregar: 127, file: "cplus/js/entities/sucursales/form-manager.js", detail: "data-gc-timepicker=\"materialize\" en horarios (líneas 461-462)" },
    ],
    group:"Campos",
    name:"Campo hora",
    description:"Selector de hora visual tipo reloj con Materialize Timepicker, configurado en formato militar de 24 horas y sin digitación libre.",
    use:"Usarlo para horas de entrada, salida o ventanas operativas cuando se requiere que el usuario seleccione desde un reloj visual.",
    avoid:"No usar input type=time cuando se requiera una selección visual homogénea en escritorio y móvil.",
    deps:"Bootstrap CSS + grinclic-forms.css + grinclic-forms.js + Materialize JS (Timepicker) + CSS aislado en grinclic-forms.css",
    accessibility:"Mantener label asociado; el campo queda readonly para priorizar selección guiada.",
    states:{
      enabled:`<div class="mb-3">
  <label for="hora_entrada_demo" class="form-label"><span class="gc-required">*</span>Horario entrada</label>
  <input type="text" class="form-control gc-materialize-time timepicker" id="hora_entrada_demo" name="hora_entrada" value="08:00" placeholder="Selecciona hora" data-gc-timepicker="materialize" readonly required>
</div>`,
      error:`<div class="mb-3">
  <label for="hora_entrada_error" class="form-label"><span class="gc-required">*</span>Horario entrada</label>
  <input type="text" class="form-control gc-materialize-time timepicker is-invalid" id="hora_entrada_error" name="hora_entrada" placeholder="Selecciona hora" data-gc-timepicker="materialize" readonly required aria-describedby="hora_entrada_error_help">
  <div id="hora_entrada_error_help" class="gc-help is-invalid">Selecciona una hora válida.</div>
</div>`,
      disabled:`<div class="mb-3">
  <label for="hora_entrada_disabled" class="form-label">Horario entrada</label>
  <input type="text" class="form-control" id="hora_entrada_disabled" name="hora_entrada" value="08:00" disabled>
</div>`
    },
    snippet:`<div class="mb-3">
  <label for="hora_entrada" class="form-label"><span class="gc-required">*</span>Horario entrada</label>
  <input type="text" class="form-control gc-materialize-time timepicker" id="hora_entrada" name="hora_entrada" placeholder="Selecciona hora" data-gc-timepicker="materialize" readonly required>
</div>`
  },
  {
    id:"campo-horario",
    catalogExamples: ["gc-formulario-clientes"],
    implementations: [
      { module: "Sucursales", agregar: 127, file: "cplus/views/mostrarSucursales.php", detail: "Modal #modalHorarios con filas por día (líneas 788-803)" },
    ],
    group:"Bloques",
    name:"Grupo de horarios",
    description:"Patrón Bootstrap para agrupar horarios por jornada, usando Materialize Timepicker como selector visual tipo reloj en formato militar.",
    use:"Usarlo cuando un formulario necesita comparar horarios de lunes a viernes contra fines de semana.",
    avoid:"No usarlo para una única hora aislada; en ese caso basta con el campo hora individual.",
    deps:"Bootstrap CSS + Bootstrap JS + grinclic-forms.css + grinclic-forms.js + Materialize JS (Timepicker) + CSS aislado en grinclic-forms.css",
    accessibility:"Cada hora conserva label propio. El ícono acompaña el título, no reemplaza el texto. Cada hora se selecciona desde un reloj visual.",
    states:{
      enabled:`<div class="row g-3 gc-schedule-groups">
  <div class="col-lg-6">
    <section class="border rounded-3 p-3 bg-white gc-schedule-card">
      <h3 class="h6 fw-bold mb-3 gc-schedule-title"><svg class="gc-section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5v5l3.5 2"></path></svg>Horario lunes a viernes</h3>
      <div class="row g-3">
        <div class="col-md-6">
          <label for="hora_entrada_semana_demo" class="form-label">Horario entrada</label>
          <input type="text" class="form-control gc-materialize-time timepicker" id="hora_entrada_semana_demo" name="hora_entrada_semana" value="14:00" placeholder="Selecciona hora" data-gc-timepicker="materialize" readonly>
        </div>
        <div class="col-md-6">
          <label for="hora_salida_semana_demo" class="form-label">Horario salida</label>
          <input type="text" class="form-control gc-materialize-time timepicker" id="hora_salida_semana_demo" name="hora_salida_semana" value="15:58" placeholder="Selecciona hora" data-gc-timepicker="materialize" readonly>
        </div>
      </div>
    </section>
  </div>
  <div class="col-lg-6">
    <section class="border rounded-3 p-3 bg-white gc-schedule-card">
      <h3 class="h6 fw-bold mb-3 gc-schedule-title"><svg class="gc-section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5v5l3.5 2"></path></svg>Horario sábado y domingo</h3>
      <div class="row g-3">
        <div class="col-md-6">
          <label for="hora_entrada_fin_demo" class="form-label">Horario entrada</label>
          <input type="text" class="form-control gc-materialize-time timepicker" id="hora_entrada_fin_demo" name="hora_entrada_fin_semana" value="00:00" placeholder="Selecciona hora" data-gc-timepicker="materialize" readonly>
        </div>
        <div class="col-md-6">
          <label for="hora_salida_fin_demo" class="form-label">Horario salida</label>
          <input type="text" class="form-control gc-materialize-time timepicker" id="hora_salida_fin_demo" name="hora_salida_fin_semana" value="00:00" placeholder="Selecciona hora" data-gc-timepicker="materialize" readonly>
        </div>
      </div>
    </section>
  </div>
</div>`,
      error:`<div class="row g-3 gc-schedule-groups">
  <div class="col-lg-6">
    <section class="border rounded-3 p-3 bg-white gc-schedule-card">
      <h3 class="h6 fw-bold mb-3 gc-schedule-title"><svg class="gc-section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5v5l3.5 2"></path></svg>Horario lunes a viernes</h3>
      <div class="row g-3">
        <div class="col-md-6">
          <label for="hora_entrada_semana_error" class="form-label">Horario entrada</label>
          <input type="text" class="form-control gc-materialize-time timepicker" id="hora_entrada_semana_error" name="hora_entrada_semana" value="14:00" placeholder="Selecciona hora" data-gc-timepicker="materialize" readonly>
        </div>
        <div class="col-md-6">
          <label for="hora_salida_semana_error" class="form-label">Horario salida</label>
          <input type="text" class="form-control gc-materialize-time timepicker is-invalid" id="hora_salida_semana_error" name="hora_salida_semana" value="15:58" placeholder="Selecciona hora" data-gc-timepicker="materialize" readonly>
          <div class="gc-help is-invalid">La salida debe ser posterior.</div>
        </div>
      </div>
    </section>
  </div>
  <div class="col-lg-6">
    <section class="border rounded-3 p-3 bg-white gc-schedule-card">
      <h3 class="h6 fw-bold mb-3 gc-schedule-title"><svg class="gc-section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5v5l3.5 2"></path></svg>Horario sábado y domingo</h3>
      <div class="row g-3">
        <div class="col-md-6">
          <label for="hora_entrada_fin_error" class="form-label">Horario entrada</label>
          <input type="text" class="form-control gc-materialize-time timepicker" id="hora_entrada_fin_error" name="hora_entrada_fin_semana" value="00:00" placeholder="Selecciona hora" data-gc-timepicker="materialize" readonly>
        </div>
        <div class="col-md-6">
          <label for="hora_salida_fin_error" class="form-label">Horario salida</label>
          <input type="text" class="form-control gc-materialize-time timepicker" id="hora_salida_fin_error" name="hora_salida_fin_semana" value="00:00" placeholder="Selecciona hora" data-gc-timepicker="materialize" readonly>
        </div>
      </div>
    </section>
  </div>
</div>`,
      disabled:`<div class="row g-3 gc-schedule-groups">
  <div class="col-lg-6">
    <section class="border rounded-3 p-3 bg-white gc-schedule-card">
      <h3 class="h6 fw-bold mb-3 gc-schedule-title"><svg class="gc-section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5v5l3.5 2"></path></svg>Horario lunes a viernes</h3>
      <div class="row g-3">
        <div class="col-md-6">
          <label for="hora_entrada_semana_disabled" class="form-label">Horario entrada</label>
          <input type="text" class="form-control gc-materialize-time timepicker" id="hora_entrada_semana_disabled" name="hora_entrada_semana" value="14:00" placeholder="Selecciona hora" data-gc-timepicker="materialize" readonly disabled>
        </div>
        <div class="col-md-6">
          <label for="hora_salida_semana_disabled" class="form-label">Horario salida</label>
          <input type="text" class="form-control gc-materialize-time timepicker" id="hora_salida_semana_disabled" name="hora_salida_semana" value="15:58" placeholder="Selecciona hora" data-gc-timepicker="materialize" readonly disabled>
        </div>
      </div>
    </section>
  </div>
  <div class="col-lg-6">
    <section class="border rounded-3 p-3 bg-white gc-schedule-card">
      <h3 class="h6 fw-bold mb-3 gc-schedule-title"><svg class="gc-section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5v5l3.5 2"></path></svg>Horario sábado y domingo</h3>
      <div class="row g-3">
        <div class="col-md-6">
          <label for="hora_entrada_fin_disabled" class="form-label">Horario entrada</label>
          <input type="text" class="form-control gc-materialize-time timepicker" id="hora_entrada_fin_disabled" name="hora_entrada_fin_semana" value="00:00" placeholder="Selecciona hora" data-gc-timepicker="materialize" readonly disabled>
        </div>
        <div class="col-md-6">
          <label for="hora_salida_fin_disabled" class="form-label">Horario salida</label>
          <input type="text" class="form-control gc-materialize-time timepicker" id="hora_salida_fin_disabled" name="hora_salida_fin_semana" value="00:00" placeholder="Selecciona hora" data-gc-timepicker="materialize" readonly disabled>
        </div>
      </div>
    </section>
  </div>
</div>`
    },
    snippet:`<div class="row g-3 gc-schedule-groups">
  <div class="col-lg-6">
    <section class="border rounded-3 p-3 bg-white gc-schedule-card">
      <h3 class="h6 fw-bold mb-3 gc-schedule-title"><svg class="gc-section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5v5l3.5 2"></path></svg>Horario lunes a viernes</h3>
      <div class="row g-3">
        <div class="col-md-6">
          <label for="hora_entrada_semana" class="form-label">Horario entrada</label>
          <input type="text" class="form-control gc-materialize-time timepicker" id="hora_entrada_semana" name="hora_entrada_semana" value="14:00" placeholder="Selecciona hora" data-gc-timepicker="materialize" readonly>
        </div>
        <div class="col-md-6">
          <label for="hora_salida_semana" class="form-label">Horario salida</label>
          <input type="text" class="form-control gc-materialize-time timepicker" id="hora_salida_semana" name="hora_salida_semana" value="15:58" placeholder="Selecciona hora" data-gc-timepicker="materialize" readonly>
        </div>
      </div>
    </section>
  </div>
  <div class="col-lg-6">
    <section class="border rounded-3 p-3 bg-white gc-schedule-card">
      <h3 class="h6 fw-bold mb-3 gc-schedule-title"><svg class="gc-section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5v5l3.5 2"></path></svg>Horario sábado y domingo</h3>
      <div class="row g-3">
        <div class="col-md-6">
          <label for="hora_entrada_fin" class="form-label">Horario entrada</label>
          <input type="text" class="form-control gc-materialize-time timepicker" id="hora_entrada_fin" name="hora_entrada_fin_semana" value="00:00" placeholder="Selecciona hora" data-gc-timepicker="materialize" readonly>
        </div>
        <div class="col-md-6">
          <label for="hora_salida_fin" class="form-label">Horario salida</label>
          <input type="text" class="form-control gc-materialize-time timepicker" id="hora_salida_fin" name="hora_salida_fin_semana" value="00:00" placeholder="Selecciona hora" data-gc-timepicker="materialize" readonly>
        </div>
      </div>
    </section>
  </div>
</div>`
  },
  {
    id:"textarea",
    catalogExamples: ["gc-formulario-configuraciones","gc-formulario-roles"],
    implementations: [
      { module: "Sucursales", agregar: 127, file: "cplus/views/mostrarSucursales.php", detail: "Observación con rows=3 (línea 671)" },
      { module: "Embalajes", agregar: 106, file: "cplus/views/mostrarEmbalajes.php", detail: "Descripción (líneas 171-173)" },
      { module: "Mesa de ayuda", agregar: 148, file: "cplus/views/mostrarMesaAyuda.php", detail: "Comentario (líneas 211-212)" },
      { module: "Bodegas de inventario", agregar: 149, file: "cplus/views/mostrarBodegas.php", detail: "Observación (líneas 290-291)" },
    ],
    group:"Campos",
    name:"Textarea",
    description:"Area de texto Bootstrap para observaciones o descripciones.",
    use:"Usarlo para observaciones, notas y descripciones amplias.",
    avoid:"No usarlo para datos cortos que deben escanearse en columnas.",
    deps:"Bootstrap CSS + grinclic-forms.css",
    verified: true,
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
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "Selects Estado y Tipo (líneas 427 y 468)" },
      { module: "Sucursales", agregar: 127, file: "cplus/views/mostrarSucursales.php", detail: "Tipo, estado, clasificación, país, ciudad… (líneas 384-559)" },
      { module: "Embalajes", agregar: 106, file: "cplus/views/mostrarEmbalajes.php", detail: "Select Activo/Inactivo (líneas 176-181)" },
      { module: "Métricas", agregar: 139, file: "cplus/views/mostrarMetrica.php", detail: "Select estado (líneas 176-179)" },
      { module: "Mesa de ayuda", agregar: 148, file: "cplus/views/mostrarMesaAyuda.php", detail: "Filtros Solicitud y Etapa poblados por JS (líneas 86-94)" },
    ],
    group:"Campos",
    name:"Select",
    description:"Select nativo Bootstrap para listas cortas.",
    use:"Usarlo en estados, categorias y decisiones con pocas opciones.",
    avoid:"No usarlo para catalogos muy largos.",
    deps:"Bootstrap CSS + grinclic-forms.css",
    verified: true,
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
    description:"Dropdown Bootstrap con filtro interno y valor oculto para envío al backend. Instructivo: para estandarizar este patrón, conserva la estructura data-gc-search-select, input hidden, botón gc-select-trigger y opciones data-gc-option; solo cambia labels, name y opciones.",
    use:"Usarlo para ciudades, departamentos, clientes, usuarios o residuos extensos.",
    avoid:"No usarlo para listas de dos o tres opciones.",
    deps:"Bootstrap CSS + Bootstrap JS + grinclic-forms.css + grinclic-forms.js",
    verified: true,
    states:{
      enabled:`<div class="mb-3 gc-search-select" data-gc-search-select>
  <label class="form-label" for="departamento_value_demo">Departamento</label>
  <input type="hidden" id="departamento_value_demo" name="departamento" value="Antioquia">
  <button class="btn dropdown-toggle gc-select-trigger w-100" type="button" data-bs-toggle="dropdown">
    <span data-gc-search-label>Antioquia</span>
  </button>
  <div class="dropdown-menu gc-search-menu">
    <input class="form-control mb-2" type="search" placeholder="Buscar opcion..." data-gc-search-input>
    <button class="dropdown-item active" type="button" data-gc-option="Antioquia">Antioquia</button>
    <button class="dropdown-item" type="button" data-gc-option="Bogota D.C.">Bogota D.C.</button>
    <button class="dropdown-item" type="button" data-gc-option="Valle del Cauca">Valle del Cauca</button>
  </div>
</div>`,
      error:`<div class="mb-3 gc-search-select" data-gc-search-select>
  <label class="form-label" for="departamento_value_error">Departamento</label>
  <input type="hidden" id="departamento_value_error" name="departamento" value="">
  <button class="btn dropdown-toggle gc-select-trigger is-invalid w-100" type="button" data-bs-toggle="dropdown">
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
    snippet:`<div class="mb-3 gc-search-select" data-gc-search-select>
  <label class="form-label" for="departamento_value">Departamento</label>
  <input type="hidden" id="departamento_value" name="departamento" value="Antioquia">
  <button class="btn dropdown-toggle gc-select-trigger w-100" type="button" data-bs-toggle="dropdown">
    <span data-gc-search-label>Antioquia</span>
  </button>
  <div class="dropdown-menu gc-search-menu">
    <input class="form-control mb-2" type="search" placeholder="Buscar opcion..." data-gc-search-input>
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
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "(variante propia) lista de checkboxes gc-multiselect-menu con \"TODAS\" y contador, siempre visible (líneas 968-1019)" },
      { module: "Proveedores", agregar: 128, file: "cplus/views/mostrarProveedores.php", detail: "(variante propia) select multiple nativo con size=8 (líneas 102-116)" },
    ],
    group:"Campos",
    name:"Seleccion multiple en desplegable",
    description:"Dropdown con checkboxes reales y resumen de seleccion.",
    use:"Usarlo para permisos, categorias o filtros multiples en espacios compactos.",
    avoid:"No usarlo si las opciones deben estar siempre visibles para comparacion.",
    deps:"Bootstrap CSS + Bootstrap JS + grinclic-forms.css + grinclic-forms.js",
    verified: true,
    states:{
      enabled:`<div class="mb-3 dropdown" data-gc-multiselect>
  <label class="form-label">Permisos</label>
  <button class="btn dropdown-toggle gc-select-trigger w-100" type="button" data-bs-toggle="dropdown">Seleccionar permisos</button>
  <div class="dropdown-menu gc-multiselect-menu">
    <div class="form-check"><input class="form-check-input" type="checkbox" id="permiso_crear_demo" name="permisos[]" value="crear" checked><label class="form-check-label" for="permiso_crear_demo">Crear solicitudes</label></div>
    <div class="form-check"><input class="form-check-input" type="checkbox" id="permiso_editar_demo" name="permisos[]" value="editar"><label class="form-check-label" for="permiso_editar_demo">Editar solicitudes</label></div>
  </div>
  <div class="gc-selected-summary" data-gc-multiselect-summary>Seleccionados: ninguno</div>
</div>`,
      error:`<div class="mb-3 dropdown" data-gc-multiselect>
  <label class="form-label">Permisos</label>
  <button class="btn dropdown-toggle gc-select-trigger is-invalid w-100" type="button" data-bs-toggle="dropdown">Seleccionar permisos</button>
  <div class="gc-help is-invalid">Selecciona al menos una opcion.</div>
</div>`,
      disabled:`<div class="mb-3 dropdown">
  <label class="form-label">Permisos</label>
  <button class="btn dropdown-toggle gc-select-trigger w-100" type="button" disabled>Crear solicitudes</button>
</div>`
    },
    snippet:`<div class="mb-3 dropdown" data-gc-multiselect>
  <label class="form-label">Permisos</label>
  <button class="btn dropdown-toggle gc-select-trigger w-100" type="button" data-bs-toggle="dropdown">
    Seleccionar permisos
  </button>
  <div class="dropdown-menu gc-multiselect-menu">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="permiso_crear" name="permisos[]" value="crear_solicitudes" checked>
      <label class="form-check-label" for="permiso_crear">Crear solicitudes</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="permiso_editar" name="permisos[]" value="editar_solicitudes">
      <label class="form-check-label" for="permiso_editar">Editar solicitudes</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="permiso_aprobar" name="permisos[]" value="aprobar_solicitudes">
      <label class="form-check-label" for="permiso_aprobar">Aprobar solicitudes</label>
    </div>
  </div>
  <div class="gc-selected-summary" data-gc-multiselect-summary>Seleccionados: ninguno</div>
</div>`
  },

  {
    id:"seleccion-multiple-busqueda",
    implementations: [
      { module: "Sucursales", agregar: 127, file: "cplus/views/mostrarSucursales.php", detail: "data-gc-multiselect-box con buscador interno para declaraciones (líneas 697-700)" },
    ],
    group:"Campos",
    name:"Selección múltiple con búsqueda interna",
    description:"Dropdown con checkboxes reales, búsqueda interna y resumen de selección. Instructivo: para estandarizar este patrón, conserva data-gc-multiselect, data-gc-multiselect-search, name[] y data-gc-multiselect-summary; solo cambia labels, opciones y valores.",
    use:"Usarlo para listas múltiples medianas o largas, como sucursales de acopio, permisos o categorías operativas.",
    avoid:"No usarlo para dos o tres opciones visibles; en ese caso basta con checkbox o selección múltiple simple.",
    deps:"Bootstrap CSS + Bootstrap JS + grinclic-forms.css + grinclic-forms.js",
    verified: true,
    states:{
      enabled:`<div class="mb-3 dropdown" data-gc-multiselect>
  <label class="form-label">Sucursales de acopio</label>
  <button class="btn dropdown-toggle gc-select-trigger w-100" type="button" data-bs-toggle="dropdown">Seleccionar sucursales</button>
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
  <button class="btn dropdown-toggle gc-select-trigger is-invalid w-100" type="button" data-bs-toggle="dropdown">Seleccionar sucursales</button>
  <div class="gc-help is-invalid">Selecciona al menos una sucursal.</div>
</div>`,
      disabled:`<div class="mb-3 dropdown">
  <label class="form-label">Sucursales de acopio</label>
  <button class="btn dropdown-toggle gc-select-trigger w-100" type="button" disabled>Sucursal principal</button>
</div>`
    },
    snippet:`<div class="mb-3 dropdown" data-gc-multiselect>
  <label class="form-label">Sucursales de acopio</label>
  <button class="btn dropdown-toggle gc-select-trigger w-100" type="button" data-bs-toggle="dropdown">
    Seleccionar sucursales
  </button>
  <div class="dropdown-menu gc-multiselect-menu">
    <input class="form-control gc-multiselect-search" type="search" placeholder="Buscar sucursal..." data-gc-multiselect-search>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="sucursal_principal" name="sucursales[]" value="principal" checked>
      <label class="form-check-label" for="sucursal_principal">Sucursal principal</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="sucursal_norte" name="sucursales[]" value="norte">
      <label class="form-check-label" for="sucursal_norte">Sucursal norte</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="sucursal_sur" name="sucursales[]" value="sur">
      <label class="form-check-label" for="sucursal_sur">Sucursal sur</label>
    </div>
  </div>
  <div class="gc-selected-summary" data-gc-multiselect-summary>Seleccionados: ninguno</div>
</div>`
  },
  {
    id:"radio-si-no",
    catalogExamples: ["gc-formulario-usuarios","gc-formulario-clientes"],
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "gc-question + gc-yes-no role=radiogroup: acceso al sistema y envío de correo (líneas 658-809)" },
    ],
    group:"Campos",
    name:"Radio SI/NO compacto",
    description:"Decisión compacta con radios reales. Incluye variante binaria y variante con NO APLICA.",
    use:"Usarlo para preguntas frecuentes de configuración. Cuando exista una excepción válida, usar la variante SI / NO / NO APLICA.",
    avoid:"No usarlo para listas extensas ni opciones que requieren búsqueda.",
    deps:"Bootstrap CSS + grinclic-forms.css",
    accessibility:"Usa role radiogroup y valores explícitos SI, NO y NO_APLICA para que backend y lectores de pantalla reciban un valor claro.",
    states:{
      enabled:`<div class="row g-3">
  <div class="col-lg-6">
    <div class="gc-question mb-3">
      <label class="form-label" id="descarga_label_demo">Permitir descargar acta independiente del pago</label>
      <div class="gc-yes-no" role="radiogroup" aria-labelledby="descarga_label_demo">
        <input class="btn-check" type="radio" name="descarga_demo" id="descarga_no_demo" value="NO" checked>
        <label class="btn" for="descarga_no_demo">NO</label>
        <input class="btn-check" type="radio" name="descarga_demo" id="descarga_si_demo" value="SI">
        <label class="btn" for="descarga_si_demo">SI</label>
      </div>
    </div>
  </div>
  <div class="col-lg-6">
    <div class="gc-question mb-3">
      <label class="form-label" id="aplica_label_demo">¿Aplica generación automática?</label>
      <div class="gc-yes-no gc-yes-no--triple" role="radiogroup" aria-labelledby="aplica_label_demo">
        <input class="btn-check" type="radio" name="aplica_demo" id="aplica_no_demo" value="NO" checked>
        <label class="btn" for="aplica_no_demo">NO</label>
        <input class="btn-check" type="radio" name="aplica_demo" id="aplica_si_demo" value="SI">
        <label class="btn" for="aplica_si_demo">SI</label>
        <input class="btn-check" type="radio" name="aplica_demo" id="aplica_na_demo" value="NO_APLICA">
        <label class="btn" for="aplica_na_demo">NO APLICA</label>
      </div>
    </div>
  </div>
</div>`,
      error:`<div class="gc-question mb-1 border-warning">
  <label class="form-label" id="descarga_label_error">Permitir descargar acta independiente del pago</label>
  <div class="gc-yes-no" role="radiogroup" aria-labelledby="descarga_label_error">
    <input class="btn-check" type="radio" name="descarga_error" id="descarga_no_error" value="NO">
    <label class="btn" for="descarga_no_error">NO</label>
    <input class="btn-check" type="radio" name="descarga_error" id="descarga_si_error" value="SI">
    <label class="btn" for="descarga_si_error">SI</label>
  </div>
</div>
<div class="gc-help is-invalid">Selecciona SI o NO.</div>`,
      disabled:`<div class="gc-question mb-3">
  <label class="form-label" id="descarga_label_disabled">Permitir descargar acta independiente del pago</label>
  <div class="gc-yes-no" role="radiogroup" aria-labelledby="descarga_label_disabled">
    <input class="btn-check" type="radio" name="descarga_disabled" id="descarga_no_disabled" value="NO" checked disabled>
    <label class="btn" for="descarga_no_disabled">NO</label>
    <input class="btn-check" type="radio" name="descarga_disabled" id="descarga_si_disabled" value="SI" disabled>
    <label class="btn" for="descarga_si_disabled">SI</label>
  </div>
</div>`
    },
    snippet:`<div class="gc-question mb-3">
  <label class="form-label" id="descarga_acta_label">Permitir descargar acta independiente del pago</label>
  <div class="gc-yes-no" role="radiogroup" aria-labelledby="descarga_acta_label">
    <input class="btn-check" type="radio" name="descarga_acta" id="descarga_acta_no" value="NO" checked>
    <label class="btn" for="descarga_acta_no">NO</label>
    <input class="btn-check" type="radio" name="descarga_acta" id="descarga_acta_si" value="SI">
    <label class="btn" for="descarga_acta_si">SI</label>
  </div>
</div>

<div class="gc-question mb-3">
  <label class="form-label" id="aplica_acta_label">¿Aplica generación automática?</label>
  <div class="gc-yes-no gc-yes-no--triple" role="radiogroup" aria-labelledby="aplica_acta_label">
    <input class="btn-check" type="radio" name="aplica_acta" id="aplica_acta_no" value="NO" checked>
    <label class="btn" for="aplica_acta_no">NO</label>
    <input class="btn-check" type="radio" name="aplica_acta" id="aplica_acta_si" value="SI">
    <label class="btn" for="aplica_acta_si">SI</label>
    <input class="btn-check" type="radio" name="aplica_acta" id="aplica_acta_na" value="NO_APLICA">
    <label class="btn" for="aplica_acta_na">NO APLICA</label>
  </div>
</div>`
  },
  {
    id:"checkbox",
    catalogExamples: ["gc-formulario-usuarios","gc-formulario-roles"],
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "Seleccionar-todas + checkboxes por sucursal + gc-review (líneas 970-1064)" },
      { module: "Sucursales", agregar: 127, file: "cplus/views/mostrarSucursales.php", detail: "aplica_acopio y declaraciones[] (líneas 683-711)" },
      { module: "Parafiscales", agregar: 144, file: "cplus/views/mostrarParafiscales.php", detail: "Select-all del listado de usuarios (línea 240)" },
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
      <button class="btn btn-success" type="submit" id="btn_actualizar_demo">Actualizar</button>
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
      <button class="btn btn-success" type="submit" id="btn_actualizar" disabled>Actualizar</button>
    </div>
  </div>
</footer>`
  },
  {
    id:"carga-pdf",
    catalogExamples: ["gc-formulario-usuarios","gc-formulario-configuraciones"],
    implementations: [
      { module: "Parafiscales", agregar: 144, file: "cplus/views/mostrarParafiscales.php", detail: "gc-upload-field + gc-upload-specs + preview (líneas 167-186)" },
    ],
    group:"Campos",
    name:"Cargar archivo PDF",
    description:"Input file real para documentos PDF con especificaciones y enlace para ver el documento cargado en una ventana nueva.",
    use:"Usarlo para soportes, parafiscales, certificados, licencias y anexos administrativos.",
    avoid:"No usarlo sin aclarar tipo de archivo y peso máximo.",
    deps:"Bootstrap CSS + grinclic-forms.css",
    verified: true,
    accessibility:"El enlace de vista previa debe abrir en nueva ventana con texto claro y target=\"_blank\".",
    states:{
      enabled:`<div class="row g-3">
  <div class="col-lg-6">
    <div class="mb-3 gc-upload-field">
      <label for="parafiscales_demo_vacio" class="form-label">Adjuntar parafiscales</label>
      <input class="form-control" type="file" id="parafiscales_demo_vacio" name="parafiscales" accept="application/pdf,.pdf" aria-describedby="parafiscales_demo_vacio_specs">
      <div id="parafiscales_demo_vacio_specs" class="gc-upload-specs">Tipo permitido: PDF. Peso máximo: 15 MB.</div>
      <div class="gc-upload-empty">Sin archivo adjunto. Cuando se cargue un PDF, aquí se mostrará su nombre y el acceso para verlo.</div>
    </div>
  </div>
  <div class="col-lg-6">
    <div class="mb-3 gc-upload-field">
      <label for="parafiscales_demo" class="form-label">Adjuntar parafiscales</label>
      <input class="form-control" type="file" id="parafiscales_demo" name="parafiscales" accept="application/pdf,.pdf" aria-describedby="parafiscales_demo_specs">
      <div id="parafiscales_demo_specs" class="gc-upload-specs">Tipo permitido: PDF. Peso máximo: 15 MB.</div>
      <div class="gc-upload-preview" aria-label="Documento PDF cargado">
        <span class="gc-upload-file-icon" aria-hidden="true">PDF</span>
        <div class="gc-upload-meta">
          <strong>parafiscales_vigentes.pdf</strong>
          <span>Documento legible, vigente y sin contraseña.</span>
        </div>
        <a class="btn btn-outline-secondary btn-sm ms-auto" href="#" target="_blank" rel="noopener">Ver documento</a>
      </div>
    </div>
  </div>
</div>`,
      error:`<div class="mb-3 gc-upload-field">
  <label for="parafiscales_error" class="form-label">Adjuntar parafiscales</label>
  <input class="form-control is-invalid" type="file" id="parafiscales_error" name="parafiscales" accept="application/pdf,.pdf" aria-describedby="parafiscales_error_help parafiscales_error_specs">
  <div id="parafiscales_error_help" class="gc-help is-invalid">Adjunta un archivo PDF válido.</div>
  <div id="parafiscales_error_specs" class="gc-upload-specs">Tipo permitido: PDF. Peso máximo: 15 MB.</div>
</div>`,
      disabled:`<div class="mb-3 gc-upload-field">
  <label for="parafiscales_disabled" class="form-label">Adjuntar parafiscales</label>
  <input class="form-control" type="file" id="parafiscales_disabled" name="parafiscales" accept="application/pdf,.pdf" disabled>
  <div class="gc-upload-specs">Tipo permitido: PDF. Peso máximo: 15 MB.</div>
  <div class="gc-upload-preview" aria-label="Documento PDF registrado">
    <span class="gc-upload-file-icon" aria-hidden="true">PDF</span>
    <div class="gc-upload-meta">
      <strong>soporte_registrado.pdf</strong>
      <span>Archivo registrado no editable.</span>
    </div>
    <a class="btn btn-outline-secondary btn-sm ms-auto disabled" href="#" aria-disabled="true">Ver documento</a>
  </div>
</div>`
    },
    snippet:`<div class="mb-3 gc-upload-field">
  <label for="archivo_pdf" class="form-label">Adjuntar archivo PDF</label>
  <input class="form-control" type="file" id="archivo_pdf" name="archivo_pdf" accept="application/pdf,.pdf" aria-describedby="archivo_pdf_specs">
  <div id="archivo_pdf_specs" class="gc-upload-specs">Tipo permitido: PDF. Peso máximo: 15 MB.</div>
  <div class="gc-upload-empty">Sin archivo adjunto. Cuando exista un PDF cargado, muestra el nombre del archivo y el botón para verlo.</div>
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
    use:"Usarlo para logos empresariales, firmas o imágenes institucionales. La vista previa debe permitir revisar cómo quedará visualmente antes de cargar o cancelar.",
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
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "(variante propia) gc-help como texto de ayuda estático bajo el campo, sin botón ? con popover (líneas 724-784)" },
      { module: "Embalajes", agregar: 106, file: "cplus/views/mostrarEmbalajes.php", detail: "(variante propia) gc-help estático bajo nombre y código (líneas 160-168)" },
    ],
    group:"Campos",
    name:"Campo con validación",
    description:"Input con mensaje de validación y ayuda contextual en globo. La ayuda aparece al lado del botón de interrogación como popover, sin abrir espacio debajo del campo.",
    use:"Usarlo para correos, URLs o datos con regla de formato verificable.",
    avoid:"No usarlo cuando no exista validación real o regla de negocio.",
    deps:"Bootstrap CSS + Bootstrap JS Popover + grinclic-forms.css + grinclic-forms.js",
    verified: true,
    accessibility:"El botón de ayuda usa data-bs-toggle=\"popover\" y aria-label. El mensaje de validación se asocia al input con aria-describedby.",
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
    snippet:`<div class="mb-3">
  <label for="sitio_web" class="form-label">Sitio web <button class="gc-help-button" type="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="right" data-bs-content="Incluye https:// para evitar enlaces incompletos." aria-label="Ver ayuda del sitio web">?</button></label>
  <input type="url" class="form-control" id="sitio_web" name="sitio_web" placeholder="https://www.empresa.com">
</div>`
  },
  {
    id:"alertas-librerias",
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/js/entities/usuarios/form-manager.js", detail: "CplusAlerts.error/warning/info — motor SweetAlert2 en cplus/js/core/alerts.js" },
      { module: "Sucursales", agregar: 127, file: "cplus/js/entities/sucursales/form-manager.js", detail: "CplusAlerts en validaciones (líneas 413-677)" },
      { module: "Embalajes", agregar: 106, file: "cplus/js/entities/embalajes/datatable.js", detail: "CplusAlerts.error en validación de duplicado (línea 101)" },
      { module: "Métricas", agregar: 139, file: "cplus/js/core/standard-actions.js", detail: "Confirmaciones CRUD estándar vía CplusStandardActions (líneas 121-134)" },
      { module: "Tutoriales", agregar: 145, file: "cplus/js/entities/tutoriales/tutoriales.js", detail: "toast/showLoading delegando a CplusAlerts (líneas 45-54)" },
    ],
    group:"Advertencias",
    name:"Alertas SweetAlert2",
    description:"Guía de uso para alertas del sistema con SweetAlert2. Grinclic usará dos patrones: alertas modales para mensajes invasivos que requieren decisión y notificaciones toast para mensajes breves no invasivos.",
    use:"Usar alertas modales para confirmar acciones críticas, errores que bloquean el flujo o advertencias sensibles. Usar toasts para acciones completadas, copias, cargas o mensajes rápidos que no requieren decisión.",
    avoid:"No usar modales para mensajes menores ni toasts para decisiones críticas. No mezclar otra librería de alertas en el mismo flujo sin justificación técnica.",
    deps:"SweetAlert2 CDN + Bootstrap CSS + grinclic-forms.css + grinclic-forms.js. Se inicializan los patrones gcAlert y gcToast desde el módulo de formularios.",
    accessibility:"Las alertas modales deben devolver el foco al flujo y usar textos breves. Los toasts no deben contener acciones obligatorias ni información crítica que desaparezca sin lectura.",
    note:"Librería oficial definida para alertas: SweetAlert2. Tipos permitidos: modal dialogs y toast notifications.",
    snippet:`<!-- Dependencia -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script>
  const gcAlert = Swal.mixin({
    buttonsStyling: false,
    customClass: {
      popup: 'gc-swal-popup',
      title: 'gc-swal-title',
      htmlContainer: 'gc-swal-text',
      confirmButton: 'btn btn-success gc-swal-confirm',
      cancelButton: 'btn btn-outline-secondary gc-swal-cancel'
    }
  });

  const gcToast = (title, icon = 'success', tone = 'success') => Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3200,
    timerProgressBar: true,
    buttonsStyling: false,
    customClass: {
      popup: 'gc-swal-toast gc-swal-toast--' + tone,
      title: 'gc-swal-toast-title'
    }
  }).fire({ icon, title });

  // Modal dialog: requiere decisión o lectura obligatoria.
  gcAlert.fire({
    icon: 'warning',
    title: '¿Confirmas la actualización?',
    html: 'Revisa que los datos sensibles y configuraciones críticas estén correctos antes de continuar.',
    showCancelButton: true,
    confirmButtonText: 'Sí, actualizar',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
  });

  // Toast notification: informa sin interrumpir el flujo.
  gcToast('Cambios guardados.', 'success', 'success');
</script>`,
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
</div>`
  },
  {
    id:"encabezado-formulario",
    catalogExamples: ["gc-formulario-usuarios","gc-formulario-clientes"],
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/views/partials/form-head.php", detail: "Partial compartido gc-form-head (logo, título, gc-history) — incluido desde mostrarUsuarios.php:274" },
      { module: "Embalajes", agregar: 106, file: "cplus/views/mostrarEmbalajes.php", detail: "Include del partial en la línea 144" },
      { module: "Métricas", agregar: 139, file: "cplus/views/mostrarMetrica.php", detail: "Include del partial en la línea 137" },
    ],
    group:"Organización",
    name:"Encabezado formulario",
    description:"Encabezado estandar con titulo, contexto e historial.",
    use:"Usarlo como primer bloque de formularios administrativos.",
    avoid:"No duplicarlo dentro de secciones internas.",
    deps:"Bootstrap CSS + grinclic-forms.css",
    snippet:`<header class="gc-form-head">
  <div class="gc-form-logo gc-form-logo--demo"><img src="assets/logo-demo.svg" alt="Logo demo de empresa" class="gc-logo-img"></div>
  <div class="gc-form-title">
    <h1>Actualizar clientes</h1>
    <p>Datos generales, ubicacion, contactos e integracion.</p>
  </div>
  <div class="gc-history">
    <span><strong>Creado por:</strong> Usuario responsable</span>
    <span><strong>Realizado por:</strong> Usuario responsable</span>
    <span class="gc-last-change"><strong>Ultimo cambio:</strong> 2026-06-09 15:00:35</span>
  </div>
</header>`
  },
  {
    id:"opciones-acordeon",
    catalogExamples: ["gc-formulario-configuraciones","gc-formulario-usuarios"],
    implementations: [
      { module: "Unidades de negocio / Líneas de servicio", agregar: 120, file: "cplus/views/mostrarLineasNegocio.php", detail: "gc-business-accordion con columnas en el encabezado (líneas 227-250)" },
      { module: "Roles", agregar: 124, file: "cplus/js/lib/RbacPermissionMatrix.js", detail: "Acordeón gc-business-accordion generado por JS para la matriz RBAC (líneas 414-477)" },
    ],
    group:"Organización",
    name:"Opciones por acordeon",
    description:"Guía de composición para acordeones Bootstrap en Grinclic. Incluye una versión simple sin columnas extra y una versión con columnas en el encabezado. El ejemplo completo con tabla se abre en una página independiente para evitar cortes de ancho dentro del visor.",
    use:"Usarlo cuando se necesita agrupar información en bloques desplegables. Para acordeones operativos con tablas internas, usa la variante Con columnas y su Ejemplo completo en pantalla amplia.",
    avoid:"No insertar tablas anchas completas dentro del visor rápido del catálogo; en esos casos debe usarse una página de ejemplo independiente.",
    deps:"Bootstrap CSS + Bootstrap JS Accordion/Collapse + Bootstrap Icons + grinclic-forms.css + grinclic-forms.js. La lógica de flecha/estado se sincroniza desde bindBusinessUnitGuides().",
    note:"La versión completa está en <a href='ejemplos/acordeon-unidades-negocio.html' target='_blank' rel='noopener'>ejemplos/acordeon-unidades-negocio.html</a>. Allí se ve el acordeón con columnas, acciones, buscador, exportación, tabla y paginación con el espacio requerido. La flecha del acordeón cambia automáticamente entre chevron-right y chevron-down, actualiza aria-expanded y aplica el fondo verde tenue solo al ítem abierto.",
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
        description:"El encabezado muestra nombre, código y descripción alineados a la izquierda; las acciones van al final de la fila. El detalle con tabla interna se consulta en el ejemplo independiente.",
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
      }
    ]
  },
  {
    id:"pestanas-internas",
    catalogExamples: ["gc-formulario-usuarios","gc-formulario-clientes"],
    implementations: [
      { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php", detail: "nav-tabs con 3 pestañas: Datos / Credenciales / Información adicional (líneas 294-305)" },
      { module: "Roles", agregar: 124, file: "cplus/js/lib/RbacPermissionMatrix.js", detail: "Tabs de la matriz RBAC generados por JS (mostrarRoles.php:173)" },
    ],
    group:"Organización",
    name:"Pestanas internas",
    description:"Tabs Bootstrap para navegar opciones dentro de una misma seccion.",
    use:"Usarlo cuando varias subsecciones comparten el mismo contexto.",
    avoid:"No usarlo para informacion que el usuario debe comparar toda al mismo tiempo.",
    deps:"Bootstrap CSS + Bootstrap JS. Componente usado: Tabs de Bootstrap + grinclic-forms.css",
    note:"Librería usada: Bootstrap Tabs/Navs. No requiere librería adicional.",
    snippet:`<ul class="nav nav-tabs mb-3" id="config_tabs" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="basicos-tab" data-bs-toggle="tab" data-bs-target="#basicos" type="button" role="tab">Basicos</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="operacion-tab" data-bs-toggle="tab" data-bs-target="#operacion" type="button" role="tab">Operacion</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="alertas-tab" data-bs-toggle="tab" data-bs-target="#alertas" type="button" role="tab">Alertas</button>
  </li>
</ul>
<div class="tab-content" id="config_tabs_content">
  <div class="tab-pane fade show active" id="basicos" role="tabpanel" tabindex="0">
    <div class="form-check"><input class="form-check-input" type="checkbox" id="cliente_activo" name="cliente_activo" value="1" checked><label class="form-check-label" for="cliente_activo">Cliente activo</label></div>
  </div>
  <div class="tab-pane fade" id="operacion" role="tabpanel" tabindex="0">
    <div class="form-check"><input class="form-check-input" type="checkbox" id="requiere_oc" name="requiere_oc" value="1"><label class="form-check-label" for="requiere_oc">Requiere orden de compra</label></div>
  </div>
  <div class="tab-pane fade" id="alertas" role="tabpanel" tabindex="0">
    <div class="form-check"><input class="form-check-input" type="checkbox" id="notificar_cambio" name="notificar_cambio" value="1"><label class="form-check-label" for="notificar_cambio">Notificar cambio de estado</label></div>
  </div>
</div>`
  },
  {
    id:"gc-formulario-clientes",
    group:"Formularios",
    name:"Mis clientes / Actualizar cliente",
    description:"Organismo administrativo para actualizar información general, ubicación, contactos, datos legales, configuración comercial e integración del cliente.",
    use:"Usarlo para actualizar clientes con datos prellenados editables. Las pestañas reducen scroll y el cierre con revisión evita guardar sin validar campos sensibles.",
    avoid:"No pegarlo sin ajustar action, names, valores precargados, permisos, validaciones de backend y reglas de sincronización con EMLAZE.",
    deps:"Bootstrap CSS + Bootstrap JS + grinclic-forms.css + grinclic-forms.js",
    accessibility:"El formulario usa labels asociados, controles nativos, pestañas Bootstrap con roles, valores SI/NO explícitos y confirmación final antes del submit.",
    snippet:`<!-- Organismo: gc-formulario-clientes -->
    <!-- Uso conceptual: <gc-formulario-clientes></gc-formulario-clientes> -->
    <form class="gc-form-shell" method="post" action="/clientes/actualizar">
      <header class="gc-form-head">
        <div class="gc-form-logo gc-form-logo--demo"><img src="assets/logo-demo.svg" alt="Logo demo de empresa" class="gc-logo-img"></div>
        <div class="gc-form-title">
          <h1>Mis clientes</h1>
          <p>Actualización de información general, ubicación, contactos, configuración comercial e integración.</p>
        </div>
        <div class="gc-history">
          <span><strong>Creado por:</strong> Usuario responsable</span>
          <span><strong>Realizado por:</strong> Usuario responsable</span>
          <span class="gc-last-change"><strong>Último cambio:</strong> 2026-06-09 15:00:35</span>
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
                                <input type="text" class="form-control gc-materialize-time timepicker" data-gc-timepicker="materialize" readonly id="cliente_horario_entrada" name="horario_entrada" value="08:00" required>
                              </div>
                              <div class="col-md-6">
                                <label for="cliente_horario_salida" class="form-label"><span class="gc-required">*</span>Horario salida</label>
                                <input type="text" class="form-control gc-materialize-time timepicker" data-gc-timepicker="materialize" readonly id="cliente_horario_salida" name="horario_salida" value="17:00" required>
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
                                <input type="text" class="form-control gc-materialize-time timepicker" data-gc-timepicker="materialize" readonly id="cliente_horario_entrada_adicional" name="horario_entrada_adicional" value="18:00">
                              </div>
                              <div class="col-md-6">
                                <label for="cliente_horario_salida_adicional" class="form-label">Horario salida adicional</label>
                                <input type="text" class="form-control gc-materialize-time timepicker" data-gc-timepicker="materialize" readonly id="cliente_horario_salida_adicional" name="horario_salida_adicional" value="20:00">
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
            <button class="btn btn-success" type="submit" id="cliente_btn_actualizar" disabled>Actualizar cliente</button>
          </div>
        </div>
      </footer>
    </form>`
  },
  {
    id:"gc-formulario-usuarios",
    group:"Formularios",
    name:"Mis usuarios / Actualizar usuario",
    description:"Organismo administrativo para administrar datos del usuario, acceso al sistema, credenciales, adjuntos y comunicación de credenciales.",
    use:"Usarlo para crear o actualizar usuarios con acceso al sistema, permisos, correo, credenciales y documentos asociados. Las pestañas separan datos, credenciales e información adicional para reducir scroll.",
    avoid:"No pegarlo sin ajustar action, permisos, roles disponibles, cliente asociado, validaciones de contraseña, almacenamiento de adjuntos y reglas reales de notificación por correo.",
    deps:"Bootstrap CSS + Bootstrap JS + grinclic-forms.css + grinclic-forms.js",
    accessibility:"El formulario usa labels asociados, controles nativos, pestañas y acordeones Bootstrap, radiogroups SI/NO con valores explícitos, campos de clave protegidos y confirmación final antes del submit.",
    snippet:`<!-- Organismo: gc-formulario-usuarios -->
<!-- Uso conceptual: <gc-formulario-usuarios></gc-formulario-usuarios> -->
<form class="gc-form-shell" method="post" action="/usuarios/actualizar" enctype="multipart/form-data">
  <header class="gc-form-head">
    <div class="gc-form-logo gc-form-logo--demo"><img src="assets/logo-demo.svg" alt="Logo demo de empresa" class="gc-logo-img"></div>
    <div class="gc-form-title">
      <h1>Mis usuarios</h1>
      <p>Datos del usuario, acceso al sistema, credenciales, adjuntos y comunicación.</p>
    </div>
    <div class="gc-history">
      <span><strong>Creado por:</strong> Usuario responsable</span>
      <span><strong>Realizado por:</strong> Usuario responsable</span>
      <span class="gc-last-change"><strong>Último cambio:</strong> Pendiente</span>
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
        <button class="btn btn-success" type="submit" id="usuario_btn_actualizar" disabled>Actualizar usuario</button>
      </div>
    </div>
  </footer>
</form>`
  },
  {
    id:"gc-formulario-configuraciones",
    group:"Formularios",
    name:"Mis datos / Configuraciones",
    description:"Organismo administrativo para datos generales de empresa, parámetros operativos, alertas y funcionalidades del sistema.",
    use:"Usarlo como formulario principal de configuración de empresa. Las pestañas reducen scroll y los acordeones concentran listas largas de opciones críticas.",
    avoid:"No pegarlo sin ajustar action, permisos, valores precargados, validaciones de backend y names según el modelo de datos real.",
    deps:"Bootstrap CSS + Bootstrap JS + grinclic-forms.css + grinclic-forms.js",
    snippet:`<!-- Organismo: gc-formulario-configuraciones -->
<form class="gc-form-shell" method="post" action="/configuraciones/actualizar" enctype="multipart/form-data">
  <header class="gc-form-head">
    <div class="gc-form-logo gc-form-logo--demo"><img src="assets/logo-demo.svg" alt="Logo demo de empresa" class="gc-logo-img"></div>
    <div class="gc-form-title">
      <h1>Mis datos / Configuraciones</h1>
      <p>Datos generales de la empresa, parámetros operativos, alertas y funcionalidades del sistema.</p>
    </div>
    <div class="gc-history">
      <span><strong>Creado por:</strong> Usuario responsable</span>
      <span><strong>Realizado por:</strong> Usuario responsable</span>
      <span class="gc-last-change"><strong>Ultimo cambio:</strong> Pendiente</span>
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
        <button class="btn btn-success" type="submit" id="btn_actualizar_configuracion" disabled>Actualizar configuración</button>
      </div>
    </div>
  </footer>
</form>`
  },
  {
    id:"gc-formulario-roles",
    group:"Formularios",
    name:"Mis roles / Actualizar rol o perfil",
    description:"Organismo compacto para crear o actualizar roles/perfiles del sistema, con módulo asociado, descripción funcional y cierre con revisión.",
    use:"Usarlo para administrar roles o perfiles que afectan permisos, navegación y acceso a módulos del sistema. El ancho controlado evita que el formulario se vea vacío y mantiene una lectura rápida.",
    avoid:"No pegarlo sin ajustar action, listado real de módulos, validaciones de permisos y reglas de autorización del backend.",
    deps:"Bootstrap CSS + Bootstrap JS + grinclic-forms.css + grinclic-forms.js",
    accessibility:"El formulario usa labels asociados, controles nativos, mensaje informativo visible y confirmación final antes del submit para reducir cambios accidentales en perfiles de acceso.",
    snippet:`<!-- Organismo: gc-formulario-roles -->
<!-- Uso conceptual: <gc-formulario-roles></gc-formulario-roles> -->
<form class="gc-form-shell" method="post" action="/roles/actualizar">
  <header class="gc-form-head">
    <div class="gc-form-logo gc-form-logo--demo"><img src="assets/logo-demo.svg" alt="Logo demo de empresa" class="gc-logo-img"></div>
    <div class="gc-form-title">
      <h1>Mis roles</h1>
      <p>Configuración básica del rol, módulo asociado y descripción funcional.</p>
    </div>
    <div class="gc-history">
      <span><strong>Creado por:</strong> Usuario responsable</span>
      <span><strong>Realizado por:</strong> Usuario responsable</span>
      <span class="gc-last-change"><strong>Último cambio:</strong> Pendiente</span>
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
              <textarea class="form-control" id="rol_descripcion" name="descripcion" rows="4" placeholder="Describe el alcance funcional del rol y los permisos asociados.">Perfil encargado de gestionar solicitudes, revisar manifiestos y consultar información operativa.</textarea>
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
        <button class="btn btn-success" type="submit" id="rol_btn_actualizar" disabled>Actualizar rol</button>
      </div>
    </div>
  </footer>
</form>`
  },
  {
    id:"gc-formulario-elementos-chequeo",
    group:"Formularios",
    name:"Elementos de chequeo / Actualizar elemento de chequeo",
    description:"Organismo operativo para configurar preguntas de chequeo, obligatoriedad, respuesta esperada, clasificación, verificación, sección y orden de visualización.",
    use:"Usarlo para crear o actualizar elementos que impactan listas de chequeo internas o en campo. La estructura compacta permite revisar la configuración principal, clasificación y descripción sin usar pestañas innecesarias.",
    avoid:"No pegarlo sin ajustar action, catálogos reales, reglas de obligatoriedad, dependencias entre tipo de respuesta y respuesta esperada, permisos y validaciones de backend.",
    deps:"Bootstrap CSS + Bootstrap JS + grinclic-forms.css + grinclic-forms.js",
    accessibility:"El formulario usa labels asociados, controles nativos, ayudas cercanas a los campos, selectores para valores controlados y cierre con confirmación antes del submit.",
    snippet:`<!-- Organismo: gc-formulario-elementos-chequeo -->
<!-- Uso conceptual: <gc-formulario-elementos-chequeo></gc-formulario-elementos-chequeo> -->
<form class="gc-form-shell" method="post" action="/elementos-chequeo/actualizar">
  <header class="gc-form-head">
    <div class="gc-form-logo gc-form-logo--demo"><img src="assets/logo-demo.svg" alt="Logo demo de empresa" class="gc-logo-img"></div>
    <div class="gc-form-title">
      <h1>Elementos de chequeo</h1>
      <p>Configuración de preguntas, obligatoriedad, respuesta esperada, sección y orden de visualización.</p>
    </div>
    <div class="gc-history">
      <span><strong>Creado por:</strong> Usuario responsable</span>
      <span><strong>Realizado por:</strong> Usuario responsable</span>
      <span class="gc-last-change"><strong>Último cambio:</strong> Pendiente</span>
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
        <button class="btn btn-success" type="submit" id="chequeo_btn_actualizar" disabled>Actualizar elemento</button>
      </div>
    </div>
  </footer>
</form>`
  }


];
