var map;

function averageOzonePollution(data){
  var stationtotal = new Array();
  var stationnbdays = new Array();
  var keys = Object.keys(data[0]);
  for(var i=0;i<data.length;i++){
    //console.log(data[i]);

    console.log(keys);
    for(var j=0;j<keys.length;j++){
      if(j==0){
        console.log("Condition"+keys[i]);
        stationtotal[keys[i]]=0;
        stationnbdays[keys[i]]=0;
      }
     if((keys[j]!="Date")&&(data[i][keys[j]]!="No data")&&(data[i][keys[j]]!="")&&(data[i][keys[j]]!=undefined)){
        stationtotal[keys[j]] += parseInt(data[i][keys[j]]);
        stationnbdays[keys[j]] += 1;
      }
    }
  }

  var results = new Array();

  for(var j=0;j<keys.length;j++){
    console.log(keys[j]);

      results[keys[j]]=stationtotal[keys[j]]/stationnbdays[keys[j]];
    }

    return results;
}

function createOnMap(data){
  var monthAvgData = averageOzonePollution(data);
  
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
