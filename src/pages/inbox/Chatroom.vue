<template>
  <q-header elevated style="height: 3rem; background-color: white">
    <q-toolbar>
      <q-avatar size="sm" class="q-ml-sm" @click="$router.push('/profile')">
        <q-img src="https://cdn.quasar.dev/img/avatar2.jpg" />
      </q-avatar>
      <q-toolbar-title
        class="defaultfont text-black text-bold"
        style="font-size: small"
        @click="$router.push('/profile')"
      >
        Azshara Q. Highborne
      </q-toolbar-title>
      <q-btn
        icon="bi-arrow-left"
        :ripple="false"
        flat
        color="black"
        class="q-pr-sm"
        @click="$router.go(-1)"
      />
    </q-toolbar>
  </q-header>

  <q-page class="defaultfont bg-secondary flex column">
    <q-scroll-area
      class="q-pa-md column col justify-end"
      style="height: 38rem; max-width: 100%"
    >
      <div>
        <q-chat-message
          v-for="message in messages"
          :text-color="message.from == 'me' ? 'white' : 'black'"
          :key="message.text"
          :text="[message.text]"
          :bg-color="message.from == 'me' ? 'primary' : 'white'"
          :sent="message.from == 'me' ? true : false"
        />
      </div>
    </q-scroll-area>

    <q-footer class="bg-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-input
            v-model="newMessage"
            dense
            rounded
            outlined
            placeholder="Message"
            bg-color="white"
            class="full-width"
          >
            <template v-slot:append>
              <q-btn
                icon="send"
                :disable="!newMessage"
                flat
                class="q-pa-none"
                @click="sendMessage"
              />
            </template>

            <template v-slot:after>
              <q-btn
                round
                dense
                flat
                icon="bi-plus-circle"
                @click="showOptions()"
              />
            </template>
          </q-input>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script lang="ts">
import { BottomSheet } from "quasar";
import { Vue } from "vue-class-component";

export default class MainLayout extends Vue {
  showOptions() {
    BottomSheet.create({
      title: "More",
      grid: true,
      class: "q-pb-xl defaultfont",
      actions: [
        {
          icon: "bi-image",
          label: "Gallery",
        },
        {
          icon: "bi-camera",
          label: "Camera",
        },
        {
          icon: "bi-door-closed",
          label: "Link",
        },
      ],
    })
      .onOk(() => {
        // console.log('Action chosen:', action.id)
      })
      .onCancel(() => {
        // console.log('Dismissed')
      })
      .onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      });
  }

  newMessage = "";
  messages = [
    {
      text: "Hey Dodol, how r u boi",
      from: "me",
    },
    {
      text: "yow im fine boi",
      from: "them",
    },
    {
      text: "im just to chill",
      from: "me",
    },
  ];

  sendMessage() {
    this.messages.push({
      text: this.newMessage,
      from: "me",
    });
    this.newMessage = "";
  }
}
</script>
