/**
 * Created by Andrey on 7/15/15.
 */
'use strict';

app.factory('Post', function($resource){
    return $resource('https://intense-fire-9235.firebaseio.com/posts/:id.json');
});

