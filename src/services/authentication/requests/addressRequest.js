class AddressRequest {
    constructor(rua,
                bairro,
                cidade,
                cep,
                idEstado,
                numero) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.cep = cep;
        this.idEstado = idEstado;
        this.numero = numero;
    }
}

export default AddressRequest;