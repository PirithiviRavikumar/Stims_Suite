var bookApp = angular.module("bookApp", []);
        bookApp.controller('bookController', function ($scope) {
          var StopPay = [
            { 
            'code':"Code",
            'cd':"13IT001",
            'garde':"Grade",
            'grd':"A"
            'name':"Name",
            'nm':"Dhanusiya.P",
          'Designation':"Designation",
           "des":"HOD", 
            'bs':"Basic Salary" ,
            'bs1':15000,
            'leave':"Leave", 
            'lv':200,
            'da':"DA" ,
            'da1':1000,
            'esi':"ESI", 
            'esi1':1000,
            'pf':"PF" ,
            'pf1':300,
            'loan':"Loan", 
            'loan1':350,
            'esi2':"ESI", 
            'esi3':2000,
            'otherallowance':"Other Allowance" ,
            'other1':720,
            'exwrk':"Ex.Working Hours", 
            'exwrk1':200,
            'attn':"Attendance" ,
            'attn1':340,
            'total':"Total", 
            'total1':200020,
            'total2':"Total",
            'total3':67000
        },
        {  
            'code':"Code",
            'cd':"13IT002",
            'garde':"Grade",
            'grd':"B"
            'name':"Name",
            'nm':"Dharani.AR",
          'Designation':"Designation",
           "des":"Staff", 
            'bs':"Basic Salary" ,
            'bs1':18000,
            'leave':"Leave", 
            'lv':300,
            'da':"DA" ,
            'da1':4000,
            'esi':"ESI", 
            'esi1':8000,
            'pf':"PF" ,
            'pf1':700,
            'loan':"Loan", 
            'loan1':350,
            'esi2':"ESI", 
            'esi3':2000,
            'otherallowance':"Other Allowance" ,
            'other1':720,
            'exwrk':"Ex.Working Hours", 
            'exwrk1':200,
            'attn':"Attendance" ,
            'attn1':340,
            'total':"Total", 
            'total1':700020,
            'total2':"Total",
            'total3':67000
        }
            
      
            
            ];

var img=[
{
    'img':"x.jpg"
}];



$scope.StopPay=StopPay;
$scope.img=img;

        });
