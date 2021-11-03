<template>
    <div class="carousel">
        <slot></slot>

        <button @click="prox" class="prox">Proximo</button>
        <button @click="ant" class="ant">Anterior</button>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        prox(){
            this.$emit('prox')
        },
        ant(){
            this.$emit('ant')
        }
    }
}
</script>

<style scoped>
.carousel{
    position: relative;
    width: 600px;
    height: 250px;
    overflow: hidden;
}

button{
    position: absolute;
    height: 30px;
    width: 50px;
    top: calc(50% - 30px);
    background-color: rgba(0, 0, 0, 8);
    border: none;
    color: #FFF;
}

button:active, button:hover{
    outline:none;
    cursor:pointer;
}

.prox{
    font-size: 12px;
    right: 0;
}

.ant{
    font-size: 12px;
    left: 0;
}

</style>