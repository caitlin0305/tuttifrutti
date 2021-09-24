/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('purple');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // stel vulkleur in
  fill(255, 255, 255);

  //teken drie vlakken voor de getallen//
  rect(500,150,200,300);
  rect(150,150,200,300);
  rect(850, 150, 200, 300);

  //button//
  rect(400, 500, 400, 100);
  
}