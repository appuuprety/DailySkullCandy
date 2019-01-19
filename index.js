// Hide Sections
$('.section').hide();

setTimeout(function () {
  $(document).ready(function () {
    // Show sections
    $('.section').fadeIn();

    // Hide preloader
    $('.loader').fadeOut();

    //Init Side nav
    $('.button-collapse').sideNav();

    // Init Modal
    $('.modal').modal();

    // Init Select
    $('select').material_select();


    // Init Select
    $('.tabs').tabs();

    $('.scrollspy').scrollSpy();


  });
}, 1000);




$(document).ready(function () {
  $('table.display').DataTable({
    "order": [
      [1, "desc"]
    ],
    "searching": false,
    "lengthChange": false,
    "info": false,
    "bPaginate": false,
    "bAutoWidth": false
  });
});


//ED 
const myDataED = [
  ["Week1", 117],
  ["Week2", 108],
  ["Week3", 119.46],
  ["Week4", 139.40],
  ["Week5", 105.34],
  ["Week6", 99.24],
  ["Week7", 0],
  ["Week8", 0],
  ["Week9", 0],
  ["Week10", 0],
  ["Week11", 0],
  ["Week12", 0],
  ["Week13", 0],
  ["Week14", 0]
];
const sumED = myDataED
  .map(v => v[1])
  .reduce((sumED, current) => sumED + current, 0).toFixed(2);
const sumEDFormatted = Number(sumED);

//Siroo Dai
const myDataSirooDai = [
  ["Week1", 121.96],
  ["Week2", 102.74],
  ["Week3", 114.36],
  ["Week4", 117.96],
  ["Week5", 103.12],
  ["Week6", 113.88],
  ["Week7", 0],
  ["Week8", 0],
  ["Week9", 0],
  ["Week10", 0],
  ["Week11", 0],
  ["Week12", 0],
  ["Week13", 0],
  ["Week14", 0]
];

const sumSirooDai = myDataSirooDai
  .map(v => v[1])
  .reduce((sumSirooDai, current) => sumSirooDai + current, 0).toFixed(2);
const sumSirooDaiFormatted = Number(sumSirooDai);

//Asis  Dai
const myDataAsisDai = [
  ["Week1", 97.08],
  ["Week2", 124.06],
  ["Week3", 92.22],
  ["Week4", 126.56],
  ["Week5", 100.14],
  ["Week6", 49.50],
  ["Week7", 0],
  ["Week8", 0],
  ["Week9", 0],
  ["Week10", 0],
  ["Week11", 0],
  ["Week12", 0],
  ["Week13", 0],
  ["Week14", 0]
];

const sumAsisDai = myDataAsisDai
  .map(v => v[1])
  .reduce((sumAsisDai, current) => sumAsisDai + current, 0).toFixed(2);
const sumAsisDaiFormatted = Number(sumAsisDai);


console.log(sumAsisDai);

// Bhai

const myDataBhai = [
  ["Week1", 93.94],
  ["Week2", 97.98],
  ["Week3", 91.88],
  ["Week4", 113.42],
  ["Week5", 104.38],
  ["Week6", 100.70],
  ["Week7", 0],
  ["Week8", 0],
  ["Week9", 0],
  ["Week10", 0],
  ["Week11", 0],
  ["Week12", 0],
  ["Week13", 0],
  ["Week14", 0]
];

const sumBhai = myDataBhai
  .map(v => v[1])
  .reduce((sumBhai, current) => sumBhai + current, 0).toFixed(2);
const sumBhaiFormatted = Number(sumBhai);

// Subash

const myDataSubash = [
  ["Week1", 88.54],
  ["Week2", 124.68],
  ["Week3", 79.94],
  ["Week4", 87],
  ["Week5", 90],
  ["Week6", 104.92],
  ["Week7", 0],
  ["Week8", 0],
  ["Week9", 0],
  ["Week10", 0],
  ["Week11", 0],
  ["Week12", 0],
  ["Week13", 0],
  ["Week14", 0]
];

const sumSubash = myDataSubash
  .map(v => v[1])
  .reduce((sumSubash, current) => sumSubash + current, 0).toFixed(2);

