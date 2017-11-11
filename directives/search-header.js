app.directive('searchHeader', function(){

    return {
        restrict: 'E',
        template: `
            <span type-speed="80" back-speed="80"
                    type-strings="['Doctors..', 'Symptoms..', 'Clinics..']"
                    html-mode typed loop remove-last="false">
            </span>
        `
    }
});