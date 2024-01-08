<template>
  <div>
    <h3>{{ t('hello.message') }}</h3>
    <h4>{{ t('example.message', { name: 'John', age: 42 }) }}</h4>
    <h5>{{ t('greeting') }}</h5>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from '@padcom/vue-i18n'

const { t } = useI18n()
</script>

<i18n>
{
  "en": {
    "example": {
      "message": "This is an example message to {name} {age}"
    }
  },
  "de": {
    "example": {
      "message": "Dies ist eine Beispielnachricht an {name} {age}"
    }
  },
}
</i18n>

<style lang="postcss" scoped>
h2 {
  color: green;
}
</style>
