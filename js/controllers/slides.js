

function MainCtrl ($scope) {
  $scope.slides = [
        {image: 'img/shot1.jpg', description: 'Acupuncture'},
        {image: 'img/cupping-2.jpg', description: 'Cupping'},
        {image: 'img/herbs-2.jpg', description: 'Herbs'}
    ];

	$scope.currentIndex = 1;

    $scope.setCurrentSlideIndex = function (index) {
        $scope.currentIndex = index;
    };

    $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };
}