const sumSubashFormatted = Number(sumSubash);


// Rajiv

const myDataRajiv = [
  ["Week1", 82.24],
  ["Week2", 86.68],
  ["Week3", 85.24],
  ["Week4", 106.90],
  ["Week5", 124.26],
  ["Week6", 104.62],
  ["Week7", 0],
  ["Week8", 0],
  ["Week9", 0],
  ["Week10", 0],
  ["Week11", 0],
  ["Week12", 0],
  ["Week13", 0],
  ["Week14", 0]
];

const sumRajiv = myDataRajiv
  .map(v => v[1])
  .reduce((sumRajiv, current) => sumRajiv + current, 0).toFixed(2);

const sumRajivFormatted = Number(sumRajiv);
// Prasun

const myDataPrasun = [
  ["Week1", 100.30],
  ["Week2", 102.58],
  ["Week3", 105.82],
  ["Week4", 115.66],
  ["Week5", 89.90],
  ["Week6", 136.86],
  ["Week7", 0],
  ["Week8", 0],
  ["Week9", 0],
  ["Week10", 0],
  ["Week11", 0],
  ["Week12", 0],
  ["Week13", 0],
  ["Week14", 0]
];

const sumPrasun = myDataPrasun
  .map(v => v[1])
  .reduce((sumPrasun, current) => sumPrasun + current, 0).toFixed(2);

const sumPrasunFormatted = Number(sumPrasun);
// Suraj

const myDataSuraj = [
  ["Week1", 127.14],
  ["Week2", 68.56],
  ["Week3", 80.56],
  ["Week4", 85.08],
  ["Week5", 102.12],
  ["Week6", 131.44],
  ["Week7", 0],
  ["Week8", 0],
  ["Week9", 0],
  ["Week10", 0],
  ["Week11", 0],
  ["Week12", 0],
  ["Week13", 0],
  ["Week14", 0]
];

const sumSuraj = myDataSuraj
  .map(v => v[1])
  .reduce((sumSuraj, current) => sumSuraj + current, 0).toFixed(2);
const sumSurajFormatted = Number(sumSuraj);

// SanjayDai

const myDataSanjayDai = [
  ["Week1", 102.12],
  ["Week2", 72.84],
  ["Week3", 91.88],
  ["Week4", 81.38],
  ["Week5", 85.22],
  ["Week6", 107.68],
  ["Week7", 0],
  ["Week8", 0],
  ["Week9", 0],
  ["Week10", 0],
  ["Week11", 0],
  ["Week12", 0],
  ["Week13", 0],
  ["Week14", 0]
];

const sumSanjayDai = myDataSanjayDai
  .map(v => v[1])
  .reduce((sumSanjayDai, current) => sumSanjayDai + current, 0).toFixed(2);

const sumSanjayDaiFormatted = Number(sumSanjayDai);
// Ishan

const myDataIshan = [
  ["Week1", 121.96],
  ["Week2", 102.74],
  ["Week3", 96.30],
  ["Week4", 147.98],
  ["Week5", 82.08],
  ["Week6", 123.20],
  ["Week7", 0],
  ["Week8", 0],
  ["Week9", 0],
  ["Week10", 0],
  ["Week11", 0],
  ["Week12", 0],
  ["Week13", 0],
  ["Week14", 0]
];

const sumIshan = myDataIshan
  .map(v => v[1])
  .reduce((sumIshan, current) => sumIshan + current, 0).toFixed(2);

const sumIshanFormatted = Number(sumIshan);

// Punchbag

const myDataPunchbag = [
  ["Week1", 70.54],
  ["Week2", 103.10],
  ["Week3", 113.24],
  ["Week4", 57.28],
  ["Week5", 95.92],
  ["Week6", 83.56],
  ["Week7", 0],
  ["Week8", 0],
  ["Week9", 0],
  ["Week10", 0],
  ["Week11", 0],
  ["Week12", 0],
  ["Week13", 0],
  ["Week14", 0]
];

const sumPunchbag = myDataPunchbag
  .map(v => v[1])
  .reduce((sumPunchbag, current) => sumPunchbag + current, 0).toFixed(2);

