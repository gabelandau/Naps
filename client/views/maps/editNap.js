Template.editNap.events({
  'click #geoLoc' : function(e){
    e.preventDefault();
    Location.locate(function(pos){
       $('input[name=lat]').val(pos.latitude);
       $('input[name=lng]').val(pos.longitude);

       if(previewMarker[0]){
       	previewMarker[0].setPosition({ lat: pos.latitude, lng: pos.longitude });
       }
       else{

       	var map = new google.maps.Map(document.getElementById("map"), mapOptions); 

       	var marker = new google.maps.Marker({
       		draggable: true,
       		animation: google.maps.Animation.DROP,
       		position: { lat: pos.latitude, lng: pos.longitude },
       		icon: previewimage,
       		map: map
       	});
       	google.maps.event.addListener(marker, 'dragend');
       	previewMarker[0] = marker;
       }
    }, function(err){
       console.log("Oops! There was an error", err);
    });
  }
});