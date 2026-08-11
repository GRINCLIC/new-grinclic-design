# Biblioteca viva de componentes UI — Grinclic cplus

Catálogo de componentes de formularios y patrones UI de Grinclic, más la galería de mockups de los
módulos ya migrados a cplus. Basada en la entrega **Formularios_v3 v33** de diseño; esta copia en el
repo es la **fuente canónica viva** — las entregas futuras de diseño se integran editando esta carpeta.

## Cómo abrirla

Doble clic en `index.html`. No necesita servidor, PHP ni instalación — solo un navegador con internet
(las dependencias Bootstrap/Flatpickr/SweetAlert2 cargan por CDN).

## Estructura

```text
index.html          Visor único del catálogo y la galería
data/componentes.js Componentes del catálogo (window.GC_COMPONENTS)
data/mockups.js     Módulos migrados con mockups (window.GC_MOCKUPS)
assets/             CSS/JS de la capa visual Grinclic + logos
ejemplos/           Formularios completos standalone (abren con doble clic)
mockups/<modulo>/   Capturas numeradas de cada módulo migrado
```

## Receta: agregar un componente

1. Abre `data/componentes.js` y copia un objeto existente del grupo que corresponda
   (`Acciones`, `Campos`, `Bloques`, `Listados`, `Modales`, `Feedback`, `Organización` o `Formularios`).
2. Cambia `id` (único, kebab-case), `name`, `description`, `use`, `avoid`, `deps` y `accessibility`.
3. Pon el HTML del ejemplo en `snippet` (es lo que el desarrollador copia). Si aplica, agrega
   `states: { enabled, error, disabled }` con el HTML de cada estado.
4. Usa las clases reales de producción cplus. Si el snippet ya está contrastado contra
   `cplus/scss/`, agrega `verified: true` (badge "Verificado cplus"); si no, omítelo (badge "Diseño").
5. Guarda y refresca el navegador. No hay build.

## Receta: agregar una variante a un componente

Cuando un componente tiene versiones (ej. acordeón simple / con botones / con columnas), usa `variants`:

```js
variants: [
  { name: "Simple", description: "…", snippet: "…", preview: "…" },
  { name: "Con columnas", snippet: "…", example: "ejemplos/mi-ejemplo.html" }
]
```

- `snippet` es obligatorio por variante; `preview`, `states`, `description` y `example` son opcionales.
- `example` (ruta relativa a `index.html`) muestra el botón **Ver ejemplo completo** — úsalo para
  patrones grandes (tipo residuos inventariables) que no caben en el visor.
- Un componente sin `variants` se comporta como siempre.

## Receta: documentar ejemplos de implementación real

Cada componente puede mostrar la sección **Ejemplos de implementación** (entre el preview y el código
copiable): los módulos reales de Grinclic donde ya está implementado, con la URL de la vista y el
archivo fuente donde tomar la clase. Se declara con el campo `implementations`:

```js
implementations: [
  { module: "Usuarios", agregar: 105, file: "cplus/views/mostrarUsuarios.php",
    detail: "Formulario con tabs: nombre, cédula, teléfono… (líneas 310-603)" },
]
```

- `agregar` es el id de la vista: la URL se arma como `https://dev.grinclic.com/incluir.php?agregar=N`
  (base cambiable definiendo `window.GC_APP_BASE` antes de cargar el visor).
- `catalogExamples: ["gc-formulario-usuarios"]` (opcional) agrega la fila **"Verlo ya usado en esta
  biblioteca"**: enlaces internos a los formularios completos del grupo Formularios donde el
  componente aparece en contexto, sin salir del visor.
- `file` es el archivo fuente (vista PHP o JS de entidad) — se muestra como código para copiar la ruta.
- Implementaciones que difieren del catálogo se marcan con `(variante propia)` en `detail`.
- Curado: máximo 4-6 ejemplos representativos por componente; módulos sin terminar no se listan.
- El inventario completo (34 vistas auditadas, con evidencia) vive en
  `docs/inventario-componentes-cplus.json`; el plan en `docs/2026-07-30-ejemplos-implementacion-PLAN.md`.

## Receta: agregar mockups de un módulo migrado

1. Crea la carpeta `mockups/<modulo>/` — nombre en minúsculas, sin espacios ni acentos.
2. Guarda las capturas numeradas **sin huecos**: `01.png`, `02.png`, `03.png`… (también `.jpg`).
   Un hueco en la numeración corta la lista.
3. Solo la primera vez: agrega la línea del módulo en `data/mockups.js`:
   `{ folder: "mimodulo", name: "Nombre visible" },`
4. Refresca. Las imágenes siguientes que agregues aparecen solas.

## Receta: agregar un ejemplo completo

1. Copia un HTML de `ejemplos/` como base (ya incluye los CDNs y `../assets/grinclic-forms.css`).
2. Ajusta el contenido; verifica que abre con doble clic.
3. Enlázalo desde el componente o variante con `example: "ejemplos/tu-archivo.html"`.

## Convenciones

- **Badges**: "Verificado cplus" = el snippet usa las clases reales de producción (`cplus/scss/`);
  "Diseño" = aún refleja la entrega de diseño y puede requerir traducción de clases.
- Sin librerías nuevas, sin build, sin PHP, sin `fetch` (los datos van en `.js` por `<script>`
  porque `file://` bloquea JSON).
- El selftest del visor corre abriendo `index.html?selftest=1` (banner al final de la página).
- Esta biblioteca no modifica `cplus/scss/`. Si al verificar un componente encuentras divergencia
  entre diseño y producción, repórtala — decidir cuál manda es decisión de producto.

