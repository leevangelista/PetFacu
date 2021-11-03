<template>
<div>
    <Cabecalho />

    <div id="tipo" class="container fundo">
        <h2> Escolha o tipo de anuncio </h2>
        <br/>
        <!-- Inicio escolha do Tipo -->
        <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 25%" aria-valuenow="50%" aria-valuemin="25" aria-valuemax="100"></div>
        </div> 
        
        <div class="row espacamento">
			<div class=" col-md-6">
				<h4>Animais</h4>
				<a href="#">
                    <img src="./../assets/login-dog.jpg" alt="" class="imgBusca" v-on:click="tipoParaAnimais"/>
                </a>
			</div>
			<div class=" col-md-6">
				<h4>Produtos</h4>
				<a href="#">
					<img src="./../assets/produtos.png" alt="" class="imgBusca" v-on:click="tipoParaProdudos"/>
				</a>
			</div>
		</div>

        <div class="row justify-content-between espacamentoBotao">
            <div class="col-2">
                <button type="button" class="btn btn-secondary">
                    <a href="/MeusProdutos">
                        Voltar
                    </a>
                </button>
            </div>
            
        </div>
    </div>
    <!-- Fim escolha do Tipo -->
    <form @submit.prevent="salvar">
    <!-- Inicio escolha da Tipo Animais -->
    <div id="animais" class="container fundo">
        <h2> Categoria do Animal </h2>
        <br/>
        <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 50%" aria-valuenow="50%" aria-valuemin="50" aria-valuemax="100"></div>
        </div>
        <div class="row">
            
            <!-- Inicio escolha da Raça Cachorro -->
            <div class="col-md-6 espacamento">
                <h4> Raça do Cachorro </h4>
            </div>
            <div class="col-md-6 espacamento">
                <h4> Raça do Gato </h4>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="form-check espacamento">
                        <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao1" checked>
                        <label class="form-check-label" for="exampleRadios1"> Buldogue francês</label>
                    </div>
                    <div class="form-check espacamento">
                        <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao2">
                        <label class="form-check-label" for="exampleRadios2">Golden retriever </label>
                    </div>
                    <div class="form-check espacamento">
                        <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao1" checked>
                        <label class="form-check-label" for="exampleRadios1"> Labrador</label>
                    </div>
                    <div class="form-check espacamento">
                        <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao2">
                        <label class="form-check-label" for="exampleRadios2">Lhasa apso </label>
                    </div>
                    <div class="form-check espacamento">
                        <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao2">
                        <label class="form-check-label" for="exampleRadios2">Maltês </label>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-check espacamento">
                        <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao1" checked>
                        <label class="form-check-label" for="exampleRadios1"> Pinscher</label>
                    </div>
                    <div class="form-check espacamento">
                        <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao2">
                        <label class="form-check-label" for="exampleRadios2">Poodle</label>
                    </div>
                    <div class="form-check espacamento">
                        <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao1" checked>
                        <label class="form-check-label" for="exampleRadios1"> Shih tzu </label>
                    </div>
                    <div class="form-check espacamento">
                        <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao2">
                        <label class="form-check-label" for="exampleRadios2">Yorkshire</label>
                    </div>
                    <div class="form-check espacamento">
                        <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao2">
                        <label class="form-check-label" for="exampleRadios2">Outras raças de Cachorro</label>
                    </div> 
                </div>
            
            <!-- Fim escolha da Raça Cachorro -->

            <!-- Inicio escolha da Raça Gato -->
            
                <div class="col-md-3">
                    <div class="form-check espacamento">
                        <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao1" checked>
                        <label class="form-check-label" for="exampleRadios1"> Persa</label>
                    </div>
                    <div class="form-check espacamento">
                        <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao2">
                        <label class="form-check-label" for="exampleRadios2">Siamês </label>
                    </div>
                    <div class="form-check espacamento">
                        <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao1" checked>
                        <label class="form-check-label" for="exampleRadios1"> Himalaia</label>
                    </div>
                    <div class="form-check espacamento">
                        <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao2">
                        <label class="form-check-label" for="exampleRadios2">Maine Coon </label>
                    </div>
                    <div class="form-check espacamento">
                        <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao2">
                        <label class="form-check-label" for="exampleRadios2">Angorá </label>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-check titulo">
                        <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao1" checked>
                        <label class="form-check-label" for="exampleRadios1"> Sphynx</label>
                    </div>
                    <div class="form-check espacamento">
                        <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao2">
                        <label class="form-check-label" for="exampleRadios2">Ragdoll</label>
                    </div>
                    <div class="form-check espacamento">
                        <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao1" checked>
                        <label class="form-check-label" for="exampleRadios1"> Ashera </label>
                    </div>
                    <div class="form-check espacamento">
                        <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao2">
                        <label class="form-check-label" for="exampleRadios2">American Shorthair </label>
                    </div>
                    <div class="form-check espacamento">
                        <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao2">
                        <label class="form-check-label" for="exampleRadios2">Outras raças de gato</label>
                    </div>
                </div>
            </div>
            <!-- Fim escolha da Raça Gato -->
        </div>
        <div class="row justify-content-between espacamento">
            <div class="col-3">
                <button type="button" class="btn btn-secondary" v-on:click="animaisParaTipo">
                    Voltar
                </button>
            </div>
            <div class="col-3">
                <button type="button" class="btn btn-primary" v-on:click="paraAnuncio">Proximo</button>
            </div>
        </div>   
    </div>
    <!-- Fim escolha do Tipo Animais -->

    <!-- Inicio escolha do tipo Produto -->
    <div id="produtos" class="container fundo">
        <h2> Categoria do Produto </h2>
        <br/>
        <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 50%" aria-valuenow="50%" aria-valuemin="50" aria-valuemax="100"></div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-check espacamento">
                    <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao1" checked>
                    <label class="form-check-label" for="exampleRadios1"> Ração</label>
                </div>
                <div class="form-check espacamento">
                    <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao2">
                    <label class="form-check-label" for="exampleRadios2">Ossinhos e Petisco </label>
                </div>
                <div class="form-check espacamento">
                    <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao1" checked>
                    <label class="form-check-label" for="exampleRadios1"> Higiene</label>
                </div>
                <div class="form-check espacamento">
                    <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao2">
                    <label class="form-check-label" for="exampleRadios2">Brinquedos </label>
                </div>
                <div class="form-check espacamento">
                    <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao2">
                    <label class="form-check-label" for="exampleRadios2">Caminhas </label>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-check espacamento">
                    <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao1" checked>
                    <label class="form-check-label" for="exampleRadios1"> Adestramento</label>
                </div>
                <div class="form-check espacamento">
                    <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao2">
                    <label class="form-check-label" for="exampleRadios2">Poodle</label>
                </div>
                <div class="form-check espacamento">
                    <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao1" checked>
                    <label class="form-check-label" for="exampleRadios1"> Saúde</label>
                </div>
                <div class="form-check espacamento">
                    <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao2">
                    <label class="form-check-label" for="exampleRadios2">Roupas</label>
                </div>
                <div class="form-check espacamento">
                    <input class="form-check-input" type="radio" name="raca" id="raca" value="opcao2">
                    <label class="form-check-label" for="exampleRadios2">Outro</label>
                </div>
            </div>
        </div>
        <div class="row justify-content-between espacamento">
            <div class="col-3">
                <button type="button" class="btn btn-secondary" v-on:click="produtosParaTipo">
                    Voltar
                </button>
            </div>
            <div class="col-3">
                <button type="button" class="btn btn-primary" v-on:click="paraAnuncio">Proximo</button>
            </div>
        </div> 
    </div>
    <!-- Fim escolha do tipo Produto -->
    <!-- Inicio Dados do Anuncio -->
    <div id="informacoes" class="container fundo">
        <h2> Informações do Produto </h2>
        {{anuncio.nome}}
        {{anuncio.quantidade}}
        {{anuncio.valor}}

        <br/>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 75%" aria-valuenow="75%" aria-valuemin="75" aria-valuemax="100"></div>
        </div>
        <div>
                <div class="form-container">
                    <input type="text" v-model="anuncio.nome" class="anuncio-input" placeholder="Nome" />
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <input type="text" v-model="anuncio.quantidade" class="anuncio-input info" placeholder="Quantidade" />
                        <input type="text" v-model="anuncio.valor" class="anuncio-input info" placeholder="Valor unitário" />
                    </div>
                    <div class="col-md-6">
                       <!-- <img src="./../assets/login-dog.jpg" class="img-fluid"/> -->
                    </div>
                </div>
        </div>
        <div class="row justify-content-between espacamento">
            <div class="col-3">
                <button type="button" class="btn btn-danger">
                    <!--<a href="/MeusProdutos"> -->
                        Cancelar
   
                </button>
            </div>
            <div class="col-3">
                <button type="submit" class="btn btn-success">
                    <a href="/SucessoAnuncio">
                        Finalizar
                    </a>
                </button>
            </div>
        </div> 
    </div>
    <!-- Fim Dados do Anuncio -->
    </form>
    <Footer />
