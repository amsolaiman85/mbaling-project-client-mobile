<template>
  <page-header>
    <template #button-right>
      <q-btn
        icon="bi-arrow-left"
        :ripple="false"
        dense
        flat
        color="black"
        @click="$router.go(-1)"
      />
      <q-btn
        icon="bi-three-dots"
        :ripple="false"
        dense
        flat
        color="black"
        class="q-ml-sm"
      />
    </template>
  </page-header>

  <q-page class="defaultfont text-black">
    <!-- POST PROFILE -->
    <q-item class="q-pt-md" clickable>
      <q-item-section avatar top>
        <q-avatar size="xl">
          <img :src="posts.prfphoto" @click="$router.push('/profile')" />
        </q-avatar>
      </q-item-section>

      <q-item-section top>
        <q-item-label
          lines="1"
          class="defaultfont-semibold"
          style="font-size: medium"
          @click="$router.push('/profile')"
        >
          {{ posts.firstname }} {{ posts.middlename.charAt(0) }}.
          {{ posts.lastname }}
        </q-item-label>
        <q-item-label
          lines="1"
          style="font-size: small"
          @click="$router.push('/profile')"
        >
          {{ posts.housingName }}
        </q-item-label>
        <span class="text-grey" style="font-size: xx-small">
          {{ posts.date }}
        </span>
      </q-item-section>
    </q-item>

    <!-- POST PICTURE CAROUSEL -->
    <div class="q-my-xs">
      <q-carousel
        v-model="slide"
        navigation
        arrows
        animated
        infinite
        swipeable
        transition-prev="slide-right"
        transition-next="slide-left"
        height="15rem"
        autoplay="2"
      >
        <template v-slot:navigation-icon="{ active, onClick }">
          <q-btn
            v-if="active"
            icon="bi-circle-fill"
            flat
            round
            dense
            size="xs"
            color="primary"
            @click="onClick"
          />
          <q-btn
            v-else
            icon="bi-circle"
            flat
            round
            dense
            size="xs"
            color="white"
            @click="onClick"
          />
        </template>
        <q-carousel-slide
          v-for="photo in posts.photos"
          :key="photo.id"
          :name="photo.id"
          :img-src="photo.url"
        />
      </q-carousel>
    </div>

    <!-- POST INFO -->
    <q-item>
      <q-item-section class="defaultfont-medium">
        <q-item-label style="font-size: small">
          {{ posts.title }}
        </q-item-label>
        <q-item-label class="q-py-xs" style="font-size: small">
          {{ posts.fee }} PHP monthly
        </q-item-label>

        <q-item-label class="q-pa-sm">
          <div>
            <q-icon
              v-if="posts.prvKitchen"
              name="bi-check-square-fill"
              style="font-size: large"
            />
            <q-icon v-else name="bi-x-square-fill" style="font-size: large" />
            Private Kitchen
          </div>
          <div class="q-mt-xs">
            <q-icon
              v-if="posts.prvCR"
              name="bi-check-square-fill"
              style="font-size: large"
            />
            <q-icon v-else name="bi-x-square-fill" style="font-size: large" />
            Private CR
          </div>
        </q-item-label>

        <span class="q-mt-md text-grey" style="font-size: x-small">
          Description
        </span>
        <q-item-label class="q-mt-sm description-content">
          {{ posts.description }}
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-item class="bg-transparent" style="height: 3.5rem" />
  </q-page>

  <!-- REACT BUTTONS & STATS (FOOTER) -->
  <q-footer class="defaultfont text-black">
    <q-item class="fixed-bottom bg-white" style="height: 3.5rem">
      <q-separator
        inset
        color="primary"
        class="fixed-bottom"
        style="bottom: 3rem"
      />
      <div class="q-mt-sm row">
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
        {{ posts.likes }} Likes • {{ posts.bookmarks }} Bookmarks
      </span>
    </q-item>
  </q-footer>
</template>

<script lang="ts">
import { ref } from "vue";
import { Vue } from "vue-class-component";

export default class Post extends Vue {
  slide = ref("style");
  posts = {
    id: 135413523,
    title:
      "Free boarding room @ Zin-Azshari Boarding House 5th street MSU-Marawi",
    fee: 1200,
    description: `Room dimension: 12x10ft
        Beds: 2 (single bed)
        rent fee is per person
        w/ Personal cabinet and shelves
        w/ 24/7 security camera surveillance

        POLICIEs:
        -Observe cleanliness and personal privacy
        -Respect other boarders (if you have problems with other boarder, in the manager to settle them)
        -Always lock the door when leaving your room
        -The management will not be liable of your stolen properties
        -No visitors allowed
        -Curfew is 9pm-5am`,
    prvKitchen: false,
    prvCR: false,
    photos: [
      {
        id: 1,
        url: "https://cdn.quasar.dev/img/parallax1.jpg",
      },
      {
        id: 2,
        url: "https://cdn.quasar.dev/img/mountains.jpg",
      },
      {
        id: 3,
        url: "https://cdn.quasar.dev/img/quasar.jpg",
      },
    ],

    firstname: "Azshara",
    middlename: "Queldorei",
    lastname: "Highborne",
    prfphoto: "https://cdn.quasar.dev/img/avatar2.jpg",
    housingName: "Zin-Azshari Boarding House",

    date: 1631096539262,
    likes: 44,
    bookmarks: 1,
  };
}
</script>

<style>
.description-content {
  white-space: pre-line;
  font-size: small;
}
</style>
