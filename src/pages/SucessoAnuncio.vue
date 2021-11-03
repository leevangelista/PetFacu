<template>
<div>
    <Cabecalho />
    <div class="container fundo">
        <h2> Anuncio Criado com Sucesso </h2>
        <div class="row">
            <div class=" col-md 3"></div>
            <div class="col-md 6">
                <img src="./../assets/senha-dog.jpg" class="img-fluid" />
            </div>
            <div class=" col-md 3"></div>
        </div>
        <div class="row justify-content-between espacamento">
            <div class="col-3">
                <button type="button" class="btn btn-info">
                    <a href="/MeusProdutos">
                        Meus Produtos
                    </a>
                </button>
            </div>
            <div class="col-3">
                <button type="button" class="btn btn-info">
                    <a href="/">
                        Inicio
                    </a>
                </button>
            </div>
        </div> 
    </div>
    <Footer />
</div>
</template>

<script>
import Cabecalho from './../Components/Cabecalho.vue';
import Footer from './../Components/Footer.vue';
import router from '@/routes/router.js';


export default {
    name:'SucessoAnuncio',
    router,

    components:{
        Cabecalho,
        Footer,
    },

}
</script>


<style scoped>

</style>