app.factory ('wikipedia', ['$http', function($http){
return $http.get('https://en.wikipedia.org/w/api.php')
.success(function(data){
return data;
})
.error(function(err){
return err;
});
}]);
