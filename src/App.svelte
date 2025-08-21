<script lang="ts">
  import { onMount } from "svelte";
  import { loadingFadeOut } from 'virtual:app-loading'


  let isMobile = false;
  //0 = light, 1 = dark, 2 = darker (for mobile)
  let theme = 0;
  onMount(() => {
    const check = () => (isMobile = window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    loadingFadeOut()
  });
</script>

{#if isMobile}
  <div>
    <p>This is the mobile view.</p>
  </div>
{:else}
  <div>
    <p>This is the desktop view.</p>
  </div>
{/if}
