import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FormComponent extends Component {
    @action
    showPerson(person) {
      alert(person);
    }

    // pageIsReady() {
    //     document.querySelector('there-can-only-be-one')
    //         .addEventListener('click', function() {
    //             alert('wow')
    //         })
    // }
}
