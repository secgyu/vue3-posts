<template>
  <div>
    <h2>Home View</h2>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
    <hr class="my-4" />
    <AppGrid :items="items" v-slot="{ item }">
      <AppCard>{{ item }}</AppCard>
    </AppGrid>
    <hr class="my-4" />
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$person.name);
    // this.$person.say();
  },
}
</script>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goAboutPage = () => {
  router.push('/about')
}

const items = ref(['사과', '딸기', '포도', '바나나'])
</script>

<style lang="scss" scoped></style>
