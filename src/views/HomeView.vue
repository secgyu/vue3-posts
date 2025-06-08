<template>
  <div>
    <h2>Home View</h2>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
    <hr class="my-4" />
    <AppGrid :items="items" v-slot="{ item }">
      <AppCard>{{ item }}</AppCard>
    </AppGrid>
    <hr class="my-4" />
    <div>{{ position }}</div>
    <div>{{ x }}, {{ y }}</div>
  </div>
</template>

<script setup>
import { reactive, ref, toRef, toRefs } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goAboutPage = () => {
  router.push('/about')
}

const items = ref(['사과', '딸기', '포도', '바나나'])

const position = reactive({
  x: 100,
  y: 1000,
})

// const x = toRef(position, 'x')
// const y = toRef(position, 'y')

const { x, y } = toRefs(position)
</script>

<style lang="scss" scoped></style>
