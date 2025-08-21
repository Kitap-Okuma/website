<script lang="ts">
    import { onMount } from "svelte";

  let isMobile = false;

   onMount(() => {
    const check = () => (isMobile = window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
  });
</script>
{#if isMobile} 
    <div class="mobile-view">
        <p>This is the mobile view.</p>
    </div>
{:else} 

    <div class="desktop-view">
        <p>This is the desktop view.</p>
    </div>
{/if}