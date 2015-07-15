/**
 * Created by Andrey on 7/15/15.
 */
'use strict';

app.controller('PostsCtrl', function($scope){
    $scope.posts= [];
    $scope.post = {
        url: 'http://',
        title: ''
    };

    $scope.submitPost = function(){
      $scope.posts.push($scope.post);
      $scope.post = {
            url: 'http://',
            title: ''
      };
    };

    $scope.deletePost = function(index){
        $scope.posts.splice(index,1);
    };
});