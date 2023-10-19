<script>

    import bgHeader from '$lib/assets/image/bg_header.png'
    import logo from '$lib/assets/image/yamala_logo.svg'
    import { page } from '$app/stores';
    import { afterNavigate, beforeNavigate } from '$app/navigation';

    $: route = $page.route.id

    let showSidebar = false
    // @ts-ignore
    let mdHeaderText
    let smHeaderText

    afterNavigate(() => {
        // @ts-ignore
        mdHeaderText.classList.add('animate__fadeInUp')
        smHeaderText.classList.add('animate__fadeInUp')
    })

    beforeNavigate(() => {
        // @ts-ignore
        mdHeaderText.classList.remove('animate__fadeInUp')
        smHeaderText.classList.remove('animate__fadeInUp')
    })

</script>

<div class="header h-screen flex relative">
    <div class="mobile-header block md:hidden left-0 right-0 py-4 px-4 absolute bg-primary">
        <button on:click={() => showSidebar = true} class="menu-btn mt-1">
            <span class="w-[30px] rounded block h-[3px] bg-white" ></span>
            <span class="w-[30px] my-2 rounded block h-[3px] bg-white" ></span>
            <span class="w-[30px] rounded block h-[3px] bg-white" ></span>
        </button>
        <a class="absolute top-4 transform -translate-x-1/2 left-1/2 " href="/">
            <img class="w-[70px]" src="" alt="">
        </a>
    </div>
    <a href="/contactus" class="fixed md:absolute top-[unset] bottom-9 z-50 md:bottom-[unset] md:top-9 right-9 bg-primary rounded-full px-6 py-[7px] text-white" >
        Contact Us
    </a>
    <a class="absolute hidden md:block m-auto transform -translate-x-1/2 left-1/2 mt-10" href="/">
        <img src="{logo}" alt="">
    </a>
    <img class="absolute -z-20" style="object-fit: cover; height: 100%; width: 100%; object-position: bottom" src="{bgHeader}" alt="">
    <div class="absolute inset-0 bg-black opacity-20 -z-10" ></div>
    <p bind:this={mdHeaderText} class="animate__animated animate__fadeInUp m-auto text-white hidden md:block text-[53px] font-light" >The <span class="font-[sans] italic font-semibold" >home</span> that matches your <span class="font-[sans] italic font-semibold" >expectations</span>.</p>
    <p bind:this={smHeaderText} class="animate__animated animate__fadeInUp m-auto text-white block w-fit md:hidden text-[34px] text-center font-light" >The <span class="font-[sans] italic font-semibold" >home</span> that matches your <span class="font-[sans] italic font-semibold" >expectations</span>.</p>
</div>
<div class="nav-bar py-3 justify-center my-9 hidden md:flex">
    <a href="/" class="ml-5 px-8 py-2 font-normal rounded-full { route == '/' ? 'bg-primary text-white' : 'text-primary' } "  >UNIT</a>
    <a href="/facility" class="ml-5 px-8 py-2 font-normal rounded-full { route == '/facility' ? 'bg-primary text-white' : 'text-primary' }" >FASILITAS</a>
    <a href="/gallery" class="ml-5 px-8 py-2 font-normal rounded-full  { route == '/gallery' ? 'bg-primary text-white' : 'text-primary' } " >GALERI</a>
    <a href="/location" class="ml-5 px-8 py-2 font-normal rounded-full  { route == '/location' ? 'bg-primary text-white' : 'text-primary' } " >LOKASI</a>
    <a href="/contact" class="ml-5 px-8 py-2 font-normal rounded-full { route == '/contact' ? 'bg-primary text-white' : 'text-primary' } " >KONTAK</a>
</div>

<div class="sidebar-header h-screen { !showSidebar ? '-translate-x-full' : '' } top-0 left-0 bg-primary absolute z-40 w-[320px] transition-all duration-300" >
    <button on:click={() => showSidebar = false} class="menu-btn absolute top-4 right-8">
        <span class="w-[30px] rounded block h-[3px] bg-white" ></span>
        <span class="w-[30px] my-2 rounded block h-[3px] bg-white" ></span>
        <span class="w-[30px] rounded block h-[3px] bg-white" ></span>
    </button>
    <ul class="px-8 mt-24" >
        <li class="mb-2" ><a href="/" class="py-3 px-4 block text-white rounded-md { route == '/' ? 'bg-slate-50 bg-opacity-20' : '' }">UNIT</a></li>
        <li class="mb-2" ><a href="/facility" class="py-3 px-4 block text-white rounded-md  { route == '/facility' ? 'bg-slate-50 bg-opacity-20' : '' }">FASILITAS</a></li>
        <li class="mb-2" ><a href="/gallery" class="py-3 px-4 block text-white rounded-md { route == '/gallery' ? 'bg-slate-50 bg-opacity-20' : '' }">GALERI</a></li>
        <li class="mb-2" ><a href="/location" class="py-3 px-4 block text-white rounded-md { route == '/location' ? 'bg-slate-50 bg-opacity-20' : '' }">LOKASI</a></li>
        <li class="mb-2" ><a href="/contact" class="py-3 px-4 block text-white rounded-md { route == '/contact' ? 'bg-slate-50 bg-opacity-20' : '' }">KONTAK</a></li>
    </ul>
</div>