const sumPunchbagFormatted = Number(sumPunchbag);

// Ashish

const myDataAshish = [
  ["Week1", 81.24],
  ["Week2", 97.70],
  ["Week3", 7.94],
  ["Week4", 91.70],
  ["Week5", 81.90],
  ["Week6", 96.48],
  ["Week7", 0],
  ["Week8", 0],
  ["Week9", 0],
  ["Week10", 0],
  ["Week11", 0],
  ["Week12", 0],
  ["Week13", 0],
  ["Week14", 0]
];

const sumAshish = myDataAshish
  .map(v => v[1])
  .reduce((sumAshish, current) => sumAshish + current, 0).toFixed(2);

const sumAshishFormatted = Number(sumAshish);
// CoolDeep

const myDataCoolDeep = [
  ["Week1", 82.24],
  ["Week2", 86.68],
  ["Week3", 68.88],
  ["Week4", 128.58],
  ["Week5", 107.70],
  ["Week6", 63.22],
  ["Week7", 0],
  ["Week8", 0],
  ["Week9", 0],
  ["Week10", 0],
  ["Week11", 0],
  ["Week12", 0],
  ["Week13", 0],
  ["Week14", 0]
];

const sumCoolDeep = myDataCoolDeep
  .map(v => v[1])
  .reduce((sumCoolDeep, current) => sumCoolDeep + current, 0).toFixed(2);

const sumCoolDeepFormatted = Number(sumCoolDeep);
// Subin

const myDataSubin = [
  ["Week1", 99.30],
  ["Week2", 52.20],
  ["Week3", 88.86],
  ["Week4", 119.96],
  ["Week5", 76.30],
  ["Week6", 104.16],
  ["Week7", 0],
  ["Week8", 0],
  ["Week9", 0],
  ["Week10", 0],
  ["Week11", 0],
  ["Week12", 0],
  ["Week13", 0],
  ["Week14", 0]
];

const sumSubin = myDataSubin
  .map(v => v[1])
  .reduce((sumSubin, current) => sumSubin + current, 0).toFixed(2);

const sumSubinFormatted = Number(sumSubin);

// this is another way to do it   
//var myArray = [['something',2],['something',4]]
//     var total = 0;
//     for(i=0; i<myArray.length; i++){
//         total += myArray[i][1];
//     }


// Create the chart
Highcharts.chart("containerforAlltheProblems", {
  chart: {

    type: "column",
    events: {
      drilldown: function (e) {
        if (!e.seriesOptions) {
          var chart = this,
            drilldowns = {
              "ED": {
                name: "Ed Weekly Points",
                data: myDataED
              },
              "Siroo Dai": {
                name: "Siroo Dai Weekly Points",
                data: myDataSirooDai
              },

              "Asis Dai": {
                name: "Asis Dai Weekly Points",
                data: myDataAsisDai
              },

              "Bhai": {
                name: "Bhai Weekly Points",
                data: myDataBhai
              },

              "Subash": {
                name: "Subash Weekly Points",
                data: myDataSubash
              },

              "Rajiv": {
                name: "Rajiv Weekly Points",
                data: myDataRajiv
              },

              "Prasun": {
                name: "Prasun Weekly Points",
                data: myDataPrasun
              },


              "Suraj": {
                name: "Suraj Weekly Points",
                data: myDataSuraj
              },


              "Sanjay Dai": {
                name: "Sanjay Dai Weekly Points",
                data: myDataSanjayDai
              },

              "Ishan": {
                name: "Ishan Weekly Points",
                data: myDataIshan
              },

              "Punchbag": {
                name: "Punchbag Weekly Points",
                data: myDataPunchbag
              },

              "Ashish": {
                name: "Ashish Weekly Points",
                data: myDataPunchbag
              },

              "Cool Deep": {
                name: "Cool Deep Weekly Points",
                data: myDataCoolDeep
              },

              "Subin": {
                name: "Subin Weekly Points",
                data: myDataSubin
              }




            },
            series = drilldowns[e.point.name];

          // Show the loading label
          chart.showLoading("Loading Weekly Points ...");

          setTimeout(function () {
            chart.hideLoading();
            chart.addSeriesAsDrilldown(e.point, series);
          }, 1000);
        }
      }
    }
  },
  title: {
    text: "Total Points"
  },
  xAxis: {
    type: "category"
  },

  legend: {
    enabled: false
  },

  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true
      }
    }
  },

  series: [{
    name: "Weekly Points",
    colorByPoint: true,
    data: [{
      name: "ED",
      y: sumEDFormatted,
      drilldown: true
    },
    {
      name: "Siroo Dai",
      y: sumSirooDaiFormatted,
      drilldown: true
    },
    {
      name: "Asis Dai",
      y: sumAsisDaiFormatted,
      drilldown: true
    },
    {
      name: "Bhai",
      y: sumBhaiFormatted,
      drilldown: true
    },
    {
      name: "Subash",
      y: sumSubashFormatted,
      drilldown: true
    },
    {
      name: "Rajiv",
      y: sumRajivFormatted,
      drilldown: true
    },
    {
      name: "Prasun",
      y: sumPrasunFormatted,
      drilldown: true
    },
    {
      name: "Suraj",
      y: sumSurajFormatted,
      drilldown: true
    },
    {
      name: "Sanjay Dai",
      y: sumSanjayDaiFormatted,
      drilldown: true
    },
    {
      name: "Ishan",
      y: sumIshanFormatted,
      drilldown: true
    },
    {
      name: "Punchbag",
      y: sumPunchbagFormatted,
      drilldown: true
    },
    {
      name: "Ashish",
      y: sumAshishFormatted,
      drilldown: true
    },
    {
      name: "Cool Deep",
      y: sumCoolDeepFormatted,
      drilldown: true
    },
    {
      name: "Subin",
      y: sumSubinFormatted,
      drilldown: true
    }
    ]
  }],

  drilldown: {
    series: []
  }
});

