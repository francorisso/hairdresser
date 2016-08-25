function Talk (message) {
  this.message = message;
}

Talk.prototype = {
  get greetings() {
    return 'Hola! En que puedo ayudarte?';
  },
  hasGreetings: function() {
    const greetings = [
      'hola',
      'buenas',
      'hello',
      'hi',
    ];
    return this.message.split(/\s+/).reduce(function(acc, text){
      return acc || greetings.indexOf(text.replace(/(\W)/gi,'').toLowerCase())!==-1;
    }, false);
  },
  toString: function() {
    return this.message;
  }
};

const getResponse = function(message) {
  const talk = new Talk(message);
  if (talk.hasGreetings()) {
    return talk.greetings;
  }
  return 'Perdón, no entiendo a que te refieres :(';
}

module.exports.getResponse = getResponse;
