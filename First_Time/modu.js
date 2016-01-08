
(function () {
    var app = angular.module('store', []);
    app.controller('StoreController', function(){
        this.products = gems;
    });
    
    var gems = [
        {
            name: 'Scottgemstone',
            price: 3.95,
            description: 'Best Gem in the whole world',
            canPurchase:false,
            soldOut:false,
        },
        {
            name: 'ritgemstone',
            price: 44000.95,
            description: 'We hope its worth that much',
            canPurchase:true,
            soldOut:false,
        },
        {
            name: 'Ryangemstone',
            price: 2.95,
            description: 'Best Gem in the whole world',
            canPurchase:false,
            soldOut:false,
        },
        {
            name: 'Barongemstone',
            price: 8.95,
            description: 'Best Gem in the whole world',
            canPurchase:true,
            soldOut:true,
        }
    ];
    
})();
