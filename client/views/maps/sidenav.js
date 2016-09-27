Template.sidenav.helpers({
  'napCount':function(s){
    return Naps.find({spot_type:s}).count();
  }
});

Template.sidenav.events({
  'click #edit':function(e){
    var id = e.target.getAttribute('napid');
    Session.set('selectedNap', false);
    Session.set('editingNap', Naps.findOne(id));
  },
  'click #remove':function(e){
    var id = e.target.getAttribute('napid');
    Naps.remove(id);
    $('#closePanel').removeClass('toggled');
    $('#sidebar-wrapper').removeClass('toggled');
    $('#bottombar-wrapper').removeClass('toggle-bottom');
    $('#map').removeClass('map-toggle');
  },
  'click #approve':function(e){
    var id = e.target.getAttribute('napid');
    Naps.update({ _id: id}, {$set: {approved: true}});
    $('#closePanel').removeClass('toggled');
    $('#sidebar-wrapper').removeClass('toggled');
    $('#bottombar-wrapper').removeClass('toggle-bottom');
    $('#map').removeClass('map-toggle');
  }
});