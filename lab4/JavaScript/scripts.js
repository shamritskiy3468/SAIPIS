var personInfo = {
  name: "",
  country: "",
  dateToGo: "",
  haveSalesCard: "",
  timeInShop: "",
  wishes: ""
};

window.onload = function () {


  document.getElementById('submit').onclick = function () {

    console.log(personInfo);
    personInfo.name = document.forms["myform"].elements["personName"].value;
    
    personInfo.country = document.forms["myform"].elements["menu"].value;
//    personInfo.country = document.forms["myform"].elements["countrySelect"].value;

    personInfo.dateToGo = document.forms["myform"].elements["whentime"].value;

    const checkbox_alone = document.forms["myform"].elements["checkbox_alone"];
    if (checkbox_alone.checked) {
      personInfo.haveSalesCard = "Yes";
    }
    if (!checkbox_alone.checked) {
      personInfo.haveSalesCard = "No";
    }

    const radio1 = document.forms["myform"].elements["choice1"];
    if (radio1.checked) {
      personInfo.timeInShop = personInfo.timeInShop + "15-30min ";
    }

    const radio2 = document.forms["myform"].elements["choice2"];
    if (radio2.checked) {
      personInfo.timeInShop = personInfo.timeInShop + "30-45min ";
    }

    const radio3 = document.forms["myform"].elements["choice3"];
    if (radio3.checked) {
      personInfo.timeInShop = personInfo.timeInShop + "1-1.5h ";
    }

    const radio4 = document.forms["myform"].elements["choice4"];
    if (radio4.checked) {
      personInfo.timeInShop = personInfo.timeInShop + "2h and more ";
    }

    console.log(personInfo.timeInShop);

    personInfo.wishes = document.forms["myform"].elements["comment"].value;

    console.log(personInfo);

    localStorage.setItem(personInfo.name, JSON.stringify(personInfo));

    personInfo = null;
  };
};

function resetTable() {
  window.localStorage.clear();

}

function closePage() {
  window.close();
}