</div>
</template>

<script>
import Cabecalho from './../Components/Cabecalho.vue';
import Footer from './../Components/Footer.vue';
import router from '@/routes/router.js';
//import Anuncio from './../services/anuncios/anuncios'


export default {
    name:'NovosAnuncios',
    router,

    data(){
        return{
            anuncio:{
                nome: '',
                quantidade: '',
                tipo: '',
                valor: '',
            }
        }
    },

    components:{
        Cabecalho,
        Footer,
    },


    methods:{
        tipoParaAnimais:function(){
            document.getElementById("tipo").style.display = "none";
            document.getElementById("animais").style.display = "block";
        },
        animaisParaTipo:function(){
            document.getElementById("animais").style.display = "none";
            document.getElementById("tipo").style.display = "block";
        },
        tipoParaProdudos:function(){
            document.getElementById("tipo").style.display = "none";
            document.getElementById("produtos").style.display = "block";
        },
        produtosParaTipo:function(){
            document.getElementById("produtos").style.display="none";
            document.getElementById("tipo").style.display="block";
        },
        paraAnuncio:function(){
            document.getElementById("animais").style.display = "none";
            document.getElementById("produtos").style.display = "none";
            document.getElementById("informacoes").style.display = "block";
        },
        informacoesParaProdut:function(){
            document.getElementById("produtos").style.display = "block";
            document.getElementById("informações").style.display = "none";
        },

        salvar(){
            alert(this.anuncio.nome)

            //Anuncio.salvar(this.anuncio).then(resposta =>{alert('Salvo com Sucesso') })
        }
    },

    mounted(){

    }

}
</script>


