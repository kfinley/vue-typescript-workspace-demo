<template>
  <div class="home">
    <Emoji :msg="message" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Emoji from '@/components'; // @ is an alias to /src
import Message from 'emoji';

@Component({
  components: {
    Emoji,
  },
})
export default class Home extends Vue {
  private message = '';

  mounted() {
    this.message = Message;
  }
}
</script>
