// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  model: SongModel,
  url: 'https://api.parse.com/1/classes/songs/',
  initialize: function() {
    this.fetch();
  },
  parse: function(response) {
    return response.results;
  }


  // method: 'GET',
  // ContentType: 'application/json',
  // fetch: function(options) {
  //   console.log('works');
  //   return Backbone.Collection.prototype.fetch.call(this, options);
  // }


  // initiatlize: function() {
  //   this.fetch();
  // // },

  // function(songData) {
  //   $.ajax({
  //     // This is the url you should use to communicate with the parse API server.
  //     url: 'https://api.parse.com/1/classes/songs/',
  //     // type: 'GET',
  //     method: 'GET',
  //     data: JSON.stringify(songData),
  //     contentType: 'application/json',
  //     success: function (data) {
  //       console.log(data);
  //       // data.forEach(function(song) {
  //       //   songData.push(song);
  //       // });
  //       console.log('songReceived');
  //     },
  //     error: function (data) {
  //       // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
  //       console.error('Failed to receive songs', data);
  //     }
  //   });
  // }

});