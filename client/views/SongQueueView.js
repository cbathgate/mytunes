// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  events: {
    'enqueue': function(song) {
      this.collection.add(song);
      this.render();
    }
  },

  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    this.collection.on('ended', this.render, this);
  },

  enqueue: function(songs) {
    this.collection.add(songs.models[0]);
  },

  dequeue: function() {
    this.collection.remove(this.collection.at(0));
  },

  render: function() {
    // return this.$el;
    this.$el.children().detach();
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});