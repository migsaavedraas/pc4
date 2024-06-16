import Header from './components/header.js';
import Trainer from './components/trainer.js';

var app = new Vue({
    el: '#app',
    data: {
        trainers: [
            { id: 1, name: 'Ash', pokemons: ['Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle', 'Pidgeot'] },
            { id: 2, name: 'Misty', pokemons: ['Starmie', 'Psyduck', 'Goldeen', 'Staryu', 'Togepi'] },
            { id: 3, name: 'Brock', pokemons: ['Onix', 'Geodude', 'Zubat', 'Vulpix', 'Graveler'] },
            { id: 4, name: 'Gary', pokemons: ['Blastoise', 'Nidoking', 'Arcanine', 'Gyarados', 'Electivire'] },
            { id: 5, name: 'Erika', pokemons: ['Vileplume', 'Tangela', 'Victreebel', 'Bellossom', 'Jumpluff'] },
            { id: 6, name: 'Sabrina', pokemons: ['Alakazam', 'Mr. Mime', 'Espeon', 'Hypno', 'Jynx'] },
            { id: 7, name: 'Koga', pokemons: ['Venomoth', 'Weezing', 'Muk', 'Golbat', 'Crobat'] },
            { id: 8, name: 'Lt. Surge', pokemons: ['Raichu', 'Electabuzz', 'Magneton', 'Jolteon', 'Luxray'] },
            { id: 9, name: 'Blaine', pokemons: ['Arcanine', 'Rapidash', 'Ninetales', 'Magmar', 'Flareon'] },
            { id: 10, name: 'Giovanni', pokemons: ['Rhydon', 'Dugtrio', 'Nidoqueen', 'Nidoking', 'Persian'] },
            { id: 11, name: 'Lorelei', pokemons: ['Lapras', 'Dewgong', 'Cloyster', 'Jynx', 'Slowbro'] },
            { id: 12, name: 'Bruno', pokemons: ['Machamp', 'Hitmonlee', 'Hitmonchan', 'Onix', 'Steelix'] },
            { id: 13, name: 'Agatha', pokemons: ['Gengar', 'Haunter', 'Arbok', 'Golbat', 'Misdreavus'] },
            { id: 14, name: 'Lance', pokemons: ['Dragonite', 'Aerodactyl', 'Gyarados', 'Charizard', 'Kingdra'] }
        ],
        selectedTrainers: [],
        battleMessage: ''
    },
    components: {
        Trainer,
        Header
    },
    methods: {
        selectTrainer(trainer) {
            if (this.selectedTrainers.length < 2) {
                this.selectedTrainers.push(trainer);
            } else {
                alert('Solo puedes seleccionar dos entrenadores.');
            }
        },
        startBattle() {
            if (this.selectedTrainers.length === 2) {
                this.battleMessage = `Se realizará un nuevo combate entre ${this.selectedTrainers[0].name} vs ${this.selectedTrainers[1].name}`;
            } else {
                alert('Debes seleccionar a dos entrenadores para iniciar un combate.');
            }
        }
    },
    template: `
        <div>
            <Header title="Pokemon Battle"/>
            <div class="trainer-list">
                <Trainer 
                    v-for="trainer in trainers" 
                    :key="trainer.id" 
                    :trainer="trainer"
                    @select-trainer="selectTrainer"
                />
                <button @click="startBattle" :disabled="selectedTrainers.length < 2">Nuevo Combate</button>
                <p class="battle-message" v-if="battleMessage">{{ battleMessage }}</p>
            </div>
        </div>
    `
});
