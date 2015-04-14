'use strict';

angular.module('goldenLordApp')
  .controller('MainCtrl', function ($scope) {

  	$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
	$scope.series = ['Series A', 'Series B'];
	$scope.data = [
	[65, 59, 80, 81, 56, 55, 40],
	[28, 48, 40, 19, 86, 27, 90]
	];
	$scope.onClick = function (points, evt) {
	console.log(points, evt);
	};


  	$scope.save = function(){
  		var save = {
  			userData : {
  				money : $scope.money,
  				dayPassed : $scope.dayPassed
  			},
  			items : $scope.items
  		};
  		localStorage.setItem("save", JSON.stringify(save));
  	}

  	$scope.reset = function(){
  		localStorage.removeItem("save");
  		init();
  	}

  	var init = function(){
	  	if(JSON.parse(localStorage.getItem("save")) != null){
	  		var save = JSON.parse(localStorage.getItem("save"));
	  		$scope.money = save.userData.money;
	  		$scope.dayPassed = save.userData.dayPassed;
	  		$scope.items = save.items;
	  	}else{
	  		$scope.money = 1000;
	  		$scope.dayPassed = 0;

			$scope.items = [
				{name : 'Fer', 'avgPrice' : 100},
				{name : 'Cuivre', 'avgPrice' : 200},
				{name : 'Or', 'avgPrice' : 8000},
				{name : 'Platine', 'avgPrice' : 10000},
				{name : 'Saphir', 'avgPrice' : 2000}
			];
	  	}

	  	// Set items and their average price
	  	$scope.items = [
			{name : 'Fer', 'avgPrice' : 100},
			{name : 'Cuivre', 'avgPrice' : 200},
			{name : 'Or', 'avgPrice' : 8000},
			{name : 'Platine', 'avgPrice' : 10000},
			{name : 'Saphir', 'avgPrice' : 2000}
		];

	  	angular.forEach($scope.items, function(item){

	  		// Function to init price in function of avgPrice
			item.setInitialPrice = function(){
				// Simulate normal distribution around avgPrice
				var random = (Math.random()*2-1)+(Math.random()*2-1)+(Math.random()*2-1);
				item.price = Math.round(random*(item.avgPrice/4)+item.avgPrice);
			};

		}


		if(!item.price){
			item.setInitialPrice();
			item.amount = 0;
			item.lastPrice = 0;
			item.variation = '<div class="equal"><img src="images/arrow.svg" alt="Equal" /></div>';
		}

		// Buy 1 item
		item.buy = function(number){
			// Set money for item in scope
			if($scope.money >= item.price*number){	
				item.amount += number;
				$scope.money -= item.price*number;
			}
		};

		item.sell = function(number){
			if(item.amount >= number){	
				item.amount -= number;
				$scope.money += item.price*number;
			}
		};
	});
  	}

  	init();

	$scope.wait = function(){
		$scope.dayPassed++;
		angular.forEach($scope.items, function(item){
			item.lastPrice = item.price;

			var random = (Math.random()*2-1)+(Math.random()*2-1)+(Math.random()*2-1);
			var newPrice = Math.round(random*(item.avgPrice/4)+(item.price+item.avgPrice)/2);
			item.price = newPrice;

			if(item.lastPrice < item.price)
				item.variation = '<div class="up"><img src="images/arrow.svg" alt="Up" /></div>';
			else if(item.lastPrice > item.price)
				item.variation = '<div class="down"><img src="images/arrow.svg" alt="Down" /></div>';
			else
				item.variation = '<div class="equal"><img src="images/arrow.svg" alt="Equal" /></div>';
		});
	};
  });