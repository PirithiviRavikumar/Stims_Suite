var bookApp = angular.module("bookApp", []);
        bookApp.controller('bookController', function ($scope) {
          var res = [
            {
            'empid':"13IT001" ,
            'name':"Dhushiya.P",
            'fullbasic':"Full Basic",
            'fb_cs':10000,
            'fb_rs':10000,
            'fb_r':0,
            'fullhra':"Full Hra", 
            'fh_cs':70000,
            'fh_rs':4000, 
            'fh_r':2,
            'fullda':"Full DA",
            'da_cs':10000,
            'da_rs':1000, 
            'da_r':6 ,
            'fullpf':"Full Pf", 
            'pf_cs':10000 ,
            'pf_rs':4000, 
            'pf_r':1,
            'fullesi':"Full ESI", 
            'esi_cs':10000 ,
            'esi_rs':4000, 
            'esi_r':5,
            'totalamunt':"Total Amount" ,
            'ta_cs':110000 ,
            'ta_rs':23000, 
            'esi_r':14,
            'effetivefroms':"Effective From",
            'note':"(Please Specify the valid data)" 
        
        },




        {  
            'empid':"13IT002" ,
            'name':"Dharani.P",
             'fullbasic':"Full Basic",
            'fb_cs':20000,
            'fb_rs':13000,
            'fb_r':0,
            'fullhra':"Full Hra", 
            'fh_cs':20000,
            'fh_rs':5000, 
            'fh_r':2,
            'fullda':"Full DA",
            'da_cs':20000,
            'da_rs':1000, 
            'da_r':6,
            'fullpf':"Full Pf", 
            'pf_cs':20000 ,
            'pf_rs':4000, 
            'pf_r':1,
            'fullesi':"Full ESI", 
            'esi_cs':13000 ,
            'esi_rs':4000, 
            'esi_r':5 ,
            'totalamunt':"Total Amount" ,
            'ta_cs':140000 ,
            'ta_rs':23000, 
            'esi_r':13 ,
            'effetivefroms':"Effective From",
            'note':"(Please Specify the valid data)" 
        
        }
            
      
            
            ];



$scope.res=res;


        });