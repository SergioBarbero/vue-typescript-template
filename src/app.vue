<template>
    <div>
        <topic :fontIndex=fontIndex @changeFont="changeFont"></topic>
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
