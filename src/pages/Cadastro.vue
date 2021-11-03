<template>
    <div class="container"> 
        <div class="main-container">
            <div class="mid-container dog-background">
            </div>
            <div class="mid-container login-container">
                <form class="form-container" @submit.prevent="submitForm">
                    <p class="login-title">Cadastro</p>
                
                    <input type="text" v-model="email" class="login-input step-1" placeholder="E-mail"  ref="email" v-if="step==1" />
                    <span class="error" v-if="(!$v.email.required || !$v.email.email) && $v.email.$dirty && step==1">Informe um e-mail válido</span>
                    <input type="password" v-model="senha" class="login-input step-1" placeholder="Senha" ref="password" v-if="step==1" />
                    <span class="error" v-if="!$v.senha.required && $v.senha.$dirty && step==1">Informe a senha</span>
                    <span class="error" v-if="(!$v.senha.minLength || !$v.senha.maxLength) && $v.senha.$dirty && step==1">Senha deve ter entre {{ $v.senha.$params.minLength.min }} e {{ $v.senha.$params.maxLength.max }} caracteres</span>
                    <input type="password" v-model="confirmarSenha" class="login-input step-1" placeholder="Confirmar senha" ref="confirmPassword" v-if="step==1" />
                    <span class="error" v-if="(!$v.confirmarSenha.sameAsPassword) && $v.confirmarSenha.$dirty && step==1">As senhas não são iguais</span>

                    <input type="text" v-model="nome" class="login-input step-2" placeholder="Nome" ref="username" v-if="step==2" />
                    <span class="error" v-if="!$v.nome.required && $v.nome.$dirty && step2==2">Informe o nome</span>
                    <span class="error" v-if="(!$v.nome.minLength) && $v.nome.$dirty && step2==2">Nome deve ter pelo menos {{ $v.nome.$params.minLength.min }} caracteres</span>
                    <input type="number" v-model="telefone" class="login-input step-2" placeholder="Telefone" ref="phone" v-if="step==2" />
                    <span class="error" v-if="!$v.telefone.required && $v.telefone.$dirty && step2==2">Informe o telefone</span>
                    <input type="text" v-model="cpf" class="login-input step-2" placeholder="CPF" ref="document" v-if="step==2" />
                    <span class="error" v-if="!$v.cpf.required && $v.cpf.$dirty && step2==2">Informe o CPF</span>
                    <span class="error" v-if="(!$v.cpf.minLength || !$v.cpf.maxLength) && $v.senha.$dirty && step2==2">CPF inválido!</span>

                    <input type="text" v-model="cep" class="login-input step-3" placeholder="CEP" ref="zipcode" v-if="step==3" />
                    <span class="error" v-if="!$v.cep.required && $v.cep.$dirty && step2==3">Informe o CEP</span>
                    <span class="error" v-if="(!$v.cep.minLength) && $v.cep.$dirty && step2==3">CEP deve ter pelo menos {{ $v.cep.$params.minLength.min }} caracteres</span>
                    <div class="inputs-container-row" v-if="step==3">
                        <input type="text" v-model="rua" class="login-input step-3 input-row-1" placeholder="Rua" ref="street" />
                        <input type="number" v-model="numero" class="login-input step-3 input-row-2" placeholder="Nº" ref="number"/>
                    </div>
                    <div class="inputs-container-row" v-if="step==3">
                        <span class="error" v-if="!$v.rua.required && $v.rua.$dirty && step2==3">Informe a rua</span>
                        <span class="error" v-if="!$v.numero.required && $v.numero.$dirty && step2==3">Informe o número</span>
                    </div>
                    <input type="text" v-model="bairro" class="login-input step-3" placeholder="Bairro" ref="district" v-if="step==3" />
                    <span class="error" v-if="!$v.bairro.required && $v.bairro.$dirty && step2==3">Informe o bairro</span>
                    <div class="inputs-container-row" v-if="step==3">
                        <input type="text" v-model="cidade" class="login-input step-3 input-row-1" placeholder="Cidade" ref="city" />
                        <!-- <input type="text" v-model="estado" class="login-input step-3 input-row-2" placeholder="Estado" ref="province" /> -->
                        <v-select :options="options"></v-select>
                    </div>
                    
                    <div class="inputs-container-row" v-if="step==3">
                        <span class="error" v-if="!$v.cidade.required && $v.cidade.$dirty && step2==3">Informe a cidade</span>
                        <span class="error" v-if="!$v.estado.required && $v.estado.$dirty && step2==3">Informe o estado</span>
                    </div>

                    <button type="submit" class="login-button" v-if="step!=3" v-on:click="nextStep">
                        Próximo
                    </button>
                    <button type="button" class="login-button" v-if="step==3" v-on:click="nextStep">
                        Cadastrar
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

