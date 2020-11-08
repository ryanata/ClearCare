let idTreatments= {"114":17.0,"115":17.0,"699669":65.0,"999506":64.0,"1299701":31.0,"1799835":100.0,"2099559":25.0,"2299752":64.0,"3018603":27.0,"3219320":27.0,"4519013":17.0,"4819026":7.0,"9208079":22.0,"10018510":29.0,"11219464":18.0,"12308085":22.0,"12316137":18.0,"12316148":18.0,"12319342":17.0,"12319512":18.0,"13016146":18.0,"21818657":29.0}
let states = [
  "AL",
  "AK",
  "AS",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FM",
  "FL",
  "GA",
  "GU",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MH",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "MP",
  "OH",
  "OK",
  "OR",
  "PW",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VI",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

let treatments = [
  "Propaedeutic",
  "Auscultation",
  "Medical inspection (body features)",
  "Palpation",
  "Percussion (medicine)",
  "Vital signs measurement, such as blood pressure, body temperature, or pulse (or heart rate)",
  "Diagnostic",
  "Lab tests",
  "Biopsy test",
  "Blood test",
  "Stool test",
  "Urinalysis",
  "Cardiac stress test",
  "Electrocardiography",
  "Electrocorticography",
  "Electroencephalography",
  "Electromyography",
  "Electroneuronography",
  "Electronystagmography",
  "Electrooculography",
  "Electroretinography",
  "Endoluminal capsule monitoring",
  "Endoscopy",
  "Colonoscopy",
  "Colposcopy",
  "Cystoscopy",
  "Gastroscopy",
  "Laparoscopy",
  "Laryngoscopy",
  "Ophthalmoscopy",
  "Otoscopy",
  "Sigmoidoscopy",
  "Esophageal motility study",
  "Evoked potential",
  "Magnetoencephalography",
  "Medical imaging",
  "Angiography",
  "Aortography",
  "Cerebral angiography",
  "Coronary angiography",
  "Lymphangiography",
  "Pulmonary angiography",
  "Ventriculography",
  "Chest photofluorography",
  "Computed tomography",
  "Echocardiography",
  "Electrical impedance tomography",
  "Fluoroscopy",
  "Magnetic resonance imaging",
  "Diffuse optical imaging",
  "Diffusion tensor imaging",
  "Diffusion-weighted imaging",
  "Functional magnetic resonance imaging",
  "Positron emission tomography",
  "Radiography",
  "Scintillography",
  "SPECT",
  "Ultrasonography",
  "Contrast-enhanced ultrasound",
  "Gynecologic ultrasonography",
  "Intravascular ultrasound",
  "Obstetric ultrasonography",
  "Thermography",
  "Virtual colonoscopy",
  "Neuroimaging",
  "Posturography",
  "Therapeutic",
  "See also: Therapy and List of surgical procedures",
  "Thrombosis prophylaxis",
  "Precordial thump",
  "Politzerization",
  "Hemodialysis",
  "Hemofiltration",
  "Plasmapheresis",
  "Apheresis",
  "Extracorporeal membrane oxygenation (ECMO)",
  "Cancer immunotherapy",
  "Cancer vaccine",
  "Cervical conization",
  "Chemotherapy",
  "Cytoluminescent therapy",
  "Insulin potentiation therapy",
  "Low-dose chemotherapy",
  "Monoclonal antibody therapy",
  "Photodynamic therapy",
  "Radiation therapy",
  "Targeted therapy",
  "Tracheal intubation",
  "Unsealed source radiotherapy",
  "Virtual reality therapy",
  "Physical therapy/Physiotherapy",
  "Speech therapy",
  "Phototerapy",
  "Hydrotherapy",
  "Heat therapy",
  "Shock therapy",
  "Insulin shock therapy",
  "Electroconvulsive therapy",
  "Symptomatic treatment",
  "Fluid replacement therapy",
  "Palliative care",
  "Hyperbaric oxygen therapy",
  "Oxygen therapy",
  "Gene therapy",
  "Enzyme replacement therapy",
  "Intravenous therapy",
  "Phage therapy",
  "Respiratory therapy",
  "Vision therapy",
  "Electrotherapy",
  "Transcutaneous electrical nerve stimulation (TENS)",
  "Laser therapy",
  "Combination therapy",
  "Occupational therapy",
  "Immunization",
  "Vaccination",
  "Immunosuppressive therapy",
  "Psychotherapy",
  "Drug therapy",
  "Acupuncture",
  "Antivenom",
  "Magnetic therapy",
  "Craniosacral therapy",
  "Chelation therapy",
  "Hormonal therapy",
  "Hormone replacement therapy",
  "Opiate replacement therapy",
  "Cell therapy",
  "Stem cell treatments",
  "Intubation",
  "Nebulization",
  "Inhalation therapy",
  "Particle therapy",
  "Proton therapy",
  "Fluoride therapy",
  "Cold compression therapy",
  "Animal-Assisted Therapy",
  "Negative Pressure Wound Therapy",
  "Nicotine replacement therapy",
  "Oral rehydration therapy",
  "Surgical",
  "Ablation",
  "Amputation",
  "Biopsy",
  "Cardiopulmonary resuscitation (CPR)",
  "Cryosurgery",
  "Endoscopic surgery",
  "Facial rejuvenation",
  "General surgery",
  "Hand surgery",
  "Hemilaminectomy",
  "Image-guided surgery",
  "Knee cartilage replacement therapy",
  "Laminectomy",
  "Laparoscopic surgery",
  "Lithotomy",
  "Lithotriptor",
  "Lobotomy",
  "Neovaginoplasty",
  "Radiosurgery",
  "Stereotactic surgery",
  "Radiosurgery",
  "Vaginoplasty",
  "Xenotransplantation",
  "Anesthesia",
  "Dissociative anesthesia[citation needed]",
  "General anesthesia",
  "Local anesthesia",
  "Topical anesthesia (surface)",
  "Epidural (extradural) block",
  "Spinal anesthesia (subarachnoid block)",
  "Topical anesthesia (surface)",
  "Regional anesthesia",
];

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  console.log(inp, arr);
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

autocomplete(document.getElementById("treatmentSearch"), treatments);
autocomplete(document.getElementById("regionSearch"), states);


function onTResponse(jsonBody) {
  console.log(jsonBody);

  var result = [];

  for (var i in jsonBody) {
    result.push([i, jsonBody[i]]);
  }
  var mydatas = JSON.parse(result[0][1]);
}


function printClearCareData(hospList, idList){
  let i;
  let str = "";

  var ccElement = document.getElementById("cc-text");
  var ccHead = document.getElementById("cc-header");
  ccHead.appendChild(document.createTextNode("ClearCare Data"));

  for (i = 0; i < hospList.length; i++){
    str = hospList[i] + " NO INSURANCE " + idTreatments[idList[i]];
    
    if (idTreatments[idList[i]] == undefined)
    {
      str = hospList[i] + " NO INSURANCE NO DATA"
    }
    var node = document.createTextNode(str);
    ccElement.appendChild(node);
    ccElement.appendChild(document.createElement('br'));
 

    console.log(str);
  }
  

}

function onResponse(jsonBody) {
  console.log(jsonBody);
  let region_inp = document.getElementById("regionSearch").value;
  var result = [];
  for (var i in jsonBody) {
    result.push([i, jsonBody[i]]);
  }
  var mydatas = JSON.parse(result[0][1]);

  // mydatas now holds the dictionary to the entire database
  // we need to file what hospitals are close to the "region" input
  console.log(region_inp);
  let listOfHospitals = [];
  let listOfHospitalID = [];

  if (region_inp.localeCompare("AK") == 0){
    let ak_dict = mydatas["ak"];
    var keys = $.map(ak_dict, function(value, key) { return key });
    var i;
    for (i in keys){
      listOfHospitals.push((ak_dict[keys[i]])["name"]);
      listOfHospitalID.push(keys[i]);
      console.log("Hospital ID : " + (keys[i]) + " Hospital Name : " + (ak_dict[keys[i]])["name"] + " Treatment Cost " + idTreatments[keys[i]]); 
    }
    printClearCareData(listOfHospitals, listOfHospitalID)
  }

  if (region_inp.localeCompare("Pennsylvania") == 0){
    let ak_dict = mydatas["pa"];
    var keys = $.map(ak_dict, function(value, key) { return key });
    var i;
    for (i in keys){
      listOfHospitals.push((ak_dict[keys[i]])["name"]);
      listOfHospitalID.push(keys[i]);
      console.log("Hospital ID : " + (keys[i]) + " Hospital Name : " + (ak_dict[keys[i]])["name"] + " Treatment Cost " + idTreatments[keys[i]]); 
    }
    printClearCareData(listOfHospitals, listOfHospitalID)
  }
  
}



function getTreatmentData() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = "";

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://industrial-silo-289002.firebaseio.com/treatment.json",
    requestOptions
  )
    .then(function (response) {
      response
        .text()
        .then((data) => ({
          data: data,
          status: response.status,
        }))
        .then(function (res) {
          onTResponse(res);
        });
    })
    .catch((error) => console.log("error", error));
}


function getData() {
  getTreatmentData()
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = "";

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://industrial-silo-289002.firebaseio.com/states.json",
    requestOptions
  )
    .then(function (response) {
      response
        .text()
        .then((data) => ({
          data: data,
          status: response.status,
        }))
        .then(function (res) {
          onResponse(res);
        });
    })
    .catch((error) => console.log("error", error));
}


