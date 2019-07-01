import data from '../../data/landing_page.data.js';

function LandingController($scope) {
  $scope.images = data;

  
  $('#map').JSMaps({
    map: 'indonesia',
    stateClickAction: 'none',
    strokeColor: '#FFF'
  });
}

export default LandingController;