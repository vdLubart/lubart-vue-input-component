<template>

    <block :no-wrap="noWrap" :id="name" :required="required" :label="label" :withoutLabel="withoutLabel">
        <label class="normalFont" :name="name">
            <input type="checkbox" :name="name" :value="ticValue" :checked="content" @input="handleInput"> {{ ticLabel }}
            <span class="checkmark" :value="ticValue" :checked="content"></span>
        </label>
    </block>

</template>

<script>
    import InputBase from './InputBase';

    export default {
        name: "InputCheckbox",

        extends: InputBase,

        props: {
            value: {type: Boolean, default: false},
            ticValue: {type: String, default: ""},
            ticLabel: {type: String}
        },

        methods: {
            handleInput (e) {
                this.content = e.target.checked;
                this.$emit('input', e.target.checked)
            }
        }
    }
</script>

<style scoped>

    label.normalFont{
        font-weight: normal;

        display: block;
        position: relative;
        padding-left: 25px;
        margin-bottom: 5px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Hide the browser's default checkbox */
    label.normalFont input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 16px;
        width: 16px;
        background-color: #eee;
    }

    /* On mouse-over, add a grey background color */
    label.normalFont:hover input ~ .checkmark {
        background-color: #d3f1f4;
    }

    /* When the checkbox is checked, add a blue background */
    label.normalFont input:checked ~ .checkmark {
        background-color: #77bac0;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    label.normalFont input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    label.normalFont .checkmark:after {
        left: 4px;
        top: 0px;
        width: 5px;
        height: 10px;
        border-style: none solid solid none;
        border-color: white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        box-sizing: unset;
    }

</style>