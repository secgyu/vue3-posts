<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <PostForm v-model:title="form.title" v-model:content="form.content" @submit.prevent="save">
      <template #actions>
        <button type="button" class="btn btn-outline-dark" @click="goListPage">목록</button>
        <button class="btn btn-primary">저장</button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { createPost } from '@/api/posts'
import PostForm from '@/components/posts/PostForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = ref({
  title: null,
  content: null,
})
const save = async () => {
  try {
    await createPost({
      ...form.value,
      createdAt: Date.now(),
    })
    router.push({ name: 'PostList' })
  } catch (err) {
    console.error(err)
  }
}
const goListPage = () => {
  router.push({ name: 'PostList' })
  // router.push('/post')
}
</script>

<style lang="scss" scoped></style>
