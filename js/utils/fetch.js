angular.module('app').factory('fetch', [ '$q', function($q){
	return function (params) {
		console.log(params);
		var deferred = $q.defer();
		var username = params.username;
		var password = params.password;
		var phone = params.phone;
		var email = params.email;
		var errors = {

		};

		if(Math.random() > 0.5){
			errors['common'] = ['server_error'];
		}

		if(email == 'test@test.test'){
			errors['email'] = ['email_in_use'];
		}

		setTimeout(function(){
			if(isEmpty(errors)){
				deferred.resolve();
			}else{
				deferred.reject(errors);
			}
		}, 500);

		return deferred.promise;
	};

	function isEmpty(obj){
		for(var i in obj) if(obj.hasOwnProperty(i)){
			return false;
		}
		return true;
	}
}]);

