<template>
  <div class="container">
    <h2>List Animations</h2>
    <router-link to="/other">Other Animations</router-link>
    <ListData />
  </div>
</template>

<script>
import ListData from "@/components/ListData.vue";

export default {
  components: {
    ListData,
  },
};
</script>
