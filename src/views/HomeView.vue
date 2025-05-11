<template>
  <div>
    <h2>Home View</h2>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
  </div>
  <hr class="my-4" />
  <AppGrid :items="items" v-slot="{ item }">
    <AppCard>{{ item }}</AppCard>
  </AppGrid>
</template>

<script setup>
import AppCard from '@/components/AppCard.vue'
import AppGrid from '@/components/AppGrid.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goAboutPage = () => {
  router.push('/about')
}

const items = ref(['사과', '바나나', '딸기', '포도'])
</script>

<style lang="scss" scoped></style>
