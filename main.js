var dati = {
    "Emilia Romagna": {
      "Parma": ["Parma", "Fidenza", "Langhirano"],
      "Reggio Emilia": ["Reggio Emilia", "Correggio", "Scandiano"]
    },
    "Lombardia": {
      "Milano": ["Milano", "Legnano", "Rho"],
      "Brescia": ["Brescia", "Desenzano", "Gardone"]
    }
  };
  
  window.onload = function() {
    var regioni = Object.keys(dati);
    var selectRegione = document.getElementById("regione");
    for(var i = 0; i < regioni.length; i++) {
      var opzione = document.createElement("option");
      opzione.text = regioni[i];
      opzione.value = regioni[i];
      selectRegione.add(opzione);
    }
  };
  
  function aggiornaProvince() {
    var selectRegione = document.getElementById("regione");
    var selectProvincia = document.getElementById("provincia");
    selectProvincia.innerHTML = "<option value=''>Seleziona provincia</option>";
    document.getElementById("comune").innerHTML = "<option value=''>Seleziona comune</option>";
    var province = Object.keys(dati[selectRegione.value]);
    for(var i = 0; i < province.length; i++) {
      var opzione = document.createElement("option");
      opzione.text = province[i];
      opzione.value = province[i];
      selectProvincia.add(opzione);
    }
  };
  
  function aggiornaComuni() {
    var selectRegione = document.getElementById("regione");
    var selectProvincia = document.getElementById("provincia");
    var selectComune = document.getElementById("comune");
    selectComune.innerHTML = "<option value=''>Seleziona comune</option>";
    var comuni = dati[selectRegione.value][selectProvincia.value];
    for(var i = 0; i < comuni.length; i++) {
      var opzione = document.createElement("option");
      opzione.text = comuni[i];
      opzione.value = comuni[i];
      selectComune.add(opzione);
    }
  };
  

