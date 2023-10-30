<script>

    import logo from '$lib/assets/image/yamala_logo.svg'
    import bgHeader from '$lib/assets/image/bg_header.png'
    import formPng from '$lib/assets/image/Form.png'
    import { enhance } from '$app/forms';


</script>

<div class="h-[110vh] relative" >
    <a href="/" class="z-20 absolute m-auto transform -translate-x-1/2 left-1/2 mt-10" >
        <img src="{logo}" alt="">
    </a>
    <img class="absolute -z-20" style="object-fit: cover; height: 100%; width: 100%; object-position: bottom" src="{bgHeader}" alt="">
    <div class="absolute inset-0 bg-black opacity-60 -z-10" ></div>
    <div class="absolute top-0 bottom-0 left-0 right-0">
        <div class="absolute top-[23%] md:bottom-[15%] left-[7%] right-[7%] md:left-[12%] md:right-[12%] bg-primary opacity-80 rounded-md md:rounded-[30px] flex p-5 md:p-0">
            <img class="hidden md:block absolute bottom-0 left-0 h-[105%]" src="{formPng}" alt="">
            <div class="md:w-[63%] md:ml-auto md:pr-16" >
                <p class="text-white text-2xl font-light mt-8" >Contact Our Agent To <span class="font-semibold italic" style="font-family: 'Times New Roman', serif;"  > #MatchWithYamalaHaus</span></p>
                <p class="text-white text-sm font-light leading-5 mt-4" >You can come to our marketing gallery, or you can fill below form, Our agent will contact you to help with informations.</p>
                <form method="POST" use:enhance action="?/store" >
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-8 mt-8" >
                        <div class="flex border-b border-white pb-3" >
                            <input required name="fullname" placeholder="Name" type="text" class="c-input text-white bg-transparent placeholder:text-white placeholder:font-light placeholder:text-base " >
                        </div>
                        <div class="flex border-b border-white pb-3" >
                            <input required name="email" placeholder="Email" type="email" class="c-input text-white bg-transparent placeholder:text-white placeholder:font-light placeholder:text-base " >
                        </div>
                    </div>
                    <div class="flex border-b border-white pb-3 mt-8" >
                        <input required name="phone_number" placeholder="Phone" type="text" class="c-input text-white bg-transparent placeholder:text-white placeholder:font-light placeholder:text-base " >
                    </div>
                    <div class="flex border-b border-white pb-3 mt-8" >
                        <textarea name="message" style="background-color: transparent; color: #fff;" placeholder="Message (Optional)" class="w-full c-input bg-transparent placeholder:text-white placeholder:font-light placeholder:text-base " cols="30" rows="3"></textarea>
                    </div>
                    <div class="flex justify-end md:justify-start">
                        <button type="submit" class=" border-2 border-white text-white py-2 px-8 mt-6 bg-[#455E45] rounded" >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>