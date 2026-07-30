# Plan — Sección "Ejemplos de implementación" por componente

- **Fecha:** 2026-07-30. **Estado:** pendiente de aprobación del usuario.
- **Reemplaza** la feature v1.1 "Módulos relacionados" (chips → galería), rechazada por el usuario.
- **Dato fuente:** `docs/inventario-componentes-cplus.json` — inventario real generado por 11 agentes
  auditando las 34 vistas cplus de grinclic (evidencia archivo:línea por componente, confianza alta/media).

## Objetivo

Que cada componente del catálogo muestre una sección estética (estilo caja de instrucciones) que diga,
en texto plano, **en qué módulos reales de Grinclic está implementado**: nombre del módulo, URL de la
vista (`https://dev.grinclic.com/incluir.php?agregar=N`) y archivo fuente donde vive el markup — para
que el desarrollador vaya al código real, tome la clase y la reuse.

## Inventario (resumen del pivote — detalle completo en el JSON)

> Nota: los conteos provienen de la auditoría cruda (34 vistas). **Declaraciones (114) y Formulario
> declaración (141) están excluidos de los ejemplos publicados** (§4) y no aparecen como destacados;
> siguen contados en el JSON.

| Componente | Módulos con implementación (confianza alta) | Ejemplos destacados (#agregar) |
|---|---|---|
| select-simple | 30 | Usuarios 105, Embalajes 106, Parafiscales 144, Métricas 139 |
| alertas-librerias | 28 | Usuarios 105, Embalajes 106, Manejo residuo 116 |
| campo-texto | 27 | Usuarios 105, Embalajes 106, Sucursales 127 |
| encabezado-formulario | 24 | Usuarios 105, Embalajes 106, Categorías declarado 115 (partial `form-head.php`) |
| textarea | 21 | Embalajes 106, Elementos chequeo 117 |
| checkbox | 9 | Usuarios 105, Parafiscales 144, Elementos chequeo 117 |
| campo-fecha | 4 (8 total) | Usuarios 105, Parafiscales 144, Mesa de ayuda 148 |
| radio-si-no | 3 | Usuarios 105 (único publicado) |
| pestanas-internas | 2 | Usuarios 105, Roles 124 |
| opciones-acordeon | 2 (3 total) | Unidades de negocio 120, Roles 124 |
| carga-pdf | 2 (4 total) | Parafiscales 144 (único publicado) |
| seleccion-busqueda | 1 (9 total) | Usuarios 105 (`data-gc-search-select`) |
| seleccion-multiple-busqueda | 1 (5 total) | Sucursales 127 |
| seleccion-multiple-desplegable | 0 alta publicable (3 total) | Variantes propias: Usuarios 105, Proveedores 128 |
| campo-hora / campo-horario | 1 c/u | Sucursales 127 |
| campo-password | 0 alta (1 media) | Usuarios 105 (variante propia: `data-gc-rule="password"`, no `type=password`) |
| campo-validado | 0 alta (3 media) | Usuarios 105 / Embalajes 106: `gc-help` como texto estático, sin botón `?` |
| carga-logo-imagen | 0 alta (1 media) | Proveedores 128 (variante propia con croppie, `input_type_image`) |

Confianza **media** = el módulo implementa el patrón con una variante propia (clases distintas al
catálogo); se incluye marcado como "variante propia" en el detalle.

## Cambios

### 1. Revertir v1.1 (chips "Módulos relacionados")

En `index.html`: quitar CSS `.gc-related-*`, `renderRelatedModules()`, su llamada en `renderDoc`, el
binding `[data-related-module]` y el check del selftest. En `data/componentes.js`: quitar
`modules:["demo"]` del acordeón. En `README.md`: la receta v1.1 se reemplaza por la nueva (§5).

### 2. Modelo de datos — campo opcional `implementations`

```js
implementations: [
  {
    module: "Usuarios",            // nombre visible del módulo
    agregar: 105,                   // id de la vista → URL incluir.php?agregar=105
    file: "cplus/views/mostrarUsuarios.php",  // archivo(s) fuente donde tomar la clase
    detail: "Formulario con tabs: nombre, cédula, teléfono… (líneas 310-722)"  // opcional
  },
]
```

La URL se construye en el visor: `GC_APP_BASE + agregar`, con
`var GC_APP_BASE = window.GC_APP_BASE || "https://dev.grinclic.com/incluir.php?agregar=";`
declarada en `index.html` (una línea, sobreescribible si cambia el ambiente).

### 3. Render — sección "Ejemplos de implementación"

Ubicación: entre el preview y "Código HTML para copiar". Estética alineada a la caja de instrucciones
(fondo suave, borde, título de sección):

```
┌─────────────────────────────────────────────────────────────┐
│ EJEMPLOS DE IMPLEMENTACIÓN                                   │
│ Módulos reales donde este componente ya está implementado;   │
│ abre la vista o el archivo para tomar la clase.              │
│                                                              │
│ Usuarios                                                     │
│   https://dev.grinclic.com/incluir.php?agregar=105  [enlace] │
│   cplus/views/mostrarUsuarios.php  [<code>]                  │
│   Formulario con tabs: nombre, cédula, teléfono…             │
│ ────────────────────────────────────────────────             │
│ Embalajes                                                    │
│   https://dev.grinclic.com/incluir.php?agregar=106           │
│   cplus/views/mostrarEmbalajes.php                           │
└─────────────────────────────────────────────────────────────┘
```

- URL en texto plano visible Y clicable (target _blank).
- Archivo en `<code>` (texto plano, para copiar la ruta).
- `detail` en texto secundario si existe. Variantes propias marcadas "(variante propia)".
- Componente sin `implementations` → la sección no se muestra (cero ruido).
- Solo nivel componente (no por variante) — YAGNI.

### 4. Población masiva desde el inventario

**Exclusión (decisión del usuario 2026-07-30):** Declaraciones (agregar 114) y Formulario declaración
(agregar 141) NO se publican como ejemplos — el módulo no está terminado. Sus entradas siguen en el
inventario JSON para cuando se termine.

Poblar `implementations` en los 19 componentes con datos del JSON, curado así:

- Componentes ubicuos (select-simple, campo-texto, alertas, textarea, encabezado, checkbox): **4-6
  ejemplos representativos**, priorizando los módulos que el usuario nombró (usuarios, sucursales,
  embalajes, métricas, tutoriales, mesa de ayuda) y los pilotos de oro. El resto no se lista (ruido).
- Componentes escasos: todos sus módulos con confianza alta.
- Solo-media (campo-password, campo-validado, carga-logo-imagen): se incluyen con "(variante propia)"
  y nota de en qué difiere, tomada de la evidencia del JSON.
- `file` = el archivo principal de `formLocation`/evidencia; si el markup vive en JS, ese archivo.

### 5. README + selftest

- Nueva receta "Documentar ejemplos de implementación real" (campo `implementations`, de dónde sacar
  el `agregar`, convención de curado). Changelog **v1.2** anotando el reemplazo de v1.1.
- Selftest: check "ejemplos de implementación visibles" (campo-texto debe renderizar la sección) en
  lugar del check de chips. Total sigue en 8 checks.

### 6. Verificación

`node --check` ambos data files; selftest `SELFTEST OK (8 checks)` headless desde Bash; cero
mojibake; smoke visual del usuario (sección visible en campo-texto, enlace abre la vista, archivo
copiable).

## Fuera de alcance

Enlazar líneas exactas por campo (el `detail` textual basta), sincronización automática con el código
(el inventario JSON queda como fuente para refrescos manuales), y ejemplos por variante.
