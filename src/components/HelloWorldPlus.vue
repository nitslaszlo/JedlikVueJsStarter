<template>
  <div id="app">
    <b-row>
      <b-col md="auto">
        <label for="nevInput">Kérem a neved:</label>
      </b-col md="auto">
      <b-col>
        <b-form-input v-model="nev" id="nevInput" type="text"></b-form-input>
      </b-col>
    </b-row>

    <h1>Hello {{ nev }}{{ felkialtojelek }}</h1>
    <p>Felkiáltójelek száma: {{ felkialtojelDarab }}</p>
    <b-button variant="outline-primary" v-bind:disabled="felkialtojelDarab == 10" v-on:click="onClick('+')">Plus</b-button>
    <b-button variant="outline-primary" :disabled="felkialtojelDarab == 1" @click="onClick('-')">Minus</b-button>
    <ol>
      <li v-for="nap in napok" :key="nap">{{ nap }}</li>
    </ol>
    <b-row>
      <b-col md="auto">
        <label for="napInput">Kérem a nap nevét:</label>
      </b-col md="auto">
      <b-col>
        <b-form-input v-model="inputNap" id="napInput" type="text"></b-form-input>
      </b-col>
    </b-row>
    <b-button variant="success" v-on:click="hozzadNap()">Nap hozzáadása</b-button>
    <b-button variant="danger" @click="torolNap()">Nap törlése</b-button>

    <b-card title="Intézmény neve" img-src="https://www.jedlik.eu/images/stories/jedlik-1.png" img-alt="Image" img-top tag="article"
      style="max-width: 20rem;" class="mb-2">
      <b-card-text>
        Győri Műszaki Szakképzési Centrum Jedlik Ányos Gépipari és Informatikai Szakgimnáziuma, Szakközépiskolája és
        Kollégiuma
      </b-card-text>
      <b-button href="https://www.jedlik.eu" variant="primary" target="_blank">Honlap</b-button>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class HelloWorldPlus extends Vue {
  private felkialtojelDarab: number;
  private nev: string;
  private felkialtojelek: string;
  private napok = ["hétfő", "kedd", "szerda"];
  private inputNap: string;

  constructor() {
    super();
    this.felkialtojelDarab = 3;
    this.nev = "Jedlik Ányos";
    this.felkialtojelek = "!!!";
    this.inputNap = "";
  }

  private onClick(művelet: string): void {
    if (művelet === "+" && this.felkialtojelDarab < 10) {
      this.felkialtojelDarab++;
    } else if (művelet === "-" && this.felkialtojelDarab > 1) {
      this.felkialtojelDarab--;
    }
  }

  private hozzadNap(): void {
    const joNap = [
      "hétfő",
      "kedd",
      "szerda",
      "csütörtök",
      "péntek",
      "szombat",
      "vasárnap"
    ];
    if (!this.napok.includes(this.iNap) && joNap.includes(this.iNap)) {
      this.napok.push(this.inputNap.toLowerCase());
    }
    this.inputNap = "";
  }

  private torolNap(): void {
    this.napok = this.napok.filter(i => i !== this.inputNap);
    this.inputNap = "";
  }

  // computed
  private get iNap(): string {
    return this.inputNap.toLowerCase();
  }

  @Watch("felkialtojelDarab")
  private onNumChanged(value: number, oldValue: number) {
    this.felkialtojelek = "!".repeat(this.felkialtojelDarab);
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}

button {
  margin: 5px;
}
</style>