import Vue from 'vue'
import { required, minLength, maxLength, email, sameAs } from 'vuelidate/lib/validators';
import router from '@/routes/router.js';
import AuthenticationService from '../../src/services/authentication/authenticationService';
import AddressRequest  from '../../src/services/authentication/requests/addressRequest';
import RegisterUserRequest from '../../src/services/authentication/requests/addressRequest';
import StateService from '../services/stateService';
import vSelect from 'vue-select';
import "vue-select/dist/vue-select.css";

Vue.component('v-select', vSelect)

let request = new RegisterUserRequest();

const stateService = new StateService();
            stateService.getState()
            // then(response => {
            //     // console.log(response.data);
            //     let json = JSON.stringify(response.data);
            //     let state = JSON.parse(json);
            //     // console.log(json)
            //     // console.log(response.data)
            //    // console.log(state.states)
            //     // console.log(this.options)

            //     state.states.forEach((value, index) => {
            //         // this.options[index] = value.nome
            //         console.log(value.nome)
            //         // console.log(index)
            //         console.log(index)
            //     });

            //     console.log(this.options)

            // }).catch((error) => {console.log(error);});

export default {
    name: 'Cadastro',
    router,
    data(){
        return {
            step: 3,
            step2: 0,
            email: '',
            senha: '',
            confirmarSenha: '',
            nome: '',
            telefone: '',
            cpf: '',
            cep: '',
            rua: '',
            numero: '',
            bairro: '',
            cidade: '',
            estado: '',
            options: []
        }
    },
    validations: {
        email: {
            required,
            email
        },
        senha: {
            required,
            minLength: minLength(8),
            maxLength: maxLength(12)
        },
        confirmarSenha: {
            required,
            sameAsPassword: sameAs('senha')
        },
        nome: {
            required,
            minLength: minLength(3)
        },
        telefone: {
            required
        },
        cpf: {
            required,
            minLength: minLength(11),
            maxLength: maxLength(11)
        },
        cep: {
            required,
            minLength: minLength(8)
        },
        rua: {
            required
        },
        numero: {
            required
        },
        bairro: {
            required
        },
        cidade: {
            required
        },
        estado: {
            required
        }
    },
    methods: {
        nextStep: function(){
            if(this.$v.email.required && this.$v.email.email && 
            this.$v.senha.required && this.$v.senha.minLength && this.$v.senha.maxLength &&
            this.$v.confirmarSenha.sameAsPassword && this.step == 1){
                request.email = this.$refs.email.value;
                request.senha = this.$refs.confirmPassword.value;
                this.step = this.step + 1;

                

            } else if(this.step == 2){
                if(this.$v.nome.required && this.$v.nome.minLength &&
                this.$v.telefone.required &&
                this.$v.cpf.required && this.$v.cpf.minLength && this.$v.cpf.maxLength){
                    request.nome = this.$refs.username.value;
                    request.cpf = this.$refs.document.value;
                    request.telefone = this.$refs.phone.value;
                    this.step = this.step + 1;
                } else{
                    this.step2 = 2;
                }
            } else if(this.step == 3){

                

                if(this.$v.cep.required && this.$v.cep.minLength &&
                this.$v.rua.required && this.$v.numero.required && this.$v.bairro.required && 
                this.$v.cidade.required && this.$v.estado.required) {

                

                    request.endereco = new AddressRequest(this.$refs.street.value,
                                                        this.$refs.district.value,
                                                        this.$refs.city.value,
                                                        parseInt(this.$refs.zipcode.value),
                                                        parseInt(this.$refs.province.value),
                                                        this.$refs.number.value);
                    const authService = new AuthenticationService(); 
                    authService.registerUser(request)
                    .then(() => {
                        alert("Cadastrado com sucesso!");
                        this.submitForm()
                    })
                    .catch(() => {
                        alert("Ops... ocorreu um erro. Tente novamente por favor.");
                    });
                } else{
                    this.step2 = 3;
                }
            }
        },
        submitForm(){
            this.$v.$touch();

            if(!this.$v.$invalid && this.step == 3){
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
    background: url("./../assets/cadastro-dog.jpg") no-repeat center center;
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

.inputs-container-row{
    display: flex;
    justify-content: space-between;
}

.input-row-1{
    width: 70%;
}

.input-row-2{
    width: 25%;
}

.error{
    font-size: 11px;
    color: red;
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

</style>