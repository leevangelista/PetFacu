<template>
    <div class="container"> 
        <div class="main-container">
            <div class="mid-container dog-background">
            </div>
            <div class="mid-container login-container">
                <form class="form-container" @submit.prevent="submitForm">
                    <p class="login-title">Login</p>
                
                    <input type="email" v-model="email" class="login-input" placeholder="E-mail"/>
                    <span class="error" v-if="(!$v.email.required || !$v.email.email) && $v.email.$dirty">Informe um e-mail válido</span>
                    <input type="password" v-model="senha" class="login-input" placeholder="Senha" />
                    <span class="error" v-if="!$v.senha.required && $v.senha.$dirty">Informe a senha</span>
                    <span class="error" v-if="(!$v.senha.minLength || !$v.senha.maxLength) && $v.senha.$dirty">Senha deve ter entre {{ $v.senha.$params.minLength.min }} e {{ $v.senha.$params.maxLength.max }} caracteres</span>
                    <button type="submit" class="login-button">
                        Entrar
                    </button>
                    <div class="link-container">
                        <a href="/senha" class="login-link">Esqueci minha senha</a>
                        <a href="/cadastro" class="login-link">Quero me cadastrar</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
 
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators';
import router from '@/routes/router.js';

export default {
    name: 'Login',
    router,
    data(){
        return {
            email: '',
            senha: ''
        }
    },
    validations: {
        email: {
            required,
            email
        },
        senha: {
            minLength: minLength(8),
            maxLength: maxLength(12),
            required
        }
    },
    methods: {
        submitForm(){
            this.$v.$touch();

            if(!this.$v.$invalid){
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
    background: url("./../assets/login-dog.jpg") no-repeat center center;
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
    margin-bottom: 15px;
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

.error{
    font-size: 11px;
    color: red;
    
}

</style>