let sortDirection = false;
let hospitalData = [
  {
    hospital: "St Vincent",
    treatment: "COVID-19",
    location: "Jacksonville",
    price: "5",
  },
  {
    hospital: "Penn State",
    treatment: "COVID-19",
    location: "Jacksonville",
    price: "5",
  },
  {
    hospital: "UCF",
    treatment: "COVID-19",
    location: "Jacksonville",
    price: "5",
  },
  {
    hospital: "Florida State",
    treatment: "COVID-19",
    location: "Jacksonville",
    price: "5",
  },
];

window.onload = () => {
  loadTable(hospitalData);
};

function loadTable(hospitalData) {
  const tableBody = document.getElementById("tableData");
  let dataHtml = "";

  for (let data of hospitalData) {
    dataHtml += `<tr><td>${data.hospital}</td><td>${data.treatment}</td><td>${data.location}</td><td>${data.price}</td></tr>`;
  }
  tableBody.innerHTML = dataHtml;
}
