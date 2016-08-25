function Talk (message) {
  this.message = message;
}

Talk.prototype = {
  get greetings() {
    return 'Hola! En que puedo ayudarte?';
  },
  get reservationText() {
    return 'Podemos realizar una reserva. Para que fecha querés el turno?';
  },
  get dirty() {
    const msgs = ['Apa... bueno, no se que hacer', '😘', '🙈 🙉 🙊', 'Me confunde señor!'];
    return msgs[Math.floor(Math.random()*(msgs.length-1))];
  },
  searchInMessage: function(words) {
    return this.message.split(/\s+/).reduce(function(acc, text){
      return acc || words.indexOf(text.replace(/(\W)/gi,'').toLowerCase())!==-1;
    }, false);
  },
  hasDirty: function() {
    return this.searchInMessage(['sexo','mierda','puto','pete']);
  },
  hasGreetings: function() {
    return this.searchInMessage([
      'hola',
      'buenas',
      'hello',
      'hi',
    ]);
  },
  hasReservationRequest: function(){
    return this.searchInMessage([
      'turno',
      'reserva',
    ]);
  },
  toString: function() {
    return this.message;
  }
};

const getResponse = function(message) {
  const responses = [];
  const talk = new Talk(message);
  if (talk.hasGreetings()) {
    responses.push(talk.greetings);
  }
  if (talk.hasReservationRequest()) {
    responses.push(talk.reservationText);
  }
  if (talk.hasDirty()) {
    responses.push(talk.dirty);
  }
  if (!responses.length) {
    responses.push('Perdón, no entiendo a que te refieres :(');
  }
  return responses;
}

module.exports.getResponse = getResponse;
