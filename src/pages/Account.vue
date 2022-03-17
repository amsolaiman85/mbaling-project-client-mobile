<template>
  <page-header />
  <q-page class="defaultfont bg-secondary text-black">
    <!-- PROFILE SECTION -->
    <div class="q-pa-md bg-primary flex-center text-center">
      <q-avatar size="8rem" class="q-mt-md">
        <img :src="user.prfphoto" />
      </q-avatar>

      <!-- USER PROFILE -->
      <div class="q-mt-lg text-white">
        <p style="font-size: medium">@{{ user.username }}</p>
        <span class="defaultfont-bold text-uppercase" style="font-size: large">
          {{ user.firstname }} {{ user.middlename.charAt(0) }}.
          {{ user.lastname }}
        </span>
        <div v-if="user.isStudent">
          <p style="font-size: smaller; line-height: 0.85rem">
            {{ user.studentID }} <br />
            {{ user.degree }}, {{ user.yearAdmitted }} <br />
            {{ user.department }} <br />
            {{ user.college }}
          </p>
        </div>
        <div v-else>
          <p style="font-size: smaller; line-height: 0.85rem">
            {{ user.housingName }} <br />
            {{ user.addressLine1 }}, {{ user.addressLine2 }},
            <br />
            {{ user.addressLine3 }}, {{ user.addressLine4 }}
          </p>
        </div>
      </div>
    </div>

    <!-- BOOKMARK & APPLICATION TABS -->
    <div class="q-mt-sm">
      <q-tabs
        v-model="tab"
        dense
        inline-label
        active-color="black"
        indicator-color="transparent"
        align="justify"
        class="q-px-md defaultfont-semibold text-grey"
      >
        <q-tab :ripple="false" name="bookmarks/posts">
          <span
            v-if="user.isStudent"
            class="row items-center"
            style="font-size: smaller"
          >
            <q-icon name="bi-bookmark-fill" size="xxs" class="q-mr-xs" />
            BOOKMARKS
          </span>
          <span v-else class="row items-center" style="font-size: smaller">
            <q-icon name="bi-pin-angle-fill" size="xs" class="q-mr-xs" />
            POSTS
          </span>
        </q-tab>
        <q-tab :ripple="false" name="associates">
          <span class="row items-center" style="font-size: smaller">
            <q-icon name="bi-person-fill" size="xs" class="q-mr-xs" />
            ASSOCIATES
          </span>
        </q-tab>
      </q-tabs>
      <q-separator inset size="0.1rem" color="black" />

      <q-tab-panels v-model="tab" animated class="bg-transparent">
        <!-- BOOKMARK OR POST TAB PANEL -->
        <q-tab-panel name="bookmarks/posts">
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
        </q-tab-panel>

        <!-- ASSOCIATE TAB PANEL -->
        <q-tab-panel name="associates"> </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script lang="ts">
import { ref } from "vue";
import { Vue, Options } from "vue-class-component";
import { mapState } from "vuex";
import { PostInterface } from "src/store/post/state";
import { UserInterface } from "src/store/user/state";

@Options({
  computed: {
    ...mapState("posts", ["posts"]),
  },
})
export default class Home extends Vue {
  tab = ref("bookmarks/posts");
  posts!: PostInterface[];
  user = {
    studentID: "201812730",
    landlordID: "",
    username: "palawanexpress98",
    password: "password",
    isStudent: true,
    firstname: "Nahed",
    middlename: "Solaiman",
    lastname: "Bashier",
    prfphoto: "https://cdn.quasar.dev/img/boy-avatar.png",
    degree: "BS Information Technology (Database System)",
    department: "Department of Information Sciences",
    college: "College of Information and Computing Sciences",
    yearAdmitted: 2018,
    addressLine1: "0059 Disarip Street",
    addressLine2: "Bubonga Marawi",
    addressLine3: "Marawi City",
    addressLine4: "Lanao del Sur",
    housingName: "",
    email: "bashier.ns30@s.msumain.edu.ph",
    mobileNum: "09531409858",
    birthdate: "October 19, 1998",
  };
}
</script>
