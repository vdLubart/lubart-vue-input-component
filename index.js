import InputText from './components/InputText';
import InputNumber from './components/InputNumber';
import InputEmail from './components/InputEmail';
import InputArea from './components/InputArea';
import InputDate from './components/InputDate';
import InputCheckbox from './components/InputCheckbox';
import CheckboxGroup from './components/CheckboxGroup';
import RadioGroup from './components/RadioGroup';
import InputButton from './components/InputButton';
import SubmitButton from './components/SubmitButton';
import InputSelect from './components/InputSelect';

export default {

    register(Vue) {
        window.$ = window.jQuery = require('jquery');
        require('chosen-js');

        Vue.component('input-text', InputText);
        Vue.component('input-area', InputArea);
        Vue.component('input-date', InputDate);
        Vue.component('checkbox-group', CheckboxGroup);
        Vue.component('radio-group', RadioGroup);
        Vue.component('input-number', InputNumber);
        Vue.component('input-checkbox', InputCheckbox);
        Vue.component('input-email', InputEmail);
        Vue.component('input-button', InputButton);
        Vue.component('submit-button', SubmitButton);
        Vue.component('input-select', InputSelect);
    }

};

export { InputText, InputArea, InputDate, CheckboxGroup, RadioGroup, InputNumber, InputCheckbox, InputEmail, InputButton, SubmitButton, InputSelect };