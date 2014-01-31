slide.directive('todoex', [function () {
	return {
		restrict: 'E',
		templateUrl: 'directives/todo.html' ,
		controller: function ($scope) {

			$scope.services = [
				{
					name: 'Desarrollo Web',
					price: 300,
					active:true
				},{
					name: 'Diseño',
					price: 400,
					active:false
				},{
					name: 'Integración',
					price: 250,
					active:false
				},{
					name: 'Pruebas',
					price: 220,
					active:false
				}
			];

			$scope.toggleActive = function(s){
				s.active = !s.active;
			};

			// Metodo para calcular el precio

			$scope.total = function(){

				var total = 0;

				angular.forEach($scope.services, function(s){
					if (s.active){
						total+= s.price;
					}
				});

				return total;
			}
		}
	};
}]);