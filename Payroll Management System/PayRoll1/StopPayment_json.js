var bookApp = angular.module("bookApp", []);
        bookApp.controller('bookController', function ($scope) {
          var StopPay = [
            { 'empid':"Employee ID",'name':"Name",'Emp_id':"13IT001",'Name':"Dhanusiya.P",'jog':"Date of Joining", 'date':"28.09.2017",  'Designation':"Designation", "des":"HOD" ,  'pay':"PayRoll Month" ,
            'Paydate':"8.3.2017",'Grade':"Grade", 'grd':"A"
        },
        {  'empid':"Employee ID",'name':"Name",'Emp_id':"13IT002",'Name':"Dharani.AR",'jog':"Date of Joining", 'date':"20.03.2016",  'Designation':"Designation", "des":"Staff" ,  'pay':"PayRoll Month" ,
            'Paydate':"3.5.2016",'Grade':"Grade", 'grd':"B" 
        }
            
      
            
            ];

var img=[
{
    'img':"x.jpg"
}];

var names=["Non-Porformance","irrugular attendance","Attitude"];

$scope.StopPay=StopPay;
$scope.img=img;
$scope.names=names;

        });