function AppCtrl ($scope, $rootScope) {
  $scope.patient = {
    "JRB": {
      "firstname": "Garryn",
      "lastname": "Skurulsky",
      "birthdate": "1984-10-05",
      "gender": "female",
      "height": "70.5",
      "weight": "158",
      "photoURL": "garryn.png",
      "foodPainLog": [ 
        {"date":"2013-12-08", "rating":"1", "breakfast":"biscuits and gravy", "lunch":"soup and salad","dinner":"chicken and potato salad"},
        {"date":"2013-12-07", "rating":"2",  "breakfast":"walnuts and porridge", "lunch":"ham sandwich","dinner":"soup and pizza"},
        {"date":"2013-12-06", "rating":"1", "breakfast":"2 eggs, toast, tea", "lunch":"salad and soup","dinner":"chicken, rice, brocolli"},
        {"date":"2013-12-05", "rating":"4", "breakfast":"cereal and orange juice", "lunch":"BLT and coke","dinner":"salmon, risotto"},
        {"date":"2013-12-04", "rating":"5", "breakfast":"oatmeal, banana, orange juice", "lunch":"granola bar, protein shake, banana","dinner":"lobster"},
        {"date":"2013-12-03", "rating":"4", "breakfast":"granola, yogurt, grapefruit, orange juice", "lunch":"-","dinner":"hamburger, fries, milkshake"},
        {"date":"2013-12-02", "rating":"5", "breakfast":"strawberries, cherrios, grapefruit", "lunch":"ham sandwich, pepsi, chips","dinner":"salad, portobello mushrooms, ciabatta"},
        {"date":"2013-12-01", "rating":"5", "breakfast":"honey dew melon, tea, toast", "lunch":"tomato soup, salad, bread","dinner":"Pad Thai"},
      ],
      "treatmentLog": [
        { "date":"2013-12-02", 
          "treatments": [
            {"type":"Tuina", "duration":"45", "hourlyRate":"60"},
            {"type":"Acupuncture", "duration":"60", "hourlyRate":"80"},
            {"type":"Cupping", "duration":"20", "hourlyRate":"50"}
          ],
          "total":"230"
        },
        { "date":"2013-12-01", 
          "treatments": [
            {"type":"Tuina", "duration":"45", "hourlyRate":"60"},
            {"type":"Acupuncture", "duration":"60", "hourlyRate":"80"},
            {"type":"Cupping", "duration":"20", "hourlyRate":"50"},
            {"type":"Tub", "duration":"60", "hourlyRate":"40"}
          ],
          "total":"230"
        }
      ],
      "itemsPurchasedLog": [
        { "date":"2013-12-03", 
          "items": [
            {"name":"Lavender - Young Essentials", "quantity": 1, "price":"15"},
            {"name":"Set 1 - Young Essentials",  "quantity": 1, "price":"150"},
            {"name":"Mobile App",  "quantity": 1, "price":"10"},
            {"name":"Eye Pillow",  "quantity": 2, "price":"20"},
            {"name":"Total", "quantity": "1", "price":"195"}
          ],
          "total":"195"
        }
      ],
      "required": ["firstname", "lastname", "birthdate", "gender", "height", "weight"]
    }
  };

  $scope.setActive = function(type) {
    $scope.dietActive = ''; $scope.dietDisplay = false;
    $scope.treatmentsActive = ''; $scope.treatmentsDisplay = false;
    $scope.appointmentsActive = ''; $scope.appointmentsDisplay = false;
    $scope.shoppingActive = ''; $scope.shoppingDisplay = false;
    $scope.helpfulActive = ''; $scope.helpfulDisplay = false;
  
    $scope[type + 'Active'] = 'active';
    $scope[type+ 'Display'] = true;
  }

  //Nav Partial
  $scope.navURL = 'partials/nav.html';

  //Home Partials
  $scope.homeSliderURL = 'partials/homeSlider.html';
  $scope.fourWhiteSecURL = 'partials/fourWhiteSec.html';
  $scope.mobileSectionURL = 'partials/mobileSection.html';

  //Dashboard Partials
  $scope.dieteticsURL = 'partials/dietetics.html';
  $scope.treatmentsURL = 'partials/treatmentsWidget.html';
  $scope.appointmentsURL = 'partials/appointmentsWidget.html';
  $scope.shoppingHistoryWidgetURL  = 'partials/shoppingHistoryWidget.html';
  $scope.helpfulLinksURL = 'partials/helpfulLinks.html';
  $scope.painGraphURL = 'partials/painGraph.html';

  //Footer Partial
  $scope.footerURL = 'partials/footer.html';

  $scope.currentPatient = null;
  $scope.setPatient = function(firstname) {
    $scope.currentPatient = $scope.patient[firstname];
    alert("hey");
  };
}