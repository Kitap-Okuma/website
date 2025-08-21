<script lang="ts">
  import { onMount } from "svelte";

  let isMobile = false;
  //0 = light, 1 = dark, 2 = darker (for mobile)
  let theme = 0;
  onMount(() => {
    const check = () => (isMobile = window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    function handler(schemeMedia: MediaQueryListEvent) {
      theme = schemeMedia.matches ? 0 : 1;
    }

    const schemeMedia = matchMedia("(prefers-color-scheme: light)");

    schemeMedia.addEventListener("change", handler);

    theme = schemeMedia.matches ? 0 : 1;

    return () => {
      schemeMedia.removeEventListener("change", handler);
    };
  });
</script>

{#if isMobile}
  <div>
    <p>This is the mobile view.</p>
  </div>
{:else}
  <div>
    <div class="bg-blue-500 text-white p-4 rounded-lg shadow-md">
      Merhaba Svelte + Tailwind!
    </div>
    <p>This is the desktop view.</p>
  </div>
{/if}
