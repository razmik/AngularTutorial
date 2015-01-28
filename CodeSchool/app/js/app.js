//Wrapping your js function in a clousure is a good habbit
(function () {
    //Module
    var app = angular.module('gemStore', []);
    
    app.controller('StoreController', function(){
       this.products = gems; 
    });
    
    var gems = [
        {
            name: 'Dodechahedron',
            price: 9.34,
            description: 'Sample Description',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Chuohohoho',
            price: 30.64,
            description: 'Sample Description',
            canPurchase: false,
            soldOut: true
        }
    ]
        
})();