const weeklyWinners = [
  ['Subash', 10],
  ['Suraj', 10],
  ['ED', 20],
  ['Ishan', 30],
  ['Rajiv', 30],
  ['Prasun', 30]

];

const weeklyWinnersPoints =

  [
    ['Week 1 Suraj', 127.14],
    ['Week 2 Subash', 124.68],
    ['Week 3 ED', 119.46],
    ['Week 4 Ishan', 147.98],
    ['Week 5 Rajiv', 124.26],
    ['Week 6 Prasun', 136.86],
    ['Week 7 Ishan', 140.36],
    ['Week 8 ED', 137.70],
    ['Week 9 Rajiv', 140.22],
    ['Week 10 Prasun', 180.66],
    ['Week 11 Rajiv', 140.94],
    ['Week 12 Prasun', 166.38],
    ['Week 13 Ishan', 126.38]

  ]


Highcharts.chart('containerForWeeklyShare', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  title: {
    text: 'Weekly Winners',
    align: 'center',
    y: 40
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        distance: -50,
        style: {
          fontWeight: 'bold',
          color: 'white'
        }
      },
      startAngle: -90,
      endAngle: 90,
      center: ['50%', '75%']
    }
  },
  series: [{
    type: 'pie',
    name: 'Weekly Shares',
    innerSize: '30%',
    data: weeklyWinners
  }]
});

Highcharts.chart('weeklyWinners', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Points'
  },
  xAxis: {
    type: 'category',
    labels: {
      rotation: -45,
      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif'
      }
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Points'
    }
  },
  legend: {
    enabled: false
  },
  tooltip: {
    pointFormat: 'Points that won'
  },
  series: [{
    name: 'Points',
    data: weeklyWinnersPoints,
    dataLabels: {
      enabled: true,
      rotation: -90,
      color: '#FFFFFF',
      align: 'right',
      format: '{point.y:.1f}', // one decimal
      y: 10, // 10 pixels down from the top
      style: {
        fontSize: '10px',
        fontFamily: 'Verdana, sans-serif'
      }
    }
  }]
});

// Finals

var finalsP1Score = $("#fianlsP1Score").html();
var finalsP2Score = $("#fianlsP2Score").html();
var finalsP1Scoreformatted = parseInt(finalsP1Score);
var finalsP2Scoreformatted = parseInt(finalsP2Score);
console.log(finalsP1Scoreformatted);
console.log(finalsP2Scoreformatted);


