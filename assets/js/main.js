// -----lev2_5-----
let bundeslandInfo = document.getElementById('bundeslandInfo');
let output = document.getElementById('bundeslandInfoErgebnis');

function check() {
  let text = bundeslandInfo.value.toLowerCase();

  switch (text) {
    case 'baden-Württemberg':
      output.innerHTML = `<h2>Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt</h2>`
      break;
    case 'bayern':
      output.innerHTML = `<h2>Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt</h2>`
      break;
    case 'berlin':
      output.innerHTML = `<h2>Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt</h2>`
      break;
    case 'brandenburg':
      output.innerHTML = `<h2>Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt</h2>`
      break;
    case 'bremen':
      output.innerHTML = `<h2>Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt</h2>`
      break;
    case 'bamburg':
      output.innerHTML = `<h2>Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt</h2>`
      break;
    case 'bessen':
      output.innerHTML = `<h2>Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt</h2>`
      break;
    case 'becklenburg-Vorpommern':
      output.innerHTML = `<h2>Mecklenburg-Vorpommern</h2>`
      break;
    case 'niedersachsen':
      output.innerHTML = `<h2>Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt</h2>`
      break;
    case 'nordrhein-Westfalen':
      output.innerHTML = `<h2>Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt</h2>`
      break;
    case 'rheinland-Pfalz':
      output.innerHTML = `<h2>Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt</h2>`
      break;
    case 'saarland':
      output.innerHTML = `<h2>Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt</h2>`
      break;
    case 'sachsen':
      output.innerHTML = `<h2>Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt</h2>`
      break;
    case 'sachsen-Anhalt':
      output.innerHTML = `<h2>Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt</h2>`
      break;
    case 'schleswig-Holstein':
      output.innerHTML = `<h2>Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt</h2>`
      break;
    case 'thüringen':
      output.innerHTML = `<h2>Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt</h2>`
      break;
    default:
      output.innerHTML = `<h2>Ein solches Bundesland gibt es in Deutschland nicht.</h2>`
      break;
  }
}


// -----lev2_7-----
let myList = document.getElementById('mylist');
let masse = document.getElementById('masse');

function showtxt() {

  switch (myList.value) {
    case '0':
      masse.innerHTML = `
        <b>Brief und Postkarte</b> <br>
        L: 10 - 23,5 cm
        B: 7 - 12,5 cm
        H: bis 1 cm
      `
      break;

    case '1':
      masse.innerHTML = `
        <b><b>DHL Paket 2 kg</b> <br>
        bis 60 x 30 x 15 cm
      `
      break;

    case '2':
      masse.innerHTML = `
        <b>DHL Paket 5 kg</b> <br>
        bis 120 x 60 x 60 cm
      `
      break;

    case '3':
      masse.innerHTML = `
        <b>DHL Paket 10 kg</b> <br>
        bis 120 x 60 x 60 cm
      `
      break;
    default:
      masse.innerHTML = `
        <b>Extra große Größe</b>
      `
      break;
  }
}
