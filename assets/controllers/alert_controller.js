import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    displayMessage(event) {
        alert(event.params.message);
    }
}
