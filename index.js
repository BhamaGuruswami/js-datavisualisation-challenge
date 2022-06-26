
const fromDb = undefined;

var globalObject = fromDb || [];

var myTab = document.getElementById('table1');
var headerCels = myTab.rows.item(1).cells;
for (i = 1; i < myTab.rows.length; i++) {
    var objCells = myTab.rows.item(i).cells;

    for (var j = 1; j < objCells.length; j++) {
        if (i > 1) {
            if (j > 1) {
                //console.log(objCells.item(j).innerText)
                //console.log(i +" "+j)
                var country = objCells.item(1).innerHTML;
                var year = headerCels.item(j).innerHTML;
                var finalVal = objCells.item(j).innerHTML;
                //console.log("country: "+country +" year "+year+" finalVal "+finalVal);
                // globalObject[country][year] = finalVal;
                if (globalObject[country]) {
                    globalObject[country][year] = finalVal;
                } else {
                    // globalObject[country][year] = finalVal;

                    globalObject[country] = {
                        [year]: finalVal
                    };
                }
            }
        }
        // console.log(globalObject)
        //console.log(objCells.item(j).innerHTML)
        // info.innerHTML = info.innerHTML + ' ' + objCells.item(j).innerHTML;
    }

}
//console.log(globalObject)
const myDataSet = [];

var value;
Object.keys(globalObject).forEach(function (key) {
    // console.log(key);
    value = globalObject[key];
    //  console.log(value);
    const xAxis = [];
    const yAxis = [];
    Object.keys(value).forEach(function (vkey) {
        // console.log("key inside value is "+key + " val "+ vkey);
        var yaxis = value[vkey];
        // console.log("key inside value is "+yaxis);
        xAxis.push(vkey)
        yAxis.push(yaxis)
    });
    var dataSet = {
        x: xAxis,
        y: yAxis,
        name: key,
        mode: "scatter"
    };
    myDataSet.push(dataSet);
});

// console.log(myDataSet)
///json data to javascript

// Define Layout
var layout = {
    xaxis: { range: [2002, 2012], title: "Year" },
    yaxis: { range: [50, 2000], title: "statistical" },
    title: "Crimes recorded by the police"
};

Plotly.newPlot("myPlot", myDataSet, layout);


//
const frommDb = undefined;

var seconddata = frommDb || [];

var secondTable = document.getElementById("table2")
const countryList = [];
const scndMyDataSet = [];
const xAxis = [];
const x2Axis = [];
for (let i = 0; i < secondTable.rows.length; i++){
    if(i>0){
        var rowsColvalue = secondTable.rows.item(i).cells
        var country = rowsColvalue.item(1).innerHTML
        countryList.push(country)
        var celoneVal = rowsColvalue.item(2).innerHTML
        xAxis.push(celoneVal)
        var celScndVal = rowsColvalue.item(3).innerHTML
        x2Axis.push(celScndVal)
}}

//console.log(countryList);
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: countryList,
        datasets: [{
            label: '2007-09',
            data: xAxis,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
            label: '2010-12',
            data: x2Axis,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});