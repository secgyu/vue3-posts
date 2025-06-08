<template>
  <div>
    <h2>About View</h2>
    <button class="btn btn-primary" @click="$router.push('/')">Home으로 이동</button>
    <h2>Store</h2>
    <p>Counter: {{ counter }}</p>
    <p>doubleCount : {{ doubleCount }}</p>
    <button @click="increment">Click!</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const { counter, doubleCount } = storeToRefs(store)
const { increment } = store
</script>

<style lang="scss" scoped></style>
