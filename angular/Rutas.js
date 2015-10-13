angular.module("Pagina")
	.config(function($routeProvider){
	$routeProvider.when("/",
						{ controller: "Objetos",
						 templateUrl: "vistas/home.html"
						})
					.when("/inv",
						{ controller: "Objetos",
						 templateUrl: "vistas/inversor.html"
						})
					.when("/qs",
						{ controller: "Objetos",
						 templateUrl: "vistas/quienes.html"
						})
					.when("/cl",
						{ controller: "Objetos",
						 templateUrl: "vistas/calculadora.html"
						})
	
});