app.directive('searchHeader', function(){

    return {
        restrict: 'E',
        link: function($scope) {
        },
        template: `
        <div class="heading">
            <h1 class="text-center">
                <span>
                    Find 
                </span>
                <span type-speed="80" back-speed="80"
                type-strings="['Doctors..', 'Symptoms..', 'Clinics..']"
                html-mode typed loop remove-last="false">
                </span>
                <span id="typed"></span>
            </h1>
        </div>
        `
    }
});
