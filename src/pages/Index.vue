<template>
<div>
    <Cabecalho />
    <div class="container fundo" >
            <h1>Destaques</h1>
            <!-- Carousel Início -->
            <div class="row">
                <div class=" col-md 3"></div>
                <carousel class="col-md 6" @prox="prox" @ant="ant">
                    <carousel-slide v-for="(slide, index) in slides" :key="slide" :index="index" :visibleSlide = "visibleSlide">
                        <img :src="slide" class="img-fluid" />
                    </carousel-slide>
                </carousel>
                <div class=" col-md 3"></div>
            </div>
                <!-- Corousel Fim-->
                
                <!-- Busca pelas imagens Inicio-->
            <div class="row">
				<div class=" col-md-6 centralizar">
					<h4>Buscar por animais</h4>
					<a href="#">
						<img src="./../assets/login-dog.jpg" alt="" class="imgBusca">
					</a>
				</div>
				<div class=" col-md-6 centralizar">
					<h4>Buscar por Produtos</h4>
					<a href="#">
						<img src="./../assets/login-dog.jpg" alt="" class="imgBusca">
					</a>
				</div>
			</div>
                <!-- Busca pelas imagens Fim-->
            <!-- Lista de itens Fim -->
            <h1>Anúncios</h1>   
            <div class="row espacamento">
				<div class="col-md-3 centralizar" >
					<a href="#">
						<img src="./../assets/cadastro-dog.jpg" class="produtos">
				</a>
				</div>
                <div class="col-md-3 centralizar" >
					<a href="#">
						<img src="./../assets/login-dog.jpg" class="produtos">
				</a>
				</div>
                <div class="col-md-3 centralizar" >
					<a href="#">
						<img src="./../assets/cadastro-dog.jpg" class="produtos">
				</a>
				</div>
                <div class="col-md-3 centralizar" >
					<a href="#">
						<img src="./../assets/login-dog.jpg" class="produtos">
				</a>
				</div>
			</div>
            <div class="row">
				<div class="col-md-3 centralizar" >
					<a href="#">
						<img src="./../assets/login-dog.jpg" class="produtos">
				</a>
				</div>
                <div class="col-md-3 centralizar" >
					<a href="#">
						<img src="./../assets/cadastro-dog.jpg" class="produtos">
				</a>
				</div>
                <div class="col-md-3 centralizar" >
					<a href="#">
						<img src="./../assets/cadastro-dog.jpg" class="produtos">
				</a>
				</div>
                <div class="col-md-3 centralizar" >
					<a href="#">
						<img src="./../assets/login-dog.jpg" class="produtos">
				</a>
				</div>
			</div>

            <!-- Lista de itens Fim -->
        
	</div>
    <Footer />
</div>
</template>

<script>
import Cabecalho from './../Components/Cabecalho.vue';
import Footer from './../Components/Footer.vue';
import router from '@/routes/router.js';
import Carousel from './../Components/Carousel.vue';
import CarouselSlide from './../Components/CarouselSlide.vue';



export default {
    name:'Index',
    router,
 
    components:{
        Cabecalho,
        Footer,
        Carousel,
        CarouselSlide,
    },
    data(){
        return{
            slides:[
                'https://picsum.photos/id/237/600/350',
                'https://picsum.photos/id/236/600/350',
                'https://picsum.photos/id/235/600/350',
                'https://picsum.photos/id/234/600/350',
            ],
            visibleSlide: 0,
          
        }
    },

    computed:{
        slidesLen(){
            return this.slides.length;
        }
    },

    methods:{
        prox(){
            if(this.visibleSlide >= this.slidesLen - 1){
                this.visibleSlide = 0;
            }else{
                this.visibleSlide++;
            }
        },
        ant(){
            if(this.visibleSlide <= 0){
                this.visibleSlide = this.slidesLen - 1;
            }else{
                this.visibleSlide--;
            }
        },
    }
    
}
</script>


<style>
.fundo{
	background-color: #FFF;
    border-radius: 25px 25px 25px 25px;
    text-align: center;
    margin: 5%;
    padding: 5%;
}

.container{
    width: 80%;
}
</style>
<style scoped>

.carousel-centro{
    width: 100px;
}
.imgBusca{
    width: 50%;
    border-radius: 15%;
}

.itens{
    width: 50%;
}
.produtos{
    width: 80%;
    border-radius: 15%;
}
.espacamento{
    margin-bottom: 50px;
}

</style>