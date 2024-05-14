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
      words: [
        { wordA: "soleil", wordB: "sun", hint: "3 lettres", answer:"", correct: false, },
        { wordA: "au revoir", wordB: "goodbye", hint: "commence par 'g' fini par 'e'", answer:"", correct: false, },
        { wordA: "gris", wordB: "grey", hint: "salutations", answer:"", correct: false, },
        { wordA: "chien", wordB: "dog", hint: "salutations", answer:"", correct: false, },
      ],
      shuffleWords: [],
      correctCount: 0,
      completed: false,

    };
  },

  mounted() {
    this.shuffleWords = this.words.slice().sort(() => 0.5 - Math.random())
  },

  computed: {
    wordsCount(){
      return this.words.length;
    },
  },

  watch: {
    correctCount() {
      this.completed = this.correctCount == this.wordsCount;
    },
  },

  methods: {
    validateAnswer(word) {
     word.correct = word.wordB == word.answer;
     if (word.correct) {
      this.correctCount++;
     }
    },

    restartGame() {
      this.words.forEach((word) => {
        word.answer="";
        word.correct = false;
      });
      this.correctCount = 0;
      this.completed = false;
      this.shuffleWords = this.shuffleWords = this.words.slice().sort(() => 0.5 - Math.random())
    },
  },
};

// Créer une nouvelle instance Vue en utilisant nos options et la monter sur l'élément HTML avec l'ID "app"
const app = createApp(pandaGuesserApp).mount("#app");