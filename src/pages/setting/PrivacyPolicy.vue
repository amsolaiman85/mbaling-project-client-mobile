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
    <template #title> Privacy Policy </template>
  </page-header>

  <q-page class="defaultfont flex column"> </q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class PrivacyPolicy extends Vue {}
</script>