## Changelog

- **v1.7 (2026-08-11)** — La entrada `checkbox` (grupo Campos) se reestructura a **dos variantes**:
  «Estándar» (checkbox suelto + confirmación de revisión gc-review, estados enabled/error/disabled)
  y **«Tarjeta de opción (gc-check-card)»** con estados propios normal/marcado/disabled y snippet real
  de `cplus/views/mostrarDatos.php` (incluida la trampa del checkbox invertido `checkdupcampos value="0"`).
  Suma las implementaciones de Mis datos (150) y de la clase compartida `cplus/scss/_gc-forms.scss:418-429`,
  cita corregida también en `checklist-opciones` (antes 435-447, desplazada). Además, `tabla-campos-opciones`
  suma la variante **«Campos personalizados Manifiesto»** — el diseño aprobado del prototipo Tabla_checkbox:
  tabla de 7 columnas (título, unidad, formato, MF recolección/recepción con obligatoriedad) más las tres
  opciones como tarjetas `gc-check-card` con `gc-help-button`, todo con los nombres del contrato BFF
  (`campoN`, `campoNUnidad`, `formatoN`, `campoNMfRecoleccion/Recepcion`, `campoNOblig/Oblig2`,
  `oblig_pesos_globales`, `hab_precio_descarga`, `hab_tirilla_descarga`), pendiente de implementar en CPlus —
  y el ejemplo `gc-formulario-configuraciones` reemplaza su pestaña «Campos Manifiesto» (acordeones por campo)
  por ese mismo diseño, ahora enlazado desde `catalogExamples` de la entrada. Sin entradas nuevas: 39 en
  total, 24 verificadas; `verified` de `checkbox` sigue aplicando solo a la variante Estándar (ver `note`).
- **v1.6 (2026-08-10)** — El catálogo se alinea al **encabezado único de pantalla `gc-page-header`**
  (`cplus/views/partials/page-head.php`, en producción desde el 2026-08-10): `encabezado-formulario` y
  `encabezado-modulo` se reescriben como las dos caras del parcial (formulario con retícula de
  auditoría y listado `--table-simple`), los 6 `ejemplos/*.html` y los 5 organismos `gc-formulario-*`
  migran su encabezado, la variante «Nuevo del encabezado de módulo» de `boton` pasa a
  `gc-page-header__actions` y `assets/grinclic-forms.css` suma el espejo visor de
  `_gc-page-header.scss`. Entradas nuevas: `tabla-campos-opciones` (tabla de campos personalizados de
  Mis datos con `gc-table-card`/`gc-table-scroll`/`gc-field-table`) y `checklist-opciones` (grilla de
  tarjetas checkbox `gc-check-card` de los acordeones de Mis datos; traduce el prototipo Tabla_checkbox
  al sistema). La variante «Trazabilidad» de `modal` se actualiza al rediseño v2 (encabezado blanco,
  botón «Entendido»). El catálogo pasa de 37 a **39 entradas** (24 verificadas; las dos nuevas quedan
  sin verificar porque Mis datos sigue parcial en el ledger).
- **v1.5 (2026-08-10)** — Verde primario del visor unificado a `#328539`, el mismo de
  `.erp-btn-primary`: `gc-module-btn` deja su verde propio y `assets/grinclic-forms.css` suma el
  espejo visor del kit `erp-btn`. El acordeón de unidades de negocio gana la columna «Acciones» y
  paridad con el mockup.
- **v1.4 (2026-08-05)** — Barrido completo de patrones generales cplus: el catálogo pasa de 24 a 37
  entradas con `boton`, `botonera-formulario`, `acciones-de-fila`, `modal`, `tabla-listado`,
  `filtros-listado`, `loader-overlay`, `estado-vacio`, `encabezado-modulo` y `badge-estado`, cada una
  contrastada contra `cplus/scss/` y vistas productivas (`verified: true` sube de 11 a 24). Los grupos
  del visor pasan de 5 a 8: `Advertencias` se renombra `Feedback` y se agregan `Acciones`, `Listados` y
  `Modales`. El buscador ahora indexa nombre, id y descripción (antes solo nombre) y el selftest crece de
  9 a 13 checks. `assets/grinclic-forms.css` suma 11 secciones "Espejo visor" que replican estilos
  productivos solo para el preview: se editan aquí, nunca se copian de vuelta a producción. Las
  divergencias biblioteca↔producción halladas en el barrido se reportan aparte; esta biblioteca sigue
  sin modificar `cplus/scss/`.
- **v1.3 (2026-07-30)** — Sección de ejemplos re-estilada con la familia visual del catálogo
  (variables `--gc-*`, grid 128px) + fila **"Verlo ya usado en esta biblioteca"** (campo
  `catalogExamples`): enlaces internos a los formularios completos donde el componente aparece usado.
- **v1.2 (2026-07-30)** — Sección **Ejemplos de implementación** por componente (campo
  `implementations`): módulos reales con URL de la vista y archivo fuente, poblada en 19 componentes
  desde el inventario de las 34 vistas cplus. Reemplaza y elimina los chips "Módulos relacionados" de
  v1.1. Declaraciones excluida de los ejemplos (módulo sin terminar).
- **v1.1 (2026-07-30)** — Apartado **Módulos relacionados** por componente (campo `modules`): chips
  que enlazan a la galería de mockups del módulo donde está implementado. *(Revertido en v1.2.)*
- **v1 (2026-07-29)** — Base tomada de Formularios_v3 v33 de diseño + buscador + variantes por
  componente + badges de verificación + galería de mockups de módulos migrados.
