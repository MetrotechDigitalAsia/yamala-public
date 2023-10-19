<script>

    import Glide from '@glidejs/glide'
    import { onMount } from 'svelte';

    import prevIcon from '$lib/assets/icon/carousel_back.svg'
    import nextIcon from '$lib/assets/icon/carousel_next.svg'
    import security from '$lib/assets/icon/security.svg'
    import outdoor from '$lib/assets/icon/outdoor.svg'
    import car from '$lib/assets/icon/car.svg'
    import floodFree from '$lib/assets/icon/flood-free.svg'
    import property from '$lib/assets/image/property.png'

    const initCarousel = () => {
        const carousel = new Glide('.carousel', {
            animationDuration: 900,
            animationTimingFunc: 'ease-in-out',
            breakpoints: {  
                480: { animationDuration: 400 } 
            } 
        })
    
        carousel.mount()
    }

    onMount(() => {
        initCarousel()
    })

</script>

<p class="hidden md:block text-center text-[34px] font-extralight text-[#ACACAC] mb-10">
    Facility That Match Your <span class="font-semibold italic font-['sans']" >Expectations</span>
</p>

<p class="block md:hidden text-center text-[34px] font-extralight text-[#ACACAC]  mt-10">
    Facility That Match Your <br/><span class="font-semibold italic font-['sans']" >Expectations</span>
</p>

<div class="carousel relative mb-20" >
    <div  data-glide-el="controls" class="hidden md:flex absolute  z-10 inset-0 justify-between px-10" >
        <img data-glide-dir="<" class="cursor-pointer w-16" src="{prevIcon}" alt="">
        <img  data-glide-dir=">" class="cursor-pointer w-16" src="{nextIcon}" alt="">
    </div>
    <div class="glide__track" data-glide-el="track" >
        <ul class="glide__slides">
            <li class="glide__slide flex flex-col md:flex-row px-10 md:px-0 md:pl-56 py-14 items-center">
                <img class="md:mr-40 w-[70px] md:w-[unset]" src="{security}" alt="">
                <div>
                    <h4 class="text-2xl text-center md:text-left mt-4 md:mt-0 md:text-[32px] font-light mb-6" >24 Hours Security</h4>
                    <p class="font-light text-base md:text-2xl md:w-4/5" >Perumahan paling aman di Serpong, Tangerang Selatan. Dengan fasilitas terbarukan, CCTV, dan 24 jam pengamanan maksimal.</p>
                </div>
            </li>
            <li class="glide__slide flex flex-col md:flex-row px-10 md:px-56 py-14 items-center">
                <img class="md:mr-40 w-[70px] md:w-[unset]" src="{outdoor}" alt="">
                <div >
                    <h4 class="text-2xl text-center md:text-left mt-4 md:mt-0 md:text-[32px] font-light mb-6" >Outdoor Space</h4>
                    <p class="font-light text-base md:text-2xl" >Lingkungan ramah anak dengan tempat bermain anak yang dikelilingi oleh area taman yang sejuk dan hijau.</p>
                </div>
            </li>
            <li class="glide__slide flex flex-col md:flex-row px-10 md:px-56 py-14 items-center">
                <img class="md:mr-44 w-[70px] md:w-[unset]" src="{car}" alt="">
                <div>
                    <h4 class="text-2xl text-center md:text-left mt-4 md:mt-0 md:text-[32px] font-light mb-6" >One Gate System</h4>
                    <p class="font-light text-base md:text-2xl" >Akses keluar masuk menggunakan sistem satu pintu yang menjamin keamanan dan kenyamanan untuk para penghuni Yamala Haus.</p>
                </div>
            </li>
            <li class="glide__slide flex flex-col md:flex-row px-10 md:px-56 py-14 items-center">
                <img class="md:mr-44 w-[70px] md:w-[unset]" src="{floodFree}" alt="">
                <div>
                    <h4 class="text-2xl text-center md:text-left mt-4 md:mt-0 md:text-[32px] font-light mb-6" >Flood-Free Housing</h4>
                    <p class="font-light text-base md:text-2xl" >Dibangun di tengah kota dengan ketinggian yang aman sehingga menjadikan Yamala Haus sebagai perumahan dengan area bebas banjir.</p>
                </div>
            </li>
        </ul>
    </div>
    <div class="glide__bullets" data-glide-el="controls[nav]">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet" data-glide-dir="=2"></button>
    </div>
    
</div>
<div class="flex flex-col md:flex-row" >
    <div class="flex bg-[#F8F4F1] w-full md:w-3/5 py-8 md:py-0 order-2 md:order-1" >
        <div class="m-auto px-8 md:px-0" >
            <p class="text-2xl md:text-[34px] font-light mb-5 md:mb-20 mt-4 md:mt-0" >Property surroundings</p>
            <table class="font-light text-sm md:text-xl" >
                <tr>
                    <td class="pb-3" >Pusat Perbelanjaan</td>
                    <td class="w-10 text-center pb-3" >:</td>
                    <td class="pb-3" >Mall Paradise Walk Serpong (10 Menit)</td>
                </tr>
                <tr>
                    <td class="pb-3" >Stasiun</td>
                    <td class="w-10 text-center pb-1" >:</td>
                    <td class="pb-3" >Stasiun Rawa Buntu (15 Menit)</td>
                </tr>
                <tr>
                    <td class="pb-3" >Pasar</td>
                    <td class="w-10 text-center pb-1 flex items-start justify-center" >:</td>
                    <td class="pb-3" >Supermarkets (10 Menit)</td>
                </tr>
                <tr>
                    <td class="pb-3"  colspan="2" ></td>
                    <td class="pb-3" >Pasar Tradisional (10 Menit)</td>
                </tr>
                <tr>
                    <td class="pb-3" >Tol</td>
                    <td class="w-10 text-center pb-3 flex items-start justify-center" >:</td>
                    <td class="pb-3" >Tol BSD (10 Menit)</td>
                </tr>
                <tr>
                    <td class="pb-3" >Rumah Sakit</td>
                    <td class="w-10 text-center pb-3 flex items-start justify-center" >:</td>
                    <td class="pb-3" >Rumah Sakit (15 Menit)</td>
                </tr>
                <tr>
                    <td class="pb-3" >Masjid</td>
                    <td class="w-10 text-center pb-3 flex items-start justify-center" >:</td>
                    <td class="pb-3" >Masjid (5 Menit)</td>
                </tr>
            </table>
        </div>
    </div>
    <img class=" md:h-[90vh] order-1 md:order-2" style="object-fit: cover; object-position: center" src="{property}" alt="">
</div>