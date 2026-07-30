(function(){
  function copyText(text, button){
    if(navigator.clipboard && window.isSecureContext){
      navigator.clipboard.writeText(text).then(function(){ markCopied(button); });
      return;
    }

    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try{ document.execCommand("copy"); } finally{ textarea.remove(); }
    markCopied(button);
  }

  function markCopied(button){
    if(!button) return;
    var previous = button.textContent;
    button.textContent = "Copiado";
    setTimeout(function(){ button.textContent = previous || "Copiar"; }, 1400);
  }

  function bindHelpToggles(root){
    root.querySelectorAll("[data-gc-toggle]").forEach(function(button){
      if(button.dataset.gcBound) return;
      button.dataset.gcBound = "true";
      button.addEventListener("click", function(){
        var target = document.getElementById(button.dataset.gcToggle);
        if(target) target.classList.toggle("is-open");
      });
    });
  }

  function bindBootstrapPopovers(root){
    if(!window.bootstrap || !window.bootstrap.Popover) return;
    root.querySelectorAll('[data-bs-toggle="popover"]').forEach(function(button){
      if(button.dataset.gcPopoverBound) return;
      button.dataset.gcPopoverBound = "true";
      window.bootstrap.Popover.getOrCreateInstance(button, {
        trigger: button.getAttribute("data-bs-trigger") || "focus",
        placement: button.getAttribute("data-bs-placement") || "right",
        customClass: "gc-help-popover",
        container: "body"
      });
    });
  }

  function bindReviewChecks(root){
    root.querySelectorAll("[data-gc-review-check]").forEach(function(check){
      if(check.dataset.gcBound) return;
      check.dataset.gcBound = "true";
      var target = document.querySelector(check.dataset.gcReviewCheck);
      var sync = function(){ if(target) target.disabled = !check.checked; };
      check.addEventListener("change", sync);
      sync();
    });
  }

  function bindSearchSelects(root){
    root.querySelectorAll("[data-gc-search-select]").forEach(function(wrapper){
      if(wrapper.dataset.gcBound) return;
      wrapper.dataset.gcBound = "true";

      var hidden = wrapper.querySelector("input[type='hidden']");
      var trigger = wrapper.querySelector("[data-gc-search-label]");
      var search = wrapper.querySelector("[data-gc-search-input]");
      var options = Array.prototype.slice.call(wrapper.querySelectorAll("[data-gc-option]"));

      options.forEach(function(option){
        option.addEventListener("click", function(event){
          event.preventDefault();
          var value = option.dataset.gcOption || option.textContent.trim();
          if(hidden) hidden.value = value;
          if(trigger) trigger.textContent = option.textContent.trim();
          options.forEach(function(item){ item.classList.remove("active"); });
          option.classList.add("active");
        });
      });

      if(search){
        search.addEventListener("input", function(){
          var q = search.value.toLowerCase();
          options.forEach(function(option){
            option.style.display = option.textContent.toLowerCase().indexOf(q) >= 0 ? "" : "none";
          });
        });
      }
    });
  }

  function bindMultiselects(root){
    root.querySelectorAll("[data-gc-multiselect]").forEach(function(wrapper){
      if(wrapper.dataset.gcBound) return;
      wrapper.dataset.gcBound = "true";

      var summary = wrapper.querySelector("[data-gc-multiselect-summary]");
      var search = wrapper.querySelector("[data-gc-multiselect-search]");
      var checks = Array.prototype.slice.call(wrapper.querySelectorAll("input[type='checkbox']"));
      var refresh = function(){
        var selected = checks.filter(function(check){ return check.checked; }).map(function(check){
          var label = wrapper.querySelector("label[for='" + check.id + "']");
          return label ? label.textContent.trim() : check.value;
        });
        if(summary) summary.textContent = selected.length ? "Seleccionados: " + selected.join(", ") : "Seleccionados: ninguno";
      };

      checks.forEach(function(check){ check.addEventListener("change", refresh); });
      if(search){
        search.addEventListener("input", function(){
          var q = search.value.toLowerCase();
          checks.forEach(function(check){
            var label = wrapper.querySelector("label[for='" + check.id + "']");
            var item = check.closest(".form-check");
            var text = label ? label.textContent.toLowerCase() : check.value.toLowerCase();
            if(item) item.classList.toggle("is-hidden", text.indexOf(q) < 0);
          });
        });
      }
      refresh();
    });
  }


  function bindFlatpickr(root){
    if(typeof window.flatpickr === "undefined") return;
    root.querySelectorAll("[data-gc-flatpickr]").forEach(function(input){
      if(input.dataset.gcFlatpickrBound) return;
      input.dataset.gcFlatpickrBound = "true";
      var mode = input.dataset.gcFlatpickr;
      var config = {allowInput:false, disableMobile:true};
      if(mode === "datetime"){
        config.enableTime = true;
        config.time_24hr = true;
        config.dateFormat = "Y-m-d H:i";
      }else{
        config.dateFormat = "Y-m-d";
      }
      window.flatpickr(input, config);
    });
  }

  function bindMaterializeTimepickers(root){
    if(!window.M || !window.M.Timepicker) return;
    root.querySelectorAll('[data-gc-timepicker="materialize"]').forEach(function(input){
      if(input.dataset.gcTimepickerBound) return;
      input.dataset.gcTimepickerBound = "true";
      var instance = window.M.Timepicker.init(input, {
        twelveHour:false,
        autoClose:false,
        showClearBtn:true,
        defaultTime: input.value || "now",
        i18n:{
          cancel:"Cancelar",
          clear:"Limpiar",
          done:"Aceptar"
        }
      });
      input.addEventListener("keydown", function(event){ event.preventDefault(); });
      input.addEventListener("click", function(){
        var picker = window.M.Timepicker.getInstance(input) || instance;
        if(picker && typeof picker.open === "function") picker.open();
      });
    });
  }

  function bindSweetAlertDemos(root){
    if(!window.Swal) return;
    root.querySelectorAll("[data-gc-swal-demo]").forEach(function(button){
      if(button.dataset.gcSwalBound) return;
      button.dataset.gcSwalBound = "true";
      button.addEventListener("click", function(){
        var type = button.dataset.gcSwalDemo;
        var modalBase = {
          buttonsStyling:false,
          customClass:{
            popup:"gc-swal-popup",
            title:"gc-swal-title",
            htmlContainer:"gc-swal-text",
            confirmButton:"btn btn-success gc-swal-confirm",
            cancelButton:"btn btn-outline-secondary gc-swal-cancel"
          }
        };
        var gcAlert = window.Swal.mixin(modalBase);
        function toast(title, icon, tone){
          window.Swal.mixin({
            toast:true,
            position:"top-end",
            showConfirmButton:false,
            timer:3200,
            timerProgressBar:true,
            buttonsStyling:false,
            customClass:{
              popup:"gc-swal-toast gc-swal-toast--" + (tone || "success"),
              title:"gc-swal-toast-title"
            }
          }).fire({icon:icon || "success", title:title});
        }

        if(type === "modal-update" || type === "confirm"){
          gcAlert.fire({icon:"warning",title:"¿Confirmas la actualización?",html:"Revisa que los datos sensibles y configuraciones críticas estén correctos antes de continuar.",showCancelButton:true,confirmButtonText:"Sí, actualizar",cancelButtonText:"Cancelar",reverseButtons:true});
        }else if(type === "modal-delete"){
          window.Swal.mixin({
            buttonsStyling:false,
            customClass:{popup:"gc-swal-popup",title:"gc-swal-title",htmlContainer:"gc-swal-text",confirmButton:"btn gc-swal-confirm--warning",cancelButton:"btn btn-outline-secondary gc-swal-cancel"}
          }).fire({icon:"warning",title:"¿Eliminar este registro?",html:"Esta acción puede afectar información asociada. Confirma solo si ya validaste la trazabilidad.",showCancelButton:true,confirmButtonText:"Sí, eliminar",cancelButtonText:"Cancelar",reverseButtons:true});
        }else if(type === "modal-sensitive"){
          gcAlert.fire({icon:"warning",title:"Cambio sensible",html:"Este ajuste puede modificar permisos, navegación o reglas operativas del sistema.",showCancelButton:true,confirmButtonText:"Continuar",cancelButtonText:"Volver",reverseButtons:true});
        }else if(type === "modal-error" || type === "error"){
          window.Swal.mixin({
            buttonsStyling:false,
            customClass:{popup:"gc-swal-popup",title:"gc-swal-title",htmlContainer:"gc-swal-text",confirmButton:"btn gc-swal-confirm--warning"}
          }).fire({icon:"error",title:"No fue posible continuar",html:"Revisa los campos obligatorios o intenta nuevamente.",confirmButtonText:"Entendido"});
        }else if(type === "modal-success"){
          gcAlert.fire({icon:"success",title:"Acción completada",html:"La actualización finalizó correctamente.",confirmButtonText:"Entendido"});
        }else if(type === "toast-copied"){
          toast("Código copiado.", "success", "success");
        }else if(type === "toast-uploaded"){
          toast("Archivo cargado correctamente.", "success", "success");
        }else if(type === "toast-filtered"){
          toast("Filtro aplicado.", "warning", "warning");
        }else if(type === "toast-updated"){
          toast("Registro actualizado.", "success", "success");
        }else if(type === "toast-warning"){
          toast("Revisa la información antes de continuar.", "warning", "warning");
        }else{
          toast("Cambios guardados.", "success", "success");
        }
      });
    });
  }

  function bindImagePreviews(root){
    root.querySelectorAll("[data-gc-image-preview-input]").forEach(function(input){
      if(input.dataset.gcImagePreviewBound) return;
      input.dataset.gcImagePreviewBound = "true";
      input.addEventListener("change", function(){
        var file = input.files && input.files[0];
        if(!file || !file.type || file.type.indexOf("image/") !== 0) return;
        var modalSelector = input.dataset.gcImagePreviewTarget;
        var modal = modalSelector ? document.querySelector(modalSelector) : (input.closest("form") ? input.closest("form").querySelector(".modal") : null);
        if(!modal) return;
        var output = modal.querySelector("[data-gc-image-preview-output]");
        var name = modal.querySelector("[data-gc-image-preview-name]");
        if(!output) return;
        var url = URL.createObjectURL(file);
        output.src = url;
        output.alt = "Vista previa de " + file.name;
        if(name) name.textContent = file.name;
        if(window.bootstrap && window.bootstrap.Modal){
          window.bootstrap.Modal.getOrCreateInstance(modal).show();
        }
      });
    });
  }



  function bindBusinessUnitGuides(root){
    root.querySelectorAll("[data-gc-business-guide]").forEach(function(guide){
      if(guide.dataset.gcBusinessBound) return;
      guide.dataset.gcBusinessBound = "true";

      function cssEscape(value){
        if(window.CSS && typeof window.CSS.escape === "function") return window.CSS.escape(value);
        return String(value).replace(/([ #;?%&,.+*~\':"!^$[\]()=>|\/@])/g, "\\$1");
      }

      function getToggleForCollapse(collapse){
        if(!collapse || !collapse.id) return null;
        return guide.querySelector('[data-bs-target="#' + cssEscape(collapse.id) + '"], a[href="#' + cssEscape(collapse.id) + '"]');
      }

      function syncAccordionState(collapse, isOpen){
        var toggle = getToggleForCollapse(collapse);
        if(!toggle) return;
        var head = toggle.closest(".gc-business-unit-head");
        var icon = toggle.querySelector("i");
        toggle.classList.toggle("collapsed", !isOpen);
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        if(icon){
          icon.classList.toggle("bi-chevron-down", isOpen);
          icon.classList.toggle("bi-chevron-right", !isOpen);
        }
        if(head){
          head.classList.toggle("is-open", isOpen);
          head.classList.toggle("collapsed-row", !isOpen);
        }
      }

      // Estado inicial: convierte el ejemplo en una plantilla útil para desarrollo.
      guide.querySelectorAll(".accordion-collapse").forEach(function(collapse){
        syncAccordionState(collapse, collapse.classList.contains("show"));
        collapse.addEventListener("shown.bs.collapse", function(){ syncAccordionState(collapse, true); });
        collapse.addEventListener("hidden.bs.collapse", function(){ syncAccordionState(collapse, false); });
      });

      guide.querySelectorAll("[data-gc-business-search]").forEach(function(input){
        var table = guide.querySelector(input.dataset.gcBusinessSearch);
        if(!table) return;
        var rows = Array.prototype.slice.call(table.querySelectorAll("tbody tr"));
        var total = rows.length;
        var count = guide.querySelector("[data-gc-business-count]");
        var footer = guide.querySelector("[data-gc-business-footer]");
        function normalize(text){
          return String(text || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
        }
        function refresh(){
          var value = normalize(input.value);
          var visible = 0;
          rows.forEach(function(row){
            var show = normalize(row.innerText).indexOf(value) >= 0;
            row.style.display = show ? "" : "none";
            if(show) visible += 1;
          });
          if(count) count.textContent = "(" + visible + ")";
          if(footer) footer.textContent = visible ? "Mostrando 1 a " + visible + " de " + total + " registros" : "Mostrando 0 de " + total + " registros";
        }
        input.addEventListener("input", refresh);
        refresh();
      });
    });
  }

  function bindCopyButtons(root){
    root.querySelectorAll("[data-gc-copy]").forEach(function(button){
      if(button.dataset.gcBound) return;
      button.dataset.gcBound = "true";
      button.addEventListener("click", function(){
        var target = document.querySelector(button.dataset.gcCopy);
        copyText(target ? target.textContent : "", button);
      });
    });
  }

  window.GrinclicForms = {
    init:function(root){
      root = root || document;
      bindHelpToggles(root);
      bindBootstrapPopovers(root);
      bindReviewChecks(root);
      bindSearchSelects(root);
      bindMultiselects(root);
      bindFlatpickr(root);
      bindMaterializeTimepickers(root);
      bindImagePreviews(root);
      bindSweetAlertDemos(root);
      bindBusinessUnitGuides(root);
      bindCopyButtons(root);
    }
  };

  if(typeof document !== "undefined"){
    document.addEventListener("DOMContentLoaded", function(){
      window.GrinclicForms.init(document);
    });
  }
})();
