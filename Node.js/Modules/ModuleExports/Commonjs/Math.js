module.exports = 'Hello, world!';

module.exports = {
    greet: function() {
      console.log('Hello, world!');
    },
    farewell: function() {
      console.log('Goodbye, world!');
    }
  };

exports.greet = function() {
    console.log('Hello, world!');
  };
  
  exports.farewell = function() {
    console.log('Goodbye, world!');
  };
  
  
