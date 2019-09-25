<template>

    <block :no-wrap="!wrap" :id="name" :required="required" :withoutLabel="true">

        <input v-if="submit" type="submit" :name="name" :id="name" class="input-component__button" v-model="content" />

        <button v-if="!submit" type="button" :name="name" :id="name" class="input-component__button" v-on:click="$emit('click', true)">{{ content }}</button>

    </block>

</template>

<script>
    export default {
        name: "InputButton",

        props: {
            name: {type: String},
            wrap: {type: Boolean, default: false},
            label: {type: String, default: ""},
            submit: {type: Boolean, default: false}
        },

        data(){
            return {
                content: this.label
            }
        }
    }
</script>

<style scoped>

    .input-component__button{
        background-color: #77BAC0;
        color: #fff;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        font-weight: 700;
        border-radius: 0.25rem;
        margin: 0 0.25rem;
    }

    .input-component__button:hover{
        background-color: #98cdd2;
    }

    .input-component__button:focus{
        outline-width: 0px;
    }

    .input-component__button:active{
        transform: translateY(1px);
    }

</style>