<script>

    import logo from '$lib/assets/image/yamala_logo.svg'
    import bgHeader from '$lib/assets/image/bg_header.png'
    import form from '$lib/assets/image/Form.png'

</script>

<div class="h-[110vh] relative" >
    <a class="absolute z-20 m-auto transform -translate-x-1/2 left-1/2 mt-10" href="/">
        <img src="{logo}" alt="">
    </a>
    <img class="absolute -z-20" style="object-fit: cover; height: 100%; width: 100%; object-position: bottom" src="{bgHeader}" alt="">
    <div class="absolute inset-0 bg-black opacity-60 -z-10" ></div>
    <div class="absolute top-0 bottom-0 left-0 right-0">
        <div class="absolute top-[23%] bottom-[15%] left-[7%] right-[7%] md:left-[12%] md:right-[12%] bg-primary opacity-80 rounded-md md:rounded-[30px] flex p-5 md:p-0">
            <img class="hidden md:block absolute bottom-0 left-0 h-[105%]" src="{form}" alt="">
            <div class="md:w-[63%] flex flex-col justify-center md:ml-auto md:pr-16" >
                <p class="text-white text-3xl font-extralight " >Thank You for Interest <span class="font-semibold italic" style="font-family: 'Times New Roman', serif;"  > #MatchWithYamalaHaus</span></p>
                <p class="text-white text-center md:text-left text-lg font-extralight leading-5 mt-4 md:mt-2" >We will get back to you soon.</p>
            </div>
        </div>
    </div>
</div>