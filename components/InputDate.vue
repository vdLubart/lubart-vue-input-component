<template>

    <block :no-wrap="noWrap" :id="name" :required="required" :label="label" :withoutLabel="withoutLabel">
        <date-picker :lang="localeFormat" :input-attr="{name: name, id:name}" :format="momentFormat" :placeholder="placeholder" v-model="content" value-type="format" @input="handleInput"></date-picker>
    </block>

</template>

<script>
    import InputBase from './InputBase';
    import DatePicker from 'vue2-datepicker';
    import moment from 'moment';
    import 'vue2-datepicker/index.css';

    export default {
        name: "InputDate",

        extends: InputBase,

        components: { DatePicker },

        props: {
            value: {type: String},                                  // format should be "YYYY-MM-DD"
            placeholder: {type: String, default: "Select Date"},
            format: {type: String, default: "MMMM Do YYYY"},         // value is similar to moment.js
        },

        created(){
            if(this.value !== undefined && this.value !== null && this.value != ""){
                this.content = new Date(this.value);
            }
            this.localeFormat = {
                formatLocale: {
                    firstDayOfWeek: 1,
                },
                monthBeforeYear: false,
            };
            this.momentFormat = {
                // Date to String
                stringify: (date) => {
                    return date ? moment(date).format(this.format) : ''
                },
                // String to Date
                parse: (value) => {
                    return value ? moment(value, 'YYYY-MM-DD').toDate() : null
                }
            }
        },

        methods: {
            handleInput (e) {
                this.content = moment(e, this.format).format('YYYY-MM-DD');
                this.$emit('input', moment(e, this.format).format('YYYY-MM-DD'));
            }
        }
    }
</script>

<style>

    .mx-datepicker{
        width: 100%;
        max-width: 500px;
    }

    .mx-btn:hover{
        border-color: #77bac0;
        color: #77bac0;
    }

    .mx-input:hover,.mx-input:focus{
        border-color:#77bac0 !important;
    }

    .mx-time-column .mx-time-item.active,
    .mx-time-option.active{
        color: #77bac0;
    }

    .mx-calendar-content td.today{
        color: #77bac0;
    }

    .mx-calendar-content .cell.active{
        background-color: #77bac0 !important;
    }

    .mx-calendar-content .cell:hover {
        background-color: #d3f1f4;
    }

</style>
