<script setup lang="ts">
import { VLIcon, VLCrud } from '@skillbill/vuelace-3'
import { useCrudServices } from './services/crudServices'
import { onMounted } from 'vue'

const { get, add, edit } = useCrudServices()

onMounted(() => {
  ;(window as any).test = { get, add, edit }
})
</script>

<template>
  <h1>Example vuelace-3 App</h1>
  <VLIcon name="cat"></VLIcon>
  <VLCrud
    id="userCrud"
    primary_key="id"
    singular_label="User"
    :headers="[
      { i18n_key: 'Name', value: 'name' },
      { i18n_key: 'Profile', value: 'profile' },
      { i18n_key: 'Birth Date', value: 'birth' }
    ]"
    :actions="[]"
    :form_fields="[
      { value: 'name', i18n_key: 'name', input_type: 'text' },
      { value: 'profile', i18n_key: 'profile', input_type: 'text' },
      { value: 'birth', i18n_key: 'birth', input_type: 'date' }
    ]"
    :get-items="get"
    :add-item="add"
    :edit-item="edit"
    :filters="[]"
  >
  </VLCrud>
</template>

<style scoped></style>
