<script lang="ts">
  import { onMount } from "svelte";
  import { theme } from "@/lib/stores.ts";
  import { loadingFadeOut } from "virtual:app-loading";

  onMount(() => {
    loadingFadeOut();
  });
</script>

<div>
  <button on:click={() => theme.set(0)}>Light</button>
  <button on:click={() => theme.set(1)}>Dark</button>
  <button on:click={() => theme.set(2)}>Darker</button>
</div>

<p>Theme: {$theme}</p>
