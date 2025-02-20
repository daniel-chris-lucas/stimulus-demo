import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['actions', 'results'];
    static values = {
        offset: Number
    };

    load() {
        this.replaceButtons();
        this.getPokemon();
    }

    replaceButtons() {
        this.actionsTarget.innerHTML = `
            <button type="button" class="btn btn-primary me-2" data-action="pokemon#previous">Précédant</button>
            <button type="button" class="btn btn-primary" data-action="pokemon#next">Suivant</button>
        `;
    }

    previous() {
        this.offsetValue -= 1;
        this.load();
    }

    next() {
        this.offsetValue += 1;
        this.load();
    }

    getPokemon() {
        this.dispatch('loading');

        setTimeout(async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=${this.offsetValue}`);
            const data = await response.json();
            let html = '';

            for (let pokemon of data.results) {
                html += `<tr><td>${pokemon.name}</td></tr>`
            }

            this.resultsTarget.innerHTML = `
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Nom</th>
                </tr>
            </thead>
            <tbody>
                ${html}
            </tbody>
        </table>
        `;

            this.dispatch('loaded');
        }, 2000);
    }
}
