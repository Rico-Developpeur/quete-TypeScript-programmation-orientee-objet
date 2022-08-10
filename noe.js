"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
function onPeutPhotographierTousLesAnimaux(animaux) {
    console.log("Ils sont tous photogénique :-)");
}
// creation d'une class Larves
var Larves = /** @class */ (function () {
    function Larves(name) {
        this.name = name;
    }
    return Larves;
}());
var larveAsticot = new Larves("Asticot");
// 2) creation d'une class Chats et fonction pour la deuxieme actions suite dans la partie 7 avec l'heritage
var Chats = /** @class */ (function () {
    function Chats(name) {
        this.name = name;
    }
    Chats.prototype.tousLesChatsPeuventMiauler = function () {
        console.log("Tous les chats font miauouuuu");
    };
    return Chats;
}());
var chatChartreux = new Chats("Chartreux");
// 3) creation d'une class Chiens et fonction pour la troisieme actions suite dans la partie 7 avec l'heritage
var Chiens = /** @class */ (function () {
    function Chiens(name) {
        this.name = name;
    }
    Chiens.prototype.tousLesChiensPeuventAboyer = function () {
        console.log("Tous les chients font wouaf wouaf");
    };
    return Chiens;
}());
var chienMoonMoon = new Chiens("Moon Moon");
// 4) creation d'une class Oiseaux et fonction pour la quatrieme actions suite dans la partie 7 avec l'heritage
var Oiseaux = /** @class */ (function () {
    function Oiseaux(name) {
        this.name = name;
    }
    Oiseaux.prototype.tousLesOiseauxPeuventVoler = function () {
        console.log("Tous les oiseaux volent dans le ciel");
    };
    return Oiseaux;
}());
var oiseauMesange = new Oiseaux("Mesange");
// 5) creation d'une class Poissons et fonction pour la cinqieme actions
var Poissons = /** @class */ (function () {
    function Poissons(name) {
        this.name = name;
    }
    Poissons.prototype.tousLesPoissonsPeuventNager = function () {
        console.log("Tous les poissons nagent dans l'eau");
    };
    return Poissons;
}());
var poissonThon = new Poissons("Thon");
var poissonRequin = new Poissons("Requin");
// 6) sixieme actions; je mets comment argument tous les chiens ou les chats
function onPeutCaresserTousLesAnimauxA4Pattes(animaux) {
    console.log("Tous les animaux à 4 pattes aiment se faire carresser :-)");
}
// 7) septieme actions, j'utilise l'héritage afin de mettre les animaux de couleur noire dans leur class respective
var ChiensNoir = /** @class */ (function (_super) {
    __extends(ChiensNoir, _super);
    function ChiensNoir(name, couleur) {
        var _this = _super.call(this, name) || this;
        _this.couleur = couleur;
        return _this;
    }
    ChiensNoir.prototype.onPeutNourrirTousLesAnimauxDeCouleurNoire = function () {
        console.log("Nous pouvons nourrir les animaux de couleur noire");
    };
    return ChiensNoir;
}(Chiens));
var chienTerreNeuve = new ChiensNoir("Terre-Neuve", "noir");
var ChatsNoir = /** @class */ (function (_super) {
    __extends(ChatsNoir, _super);
    function ChatsNoir(name, couleur) {
        var _this = _super.call(this, name) || this;
        _this.couleur = couleur;
        return _this;
    }
    ChatsNoir.prototype.onPeutNourrirTousLesAnimauxDeCouleurNoire = function () {
        console.log("Nous pouvons nourrir les animaux de couleur noire");
    };
    return ChatsNoir;
}(Chats));
var chatEuropeen = new ChatsNoir("Européen", "noir");
var OiseauxNoir = /** @class */ (function (_super) {
    __extends(OiseauxNoir, _super);
    function OiseauxNoir(name, couleur) {
        var _this = _super.call(this, name) || this;
        _this.couleur = couleur;
        return _this;
    }
    OiseauxNoir.prototype.onPeutNourrirTousLesAnimauxDeCouleurNoire = function () {
        console.log("Nous pouvons nourrir les animaux de couleur noire");
    };
    return OiseauxNoir;
}(Oiseaux));
var oiseauMerle = new OiseauxNoir("Merle", "noir");
// 1) En lançant node noe.js en mettant n'importe quel animal dans la fonction cela affiche : Ils sont tous photogénique :-)
onPeutPhotographierTousLesAnimaux(larveAsticot);
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
