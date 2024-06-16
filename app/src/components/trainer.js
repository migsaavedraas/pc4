export default {
    template: `
        <div class="trainer">
            <h2>{{ trainer.name }}</h2>
            <button @click="viewPokemons">Ver Pokemons</button>
            <button @click="selectTrainer">Seleccionar</button>
        </div>
    `,
    props: {
        trainer: {
            type: Object,
            required: true
        }
    },
    methods: {
        viewPokemons() {
            alert(`Pokemons de ${this.trainer.name}: ${this.trainer.pokemons.join(', ')}`);
        },
        selectTrainer() {
            this.$emit('select-trainer', this.trainer);
        }
    },
    name: 'Trainer',
};
