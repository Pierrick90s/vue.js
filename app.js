/**
 * Fichier de cours pour apprendre Vue.js.
 * Ce fichier contient un exemple de jeu simple de devinette de mots en utilisant Vue.js.
 * Les utilisateurs doivent deviner la traduction française ou anglaise du mot affiché.
 * Le fichier comprend la définition des données, le rendu des éléments de l'interface utilisateur
 * et la gestion des interactions utilisateur telles que la saisie de la réponse et l'affichage du feedback.
 *
 * Date: 24 avril 2024
 * Auteur: @helyaTam
 */


// Importation de la fonction createApp depuis le CDN Vue.js 3
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";


// Définir les options de notre application Vue.js
const pandaGuesserApp = {
  // Définir les données de l'application
  data() {
    // Initialiser les variables de données
    return {
      wordA: "bonjour",
      wordB: "hello",
      answer: "",
      correct: null,
      showFeedBack: false,
      frenchWords: ["bonjour", "aurevoir", "un", "deux"],
      word: { a: "bonjour", b: "hello" },
      words: [
        { wordA: "bonjour", wordB: "hello" },
        { wordA: "au revoir", wordB: "goodbye" },
        { wordA: "un", wordB: "one" },
        { wordA: "deux", wordB: "two" },
      ],
      imageAlt: "",
      circleType: "",
      hasError: false,
      inputBackgroundColor: "white",
      showHint: false,
      firstname: "",
      lastname: "",

    };
  },

  computed: {

    fullName() {
        return this.firstname + " " + this.lastname;
    },
    
  },

  methods: {

    getFullName() {
     return this.firstname + " " + this.lastname;
    },

    cbAnswer () {
        if (this.answer != "") {
        this.hasError = false;
        this.inputBackgroundColor = "white";
        return;
        }
    },

    checkAnswer() {
      if (this.answer == "") {
        this.hasError = true;
        this.inputBackgroundColor = "lightgoldenrodyellow";
        return;
      }

      this.hasError = false;
      this.inputBackgroundColor = "white";

      this.correct = this.answer == this.wordB;
      if (this.correct) {
        this.circleType = "correct";
        this.imageAlt = "image de confirmation de bonne réponse";
      } else {
        this.circleType = "incorrect";
        this.imageAlt = "image de confirmation de mauvaise réponse";
      }
      this.showFeedBack = true;
    },
    reset() {
      this.answer = "";
      this.showFeedBack = false;
    },
  },
};

// Créer une nouvelle instance Vue en utilisant nos options et la monter sur l'élément HTML avec l'ID "app"
const app = createApp(pandaGuesserApp).mount("#app");