<template>
    <div class="Cabecalho">
        <nav class="navbar navbar-light corFundo">
			<div class="container-fluid">
				<a class="navbar-brand" href="/">
					<img src="./../assets/logo.jpg" alt="" class="d-inline-block align-text-top imgLogo">
				</a>
				<form class="d-flex navbar-expand">
					<input class="form-control-sm me-2 campoBusca" type="search" placeholder="Pesquisar..." aria-label="Search">
					<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
						<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
					</svg>
				</form>
				<a class="navbar-brand" href="/login" v-if="logado">
					<img src="./../assets/login.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
					Login/CriarConta
				</a>
				<a class="navbar-brand" href="/MeusProdutos" v-else>
					<img src="./../assets/login.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
					Meus Produtos
				</a>
			</div>
		</nav>

    </div>

</template>

<script>
export default {
	name: "Cabecalho",
	logado: true
}
</script>

<style scoped>
.corFundo{
	background-color: #80624C;
	border-radius: 0px 0px 25px 25px;
}
.imgLogo{
	width: 40px;
	height: 34px;
	border-radius: 10px;
}
</style>