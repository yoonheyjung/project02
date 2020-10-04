<template>
    <div class="left">
         <b-nav vertical class="w-40">
            <b-nav-item active>Home</b-nav-item>
            <b-nav-item>Today's activity</b-nav-item>
            <b-nav vertical>
                <b-nav-item class="ml-3 my-1">Diet </b-nav-item>
                <b-nav-item class="ml-3 my-1">Exercise </b-nav-item>
            </b-nav>
            <b-nav-item>Past activity</b-nav-item>
            <b-nav vertical>
                <b-nav-item class="ml-3 my-1">Diet </b-nav-item>
                <b-nav-item class="ml-3 my-1">Exercise </b-nav-item>
            </b-nav>
            <b-nav-item @click="show = !show">Future  activity</b-nav-item>
            <b-nav vertical v-show="show">
                <b-nav-item class="ml-3 my-1" v-b-visible="handleVisibility">Diet </b-nav-item>
                <b-nav-item class="ml-3 my-1" v-b-visible="handleVisibility">Exercise </b-nav-item>
            </b-nav>
            <b-nav-item>Record</b-nav-item>
        </b-nav>
    </div>  
</template>

<script>
export default {
    name : "LeftMenu",
    data() {
      return {
        show: false,
        isVisible: false
      }
    },
    methods: {
      handleVisibility(isVisible) {
        this.isVisible = isVisible
      }
    }
}
</script>

<style>
</style>