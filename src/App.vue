<template>
  <div id="app">
  
    <div class="column is-half is-offset-one-quarter">
       <img id="img" src="./assets/meulogo.jpg">
       <hr>
       <h4 class="is-size-1">Pokedex</h4>
       <input class="input is-rounded" type="text" name="" id="" placeholder="Buscar pokemon pelo nome" v-model="busca">
       <button class="button is-primary is-inverted is-outlined button is-primary is-light" id="buscaBtn" @click="buscar">Buscar</button>

      <div v-for="(poke,index) in filteredPokemons" :key="poke.url">
        <Pokemon :name="poke.name" :url="poke.url" :num="index+1" />
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import Pokemon from "./components/Pokemon";
export default {
  name: "App",
  data() {
    return {
      pokemons: [],
      filteredPokemons: [],
      busca: ""
    };
  },
  created: function() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then(res => {
        console.log("lista de pokemons");
        this.pokemons = res.data.results;
        this.filteredPokemons = res.data.ressults;
      

      });
  },
  components: {
    Pokemon
  },
  methods: {
    buscar: function(){
      this.filteredPokemons = this.pokemons;
      if(this.busca == '' || this.busca == ' '){
        this.filteredPokemons = this.pokemons;

      }else{
        this.filteredPokemons = this.pokemons.filter(pokemon => pokemon.name == this.busca);

      }

    }

  },
  computed: {
    /*
    resultadoBusca: function(){
      if(this.busca == '' || this.busca == ' '){
        return this.pokemons;

      }else{
        return this.pokemons.filter(pokemon => pokemon.name == this.busca);
      }
    }
    */
  }
};
</script>

<style>
body{
  background-color: rgb(172, 152, 171);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#img {
  width: 600px;
  height: 300px;
  background-image: url("./assets/meulogo.jpg");
  border: solid 2px;
  text-shadow: white 0px 0px 2px;
  font-size: 16px;
  background-size: 300px;
}
#buscaBtn{
  margin-top: 2%;
}
</style>
