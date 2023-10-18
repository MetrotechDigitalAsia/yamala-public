<script>

    import bedroomIcon from '$lib/assets/icon/bedroom.svg'
    import closedIcon from '$lib/assets/icon/closed.svg'
    import carport from '$lib/assets/icon/carport.svg'

    export let data
    
    let { units, selectedUnit } = data

    let showDropdown = false

    const changeUnit = (item) => {
        selectedUnit = item;
        showDropdown = false
    }

</script>

<div>

    {#if !units}
    <div class="w-full h-[50vh] flex" >
        <div class="text-primary m-auto text-3xl">Belum ada Unit</div>
    </div>
    {:else }
    <div class="unit grid grid-grid-cols-1 md:grid-cols-2 py-4 md:py-0">
        <img class="h-[70vh]" src="{selectedUnit?.unit_img}" alt="">
        <div class="flex" >
            <div class="m-auto w-full py-4 md:py-0 px-10 md:px-0 md:w-2/3 " >
                <div class="flex font-light text-sm md:text-lg"  >
                    <div class="relative" >
                        <button on:click={() => showDropdown = !showDropdown} class="flex items-center" >
                            <span class="mr-2 uppercase" >Type {selectedUnit?.unit_type}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                                <path d="M6.5 10L0.870833 0.250001L12.1292 0.25L6.5 10Z" fill="black"/>
                            </svg>
                         </button>
                         <div class="dropdown-container {showDropdown ? '' : 'hidden'} absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <div class="py-1" role="none">
                                {#each units as item}
                                    <button on:click={() => changeUnit(item)} class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100" role="menuitem">Type {item.unit_type}</button>
                                {/each}
                            </div>
                        </div>
                    </div>
                    <p class="ml-9" >LT {selectedUnit?.unit_lt} LB {selectedUnit?.unit_lb}</p>
                </div>
                <p class="text-[#acacac] text-xl md:text-3xl font-extralight my-4 md:my-8" >
                    The Only Things That Missing <br> is <span class="font-['sans-serif'] italic font-semibold" >You And Your Family</span>
                </p>
                <div class="bedroom flex items-center" >
                    <img class="w-7 mr-7" src="{bedroomIcon}" alt="">
                    <p class="font-light text-primary text-base md:text-lg" >{selectedUnit?.unit_detail_bedroom} KAMAR TIDUR</p>
                </div>
                <div class="bedroom flex items-center my-3" >
                    <img class="w-7 mr-7" src="{closedIcon}" alt="">
                    <p class="font-light text-primary text-base md:text-lg" >{selectedUnit?.unit_detail_bathroom} KAMAR Mandi</p>
                </div>
                <div class="bedroom flex items-center" >
                    <img class="w-7 mr-7" src="{carport}" alt="">
                    <p class="font-light text-primary text-base md:text-lg" >{selectedUnit?.unit_detail_carport} Carport</p>
                </div>
                <div class="flex mt-9 gap-x-3">
                    <button class="flex-1 text-sm md:text-base border text-primary border-primary" >
                        DOWNLOAD BROSUR
                    </button>
                    <button class="flex-1 text-sm md:text-base text-white py-3 bg-primary" >
                        CHAT WITH US
                    </button>
                </div>
            </div>
        </div>
    </div>
    {/if}
    <div class="unit-map bg-[#F8F4F1] flex py-20" >
        <img class="m-auto" src="{selectedUnit?.unit_floor_plan_img}" alt="">
    </div>
</div>