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
            multiple: {type: Boolean, default: false}
        },

        data(){
            return {
                content: this.value,
                labeledOptions: [],
                selectedValue: null
            }
        },

        methods:{
            handleInput (e) {
                this.content = (e === null ? null : e.value);

                this.$emit('input', this.content);
            }
        },

        watch:{
            options() {
                if(_.isObject(this.options)) {
                    Object.keys(this.options).forEach(key => {
                        this.labeledOptions.push({'label': this.options[key], 'value': key});
                    });

                    if(!_.isEmpty(this.content)) {
                        this.selectedValue = {'label': this.labeledOptions[this.content], 'value': this.content}
                    }
                }
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