function Message (message) {
  this.message = message;
}

Message.prototype = {
  get greetings() {
    return 'Hola! En que puedo ayudarte?';
  },
  hasGreetings: function() {
    const greetings = [
      'hola',
      'buenas',
      'como va?',
      'que tal?',
      'hello',
      'hi',
    ];
    return this.message.split(/\s+/).reduce(function(acc, text){
      return acc || greetings.indexOf(text.toLowerCase());
    }, false);
  },
  toString: function() {
    return this.message;
  }
};

const getResponse = function(message) {
  const message = new Message(message);
  if (message.hasGreetings()) {
    return message.greetings;
  }
  return 'Perdón, no entiendo a que te refieres :(';
}

module.exports.getResponse = getResponse;
