import { Controller } from '@hotwired/stimulus';
import flatpickr from 'flatpickr';

export default class extends Controller {
    static targets = ['input'];

    connect() {
        this.picker = flatpickr(this.inputTarget, {
            enableTime: true,
            dateFormat: 'd/m/Y H:i',
        });
    }

    disconnect() {
        this.picker.destroy();
    }
}
