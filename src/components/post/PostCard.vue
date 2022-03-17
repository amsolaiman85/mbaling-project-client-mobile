<template>
  <q-card class="bg-white">
    <!-- POST INFO -->
    <q-item class="q-py-md">
      <q-item-section style="max-width: 5.5rem">
        <slot name="photo" />
      </q-item-section>

      <q-item-section top>
        <q-item-label
          lines="2"
          class="defaultfont-semibold"
          style="font-size: medium"
        >
          <slot name="title" />
        </q-item-label>
        <q-item-label style="font-size: small">
          <slot name="fee" /> PHP monthly
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PostCard",
});
</script>
