<template>
  <h2>Home ({{ meta.title }})</h2>
  <HelloWorld />
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'

const { meta } = useRoute()
</script>
