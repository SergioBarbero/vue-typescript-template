<template>
    <div class="d-flex justify-content-center">
      <div>
        <div>
          <img src="./assets/images/logo-vue.png" class="app-logo" alt="logo" />
          <h2>Welcome to Vue</h2>
        </div>
          <p>
            To get started, edit
            <code>src/components/app/app.vue</code> and save to reload.
          </p>
          <topic :fontIndex=fontIndex @changeFont="changeFont"></topic>
      </div>
    </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.css'
import { Vue, Component, Prop } from "vue-property-decorator";
import Topic from "@/components/partials/topic.vue";
import FontStyleAccessor from "./store/fontstyle";


@Component({
  components: {
    Topic
  }
})
export default class App extends Vue {
  changeFont() {
    FontStyleAccessor.changeFont(this.$store);
  }

  get fontIndex() {
    return FontStyleAccessor.getFontIndex(this.$store);
  }

}
</script>

<style lang="scss">
</style>
