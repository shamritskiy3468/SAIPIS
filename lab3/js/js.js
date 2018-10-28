var personInfo = {
    name: "",
    compositionFurtiture: "",
    typeDeliveryRadio: "Самовывоз",
    dateDelivery: "",
    furtiture: "",
    coment: ""
};
window.onload = function () {


    document.getElementById('submit').onclick = function () {

        personInfo.name = document.forms["myform"].elements["uname"].value;
        personInfo.compositionFurtiture = document.forms["myform"].elements["menu"].value;
        personInfo.dateDelivery = document.forms["myform"].elements["start"].value;
        personInfo.coment = document.forms["myform"].elements["comment"].value;

        const checkbox1 = document.forms["myform"].elements["checkbox1"];
        if (checkbox1.checked)
            personInfo.furtiture = personInfo.furtiture + "Кресла ";
        const checkbox2 = document.forms["myform"].elements["checkbox2"];
        if (checkbox2.checked)
            personInfo.furtiture = personInfo.furtiture + "Диваны ";
        const checkbox3 = document.forms["myform"].elements["checkbox3"];
        if (checkbox3.checked)
            personInfo.furtiture = personInfo.furtiture + "Банкетки ";
        const checkbox4 = document.forms["myform"].elements["checkbox4"];
        if (checkbox4.checked)
            personInfo.furtiture = personInfo.furtiture + "Столы ";


        const radio = document.forms["myform"].elements["id1"];
        if (radio.checked)
            personInfo.typeDeliveryRadio = "Курьер";
        const radio2 = document.forms["myform"].elements["id2"];
        if (radio2.checked)
            personInfo.typeDeliveryRadio = "Самовывоз";

        localStorage.setItem(personInfo.name, JSON.stringify(personInfo));
        personInfo = null;
    };
}
;

function resetaTable() {
    localStorage.clear()

}

function closePage() {
    window.close();
}
