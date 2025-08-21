<script lang="ts">
  import { App, Page, Navbar, Block } from 'konsta/svelte';
</script>

{#snippet navbarTitle()}
  <p>Ana Sayfa</p>
{/snippet}

<App theme="ios">
  <Page>
    <Navbar>
      Ana sayfa
    </Navbar>
    <Block strong>Merhaba Svelte + Tailwind!</Block>
  </Page>
</App>
