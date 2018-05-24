define(function (require) {
  'use strict';

  var modules = require('modules');
  var alienUtils = require('scripts/utils/alien_utils');

  modules.get('a4c-applications').controller('DeploymentDetailInfoCtrl',
    ['$scope', '$state', 'deploymentDTO', 'searchServiceFactory',
      function ($scope, $state, deploymentDTO, searchServiceFactory) {

        console.log("State is : " + $state.current.name);
        $scope.deploymentDTO = deploymentDTO.data;
        $scope.executionStatusIconCss = alienUtils.getExecutionStatusIconCss;
        $scope.executionStatusTextCss = alienUtils.getExecutionStatusTextCss;

        $scope.displayLogs = function(executionId) {
          $state.go('applications.detail.environment.history.detail.logs', {
            'deploymentId': deploymentDTO.data.deployment.id,
            'executionId': executionId
          });
        };

        $scope.displayTasks = function(execution) {
          console.log("Will display tasks for exec " + execution.id);
          $state.go('applications.detail.environment.history.detail.info.tasks');
//          $state.go('applications.detail.environment.history.detail.info.tasks', {
//            'executionId': execution.id,
//            'execution': execution
//          });
        };

        $scope.now = new Date();

        var searchServiceUrl = 'rest/latest/executions/search';
        $scope.queryManager = {
          query: ''
        };
        $scope.searchService = searchServiceFactory(searchServiceUrl, true, $scope.queryManager, 30, 50, true, null, { deploymentId: deploymentDTO.data.deployment.id });
        $scope.searchService.search();
        $scope.queryManager.onSearchCompleted = function(searchResult) {
          $scope.executions = searchResult.data.data;
        };
      }
    ]);
});
