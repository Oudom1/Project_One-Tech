<template>
  <main>
         
         <div>You are in Home page!</div>
          <Hearder></Hearder>
  </main>
</template>

<script>
import Hearder from '@/components/HearderApp.vue';

export default {
   name: "HomePage",
  components: {
    Hearder,
    },
}
</script>