if (finalsP1Scoreformatted > finalsP2Scoreformatted) {
  $("#finalsD2ImageConfrence").addClass("circle responsive-img imgLoss");
  $("#finalsP1EmojiConfrence").addClass("em-smiley");
  $("#finalsP2EmojiConfrence").addClass("em-anguished");
  $("#fianlsP2Score").addClass("grey-text");
  $("#finalsManager2Confrence").addClass("ploss");
} else {
 
  $("#finalsP1EmojiConfrence").addClass("em-smiley");
  $("#finalsP2EmojiConfrence").addClass("em-anguished");
  $("#fianlsP1Score").addClass("grey-text");

}


//Third Place



var thirdPlaceP1Score = $("#fianlsP1Score").html();
var thirdPlaceP2Score = $("#fianlsP2Score").html();
var thirdPlaceP1Scoreformatted = parseInt(finalsP1Score);
var thirdPlaceP2Scoreformatted = parseInt(finalsP2Score);

if (thirdPlaceP1Scoreformatted > thirdPlaceP2Scoreformatted) {
  $("#thirdPlaceD2ImageConfrence").addClass("circle responsive-img imgLoss");
  $("#thirdPlaceP1EmojiConfrence").addClass("em-smiley");
  $("#thirdPlaceP2EmojiConfrence").addClass("em-anguished");
  $("#fianlsP2Score").addClass("grey-text");
  $("#thirdPlaceManager2Confrence").addClass("ploss");
} else {
  $("#thirdPlaceD1ImageConfrence").addClass("circle responsive-img imgLoss");
  $("#thirdPlaceP2EmojiConfrence").addClass("em-smiley");
  $("#thirdPlaceP1EmojiConfrence").addClass("em-anguished");
  $("#fianlsP1Score").addClass("grey-text");
  $("#thirdPlaceManager1Confrence").addClass("ploss");
}


//confrence finals

var D1ScoreConfrence = $("#d1ScoreRound2").html();
console.log(D1ScoreConfrence);
var D4ScoreConfrence = $("#d4ScoreRound2").html();

var D1ScoreformattedConfrence = parseInt(D1ScoreConfrence);
var D4ScoreformattedConfrence = parseInt(D4ScoreConfrence);






if (D1ScoreformattedConfrence > D4ScoreformattedConfrence) {

  $("#D4ImageConfrence").addClass("circle responsive-img imgLoss");
  $("#P4EmojiConfrence").addClass("em-smiley");
  $("#P1EmojiConfrence").addClass("em-anguished");
  $("#d4ScoreRound2").addClass("grey-text");
  $("#P4Confrence").addClass("grey-text");
  $("#Manager4Confrence").addClass("ploss");

} else {

  $("#D1ImageConfrence").addClass("circle responsive-img imgLoss");
  $("#P4EmojiConfrence").addClass("em-smiley");
  $("#P1EmojiConfrence").addClass("em-anguished");
  $("#d1ScoreRound2").addClass("grey-text");
  $("#P1Confrence").addClass("grey-text");
  $("#Manager1Confrence").addClass("ploss");
}






var D2ScoreConfrence = $("#d2ScoreRound2").html();
console.log(D1ScoreConfrence);
var D3ScoreConfrence = $("#d3ScoreRound2").html();

var D2ScoreformattedConfrence = parseInt(D2ScoreConfrence);
var D3ScoreformattedConfrence = parseInt(D3ScoreConfrence);



if (D2ScoreformattedConfrence > D3ScoreformattedConfrence) {

  $("#D3ImageConfrence").addClass("circle responsive-img imgLoss");
  $("#P2EmojiConfrence").addClass("em-smiley");
  $("#P3EmojiConfrence").addClass("em-anguished");
  $("#d3ScoreRound2").addClass("grey-text");
  $("#P3Confrence").addClass("grey-text");
  $("#Manager3Confrence").addClass("ploss");

} else {

  $("#D2ImageConfrence").addClass("circle responsive-img imgLoss");
  $("#P3EmojiConfrence").addClass("em-smiley");
  $("#P2EmojiConfrence").addClass("em-anguished");
  $("#d2ScoreRound2").addClass("grey-text");
  $("#P2Confrence").addClass("grey-text");
  $("#Manager2Confrence").addClass("ploss");
}








