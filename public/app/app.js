var app = angular.module("rt-sensor", ['btford.socket-io']);

app.factory('socket', function (socketFactory) {
  var myIoSocket = io.connect();
  mySocket = socketFactory({
    ioSocket: myIoSocket
  });
  return mySocket;
});

app.controller("front", function($scope, socket) {

  socket.on('read', function(msg) {
    $scope.read = msg
  })

})
