// 1) interface et fonction pour la premiere action
export interface Animaux {
  name: string;
}

function onPeutPhotographierTousLesAnimaux(animaux: Animaux): void {
  console.log("Ils sont tous photogénique :-)");
}

// 2) class et fonction pour la deuxieme actions
class Chats {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  tousLesChatsPeuventMiauler(): void {
    console.log("Tous les chats font miauouuuu");
  }
}

const chatChartreux = new Chats("Chartreux");

// 3) class et fonction pour la troisieme actions
class Chiens {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  tousLesChiensPeuventAboyer(): void {
    console.log("Tous les chients font wouaf wouaf");
  }
}

const chienMoonMoon = new Chiens("Moon Moon");

// 4) class et fonction pour la quatrieme actions
class Oiseaux {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  tousLesOiseauxPeuventVoler(): void {
    console.log("Tous les oiseaux volent dans le ciel");
  }
}

const oiseauMesange = new Oiseaux("Mesange");

// 5) class et fonction pour la cinqieme actions
class Poissons {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  tousLesPoissonsPeuventNager(): void {
    console.log("Tous les poissons nagent dans l'eau");
  }
}

const poissonThon = new Poissons("Thon");
const poissonRequin = new Poissons("Requin");

// 6) sixieme actions; je mets comment argument tous les chiens ou les chats
function onPeutCaresserTousLesAnimauxA4Pattes(animaux: Chiens | Chats): void {
  console.log("Tous les animaux à 4 pattes aiment se faire carresser :-)");
}

// 7) septieme actions, j'utilise l'héritage afin de mettre les animaux de couleur noire dans leur class respective
class ChiensNoir extends Chiens {
  couleur: string;

  constructor(name: string, couleur: string) {
    super(name);
    this.couleur = couleur;
  }

  onPeutNourrirTousLesAnimauxDeCouleurNoire(): void {
    console.log("Nous pouvons nourrir les animaux de couleur noire");
  }
}
const chienTerreNeuve = new ChiensNoir("Terre-Neuve", "noir");

class ChatsNoir extends Chats {
  couleur: string;

  constructor(name: string, couleur: string) {
    super(name);
    this.couleur = couleur;
  }

  onPeutNourrirTousLesAnimauxDeCouleurNoire(): void {
    console.log("Nous pouvons nourrir les animaux de couleur noire");
  }
}

const chatEuropeen = new ChatsNoir("Européen", "noir");

class OiseauxNoir extends Oiseaux {
  couleur: string;

  constructor(name: string, couleur: string) {
    super(name);
    this.couleur = couleur;
  }

  onPeutNourrirTousLesAnimauxDeCouleurNoire(): void {
    console.log("Nous pouvons nourrir les animaux de couleur noire");
  }
}

const oiseauMerle = new OiseauxNoir("Merle", "noir");

// 1) En lançant node noe.js en mettant n'importe quel animal dans la fonction cela affiche : Ils sont tous photogénique :-)
onPeutPhotographierTousLesAnimaux(chienMoonMoon);

// 2) En lançant node noe.js cela affiche deux fois : Tous les chats font miauouuuu
chatEuropeen.tousLesChatsPeuventMiauler();
chatChartreux.tousLesChatsPeuventMiauler();

// 3) En lançant node noe.js cela affiche deux fois : Tous les chients font wouaf wouaf
chienTerreNeuve.tousLesChiensPeuventAboyer();
chienMoonMoon.tousLesChiensPeuventAboyer();

// 4) En lançant node noe.js cela affiche deux fois : Tous les oiseaux volent dans le ciel
oiseauMesange.tousLesOiseauxPeuventVoler();
oiseauMerle.tousLesOiseauxPeuventVoler();

// 5) En lançant node noe.js cela affiche deux fois : Tous les poissons nagent dans l'eau
poissonThon.tousLesPoissonsPeuventNager();
poissonRequin.tousLesPoissonsPeuventNager();

// 6) En lançant node noe.js cela affiche quatre fois : Tous les animaux à 4 pattes aiment se faire carresser :-)
onPeutCaresserTousLesAnimauxA4Pattes(chienTerreNeuve);
onPeutCaresserTousLesAnimauxA4Pattes(chienMoonMoon);
onPeutCaresserTousLesAnimauxA4Pattes(chatEuropeen);
onPeutCaresserTousLesAnimauxA4Pattes(chatChartreux);

// 7) En lançant node noe.js cela affiche trois fois : Nous pouvons nourrir les animaux de couleur noire
chienTerreNeuve.onPeutNourrirTousLesAnimauxDeCouleurNoire();
chatEuropeen.onPeutNourrirTousLesAnimauxDeCouleurNoire();
oiseauMerle.onPeutNourrirTousLesAnimauxDeCouleurNoire();
