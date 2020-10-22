<template>
  <v-app>    

    <v-app-bar
      app
      color="cyan lighten-4"
    >
      <v-app-bar-nav-icon  @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>헬쓰쓰쓰쓰</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn :to="{ name: 'login' }" text large>
        <h6 class="mr-2 font-weight-black" >Login</h6>
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'signup' }" text large>
        <h6 class="mr-2 font-weight-black">sign up</h6>
      </v-btn>
    </v-app-bar>
    
    <!-- 메뉴바 시작 -->
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
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item  :to="{ name: 'home' }">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title >Home</v-list-item-title>
          </v-list-item>

          <!-- 오늘 활동 -->
          <v-list-group :value="true" sub-group  no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Today's activity</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item>
              <v-list-item-title>Diet</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Exercise</v-list-item-title>
            </v-list-item>
          </v-list-group>

          <!-- 지난 활동 -->
          <v-list-group :value="true" sub-group  no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Past activity</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item>
              <v-list-item-title>Diet</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Exercise</v-list-item-title>
            </v-list-item>
          </v-list-group>

          <!-- 미래 활동 -->
          <v-list-group :value="true" sub-group  no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Future activity</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item>
              <v-list-item-title>Diet</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Exercise</v-list-item-title>
            </v-list-item>
          </v-list-group>

          
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-clipboard-text-search</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Record</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- 메뉴바 끝 -->

    <v-content id="content"> <!-- 안에 내용 cnotent -->
      <router-view/>
    </v-content>

  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    drawer: false,
    group: null,
  }),
}
</script>

<style>
  #app {
    width: 100%;
    margin: 10px auto;
    padding: 20px;
  }
</style>
