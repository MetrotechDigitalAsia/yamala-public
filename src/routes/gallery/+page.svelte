<script>

    // @ts-ignore
    import Glide from '@glidejs/glide'
    // @ts-ignore
    import { onMount } from 'svelte'; 
    
    import prevIcon from '$lib/assets/icon/carousel_back.svg'
    import nextIcon from '$lib/assets/icon/carousel_next.svg'

    // @ts-ignore
    export let data
    console.log(data)

    // @ts-ignore
    const initCarousel = () => {
        // @ts-ignore
        const carousel = new Glide('.carousel', {
            animationDuration: 900,
            animationTimingFunc: 'ease-in-out',
            perView: 1.3
        })

        carousel.mount()

        // @ts-ignore
        const carouselMobile = new Glide('.carousel-mobile', {
            animationDuration: 400,
            animationTimingFunc: 'ease-in-out',
            perView: 1
        })

        carouselMobile.mount()
    }

    onMount(() => {
        initCarousel()
    })



</script>

<div>
    {#if data.gallery?.length != 0}
    <div class="hidden md:block carousel relative" >
        <div data-glide-el="controls" class="absolute z-10 inset-0 flex justify-between px-10" >
            <img data-glide-dir="<" class="cursor-pointer w-16" src="{prevIcon}" alt="">
            <img  data-glide-dir=">" class="cursor-pointer w-16" src="{nextIcon}" alt="">
        </div>
        <div class="glide__track" data-glide-el="track" >
            <ul class="glide__slides">
                {#each data.gallery as item}
                <li class="glide__slide" >
                    <img style="width: 100%; height: 80vh;"  src="{item.img}" alt="">
                </li>
                {/each}
            </ul>
        </div>
    </div>
    {/if}

    {#if data.gallery?.length != 0}
    <div class="block md:hidden" >
        <div class="carousel-mobile relative" >
            <div data-glide-el="controls" class="absolute z-10 inset-0 flex justify-between px-2" >
                <img data-glide-dir="<" class="cursor-pointer w-8" src="{prevIcon}" alt="">
                <img  data-glide-dir=">" class="cursor-pointer w-8" src="{nextIcon}" alt="">
            </div>
            <div class="glide__track" data-glide-el="track" >
                <ul class="glide__slides">
                    {#each data.gallery as item}
                    <li class="glide__slide" >
                        <img style="width: 100%;" class="object-cover"  src="{item.img}" alt="">
                    </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
    {/if}

    
</div>