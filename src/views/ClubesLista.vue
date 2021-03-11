<template>
    <v-container>
        <h2 class="text-h5 text-center mb-3 mt-5">Classificação 🏆</h2>

        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                <th colspan ="2" class="text-center">
                    Clubes
                </th>
                <th class="text-center">
                    Pontos
                </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for ="(clube,index) of clubesListaOrdenada" :key="clube.id">
                    <td>{{ index +1 }}</td>
                    <td class="text-justify">
                        <v-avatar size="24px">
                            <img
                                :src="clube.escudo"
                                :alt="clube.nome"
                            >
                        </v-avatar>
                        <span class="pl-2">
                            {{ clube.nome }}
                        </span>
                    </td>
                    <td class="text-center">{{ clube.pontos}}</td>
                </tr>
            </tbody>
            </template>
        </v-simple-table><br><br>

        <div class="div-gif">
            <v-img 
                class="classificacao-gif"
                src="http://gifgifs.com/animations/sports/soccer/goal.gif" alt="http://gifgifs.com">
            </v-img>
        </div>
    </v-container>
</template>

<script>
export default {
    name:'ClubesLista',
    data(){
        return{
            clubesLista:[]
        }
    },
    computed:{
        clubesListaOrdenada(){
            const listaOrdenada = this.clubesLista.slice(0).sort(
                (a,b) => a.pontos > b.pontos ? -1 : 1
            );
            return listaOrdenada;
        }
    },
    created(){
        fetch('https://hackthon-decola.firebaseio.com/clubes-lista.json')
            .then( resposta => resposta.json())
            .then( json => {this.clubesLista = json});
            //console.log(this.clubesLista);
    }
}
</script>

<style scoped>
div.div-gif {
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: flex-end;

}
.classificacao-gif{
    max-width: 50%;
    max-height: 50%;
}
</style>