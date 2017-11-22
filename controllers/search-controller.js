app.controller("searchController", function($scope, $filter, $window, $http, States){

    $scope.selected = undefined;
    $scope.asyncSelected = undefined;

    $scope.states = States;

    $scope.searchResults = function() {
        $window.location.href = 'results.html';
    };

    $scope.getResults = function(val) {
        var doctors = $http.get('http://localhost:8888/searchDoctors', {
                            params: {
                            query: val
                            }
                        }).then(function(response){
                            return response.data.doctors;
                        });
        var symptoms = $http.get('http://localhost:8888/searchSymptoms', {
                            params: {
                            query: val
                            }
                        }).then(function(response){
                            return response.data.symptoms;
                        });

        return symptoms ;
        
    };
});

app.filter("limitObjects", function(data, limit) {

    return data.slice(0, limit);
})
