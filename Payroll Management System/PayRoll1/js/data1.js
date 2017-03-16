var app = angular.module('myApp', []);

app.controller('books',function($scope)
{

var employee=[
{id:1,regno:"13IT028",Image: "images/x.jpg",name:"Dhanusiya.P",gender:"female",DOJ:new Date("March 7,1994"), basic_sal:80000,total_sal:600000},
{id:2,regno:"13IT001",Image: "images/x.jpg",name:"Dharani.AR",gender:"male",DOJ:new Date("september 10,1995"),basic_sal:50000 ,total_sal:30000},
{id:3,regno:"13IT004",Image: "images/x.jpg",name:"Dharani.P",gender:"female",DOJ:new Date("March 17,1994"), basic_sal:500000 ,total_sal:90000},
{id:4,regno:"13IT022",Image: "images/x.jpg",name:"Dhiya.S",gender:"male",DOJ:new Date("april 7,1996"), basic_sal:85000 ,total_sal:120000}
];

$scope.employee=employee;
$scope.rowLimit=100;
$scope.sortcol="name";
$scope.reversesort=false;

});