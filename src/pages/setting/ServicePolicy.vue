<template>
  <page-header>
    <template #button-left>
      <q-btn
        icon="bi-arrow-left"
        :ripple="false"
        dense
        flat
        color="black"
        class="q-pl-sm"
        @click="$router.go(-1)"
      />
    </template>
    <template #title> Terms of Service </template>
  </page-header>

  <q-page class="defaultfont flex column"> </q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class ServicePolicy extends Vue {}
</script>
