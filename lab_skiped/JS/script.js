//new user Object
var car_Info = {
  productionYear: "",
  carSeries: "",
  usePurpose: "",
  buildPlace: "" 
}

//methods for car_info objects
car_Info.get_car_series = function() {
  if (document.getElementById("selectSeries")) {
    car_Info.carSeries = document.getElementById("selectSeries").value;
  }
}
car_Info.get_car_production_year = function() {
  if (document.getElementById("selectProductionYear")) {
    car_Info.productionYear = document.getElementById("selectProductionYear").value;
  }
}
car_Info.get_car_use_purpose = function() {
  if (document.getElementById("selectPurpose")) {
    car_Info.usePurpose = document.getElementById("selectPurpose").value;
  }
}
car_Info.get_car_build_place = function() {
  if (document.getElementById("selectBuildPlace")) {
    car_Info.buildPlace = document.getElementById("selectBuildPlace").value;
  }
}

//call object methods to get data from form
car_Info.get_car_series();
car_Info.get_car_build_place();
car_Info.get_car_production_year();
car_Info.get_car_use_purpose();

