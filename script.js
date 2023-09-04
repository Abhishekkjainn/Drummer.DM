function basedrum() {
  let bassdrum = document.getElementById('bassdrum');
  bassdrum.play();
}
function tomtoml() {
  let tomtoml = document.getElementById('tomtomL');
  tomtoml.play();
}
function cymbal1() {
  let cymbal1 = document.getElementById('cymbal1');
  cymbal1.play();
}
function tomtomr() {
  let tomtomr = document.getElementById('tomtomR');
  tomtomr.play();
}
function snare() {
  let snare = document.getElementById('snaredrum');
  snare.play();
}
function crash() {
  let crash = document.getElementById('crash');

  crash.play();
}

document.addEventListener('keypress', function (e) {
  if (e.key == 'a' || e.key == 'A') {
    let tomtomr = document.getElementById('tomtomR');
    tomtomr.play();
    document.getElementById('tomtomrdiv').style.backgroundColor =
      'rgb(0, 220, 143)';

    setTimeout(() => {
      document.getElementById('tomtomrdiv').style.backgroundColor =
        'rgb(0, 0, 0)';
    }, 300);
  }
  if (e.key == 'B' || e.key == 'b') {
    let bassdrum = document.getElementById('bassdrum');
    bassdrum.play();
    document.getElementById('basedrumdiv').style.backgroundColor = 'purple';

    setTimeout(() => {
      document.getElementById('basedrumdiv').style.backgroundColor =
        'rgb(0, 0, 0)';
    }, 300);
  }
  if (e.key == 't' || e.key == 'T') {
    let tomtoml = document.getElementById('tomtomL');
    tomtoml.play();
    document.getElementById('tomtomldiv').style.backgroundColor =
      'rgb(56, 0, 109)';

    setTimeout(() => {
      document.getElementById('tomtomldiv').style.backgroundColor =
        'rgb(0, 0, 0)';
    }, 300);
  }
  if (e.key == 'c' || e.key == 'C') {
    let cymbal1 = document.getElementById('cymbal1');
    cymbal1.play();
    document.getElementById('cymbal1div').style.backgroundColor =
      'rgb(238, 135, 0)';

    setTimeout(() => {
      document.getElementById('cymbal1div').style.backgroundColor =
        'rgb(0, 0, 0)';
    }, 300);
  }
  if (e.key == 'S' || e.key == 's') {
    let snare = document.getElementById('snaredrum');
    snare.play();
    document.getElementById('snarediv').style.backgroundColor =
      'rgb(251, 0, 38)';

    setTimeout(() => {
      document.getElementById('snarediv').style.backgroundColor =
        'rgb(0, 0, 0)';
    }, 300);
  }
  if (e.key == 'R' || e.key == 'r') {
    let crash = document.getElementById('crash');
    crash.play();
    document.getElementById('crashdiv').style.backgroundColor =
      'rgb(255, 242, 0)';

    setTimeout(() => {
      document.getElementById('crashdiv').style.backgroundColor =
        'rgb(0, 0, 0)';
    }, 300);
  }
});
