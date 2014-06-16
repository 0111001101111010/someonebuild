'use strict';

angular.module('someonebuildApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
