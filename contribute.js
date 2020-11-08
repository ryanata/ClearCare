

function getContribution() {
    var hospital = document.getElementById("nameOfHospital").value;
    var loc = document.getElementById("location").value;
    var treatmentType = document.getElementById("typeOfTreatment").value;
    var treatmentCost = document.getElementById("costOfTreatment").value;
    document.getElementById("contribution").innerHTML =
    "Hospital: " + hospital + "<br>Location: " + loc + "<br>Treatment: " + treatmentType + "<br>Cost: " + treatmentCost;
  }

