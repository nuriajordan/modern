<template>
  <div>
    <button @click="changeSerial()">SERIAL</button>
    <div class="title" ref="title">
      <h1>{{ data.titol }}</h1>
    </div>
    <div class="intro">
      <h2>{{ data.intro }}</h2>
    </div>
    <div class="cos">
      <p>{{ data.cos }}</p>
    </div>
    <div class="flex">
      <div class="img"><img :src="data.fitxer" alt="" /></div>
      <div v-if="value">
        <qrcode-vue :value="value" :size="size" level="H" />
      </div>
    </div>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default {
  name: "HomeView",

  data() {
    return {
      size: 300,
      serial: 0,
    };
  },
  sockets: {
    connect: function () {
      console.log("socket connected");
    },
    message: function (data) {
      console.log(
        'this method was fired by the socket server. eg: io.emit("customEmit", data)'
      );
      console.log("data", data);
      let dades = data.split(" ");
      console.log("data", dades);
      if (dades[1] == "touched\r") {
        console.log(parseInt(dades[0]));
        this.serial = parseInt(dades[0]);
      }
    },
  },

  computed: {
    data: {
      get() {
        return this.$store.getters.info[this.serial];
      },
      set(newSerial) {
        return this.$store.getters.info[newSerial];
      },
    },
    value() {
      return this.data.url;
    },
  },
  methods: {
    changeSerial() {
      this.serial = Math.floor(Math.random() * this.$store.getters.info.length);
    },
  },
  watch: {
    data: function (newData) {
      console.log("changing", newData);
    },

    serial: function (newSerial) {
      console.log("change", newSerial);

      gsap.from(".title", {
        delay: 0.5,
        duration: 2.5,
        autoAlpha: 0,
        ease: "elastic.out(1, 0.3)",
        x: -200,
      });

      gsap.from(".cos", {
        delay: 3,
        duration: 2.5,
        autoAlpha: 0,
        ease: "back.out(1, 0.3)",
        x: +400,
      });

      gsap.from(".intro", {
        delay: 1,
        duration: 2.5,
        x: -400,
        autoAlpha: 0,
        rotation: 360,
      });

      this.data = newSerial;
    },
  },

  components: {
    QrcodeVue,
  },
};
</script>

<style scoped lang="scss">
</style>