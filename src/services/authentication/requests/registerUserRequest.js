class RegisterUserRequest {
    constructor(nome, 
                cpf, 
                email, 
                senha, 
                endereco, 
                telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
        this.endereco = endereco;
        this.telefone = telefone;
    }
}

export default RegisterUserRequest;