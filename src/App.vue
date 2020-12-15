<template>
  <div id="app">
    <div>
      <threls-policies-menu-component />
      <threls-cookie-component />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {
  },
})
export default class App extends Vue {

}
</script>
