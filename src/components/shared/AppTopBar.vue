<template>
    <div class="app-top-bar">
        <v-app-bar
        color="green lighten-1"
        dark
        app
        >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

            <v-toolbar-title>Campeonato Brasileiro ⚽️ </v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        >
        <v-list
            nav
            dense
        >
            <v-list-item-group
            v-model="group"
            active-class="green lighten-2"
            >
            <router-link to="/">
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Início</v-list-item-title>
            </v-list-item>
            </router-link>

            <router-link to="/classificacao">
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-trophy</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Classificação</v-list-item-title>
            </v-list-item>
            </router-link>
            </v-list-item-group>
        </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name:'AppTopBar',
    data: () => ({
        drawer: false,
        group: null,
  }),
}
</script>

<style scoped>
.app-top-bar a {
    text-decoration: none;
    color:white;
}
</style>