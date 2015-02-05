module.controller("PictureCtrl",function($scope, $cordovaCamera){
  document.addEventListener("deviceReady",function(){
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.Camera
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(
      function(imageData){
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg:base64" + imageData;
      },
      function(err){
        alert("Something has gone wrong because :" + err);
      }
    );
  }, false);
});