<style scoped>

input{
    margin-top: 10px;
    margin-bottom: 5px;
    background-color: transparent;
    font-size: 16px;
    padding: 5px;
    border-bottom: 1px solid #00000040;
    font-size: arial;
    color: #000000bb;
    align-items: left;
}

#tipo{
    display: block;
}
#animais{
    display: none;
}
#produtos{
    display: none;
}
#informacoes{
    display: none;
}

.imgBusca{
    width: 50%;
    border-radius: 15%;
    height: 100%;
}
.espacamento{
    margin-top: 2%;
    margin-bottom: 2%;
}
.espacamentoBotao{
    margin-top: 5%;
}
.barraProgresso{
    margin: 50px;
    padding: 5%;
}
.titulo{
    margin-top: 2%;
}
.anuncio-container{
    border-radius: 0px 10px 10px 0px;
    z-index: 100;
    background-color: #fff;
    box-shadow: -5px 0 15px #00000020;
    align-items: center;
    display: flex;
    justify-content: center;
}

.anuncio-input{
    margin-top: 10px;
    margin-bottom: 5px;
    background-color: transparent;
    font-size: 16px;
    padding: 5px;
    border-bottom: 1px solid #00000040;
    font-size: arial;
    color: #000000bb;
}

.form-container{
    margin: 3rem;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
}

.info{
    display: flex;
    margin: 10%;
}


</style>