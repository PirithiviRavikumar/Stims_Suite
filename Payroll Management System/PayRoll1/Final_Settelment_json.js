var finalsetApp = angular.module("finalsetApp", []);
        finalsetApp.controller('finalsetController', function ($scope) {
            $scope.finalset = [
            { 
            'empid':"Employee ID",
            'Emp_id':"13IT001",
            'Day_worked':"Days Worked",
            'days':"365",
             'Settled_on':"Settled on",
            'Settledate':"28.09.2017",
            'Leave_encash':"Leave EnCash",
            'leaveencash':"12 days" ,
            'ResignedOn':"Resigned On" ,
            'Resigned_On':"8.3.2017",
            'Designation':"Designation", 
            'des':"HOD"
           },
        
        {  
             'empid':"Employee ID",
            'Emp_id':"13IT002",
            'Day_worked':"Days Worked",
            'days':"366",
             'Settled_on':"Settled on",
            'Settledate':"20.05.2017",
            'Leave_encash':"Leave EnCash",
            'leaveencash':"16 days" ,
            'ResignedOn':"Resigned On" ,
            'Resigned_On':"5.12.2017",
            'Designation':"Designation", 
            'des':"Staff"
        }
            
      
            
            ];
           
        });