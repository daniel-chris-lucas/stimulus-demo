import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['input', 'list'];

    add(event) {
        event.preventDefault();

        const value = this.inputTarget.value.trim();
        if (!value) {
            return;
        }

        this.listTarget.insertAdjacentHTML(
            'beforeend',
            `<li>
                        ${value}
                        <button type="button" class="btn btn-danger btn-sm" data-action="todo#delete">
                            -
                        </button>
                    </li>`,
        );
        this.inputTarget.value = '';
    }

    delete(event) {
        event.target.closest('li').remove()
    }
}
