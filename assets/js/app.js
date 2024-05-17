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
        { level:"easy", wordA: "soleil", wordB: "sun", hint: "", answer:"", correct: false, },
        { level:"easy", wordA: "au revoir", wordB: "goodbye", hint: "", answer:"", correct: false, },
        { level:"easy", wordA: "voiture", wordB: "car", hint: "", answer:"", correct: false, },
        { level:"easy", wordA: "fleur", wordB: "flower", hint: "", answer:"", correct: false, },
        { level:"easy", wordA: "porte", wordB: "door", hint: "", answer:"", correct: false, },
        { level:"easy", wordA: "table", wordB: "table", hint: "", answer:"", correct: false, },
        { level:"easy", wordA: "arbre", wordB: "tree", hint: "", answer:"", correct: false, },
        { level:"easy", wordA: "vache", wordB: "cow", hint: "", answer:"", correct: false, },
        { level:"intermediate", wordA: "chien", wordB: "dog", hint: "", answer:"", correct: false, },
        { level:"intermediate", wordA: "maison", wordB: "house", hint: "", answer:"", correct: false, },
        { level:"intermediate", wordA: "chat", wordB: "cat", hint: "", answer:"", correct: false, },
        { level:"intermediate", wordA: "tête", wordB: "head", hint: "", answer:"", correct: false, },
        { level:"intermediate", wordA: "jardin", wordB: "garden", hint: "", answer:"", correct: false, },
        { level:"intermediate", wordA: "fenêtre", wordB: "window", hint: "", answer:"", correct: false, },
        { level:"intermediate", wordA: "livre", wordB: "book", hint: "", answer:"", correct: false, },
        { level:"intermediate", wordA: "ordinateur", wordB: "computer", hint: "", answer:"", correct: false, },
        { level:"advanced", wordA: "avion", wordB: "plane", hint: "", answer:"", correct: false, },
        { level:"advanced", wordA: "mouton", wordB: "sheep", hint: "", answer:"", correct: false, },
        { level:"advanced", wordA: "crayon", wordB: "pencil", hint: "", answer:"", correct: false, },
        { level:"advanced", wordA: "électricité", wordB: "electricity", hint: "", answer:"", correct: false, },
        { level:"advanced", wordA: "courageux", wordB: "brave", hint: "", answer:"", correct: false, },
        { level:"advanced", wordA: "laboratoire", wordB: "laboratory", hint: "", answer:"", correct: false, },
        { level:"advanced", wordA: "technologie", wordB: "technology", hint: "", answer:"", correct: false, },
        { level:"advanced", wordA: "dehors", wordB: "outside", hint: "", answer:"", correct: false, },
      ],

      shuffleWords: [],
      correctCount: 0,
      completed: false,
      selectedLevel: "", // Initialiser à une chaîne vide
      levels: ["easy", "intermediate", "advanced"],
    };
  },

  mounted() {
    this.selectedLevel = "easy";
    this.shuffleWords = this.words.slice().sort(() => 0.5 - Math.random()).slice(0, 4);
  },

  computed: {
    wordsCount(){
      return this.shuffleWords.length;
    },

    filteredWords() {
      return this.words.filter(word => word.level === this.selectedLevel);
    },

    levelClass() {
      switch (this.selectedLevel) {
        case 'easy':
          return 'level-easy';
        case 'intermediate':
          return 'level-intermediate';
        case 'advanced':
          return 'level-advanced';
        default:
          return '';
      }
    },
    
  },

  watch: {
    selectedLevel(newLevel) {
      if (newLevel !== "") {
        this.shuffleWords = this.filteredWords.slice().sort(() => 0.5 - Math.random()).slice(0, 4);
        this.restartGame(); // Réinitialiser le jeu chaque fois que le niveau change
      }
    },
    correctCount() {
      this.completed = this.correctCount == this.wordsCount;
    },
  },

  methods: {
    validateAnswer(word) {
      if (word) {
          // Validation d'une seule réponse
          if (!word.correct && word.wordB === word.answer) {
              word.correct = true;
              this.correctCount++;
          }
      } else {
          // Validation de toutes les réponses
          this.shuffleWords.forEach(word => {
              if (!word.correct && word.wordB === word.answer) {
                  word.correct = true;
                  this.correctCount++;
              }
          });
      }
  },

  closeNotification() {
    this.completed = false;
  },

  restartGame() {
      this.words.forEach((word) => {
        word.answer = "";
        word.correct = false;
      });
      this.correctCount = 0;
      this.completed = false;
      this.shuffleWords = this.filteredWords.slice().sort(() => 0.5 - Math.random()).slice(0, 4);
    },
  },
};

// Créer une nouvelle instance Vue en utilisant nos options et la monter sur l'élément HTML avec l'ID "app"
const app = createApp(pandaGuesserApp).mount("#app");