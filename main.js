var countdown = function(deadline, elements) {
  var _second = 1000,
      _minute = _second * 60,
      _hour = _minute * 60,
      _day = _hour * 24,

      deadline = new Date(deadline),
      timer,

      calculate = function() {

        var now = new Date(),
            remaining = deadline.getTime() - now.getTime(),
            data;

        // Check if date is not a number
        if(isNaN(deadline)) {
          console.log('Invalid date');
          return;
        }

        // When date has passed
        if(remaining <= 0) {

        } else {
          if(!timer) {
            timer = setInterval(calculate, _second);
          }
        }
        
        data = {
          'days': Math.floor(remaining / _day),
          'hours': Math.floor((remaining % _day) / _hour),
          'minutes': Math.floor((remaining % _hour) / _minute),
          'seconds': Math.floor((remaining % _minute) / _second)
        }

        // Set HTML elements to data
        if(elements.length) {
          for(x in elements) {
            var x = elements[x];
            document.getElementById(x).innerHTML = data[x];
          }
        }
      };

    calculate();
}
