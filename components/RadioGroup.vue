<template>

    <block :no-wrap="noWrap" :id="name" :required="required" :label="label" :withoutLabel="withoutLabel">
        <div v-for="(radioLabel, radioValue) in radioButtons">
            <label class="normalFont" :name="name">
                <input type="radio" :name="name" :value="radioValue" :checked="radioValue === value" @input="handleInput"> {{ radioLabel }}
                <span class="checkmark" :value="radioValue"></span>
            </label>
        </div>
    </block>

</template>

<script>
    import InputBase from './InputBase';
    import _ from 'lodash';

    export default {
        name: "RadioGroup",

        extends: InputBase,

        props: {
            radioButtons: {type: Object, function (){ return {} }},                      // format should be {"radio value":"radio label"}
        },

        created(){
            if(!_.has(this.radioButtons, this.value)){
                this.content = null;
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

    label.normalFont input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 16px;
        width: 16px;
        background-color: #eee;
        border-radius: 50%;
    }

    label.normalFont:hover input ~ .checkmark {
        background-color: #d3f1f4;
    }

    label.normalFont input:checked ~ .checkmark {
        background-color: #77bac0;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    label.normalFont input:checked ~ .checkmark:after {
        display: block;
    }

    label.normalFont .checkmark:after {
        top: 5px;
        left: 5px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: white;
    }

</style>