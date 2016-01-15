
(function () {
    var app = angular.module('GemStore', []);
    app.controller('StoreController', function(){
        this.products = gems;
    });
    
    var gems = [
        {
            name: 'Scottgemstone',
            price: 3,
            description: 'Best Gem in the whole world',
            images: [
                {
                    full: 'img/full/m1.jpg',
                    thumb: 'img/thumbs/t1.jpg'
                },
                {
                    full: 'img/full/m2.jpg',
                    thumb: 'img/thumbs/t2.jpg'
                }
            ],
            canPurchase:false,
            soldOut:false,
        },
        {
            name: 'ritgemstone',
            price: 44000.95,
            description: 'We hope its worth that much',
            images: [
                {
                    full: 'img/full/m2.jpg',
                    thumb: 'img/thumbs/t2.jpg'
                },
                {
                    full: 'img/full/m4.jpg',
                    thumb: 'img/thumbs/t4.jpg'
                }
            ],
            canPurchase:true,
            soldOut:false,
        },
        {
            name: 'Ryangemstone',
            price: 2.95,
            description: 'Best Gem in the whole world',
            images: [
                {
                    full: 'img/full/m4.jpg',
                    thumb: 'img/thumbs/t4.jpg'
                },
                {
                    full: 'img/full/m3.jpg',
                    thumb: 'img/thumbs/t3.jpg'
                }
            ],
            canPurchase:false,
            soldOut:false,
        },
        {
            name: 'Barongemstone',
            price: 8.95,
            description: 'Best Gem in the whole world',
            images: [
                {
                    full: 'img/full/m3.jpg',
                    thumb: 'img/thumbs/t3.jpg'
                },
                {
                    full: 'img/full/m1.jpg',
                    thumb: 'img/thumbs/t1.jpg'
                }
            ],
            canPurchase:true,
            soldOut:true,
        }
    ];
    
})();
