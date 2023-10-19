<script>
    import "../app.css";
    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";

    import { page } from "$app/stores";

</script>

{#if ($page.route.id != '/contactus' ) && ($page.route.id != '/thank-you')  }
<Header/>
{/if}
<slot />
<Footer/>
  