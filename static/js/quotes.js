let myQuotes =  [
  "Flying is learning how to throw yourself at the ground and miss. - Douglas Adams",
  "History will be good to me, for I intend to write it. - Sir Winston Churchill",
  "Catch a man a fish and you can sell it to him.  Teach a man to fish and you ruin a good business opportunity. - Karl Marx",
  "If you want a new idea, read an old book. - Harry S. Truman",
  "I know, there are sober children in India! - Kathy Slamar",
  "People who think they know everything annoy us who do: #STEM - Girl on the plane to Portland",
  "There are only two times to have too much ammo.  1) if you're drowning, 2) if you're on fire - Youtube"
]

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(myQuotes)

let options = {
  strings: myQuotes,
  typeSpeed: 25,
  backDelay: 5000,
  startDelay: 200,
  loop: true,
  loopCount: false,
  cursorChar: " |"
};

let typed = new Typed('#quote-span', options);
