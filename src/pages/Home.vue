<template>
  <page-header />
  <q-page class="defaultfont bg-secondary">
    <!-- POST COMPONENT -->
    <post v-for="post in posts" :key="post.date">
      <template #prfphoto><q-img :src="post.prfphoto" /></template>
      <template #fullname>
        {{ post.firstname }} {{ post.middlename.charAt(0) }}.
        {{ post.lastname }}
      </template>
      <template #housingName>{{ post.housingName }}</template>
      <template #date>{{ post.date }}</template>
      <template #photo>
        <div v-for="photo in post.photos" :key="photo.id">
          <q-img v-if="photo.id === 1" :src="photo.url" />
        </div>
      </template>
      <template #title>{{ post.title }}</template>
      <template #fee>{{ post.fee }}</template>
      <template #likes>{{ post.likes }}</template>
      <template #bookmarks>{{ post.bookmarks }}</template>
    </post>

    <!-- NO POSTS WARNING -->
    <div class="row items-center justify-evenly" style="height: 7.5rem">
      <span class="text-grey-5">no more post to fetch</span>
    </div>

    <!-- ADD POST BUTTON -->
    <q-page-sticky :offset="[18, 18]" position="bottom-right">
      <q-btn
        icon="bi-pin-angle"
        fab
        color="primary"
        @click="$router.push('/home')"
      />
    </q-page-sticky>
  </q-page>
</template>

<script lang="ts">
import { PostInterface } from "src/store/post/state";
import { Vue, Options } from "vue-class-component";
import { mapState } from "vuex";

@Options({
  computed: {
    ...mapState("posts", ["posts"]),
  }
})

export default class Home extends Vue {
  posts!: PostInterface[];
}
</script>
