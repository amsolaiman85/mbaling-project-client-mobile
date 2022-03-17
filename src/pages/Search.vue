<template>
  <q-header class="bg-white text-black q-pa-md">
    <!-- SEARCH INPUT FIELD -->
    <q-form>
      <q-input
        v-model="search"
        :loading="loadingState"
        square
        filled
        dense
        clearable
        placeholder="Search"
      >
        <template v-slot:prepend>
          <q-btn flat round size="0.7rem">
            <q-icon name="bi-search" size="1.25rem" type="submit" />
          </q-btn>
        </template>
      </q-input>
    </q-form>
  </q-header>

  <q-page>
    <div>
      <q-tabs
        v-model="tab"
        dense
        inline-label
        active-color="black"
        indicator-color="transparent"
        align="justify"
        class="q-px-md defaultfont-semibold text-grey"
      >
        <q-tab :ripple="false" name="posts" label="Posts" />
        <q-tab :ripple="false" name="users" label="Users" />
      </q-tabs>
      <q-separator inset size="0.1rem" color="black" />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel class="q-pa-md" name="posts">
          <div class="bg-black" style="height: 10rem"></div>
        </q-tab-panel>
        <q-tab-panel class="q-pa-md" name="users">
          <div class="bg-black" style="height: 10rem"></div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script lang="ts">
import { ref } from "vue";
import { Vue } from "vue-class-component";

export default class Search extends Vue {
  search = ref("");
  tab = ref("posts");
  loadingState = ref(false);
}
</script>
