/**
 * Created by Andrey on 7/16/15.
 */
'use strict';

app.controller('NavCtrl', function($scope, $location, Auth, Post){
   $scope.post =  {
       url: 'http//',
       title: ''
   };

    $scope.submitPost = function(){
        Post.create($scope.post).then(function(ref){
            $location.path('/posts/' + ref.name());
            $scope.post =  {
                url: 'http//',
                title: ''
            };
        });
    };

    $scope.signedIn = Auth.signedIn;
    $scope.logout = Auth.logout;
});