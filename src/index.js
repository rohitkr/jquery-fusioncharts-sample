
// import FusionCharts from 'fusioncharts';
// import Charts from 'fusioncharts/fusioncharts.charts';
// import $ from 'jquery';
// import jQFc from 'jquery-fusioncharts';

let FusionCharts = require('fusioncharts');
let Charts = require('fusioncharts/fusioncharts.charts');
let $ = require('jquery');
let jQFc = require('jquery-fusioncharts');

console.log(jQFc);

Charts(FusionCharts);

let chart = new FusionCharts({
  type: 'Column2D'
})

chart.render('chart-container');


// jQFc(FusionCharts, $);

$('#chart-container').insertFusionCharts({
  type: 'column2d',
  width: '600',
  height: '300',
  dataSource: {data: [{value: 9}]}
});