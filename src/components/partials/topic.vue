<template>
    <div>
      <h1 :class="`display-${fontIndex}`">{{ topic }}</h1>
      <button @click="changeFont">Change</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Topic extends Vue {
  private topic: string = 'Hello World!';

  @Prop({ type: Number })
  fontIndex: Number = 1;

  private changeFont() {
    this.$emit("changeFont");
  }
}
</script>

<style scoped lang="scss">

</style>