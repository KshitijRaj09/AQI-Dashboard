// Find more information at: https://github.com/pa7/heatmap.js/tree/develop
//Example at: https://www.patrick-wied.at/static/heatmapjs/example-heatmap-leaflet.html
var mymap1;
function heatmap_func()
{
  console.log("hello");
  var latt= [];
var long =[];
var pm10_Avg=[];
var count=[];
var Name= [];

const url2='./assests/sample_long_lat.json';
fetch(url2)  
.then(  
     function(response) {  
       if (response.status !== 200) {  
         console.warn('Looks like there was a problem. Status Code: ' + 
           response.status);  
         return;  
       }
     
       // Examine the text in the response  
       response.json().then(function(data) {  
            d= data.Station;
            for(var i=0;i<d.length; i++){
                Name[i]= d[i]._id;
                long[i]= d[i]._long;
                latt[i]= d[i]._lat;
                pm10_Avg[i]= d[i].Pollutant_Index[1]._Avg;
                 
                if(pm10_Avg[i] <= 50){
                    count[i]=1;
                  }
                  else if(pm10_Avg[i] >= 51 && pm10_Avg[i] <= 100){
                    count[i]=2;    
                  }
                  else if(pm10_Avg[i]>=101 && pm10_Avg[i] <= 150){
                    count[i]=3;
                  }
                  else if(pm10_Avg[i]>=151 && pm10_Avg[i] <= 200){
                  count[i]=4;
                  }
                  else if(pm10_Avg[i]>=201 && pm10_Avg[i] <= 300){
                    count[i]=5;
                  }
                  else{
                      count[i]=6;
                    }
            }   
        myfun();
        })
     }); 

  function myfun(){
   
   var Data = { 
     data : []
   };
   for( var i=0 ; i<count.length; i++){
    Data.data[i]= {lat : latt[i], lng: long[i], value: count[i] };
    console.log(Data.data[i]);
   }
  var baseLayer = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }
  );
  var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 0.5,
    "maxOpacity": .5, 
    // scales the radius based on map zoom
    "scaleRadius": true, 
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries 
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'value'
  };

  var heatmapLayer = new HeatmapOverlay(cfg);
  mymap1= L.map('mapid', {scrollWheelZoom:false,
    center: new L.LatLng(23, 79),
    zoom: 4.8,
    layers: [baseLayer, heatmapLayer]
  });
  heatmapLayer.setData(Data);
  // make accessible for debugging
  layer = heatmapLayer;
}
}  
