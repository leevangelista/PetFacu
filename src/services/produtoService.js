import api from './api';

class ProdutoService { 
    getProduto() {
        return api.get("/user/products");
    }
}

export default ProdutoService