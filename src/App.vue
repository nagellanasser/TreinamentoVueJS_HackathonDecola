<template>
  <v-app>
    <v-main>
      <router-view/>
      <AppTopBar/>
    </v-main>
  </v-app>
</template>

<script>
import AppTopBar from './components/shared/AppTopBar'

  export default {
    components:{
      AppTopBar,
    }
  }
</script>