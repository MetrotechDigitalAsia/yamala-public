<script>
    import "../app.css";
    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";
    import appleTouchIcon from '$lib/assets/favicon/apple-touch-icon.png'
    import favIcon23 from '$lib/assets/favicon/favicon-32x32.png'
    import favIcon16 from '$lib/assets/favicon/favicon-16x16.png'
    import manifest from '$lib/assets/favicon/site.webmanifest'
    import maskIcon from '$lib/assets/favicon/safari-pinned-tab.svg'
    import { page } from "$app/stores";

</script>

<svelte:head>
    <link rel="apple-touch-icon" sizes="180x180" href="{appleTouchIcon}">
    <link rel="icon" type="image/png" sizes="32x32" href="{favIcon23}">
    <link rel="icon" type="image/png" sizes="16x16" href="{favIcon16}">
    <link rel="manifest" href="{manifest}">
    <link rel="mask-icon" href="{maskIcon}" color="#5bbad5">
</svelte:head>

{#if ($page.route.id != '/contactus' ) && ($page.route.id != '/thank-you')  }
<Header/>
{/if}
<slot />
<Footer/>
  