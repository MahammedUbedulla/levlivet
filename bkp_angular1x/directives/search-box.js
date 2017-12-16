app.directive('searchBox', function(){
    
        return {
            restrict: 'E',
            template: `
                <div class="row">
                    <button type="submit" class="btn btn-primary btn-md search-btn" style="float: right"
                        ng-click="searchResults()">
                        <span class="glyphicon glyphicon-search"></span>
                    </button>
                    <div style="overflow: hidden; padding-right: .5em;">
                    
                        <input type="text" ng-model="customPopupSelected" 
                            placeholder="Search for doctors, clinics, symptoms" 
                            typeahead-no-results="noResults"
                            typeahead-loading="loadingLocations"
                            uib-typeahead="result as result.name for result in getResults($viewValue)" 
                            typeahead-popup-template-url="customPopupTemplate.html" 
                            class="form-control">
                        
                        <div ng-show="loadingLocations" class="btn-md search-drop text-center btn-lg">
                            <i class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></i>
                        </div>
                        <div ng-show="noResults" class="btn-md search-drop text-center">
                            <i class="glyphicon glyphicon-remove glyphicon-remove-animate"></i> No Results Found
                        </div>
                    </div>
                    
                </div>

                <script type="text/ng-template" id="customPopupTemplate.html">
                    <div class="custom-popup-wrapper search-drop"
                        ng-style="{top: position().top+'px', left: position().left+'px'}"
                        ng-show="isOpen() && !moveInProgress">
                        <p class="message search-section-header">Symptoms</p>
                        <ul class="dropdown-menu" style="display: block;" role="listbox" >
                            <li class="uib-typeahead-match" ng-repeat="match in matches track by $index"
                                    ng-class="{active: isActive($index) }"
                                    ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)"
                                    role="option" id="{{::match.id}}">
                                <div uib-typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>
                            </li>
                        </ul>

                        <p class="message search-section-header">Doctors</p>
                        <p class="message search-section-header">Clinics</p>
                    </div>
                </script>
            `
        }
    });
    