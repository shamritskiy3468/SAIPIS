//new user Object
var car_Info = {
  productionYear: "111",
  carSeries: "111",
  usePurpose: "111",
  buildPlace: "111" 
};

var help = {
  productionYear: "111",
  carSeries: "111",
  usePurpose: "111",
  buildPlace: "111" 
};

//methods for car_info objects


car_Info.get_car_series = function() {
  if (document.getElementById("selectSeries")) {
    car_Info.carSeries = document.getElementById("selectSeries").value;
  }
};
car_Info.get_car_production_year = function() {
  if (document.getElementById("selectProductionYear")) {
    car_Info.productionYear = document.getElementById("selectProductionYear").value;
  }
};
car_Info.get_car_use_purpose = function() {
  if (document.getElementById("selectPurpose")) {
    car_Info.usePurpose = document.getElementById("selectPurpose").value;
  }
};
car_Info.get_car_build_place = function() {
  if (document.getElementById("selectBuildPlace")) {
    car_Info.buildPlace = document.getElementById("selectBuildPlace").value;
  }
};

function checkStorageAndFillList() {
  var size = localStorage.length;
  var inner = 0;
  if (size != 0) {
    for(inner = 0; inner < size; inner++) {
      var x = document.getElementById("IDs");
      var option = document.createElement("option");
      option.text = "ID_" + localStorage.key(inner);
      x.add(option); 
    }
  }
}

checkStorageAndFillList();

//call object methods to get data from form
window.onload = function() {
  takeDataFromLocalStorage();
  document.getElementById('submit').onclick = function() {
    car_Info.get_car_series();
    car_Info.get_car_build_place();
    car_Info.get_car_production_year();
    car_Info.get_car_use_purpose();
    var number = localStorage.length;
    localStorage.setItem(number+1, JSON.stringify(car_Info));
    fullTableWithCar(car_Info);
    var x = document.getElementById("IDs");
    var option = document.createElement("option");
    option.text = "ID_" + (number+1);
    option.value = number;
    x.add(option); 
  };
};
//cleaer LocalStorage
function resetLocalStorage() {
  window.localStorage.clear();
  var select = document.getElementById("IDs");
  var length = select.options.length;
  for (i = length - 1; i > 0; i--) {
    select.options[i] = null;
  }
}
//close page 
function closePage() {
  window.close();
}

function takeDataFromLocalStorage() {
  var j;
  for(j = 0; j < localStorage.length; j++) {
    help = JSON.parse(localStorage.getItem(localStorage.key(j)));
    var table = document.getElementById("output");
    var row = table.insertRow(-1);
    
    var cell_ID = row.insertCell(0);
    var cell_1 = row.insertCell(1);
    var cell_2 = row.insertCell(2);
    var cell_3 = row.insertCell(3);
    var cell_4 = row.insertCell(4);

    cell_ID.innerHTML = localStorage.key(j);
    cell_1.innerHTML = help.carSeries;
    cell_2.innerHTML = help.usePurpose;
    cell_3.innerHTML = help.productionYear;
    cell_4.innerHTML = help.buildPlace;
  }
}

function fullTableWithCar(car_Info) {
  var table = document.getElementById("output");
  var row = table.insertRow(-1);
  
  var cell_ID = row.insertCell(0);
  var cell_1 = row.insertCell(1);
  var cell_2 = row.insertCell(2);
  var cell_3 = row.insertCell(3);
  var cell_4 = row.insertCell(4);
    
  cell_ID.innerHTML = (localStorage.length);
  cell_1.innerHTML = car_Info.carSeries;
  cell_2.innerHTML = car_Info.usePurpose;
  cell_3.innerHTML = car_Info.productionYear;
  cell_4.innerHTML = car_Info.buildPlace;
}

document.getElementById('deleteItem').onclick = function() {
  if (localStorage.length == 0) {
    alert("There is nothing to delete");
  }
  if (document.getElementById("IDs").value == "undefined") {
    alert("Choose element, please!");
  }
  else {
    var value = document.getElementById("IDs").value.split("");
    var index = value[3];
    localStorage.removeItem(index);
    alert("Item Was Successfully deleted!");
    var x = document.getElementById("IDs");
    x.remove(x.selectedIndex);
  }
};