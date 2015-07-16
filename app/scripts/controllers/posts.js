/**
 * Created by Andrey on 7/15/15.
 */
'use strict';

app.controller('PostsCtrl', function($scope, $location, Post){

    $scope.posts= Post.all;
    $scope.post = {
        url: 'http://',
        title: ''
    };

    $scope.deletePost = function(post){
        Post.delete(post);
    };
});