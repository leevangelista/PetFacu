<template>
    <div class="container"> 
        <div class="main-container">
            <div class="mid-container dog-background">
            </div>
            <div class="mid-container login-container">
                <form class="form-container" @submit.prevent="submitForm">
                    <p class="login-title">Redefinir Senha</p>

                    <div class="text step-1" v-if="step==1">
                        Digite o e-mail cadastrado para receber o código de verificação
                    </div>
                    <input type="email" v-model="email" class="login-input step-1" placeholder="E-mail" v-if="step==1" />
                    <span class="error" v-if="(!$v.email.required || !$v.email.email) && $v.email.$dirty && step==1">Informe um e-mail válido</span>

                    <div class="text step-2" v-if="step==2">
                        Digite o código recebido no e-mail
                    </div>
                    <input type="number" v-model="codigo" class="login-input step-2" placeholder="Código" pattern="\d*" v-if="step==2" />
                    <span class="error" v-if="(!$v.codigo.minLength || !$v.codigo.maxLength) && $v.codigo.$dirty && step2==2">Código inválido</span>

                    <input type="password" v-model="senha" class="login-input step-3" placeholder="Nova senha" v-if="step==3" />
                    <span class="error" v-if="!$v.senha.required && $v.senha.$dirty && step2==3">Informe a senha</span>
                    <span class="error" v-if="(!$v.senha.minLength || !$v.senha.maxLength) && $v.senha.$dirty && step2==3">Senha deve ter entre {{ $v.senha.$params.minLength.min }} e {{ $v.senha.$params.maxLength.max }} caracteres</span>
                    <input type="password" v-model="novaSenha" class="login-input step-3" placeholder="Confirmar senha" v-if="step==3" />
                    <span class="error" v-if="(!$v.novaSenha.sameAsPassword) && $v.novaSenha.$dirty && step2==3">As senhas não são iguais</span>

                    <button type="submit" class="login-button" v-if="step!=3" v-on:click="nextStep" >
                        Enviar
                    </button>
                    <button type="submit" class="login-button" v-if="step==3" v-on:click="nextStep">
                        <!-- <a href="/">Redefinir</a> -->
                        Redefinir
                    </button>
                    <div class="link-container">
                        <a @click="$router.go(-1)" class="login-link">Voltar</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import { required, minLength, maxLength, email, sameAs } from 'vuelidate/lib/validators';
import router from '@/routes/router.js';

export default {
    name: 'Senha',
    router,
    data(){
        return {
            step: 1,
            step2: 0,
            email: '',
            codigo: '',
            senha: '',
            novaSenha: ''
        }
    },
    validations: {
        email: {
            required,
            email
        },
        codigo: {
            required,
            minLength: minLength(6),
            maxLength: maxLength(6)
        },
        senha: {
            required,
            minLength: minLength(6),
            maxLength: maxLength(12)
        },
        novaSenha: {
            required,
            sameAsPassword: sameAs('senha')
        }
    },
    methods: {
        nextStep: function(){
            if(this.$v.email.required && this.$v.email.email && this.step == 1){
                this.step = this.step + 1;
            } else if(this.step == 2){
                if(this.$v.codigo.required && this.$v.codigo.minLength && this.$v.codigo.maxLength && this.step == 2) {
                    this.step = this.step + 1;
                } else {
                    this.step2 = 2;
                }
            }else if(this.step == 3) {
                if(this.$v.senha.required && this.$v.novaSenha.sameAsPassword && this.$v.senha.maxLength && this.$v.senha.minLength && this.step == 3) {
                    console.log("caiu no 3");
                }else {
                    this.step2 = 3;
                }
            }
        },
        submitForm(){
            this.$v.$touch();

            if(!this.$v.$invalid && this.step == 3){
                console.log("foi");
                router.push('/');

            }
        }
    }
}
</script>

<style scoped>

.container{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.main-container{
    height: 450px;
    width: 650px;
    display: flex;
    border-radius: 10px;
    box-shadow: 0px 0px 8px 5px #00000040;
}

@media screen and (max-width: 800px) {
    .main-container{
        width: 550px;
    }
}

.mid-container{
    width: 50%;
}

.dog-background{
    border-radius: 10px 0 0 10px;
    overflow: hidden;
    background: url("./../assets/senha-dog.jpg") no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.login-container{
    border-radius: 0px 10px 10px 0px;
    z-index: 100;
    background-color: #fff;
    box-shadow: -5px 0 15px #00000020;
    align-items: center;
    display: flex;
    justify-content: center;
}

@media screen and (max-width: 500px) {
    .main-container{
        width: 300px;
    }
    .dog-background{
        display: none;
    }
    .mid-container{
        width: 100%;
    }
    .login-container{
        border-radius: 10px;
    }
}

.form-container{
    margin: 3rem;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
}

.login-title{
    font-size: 40px;
    margin-bottom: 25px;
}

.text{
    margin-bottom: 15px;
    color: #444;
}

.login-input{
    margin-top: 10px;
    margin-bottom: 5px;
    background-color: transparent;
    font-size: 16px;
    padding: 5px;
    border-bottom: 1px solid #00000040;
    font-size: arial;
    color: #000000bb
}

.login-input:focus{
    color: #000;
    border-bottom: 1px solid #4e2f11;
}

button{
    background-color: #784A1B;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.8px;
    padding: 8px;
    margin: 15px 0;
    box-shadow: 0px 0px 3px var(--color-brown-1);
    border-radius: 50px;
    transition: 0.2s background-color;
    cursor: pointer;
}

button:hover{
    background-color: #784A1Bd9;
}

button:active{
    background-color: #5f3a15;
}

.link-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #00000090;
    margin-top: 5px;
}

.login-link{
    margin-bottom: 8px;
    transition: 0.2s color;
    cursor: pointer;
    color: #00000090 !important;
    text-decoration: none;
}

.login-link:hover{
    color: #000000bb !important;
}

.login-link:visited{
    color: #00000090 !important;
}

.step-1{
    display: block;
}

.step-2{
    display: block;
}

.step-3{
    display: block;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.error{
    font-size: 11px;
    color: red;
    
}

</style>