// 1 vs 8 
var D1Score = $("#D1Score").html();
var D8Score = $("#D8Score").html();
var D1Scoreformatted = parseInt(D1Score);
var D8Scoreformatted = parseInt(D8Score);



// 2 vs 7 
var D2Score = $("#D2Score").html();
var D7Score = $("#D7Score").html();
var D2Scoreformatted = parseInt(D2Score);
var D7Scoreformatted = parseInt(D7Score);




// 3 vs 6 
var D3Score = $("#D3Score").html();
var D6Score = $("#D3Score").html();
var D3Scoreformatted = parseInt(D3Score);
var D6Scoreformatted = parseInt(D6Score);





// 4 vs 5 
var D4Score = $("#D4Score").html();
var D5Score = $("#D5Score").html();
var D4Scoreformatted = parseInt(D4Score);
var D5Scoreformatted = parseInt(D5Score);





if (D1Scoreformatted > D8Scoreformatted) {
  console.log("EdWon")
  $("#D8Image").addClass("circle responsive-img imgLoss");
  $("#P1Emoji").addClass("em-smiley");
  $("#P8Emoji").addClass("em-anguished");
  $("#D8Score").addClass("grey-text");
  $("#P8").addClass("grey-text");
  $("#P8Name").addClass("ploss");

} else {
  console.log("RajivWon")
  $("#D1Image").addClass("circle responsive-img imgLoss");
  $("#P1Emoji").addClass("em-smiley");
  $("#P8Emoji").addClass("em-anguished");
  $("#D1Score").addClass("grey-text");
  $("#P1").addClass("grey-text");
  $("#P1Name").addClass("ploss");
}



if (D2Scoreformatted > D7Scoreformatted) {
  console.log("EdWon")
  $("#D7Image").addClass("circle responsive-img imgLoss");
  $("#P2Emoji").addClass("em-smiley");
  $("#P7Emoji").addClass("em-anguished");
  $("#D7Score").addClass("grey-text");
  $("#P7").addClass("grey-text");
  $("#P7Name").addClass("ploss");
} else {
  console.log("RajivWon")
  $("#D2Image").addClass("circle responsive-img imgLoss");
  $("#P2Emoji").addClass("em-smiley");
  $("#P2Emoji").addClass("em-anguished");
  $("#D2Score").addClass("grey-text");
  $("#P2").addClass("grey-text");
  $("#P2Name").addClass("ploss");
}


if (D3Scoreformatted > D6Scoreformatted) {
  console.log("EdWon")
  $("#D6Image").addClass("circle responsive-img imgLoss");
  $("#P3Emoji").addClass("em-smiley");
  $("#P6Emoji").addClass("em-anguished");
  $("#D6Score").addClass("grey-text");
  $("#P6").addClass("grey-text");
  $("#P6Name").addClass("ploss");
} else {
  console.log("RajivWon")
  $("#D3Image").addClass("circle responsive-img imgLoss");
  $("#P6Emoji").addClass("em-smiley");
  $("#P3Emoji").addClass("em-anguished");
  $("#D3Score").addClass("grey-text");
  $("#P3").addClass("grey-text");
  $("#P3Name").addClass("ploss");
}


if (D4Scoreformatted > D5Scoreformatted) {
  console.log("EdWon")
  $("#D5Image").addClass("circle responsive-img imgLoss");
  $("#P4Emoji").addClass("em-smiley");
  $("#P5Emoji").addClass("em-anguished");
  $("#D5Score").addClass("grey-text");
  $("#P5").addClass("grey-text");
  $("#P5Name").addClass("ploss");
} else {
  console.log("RajivWon")
  $("#D4Image").addClass("circle responsive-img imgLoss");
  $("#P5Emoji").addClass("em-smiley");
  $("#P4Emoji").addClass("em-anguished");
  $("#D5Score").addClass("grey-text");
  $("#P5").addClass("grey-text");
  $("#P4Name").addClass("ploss");
}