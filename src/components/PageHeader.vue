<template>
  <q-header style="height: 3rem; background-color: transparent">
    <q-toolbar>
      <slot name="button-left" />
      <q-space />
      <slot name="button-right" />
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class PageHeader extends Vue {
}
</script>

