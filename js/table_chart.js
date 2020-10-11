
google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);
var Station_id = [];
var pm2_5 = [];
var pm10 = [];
var no2 = [];
var nh3 = [];
var so2 = [];
var co = [];
var ozone = [];
          
const url = 'assests/sample.json';
    fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        var d= data.Station;
        
        for(var i=0;i<10; i++){
            Station_id[i] = d[i]._id;
            pm2_5[i] = d[i].Pollutant_Index[0]._Avg;
            pm10[i]= d[i].Pollutant_Index[1]._Avg;
            no2[i] = d[i].Pollutant_Index[2]._Avg;  
            nh3[i] = d[i].Pollutant_Index[3]._Avg; 
            so2[i] = d[i].Pollutant_Index[4]._Avg; 
            co[i] = d[i].Pollutant_Index[5]._Avg; 
            ozone[i] = d[i].Pollutant_Index[6]._Avg; 
        }
       })
    }); 

function drawTable() {
  var cssClassNames={
    'tableCell': 'font'
  };
        var t_data = new google.visualization.DataTable();
        t_data.addColumn('string', 'Station');
        t_data.addColumn('string', 'PM2.5');
        t_data.addColumn('string', 'PM10');
        t_data.addColumn('string', 'NO2');
        t_data.addColumn('string', 'NH3');
        t_data.addColumn('string', 'SO2');
        t_data.addColumn('string', 'CO');
        t_data.addColumn('string', 'OZONE');
      //  t_data.addColumn('boolean', 'Full Time Employee');
    for(var i=0;i<Station_id.length;i++){
        t_data.addRows([
         [Station_id[i], pm2_5[i], pm10[i], no2[i], nh3[i], so2[i], co[i], ozone[i]]
        ]);
    }

        var table = new google.visualization.Table(document.getElementById('table_chart'));

        table.draw(t_data, {showRowNumber: false, allowhtml: true, width: '100%', height: '200px', cssClassNames: cssClassNames });
      }