<template>
<div>
    <Cabecalho />
    <div class="container fundo" >
        <!-- Inicio Titulo e novo produto -->
        <div class="row justify-content-between">
            <div class="col-4">
                <h1 class=""> Meus Produtos </h1>
            </div>
            <div class="col-3">
                <a href="/NovosAnuncios">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40%" height="40%" fill="green" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                    </svg>
                </a>
            </div>
        </div>
        <!-- Fim Titulo e novo produto -->

        <div>
        <!-- Inicio Listagem dos meus anuncios -->
        <tr v-for="anuncio of anuncios" :key="anuncio">
            <td>
                <p>{{anuncio.nome}}</p>
                <div class="row fundoAnuncio">
                    <div class="col-md-3 listaimg" >
                        <img src="./../assets/login-dog.jpg" class="img-fluid"/>
                    </div>
                    <div class="col-md-4">
                        <h4>{{anuncio.nome}}</h4>
                    </div>
                    <div class="col-md-2">
                        <p> disponível:</p>
                        <p>Valor unitário:</p>
                        <button type="button" class="btn btn-danger" @click="remover(anuncio)">
                            Excluir Anuncio
                        </button>
                    </div>

                    <div class="col-md-3">
                        <p>{{anuncio.quantidade}}</p>
                        <p>{{anuncio.valor}} </p>
                        <button type="button" class="btn btn-primary">
                            Ir para Anuncio
                        </button>
                    </div>
                </div>
            </td>
        <!-- Fim Listagem dos meu produtos -->
        </tr>
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
import Cabecalho from './../Components/Cabecalho.vue';
import Footer from './../Components/Footer.vue';
import router from '@/routes/router.js';
import ProdutoService from '../services/produtoService';

const produtoService = new ProdutoService();
            produtoService.getProduto()
            .then(response => {
                // console.log(response.data);
                let json = JSON.stringify(response.data);
                let produto = JSON.parse(json);
                // console.log(json)
                // console.log(response.data)
                //console.log(produto.products)
                // console.log(this.options)
                

                produto.products.forEach((value) => {
                    console.log(JSON.parse(value))
                    console.log('aaaa')
                    console.log(this.anuncios)
                    this.anuncios.push({
                        })
                    
                    //console.log(value.descricao)
                    //console.log(value.preco)
                    // console.log(index)
                    //console.log(index)
                    
                });

                console.log(this.anuncios[0].nome)
                 

            }).catch((error) => {console.log(error);});

export default {
    name:'MeusProdutos',
    router,

    data(){
        return{
            nome: '',
            quantidade: '',
            valor: '',
            produto: [],
            anuncios: [{nome: 'shampoo', quantidade: 20, valor: 50.00}]
            //anuncios:[{nome: 'shampoo', quantidade: 20, valor: 50.00},{nome: 'casa dog', quantidade: 5, valor: 500.00},{nome: 'casa dog', quantidade: 5, valor: 500.00},{nome: 'casa dog', quantidade: 5, valor: 500.00}]
        }
    },
 
    components:{
        Cabecalho,
        Footer,
    },

    mounted(){
        /*Anuncio.listar().then(resposta => {
            console.log(resposta)
            this.anuncios = resposta.data
        })
        /*remover(anuncio){
            Anuncio.apagar(anuncio).then(resposta =>{
                this.listar();
            }).catch(e =>{
                
            })
        }*/

    },


}
</script>


<style scoped>
img{
    border-radius: 25px;
}
.fundoAnuncio{
    border-radius: 25px;
    background: #C4C4C4;
    margin: 3%;
    padding: 1%;
}
</style>