<template>
  <q-header style="height: 3rem; background-color: transparent">
    <q-toolbar>
      <q-space />
      <q-btn
        v-if="$route.fullPath.includes('/account')"
        icon="bi-three-dots-vertical"
        :ripple="false"
        dense
        flat
        color="black"
      />
      <q-btn
        v-if="$route.fullPath.includes('/post')"
        icon="bi-arrow-left"
        :ripple="false"
        dense
        flat
        color="black"
        class="q-mr-sm"
        @click="$router.go(-1)"
      />
      <q-btn
        v-if="$route.fullPath.includes('/post')"
        icon="bi-three-dots"
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
