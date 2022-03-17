<template>
  <q-header style="height: 3rem; background-color: transparent">
    <q-toolbar v-if="$route.fullPath.includes('/account')">
      <q-space />
      <q-btn
        icon="bi-three-dots-vertical"
        :ripple="false"
        dense
        flat
        color="black"
      />
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageHeader",
});
</script>
