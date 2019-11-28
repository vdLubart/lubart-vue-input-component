<template>

    <block :no-wrap="noWrap" :id="name" :required="required" :label="label" :withoutLabel="withoutLabel">
        <select :multiple="isMultiple" :data-placeholder="placeholder" :name="name">
            <option v-for="(label, value) in selectOptions" :value="value">{{ label }}</option>
        </select>
    </block>

</template>

<script>
    import InputBase from './InputBase';

    export default {
        name: "InputSelect",

        extends: InputBase,

        props: {
            placeholder: {type: String, default: ""},
            options: {type: Object},
            multiple: {type: Boolean, default: false},
            chosen: {type: Boolean, default: true}
        },

        data(){
            return {
                selectOptions: this.options,
                isMultiple: this.multiple,
                isChosen: this.isChosen,
                selectTag: null
            }
        },

        methods:{
            applyChosen(){
                this.selectTag = $(this.$el.lastChild);

                $(this.selectTag)
                    .val(this.value)
                    .chosen({})
                    .on("change", e => this.$emit('input', this.content = $(this.selectTag).val()) );
            }
        },

        mounted(){
            if(this.chosen){
                this.applyChosen();
            }
        },

        watch: {
            options(val){
                this.selectOptions = val;
            },

            multiple(val){
                this.isMultiple = val;
            }
        },

        destroyed() {
            $(this.selectTag).chosen('destroy');
        }
    }
</script>

<style>

    /* Chosen override */

    .chosen-container{
        font-size: 14px !important;
    }

    .chosen-container-single .chosen-single{
        border-radius: 4px;
        border-color: #BFCED1;
        height: 29px;
        background: #fff;
        line-height: 30px;
    }

    .chosen-container-single .chosen-default span{
        color: #ccd3dd;
    }

    .chosen-container .chosen-results li.highlighted {
        background-color: #77bac0;
        background-image: none;
        color: #fff;
    }

    .chosen-container-active .chosen-single {
        border: 1px solid #77bac0;
    }

    .chosen-container-active .chosen-choices{
        border: 1px solid #77bac0;
    }

    /* END Chosen override */

</style>