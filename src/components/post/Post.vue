<template>
  <q-list class="bg-white">
    <!-- POST PROFILE -->
    <q-item class="q-pt-md">
      <q-item-section avatar top>
        <q-avatar size="xl">
          <slot name="prfphoto" />
        </q-avatar>
      </q-item-section>

      <q-item-section top>
        <q-item-label
          lines="1"
          class="defaultfont-semibold"
          style="font-size: medium"
        >
          <slot name="fullname" />
        </q-item-label>
        <q-item-label lines="1" style="font-size: small">
          <slot name="housingName" />
        </q-item-label>
        <span class="text-grey" style="font-size: xx-small">
          <slot name="date" />
        </span>
      </q-item-section>

      <q-item-section side top>
        <q-btn
          icon="bi-three-dots"
          :ripple="false"
          dense
          flat
          class="text-black"
        />
      </q-item-section>
    </q-item>

    <!-- POST PICTURE -->
    <div class="q-my-xs">
      <slot v-if="$route.fullPath.includes('/home')" name="photo" />
      <q-carousel v-else-if="$route.fullPath.includes('/post')"
          v-model="slide"
          animated
          infinite
          navigation
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          height="15rem"
          autoplay="2"
          control-color="white"
        >
          <slot name="carousel" />
        </q-carousel>
    </div>

    <!-- POST INFO -->
    <q-item>
      <q-item-section class="defaultfont-medium">
        <q-item-label lines="1" style="font-size: small">
          <slot name="title" />
        </q-item-label>
        <q-item-label style="font-size: small">
          <slot name="fee" /> PHP monthly
        </q-item-label>
        <div v-if="$route.fullPath.includes('/home')">
          <span
            class="text-bold cursor-pointer"
            style="font-size: x-small; text-align: right"
          >
            +View more
          </span>
        </div>
      </q-item-section>

      <!-- POST INFO EXTENDED (POSTPAGE) -->
      <div v-if="$route.fullPath.includes('/post')">
        <q-item-label class="q-pa-sm">
          <div>
            <slot name="prvKitchen" />
            Private Kitchen
          </div>
          <div class="q-mt-xs">
            <slot name="prvCR" />
            Private CR
          </div>
        </q-item-label>

        <span class="text-grey q-mt-md" style="font-size: x-small">
          Description
        </span>
        <q-item-label class="description-content q-mt-sm">
          <slot name="description" />
        </q-item-label>
      </div>
    </q-item>

    <q-separator inset color="primary" />

    <!-- REACT BUTTONS & STATS -->
    <q-item>
      <div class="row">
        <q-btn
          icon="bi-heart"
          :ripple="false"
          flat
          round
          color="primary"
          size="sm"
        />
        <q-btn
          icon="bi-chat-right"
          :ripple="false"
          flat
          round
          color="primary"
          size="sm"
        />
      </div>
      <q-space />
      <span
        class="q-pr-md q-pb-md defaultfont-medium absolute-bottom-right"
        style="font-size: x-small"
      >
        <slot name="likes" /> Likes • <slot name="bookmarks" /> Bookmarks
      </span>
    </q-item>
    <q-separator
      v-if="$route.fullPath.includes('/home')"
      size="0.5rem"
      color="secondary"
    />
  </q-list>
</template>

<script lang="ts">
import { ref } from "vue";
import { Vue } from "vue-class-component";

export default class Home extends Vue {
  slide = ref("style");
}
</script>
