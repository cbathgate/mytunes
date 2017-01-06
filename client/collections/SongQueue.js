// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function(e) {  
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function(e) {
      this.dequeue(this.at(0));
      if (this.length > 0) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(e) {
      this.dequeue(this);
    });
  },

  playFirst: function() {
    this.at(0).play();
  },

  dequeue: function(song) {
    this.remove(song);
  }
});