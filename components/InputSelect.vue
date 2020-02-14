<template>

    <block :no-wrap="noWrap" :id="name" :required="required" :label="label" :withoutLabel="withoutLabel">
        <v-select :value="selectedValue" :options="labeledOptions" :multiple="multiple" :placeholder="placeholder" @input="handleInput"></v-select>
    </block>

</template>

<script>
    import InputBase from './InputBase';
    import vSelect from 'vue-select';

    export default {
        name: "InputSelect",

        extends: InputBase,

        components: { vSelect },

        props: {
            placeholder: {type: String, default: "Choose an option"},
            options: {type: Object},
            multiple: {type: Boolean, default: false},
            value: {type: String|Array, default: ""},
        },

        data(){
            return {
                content: this.value,
                labeledOptions: [],
                selectedValue: this.multiple ? [] : null
            }
        },

        methods:{
            handleInput (e) {
                if(this.multiple){
                    let content = [];
                    let selected = [];
                    e.forEach((item) => {
                        content.push(item.value);
                        selected.push({
                            label: item.label,
                            value: item.value
                        })
                    })
                    this.content = (_.isEmpty(e) ? [] : content);
                    this.selectedValue = selected;
                }
                else {
                    this.content = (e === null ? null : e.value);

                    if (!_.isEmpty(this.content)) {
                        this.selectedValue = {'label': e.label, 'value': this.content}
                    }
                    else{

                    }
                }

                this.$emit('input', this.content);
            },

            setOptions(){
                if(_.isObject(this.options)) {
                    this.labeledOptions = [];
                    Object.keys(this.options).forEach(key => {
                        this.labeledOptions.push({'label': this.options[key], 'value': key});
                    });

                    this.setValue();
                }
            },

            setValue(){
                if(_.isObject(this.options)) {
                    if(this.multiple ? !_.isEmpty(this.content) : this.content!="") {
                        this.selectedValue = {'label': this.options[this.content], 'value': this.content}
                    }
                    else{
                        this.selectedValue = this.multiple ? [] : null;
                    }
                }
            }
        },

        mounted(){
            this.setOptions();
        },

        watch:{
            options() {
                this.setOptions();
            }
        }
    }
</script>

<style>

    .vs__dropdown-toggle{
        border-radius: 4px;
        height: 29px;
        background: #fff;
        border-color: #dbdbdb;
    }

    .vs--open .vs__dropdown-toggle,
    .vs__dropdown-menu{
        border: 1px solid #77bac0;
    }

    .vs__dropdown-option--highlight {
        background: #77bac0 !important;
        color: #fff;
    }

    .vs__selected-options input::placeholder, textarea::placeholder {
        color: #a0aec0;
    }

</style>