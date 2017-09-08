var map;

function averageOzonePollution(data){
  //var stationtotal = new Array();
  //var stationnbdays = new Array();
  for(var i=0;i<data.length;i++){
    //console.log(data[i]);
    var keys = Object.keys(data[0]);
    for(var j=0;j<keys.length;j++){
    /*  if(j==0){
        stationtotal[keys[j]]=0;
        stationnbdays[keys[j]]=0;
      }*/
      console.log(data[i][keys[j]]);
    /*  if((keys[j]!="date")&&(data[i][keys[j]]!="No data")&&(data[i][keys[j]]!="")&&(data[i][keys[j]]!=undefined)){
        stationtotal[keys[j]] += parseInt(data[i][keys[j]]);
        stationnbdays[keys[j]] += 1;
      }*/
    }
  }
  console.log(stationtotal);
}

function displayOnMap(){
  //var fileTry = new File([""],"");
//console.log(fileTry);
Papa.parse("./data/2005/february_ozone.csv", {
                      delimiter: ";",	// ,
                    	newline: "",	// auto-detect
                    	header: true,
                      download: true,
                      complete: function(results) {
                            averageOzonePollution(results.data);
                          }
                        });
}

// AIzaSyAOT-JHviDXcoIgILYqVWM2Ma0J-9n7-dI
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 54.750, lng: -1.280},
    zoom: 10,
    mapTypeControl: false
  });
}
/*
function CSVPollutionToData(data){
  $("#body").append(data[0]);
}*/
