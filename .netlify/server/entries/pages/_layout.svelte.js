import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const app = "";
const bgHeader = "/_app/immutable/assets/bg_header.e6f91ad5.png";
const logo = "/_app/immutable/assets/yamala_logo.758a0106.svg";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="header h-screen flex relative" data-svelte-h="svelte-kvdemt"><div class="mobile-header block md:hidden left-0 right-0 py-4 px-4 absolute bg-primary"> <a class="absolute top-4 transform -translate-x-1/2 left-1/2 " href="/"><img class="w-[70px]" src="" alt=""></a></div> <a href="/" class="fixed md:absolute top-[unset] bottom-9 z-50 md:bottom-[unset] md:top-9 right-9 bg-primary rounded-full px-6 py-[7px] text-white">Contact Us</a> <a class="absolute hidden md:block m-auto transform -translate-x-1/2 left-1/2 mt-10" href="/"><img${add_attribute("src", logo, 0)} alt=""></a> <img class="absolute -z-20" style="object-fit: cover; height: 100%; width: 100%; object-position: bottom"${add_attribute("src", bgHeader, 0)} alt=""> <div class="absolute inset-0 bg-black opacity-20 -z-10"></div> <p class="animate__animated animate__fadeInUp m-auto text-white hidden md:block text-[53px] font-light">The <span class="font-[sans] italic font-semibold">home</span> that matches your <span class="font-[sans] italic font-semibold">expectations</span>.</p> <p class="animate__animated animate__fadeInUp m-auto text-white block w-fit md:hidden text-[34px] text-center font-light">The <span class="font-[sans] italic font-semibold">home</span> that matches your <span class="font-[sans] italic font-semibold">expectations</span>.</p></div> <div class="nav-bar py-3 justify-center my-9 hidden md:flex" data-svelte-h="svelte-jr8qrd"></div> <div class="sidebar-header h-screen -translate-x-full top-0 left-0 bg-primary absolute z-40 w-[320px] transition-all duration-300" data-svelte-h="svelte-umnwxs"> <ul class="px-8 mt-24"></ul></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
