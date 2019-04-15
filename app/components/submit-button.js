import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SubmitButtonComponent extends Component {

    @tracked shouldShowPerson = false;

    @action
    reveal() {
        this.shouldShowPerson = true;
    }
}
