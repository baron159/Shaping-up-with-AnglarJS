
(function () {
    var app = angular.module('GemStore', []);
    app.controller('StoreController', function(){
        this.products = gems;
    });
        
    app.controller("ReviewController", function(){
        this.review = {}; 
        
    this.addReview = function(product){
        product.reviews.push(this.review);
        this.review = {};
    };
        
    });
    
    app.directive("productPanels", function(){
       return{
           restrict: 'E',
           templateUrl:'temp/product-panels.html',
           controller: function(){
                //Var for storing the currently selected tab
                this.tab = 1;

                //When a new tab is selected this function will set that as the current tab
                this.selectTab = function(setTab)
                {
                    this.tab = setTab;
                };

                //This method is used to show the currently selected tab
                this.isSelected = function(checkedTab)
                {
                    return this.tab === checkedTab;
                };

            },
           controllerAs: 'panel'
           
       }; 
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
            reviews: [
                {
                    stars:4,
                    body: "I love this!",
                    author: "email@stuff.com"
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
            reviews: [
                {
                    stars:5,
                    body: "I stuff this!",
                    author: "email@stuff.com"
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
            reviews:[],
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
            reviews:[],
            canPurchase:true,
            soldOut:true,
        }
    ];
    
})();
