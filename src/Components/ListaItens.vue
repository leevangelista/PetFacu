<template>
    <div class="ListaItens">
			<div class="row">
				<div class="col-md-3 centralizar" v-for="(produtos, index) in itens()" :key="produtos" :index="index">
					<a href="#">
						<img :src="produtos" />
				</a>
			</div>
		</div>
    </div>
</template>

<script>


export default {
    data(){
		return{
            itens:[
                'https://picsum.photos/id/237/600/350',
                'https://picsum.photos/id/236/600/350',
                'https://picsum.photos/id/235/600/350',
                'https://picsum.photos/id/234/600/350',
			],
			}
			},
}
</script>

<style>

</style>