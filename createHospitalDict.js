url = "https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/Hospitals_1/FeatureServer/0/query?where=1%3D1&outFields=ID,NAME,ADDRESS,CITY,STATE,ZIP&outSR=4326&f=json"
hospitaldict = {}

function parse(data) {
    console.log(data)
    for(let key in data["features"]) {
        if(data["features"][key]["attributes"]["STATE"] in hospitaldict) {
            hospitaldict[data["features"][key]["attributes"]["STATE"]].push(data["features"][key]["attributes"]["NAME"])
        } else {
            hospitaldict[data["features"][key]["attributes"]["STATE"]] = [data["features"][key]["attributes"]["NAME"]]
        }
    }
    console.log(hospitaldict)
}

fetch(url)
.then((resp) => resp.json()) // Transform the data into json
.then(data => parse(data))