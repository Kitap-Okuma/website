<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { theme, isMobile, initTheme, initIsMobile } from "@lib/stores";
  import { loadingFadeOut } from "virtual:app-loading";

  let cleanup: () => void;

  onMount(() => {
    loadingFadeOut();

    initTheme();
    cleanup = initIsMobile();
  });

  onDestroy(() => {
    cleanup?.();
  });
</script>

<div>
  <button on:click={() => theme.set(0)}>Light</button>
  <button on:click={() => theme.set(1)}>Dark</button>
  <button on:click={() => theme.set(2)}>Darker</button>
</div>

{#if $isMobile}
  <p>Mobile view, theme: {$theme}</p>
{:else}
  <p>Desktop view, theme: {$theme}</p>
{/if}
