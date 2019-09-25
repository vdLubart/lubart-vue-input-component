import InputText from './components/InputText';
import InputNumber from './components/InputNumber';
import InputEmail from './components/InputEmail';
import InputArea from './components/InputArea';
import InputDate from './components/InputDate';
import InputCheckbox from './components/InputCheckbox';
import CheckboxGroup from './components/CheckboxGroup';
import RadioGroup from './components/RadioGroup';
import InputButton from './components/InputButton';

export default {

    register(Vue) {
        Vue.component('input-text', InputText);
        Vue.component('input-area', InputArea);
        Vue.component('input-date', InputDate);
        Vue.component('checkbox-group', CheckboxGroup);
        Vue.component('radio-group', RadioGroup);
        Vue.component('input-number', InputNumber);
        Vue.component('input-checkbox', InputCheckbox);
        Vue.component('input-email', InputEmail);
        Vue.component('input-button', InputButton);
    }

};

export { InputText, InputArea, InputDate, CheckboxGroup, RadioGroup, InputNumber, InputCheckbox, InputEmail, InputButton };