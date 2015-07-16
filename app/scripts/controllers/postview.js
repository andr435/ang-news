/**
 * Created by Andrey on 7/16/15.
 */
'use strict';

app.controller('PostViewCtrl', function($scope, $routeParams, Post){
    $scope.post = Post.get($routeParams.postId);
});

