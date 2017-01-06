// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  events: {
    'enqueue': function(song) {
      console.log('SongQueueView');
      // this.model.play();
      // this.model.enqueue();
      // this.model.dequeue();
      this.collection.add(song);
      this.render();
    }
  },

  initialize: function() {
    this.render();

    this.collection.on('add', this.render, this);
  },

  enqueue1: function(songs) {
    // this.render();
    // var songModel = new SongModel({
    //   artist: 'data',
    //   url: '/test/testsong.mp3',
    //   title: 'test song'
    // });
    console.log('SongQueueView', songs.models[0]);
    this.collection.add(songs.models[0]);

  },

  render: function() {
    // return this.$el;
    this.$el.children().detach();
    console.log('SongQueueView - count');
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});