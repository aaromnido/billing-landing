/* empty css                          */
import 'html-escaper';
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, i as renderComponent, j as renderSlot, k as renderHead } from '../astro_FJ4jCAet.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$m = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$l = createAstro();
const $$CookiesModal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$CookiesModal;
  return renderTemplate`${maybeRenderHead()}<div id="cookies-modal" tabindex="-1" class="fixed bottom-4 right-0 left-0 z-50 m-4"> <!-- Modal content --> <div class="bg-white border border-slate-300 p-4 flex flex-col md:flex-row"> <!-- Modal body --> <div class="space-y-4 flex-1"> <p class="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
Usamos cookies esenciales para que nuestro sitio funcione. Con su consentimiento, también podremos usar cookies no esenciales para mejorar la experiencia del usuario, personalizar el contenido y analizar el tráfico del sitio web. Por estos motivos, podríamos compartir sus datos de uso del sitio con nuestros socios de análisis. Al hacer clic en “Aceptar“, acepta el uso de cookies de nuestro sitio web tal como se describe en nuestra <a href="/" aria-label="Enlace a la política de cookies" class="text-blue-600">Política de cookies</a>. Puede cambiar sus ajustes de cookies en cualquier momento haciendo clic en <a href="/" aria-label="Enlace a preferencias" class="text-blue-600">Preferencias</a>.
</p> </div> <!-- Modal footer --> <div class="flex items-start md:ml-8 mt-4 md:mt-0"> <button data-modal-hide="cookies-modal" data-modal-target="cookies-modal" aria-hidden="false" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
Preferencias
</button> <button data-modal-hide="cookies-modal" data-modal-target="cookies-modal" aria-hidden="false" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2">
Rechazar
</button> <button data-modal-hide="cookies-modal" data-modal-target="cookies-modal" aria-hidden="false" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2">
Aceptar
</button> </div> </div> </div>`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/components/CookiesModal.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$k = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/images/favicon.png"><meta name="generator"', "><title>", '</title><meta name="description" content="Crea y env\xEDa tus facturas a la velocidad de la luz. Software de cumplimiento responsable Ley Antifraude (Ley 11/2021)."><meta property="og:locale" content="es_ES"><meta property="og:type" content="article"><meta property="og:title" content="Factura f\xE1cil con Billin - Accede gratis"><meta property="og:description" content="Crea y env\xEDa tus facturas a la velocidad de la luz. Software de cumplimiento responsable Ley Antifraude (Ley 11/2021)."><meta property="og:url" content="https://www.billin.net/land/factura-facil-con-billin-mkt-app-nueva/"><meta property="og:site_name" content="Billin"><meta property="article:modified_time" content="2023-09-21T09:01:05+00:00"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:label1" content="Tiempo de lectura"><meta name="twitter:data1" content="12 minutos"><script src="/flowbite.min.js"><\/script>', "", "</head> <body> ", "  ", "</body></html>"])), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "CookiesModal", $$CookiesModal, {}));
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/layouts/Layout.astro", void 0);

const $$Astro$j = createAstro();
const $$CtaButtonPrimaryMedium = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$CtaButtonPrimaryMedium;
  return renderTemplate`${maybeRenderHead()}<a type="button" href="/signup-kit-digital" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
Empieza gratis ahora
</a>`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/components/Atoms/CtaButtonPrimaryMedium.astro", void 0);

const $$Astro$i = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<nav class="fixed w-full z-20 top-0 start-0 bg-white" id="top"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> <!-- * Logo * --> <a href="/#hero" class="flex items-center space-x-3 rtl:space-x-reverse"> <img src="/images/logo-billin.svg" class="h-10" alt="Billin Logo"> </a> <!-- * Left Side Of Navbar * --> <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"> ${renderComponent($$result, "CtaButtonPrimaryMedium", $$CtaButtonPrimaryMedium, {})} <!-- * Hamburger Button * --> <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false"> <span class="sr-only">Abrir menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> </div> <!-- * Right Side Of Navbar * --> <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky"> <!-- * Menu * --> <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white"> <li> <a href="/#features" class="block py-2 px-1 hover:text-blue-500" aria-current="page">
Funcionalidades
</a> </li> <li> <a href="/#testimonials" class="block py-2 px-1 hover:text-blue-500" aria-current="page">
Testimonios
</a> </li> <li> <a href="/#faqs" class="block py-2 px-1 hover:text-blue-500" aria-current="page">
FAQs
</a> </li> <li> <a href="/#pricing" class="block py-2 px-1 hover:text-blue-500" aria-current="page">
Pricing
</a> </li> </ul> </div> </div> </nav>`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/components/Navigation.astro", void 0);

const $$Astro$h = createAstro();
const $$CtaButtonPrimaryLarge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$CtaButtonPrimaryLarge;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"> <a href="/signup-kit-digital" type="button" class="py-3 px-5 text-base font-medium text-center text-white rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 bg-blue-700 transition-all ease-in">
Empieza gratis ahora
</a> </div>`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/components/Atoms/CtaButtonPrimaryLarge.astro", void 0);

const $$Astro$g = createAstro();
const $$DummyImageScreenshot = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$DummyImageScreenshot;
  const { styles } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(`border rounded-lg mx-auto max-w-[100%] ${styles}`, "class")} src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/dashboard-mockup.svg" alt="Billin Screenshot">`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/components/Atoms/DummyImageScreenshot.astro", void 0);

const $$Astro$f = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-200 px-4" id="hero"> <div class="pt-36 text-center text-balance"> <div class="max-w-[60rem] mx-auto lg:px-12 mb-10 lg:mb-16"> <h1 class="mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 lg:text-6xl dark:text-white">
Factura fácil con Billin
</h1> <h2 class="mb-8 text-lg font-normal text-pretty">
Crea y envía tus facturas a la velocidad de la luz
</h2> ${renderComponent($$result, "CtaButtonPrimaryLarge", $$CtaButtonPrimaryLarge, {})} </div> ${renderComponent($$result, "DummyImageScreenshot", $$DummyImageScreenshot, { "styles": "lg:max-w-[60rem]" })} </div> </section>`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/components/Hero.astro", void 0);

const $$Astro$e = createAstro();
const $$PartnerLogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$PartnerLogo;
  const { color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`h-11 text-slate-400 mx-4 my-3 ${color}`, "class")} viewBox="0 0 120 41"${addAttribute(color, "fill")} xmlns="http://www.w3.org/2000/svg"> <path d="M20.058 40.5994C31.0322 40.5994 39.9286 31.7031 39.9286 20.7289C39.9286 9.75473 31.0322 0.858398 20.058 0.858398C9.08385 0.858398 0.1875 9.75473 0.1875 20.7289C0.1875 31.7031 9.08385 40.5994 20.058 40.5994Z" fill="currentColor"></path> <path d="M33.3139 20.729C33.3139 19.1166 32.0101 17.8362 30.4211 17.8362C29.6388 17.8362 28.9272 18.1442 28.4056 18.6424C26.414 17.2196 23.687 16.2949 20.6518 16.1765L21.9796 9.96387L26.2951 10.8885C26.3429 11.9793 27.2437 12.8567 28.3584 12.8567C29.4965 12.8567 30.4211 11.9321 30.4211 10.7935C30.4211 9.65536 29.4965 8.73071 28.3584 8.73071C27.5522 8.73071 26.8406 9.20497 26.5086 9.89271L21.6954 8.87303C21.553 8.84917 21.4107 8.87303 21.3157 8.94419C21.1972 9.01535 21.1261 9.13381 21.1026 9.27613L19.6321 16.1999C16.5497 16.2949 13.7753 17.2196 11.7599 18.6662C11.2171 18.1478 10.495 17.8589 9.74439 17.86C8.13201 17.86 6.85156 19.1639 6.85156 20.7529C6.85156 21.9383 7.56272 22.9341 8.55897 23.3849C8.51123 23.6691 8.48781 23.9538 8.48781 24.2623C8.48781 28.7197 13.6807 32.348 20.083 32.348C26.4852 32.348 31.6781 28.7436 31.6781 24.2623C31.6781 23.9776 31.6543 23.6691 31.607 23.3849C32.6028 22.9341 33.3139 21.9144 33.3139 20.729ZM13.4434 22.7918C13.4434 21.6536 14.368 20.729 15.5066 20.729C16.6447 20.729 17.5694 21.6536 17.5694 22.7918C17.5694 23.9299 16.6447 24.855 15.5066 24.855C14.368 24.8784 13.4434 23.9299 13.4434 22.7918ZM24.9913 28.2694C23.5685 29.6921 20.8653 29.7872 20.083 29.7872C19.2768 29.7872 16.5736 29.6683 15.1742 28.2694C14.9612 28.0559 14.9612 27.7239 15.1742 27.5105C15.3877 27.2974 15.7196 27.2974 15.9331 27.5105C16.8343 28.4117 18.7314 28.7197 20.083 28.7197C21.4346 28.7197 23.355 28.4117 24.2324 27.5105C24.4459 27.2974 24.7778 27.2974 24.9913 27.5105C25.1809 27.7239 25.1809 28.0559 24.9913 28.2694ZM24.6116 24.8784C23.4735 24.8784 22.5488 23.9538 22.5488 22.8156C22.5488 21.6775 23.4735 20.7529 24.6116 20.7529C25.7502 20.7529 26.6748 21.6775 26.6748 22.8156C26.6748 23.9299 25.7502 24.8784 24.6116 24.8784Z" fill="white"></path> <path d="M108.412 16.6268C109.8 16.6268 110.926 15.5014 110.926 14.1132C110.926 12.725 109.8 11.5996 108.412 11.5996C107.024 11.5996 105.898 12.725 105.898 14.1132C105.898 15.5014 107.024 16.6268 108.412 16.6268Z" fill="currentColor"></path> <path d="M72.5114 24.8309C73.7446 24.8309 74.4557 23.9063 74.4084 23.0051C74.385 22.5308 74.3373 22.2223 74.29 21.9854C73.5311 18.7133 70.8756 16.2943 67.7216 16.2943C63.9753 16.2943 60.9401 19.6853 60.9401 23.8586C60.9401 28.0318 63.9753 31.4228 67.7216 31.4228C70.0694 31.4228 71.753 30.5693 72.9622 29.2177C73.5549 28.5538 73.4365 27.5341 72.7249 27.036C72.1322 26.6329 71.3972 26.7752 70.8517 27.2256C70.3302 27.6765 69.3344 28.5772 67.7216 28.5772C65.825 28.5772 64.2126 26.941 63.8568 24.7832H72.5114V24.8309ZM67.6981 19.1637C69.4051 19.1637 70.8756 20.4915 71.421 22.3173H63.9752C64.5207 20.468 65.9907 19.1637 67.6981 19.1637ZM61.0824 17.7883C61.0824 17.0771 60.5609 16.5078 59.897 16.3894C57.8338 16.0813 55.8895 16.8397 54.7752 18.2391V18.049C54.7752 17.1717 54.0636 16.6267 53.3525 16.6267C52.5697 16.6267 51.9297 17.2667 51.9297 18.049V29.6681C51.9297 30.427 52.4985 31.0908 53.2574 31.1381C54.0875 31.1854 54.7752 30.5454 54.7752 29.7154V23.7162C54.7752 21.0608 56.7668 18.8791 59.5173 19.1876H59.802C60.5131 19.1399 61.0824 18.5233 61.0824 17.7883ZM109.834 19.306C109.834 18.5233 109.194 17.8833 108.412 17.8833C107.629 17.8833 106.989 18.5233 106.989 19.306V29.7154C106.989 30.4981 107.629 31.1381 108.412 31.1381C109.194 31.1381 109.834 30.4981 109.834 29.7154V19.306ZM88.6829 11.4338C88.6829 10.651 88.0429 10.011 87.2602 10.011C86.4779 10.011 85.8379 10.651 85.8379 11.4338V17.7648C84.8655 16.7924 83.6562 16.3182 82.2096 16.3182C78.4632 16.3182 75.4281 19.7091 75.4281 23.8824C75.4281 28.0557 78.4632 31.4466 82.2096 31.4466C83.6562 31.4466 84.8893 30.9485 85.8613 29.9761C85.9797 30.6405 86.5729 31.1381 87.2602 31.1381C88.0429 31.1381 88.6829 30.4981 88.6829 29.7154V11.4338ZM82.2334 28.6245C80.0518 28.6245 78.2971 26.5145 78.2971 23.8824C78.2971 21.2742 80.0518 19.1399 82.2334 19.1399C84.4151 19.1399 86.1698 21.2504 86.1698 23.8824C86.1698 26.5145 84.3912 28.6245 82.2334 28.6245ZM103.527 11.4338C103.527 10.651 102.887 10.011 102.104 10.011C101.322 10.011 100.681 10.651 100.681 11.4338V17.7648C99.7093 16.7924 98.5 16.3182 97.0534 16.3182C93.307 16.3182 90.2719 19.7091 90.2719 23.8824C90.2719 28.0557 93.307 31.4466 97.0534 31.4466C98.5 31.4466 99.7327 30.9485 100.705 29.9761C100.824 30.6405 101.416 31.1381 102.104 31.1381C102.887 31.1381 103.527 30.4981 103.527 29.7154V11.4338ZM97.0534 28.6245C94.8717 28.6245 93.1174 26.5145 93.1174 23.8824C93.1174 21.2742 94.8717 19.1399 97.0534 19.1399C99.235 19.1399 100.99 21.2504 100.99 23.8824C100.99 26.5145 99.235 28.6245 97.0534 28.6245ZM117.042 29.7392V19.1637H118.299C118.963 19.1637 119.556 18.6656 119.603 17.9779C119.651 17.2428 119.058 16.6267 118.347 16.6267H117.042V14.6347C117.042 13.8758 116.474 13.2119 115.715 13.1646C114.885 13.1173 114.197 13.7573 114.197 14.5874V16.6501H113.011C112.348 16.6501 111.755 17.1483 111.708 17.836C111.66 18.571 112.253 19.1876 112.964 19.1876H114.173V29.7631C114.173 30.5454 114.814 31.1854 115.596 31.1854C116.426 31.1381 117.042 30.5216 117.042 29.7392Z" fill="currentColor"></path> </svg>`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/components/Atoms/PartnerLogo.astro", void 0);

const $$Astro$d = createAstro();
const $$TrustedBy = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$TrustedBy;
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-300 py-2 px-4 text-center"> <div class="grid grid-cols-1 lg:grid-cols-5 gap-4"> <div class="my-12 col-span-2"> <h3 class="font-normal uppercase">
Medios en los que aparecemos:
</h3> <div class="flex flex-wrap justify-center items-center mt-4"> ${renderComponent($$result, "PartnerLogo", $$PartnerLogo, { "color": "text-slate-700" })} ${renderComponent($$result, "PartnerLogo", $$PartnerLogo, { "color": "text-slate-700" })} ${renderComponent($$result, "PartnerLogo", $$PartnerLogo, { "color": "text-slate-700" })} </div> </div> <div class="my-12 col-span-3"> <h3 class="font-normal uppercase">
Empresas que venden Billin a sus clientes:
</h3> <div class="flex flex-wrap justify-center items-center mt-4"> ${renderComponent($$result, "PartnerLogo", $$PartnerLogo, { "color": "text-slate-700" })} ${renderComponent($$result, "PartnerLogo", $$PartnerLogo, { "color": "text-slate-700" })} ${renderComponent($$result, "PartnerLogo", $$PartnerLogo, { "color": "text-slate-700" })} ${renderComponent($$result, "PartnerLogo", $$PartnerLogo, { "color": "text-slate-700" })} </div> </div> </div> </section>`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/components/TrustedBy.astro", void 0);

const $$Astro$c = createAstro();
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Features;
  return renderTemplate`${maybeRenderHead()}<section class="bg-white py-20" id="features"> <!-- ** Feature ** --> <div class="md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center py-16 px-4 lg:px-6 mx-auto max-w-screen-xl text-center md:text-left text-pretty"> ${renderComponent($$result, "DummyImageScreenshot", $$DummyImageScreenshot, { "styles": "md:order-last" })} <div class="my-8 md:mt-0"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
Crea, envía y gestiona tus facturas a la velocidad de la luz
</h2> <p class="mb-6 font-light text-gray-500 md:text-lg">
Factura automáticamente y ahorra hasta 16 horas al mes.<br>
¡El acceso es totalmente gratuito!
</p> ${renderComponent($$result, "CtaButtonPrimaryMedium", $$CtaButtonPrimaryMedium, {})} </div> </div> <!-- ** Feature ** --> <div class="md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center py-16 px-4 lg:px-6 mx-auto max-w-screen-xl text-center md:text-left text-pretty"> ${renderComponent($$result, "DummyImageScreenshot", $$DummyImageScreenshot, {})} <div class="my-8 md:mt-0"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
Factura online
</h2> <p class="mb-6 font-light text-gray-500 md:text-lg">
Factura desde cualquier lugar. Supervisa el estado de tus facturas con un simple clic y simplifica el proceso de pago para tus clientes.
</p> ${renderComponent($$result, "CtaButtonPrimaryMedium", $$CtaButtonPrimaryMedium, {})} </div> </div> <!-- ** Feature ** --> <div class="md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center py-16 px-4 lg:px-6 mx-auto max-w-screen-xl text-center md:text-left text-pretty"> ${renderComponent($$result, "DummyImageScreenshot", $$DummyImageScreenshot, { "styles": "md:order-last" })} <div class="my-8 md:mt-0"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
Ayuda profesional
</h2> <p class="mb-6 font-light text-gray-500 md:text-lg">
Ofrecemos soporte a través de teléfono, email y chat, con respuestas en menos de 1 minuto durante horario laboral. Estamos aquí para resolver todas tus preguntas sobre facturación y nuestro software.
</p> ${renderComponent($$result, "CtaButtonPrimaryMedium", $$CtaButtonPrimaryMedium, {})} </div> </div> <!-- ** Feature ** --> <div class="md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center py-16 px-4 lg:px-6 mx-auto max-w-screen-xl text-center md:text-left text-pretty"> ${renderComponent($$result, "DummyImageScreenshot", $$DummyImageScreenshot, {})} <div class="my-8 md:mt-0"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
Todo bajo control desde un mismo lugar
</h2> <p class="mb-6 font-light text-gray-500 md:text-lg">
Simplemente ingresa el importe bruto de tu factura y Billin se encarga de calcular automáticamente impuestos, descuentos, gastos y otros cargos, facilitando tus gestiones financieras.
</p> ${renderComponent($$result, "CtaButtonPrimaryMedium", $$CtaButtonPrimaryMedium, {})} </div> </div> <!-- ** Feature ** --> <div class="md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center py-16 px-4 lg:px-6 mx-auto max-w-screen-xl text-center md:text-left text-pretty"> ${renderComponent($$result, "DummyImageScreenshot", $$DummyImageScreenshot, { "styles": "md:order-last" })} <div class="my-8 md:mt-0"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
Elige y personaliza plantillas para tus facturas
</h2> <p class="mb-6 font-light text-gray-500 md:text-lg">
Incorpora tu logotipo y los colores distintivos de tu marca al enviar tus facturas, creando así una imagen mucho más profesional y consistente.
</p> ${renderComponent($$result, "CtaButtonPrimaryMedium", $$CtaButtonPrimaryMedium, {})} </div> </div> </section>`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/components/Features.astro", void 0);

const $$Astro$b = createAstro();
const $$Rating = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Rating;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center pl-3"> <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"> <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path> </svg> <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"> <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path> </svg> <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"> <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path> </svg> <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"> <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path> </svg> <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"> <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path> </svg> </div>`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/components/Atoms/Rating.astro", void 0);

const $$Astro$a = createAstro();
const $$Testimonial = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Testimonial;
  const { comment, user, date, avatar } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="text-center mx-16"> <div class=""> <figure> <svg class="h-12 mx-auto mb-3 text-gray-800" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"></path> </svg> <blockquote> <p class="text-xl font-medium text-gray-900">"${comment}"</p> </blockquote> <figcaption class="flex items-center justify-center mt-6"> <img class="w-6 h-6 rounded-full"${addAttribute(`/images/${avatar}`, "src")} alt="User profile"> <div class="flex items-center divide-x divide-gray-500"> <div class="px-3 font-medium text-gray-900">${user}</div> <div class="px-3 text-sm font-light text-gray-500">${date}</div> ${renderComponent($$result, "Rating", $$Rating, {})} </div> </figcaption> </figure> </div> </section>`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/components/Testimonial.astro", void 0);

const $$Astro$9 = createAstro();
const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Testimonials;
  return renderTemplate`${maybeRenderHead()}<section class="bg-white py-20" id="testimonials"> <div id="default-carousel" class="relative w-full max-w-[60rem] mx-auto" data-carousel="slide"> <h2 class="text-4xl font-extrabold text-center">Testimonios de nuestros usuarios</h2> <!-- Carousel wrapper --> <div class="relative h-64 md:h-48  overflow-hidden rounded-lg mt-10 mb-4 px-16 text-pretty"> <!-- * Item 1 * --> <div class="hidden duration-700 ease-in-out" data-carousel-item> ${renderComponent($$result, "Testimonial", $$Testimonial, { "comment": "Pues la verdad que es una buena opci\xF3n de facturaci\xF3n muy f\xE1cil y el personal muy amable y subencionado te explican todo", "user": "Jose Chamorro pulido", "date": "Julio 23, 2022", "avatar": "avatar-dummy.png" })} </div> <!-- * Item 1 * --> <div class="hidden duration-700 ease-in-out" data-carousel-item> ${renderComponent($$result, "Testimonial", $$Testimonial, { "comment": "Excelente servicio y atenci\xF3n", "user": "John L\xF3pez", "date": "Junio 09, 2022", "avatar": "avatar-dummy.png" })} </div> <!-- * Item 1 * --> <div class="hidden duration-700 ease-in-out" data-carousel-item> ${renderComponent($$result, "Testimonial", $$Testimonial, { "comment": "M\xE1s que suficient para crear facturas y tenerlas organizadas.", "user": "Luc\xEDa Izquierdo", "date": "Octubre 23, 2021", "avatar": "avatar-dummy.png" })} </div> <!-- * Item 1 * --> <div class="hidden duration-700 ease-in-out" data-carousel-item> ${renderComponent($$result, "Testimonial", $$Testimonial, { "comment": "S\xFAper contenta con esta aplicaci\xF3n. Soy negada para todo el tema de facturas y organizaci\xF3n y con esta app jam\xE1s he tenido problemas. Muchas gracias xq me hab\xE9is resuelto un problema!", "user": "Inma Su\xE1rez", "date": "Septiembre 20, 2021", "avatar": "avatar-dummy.png" })} </div> <!-- * Item 1 * --> <div class="hidden duration-700 ease-in-out" data-carousel-item> ${renderComponent($$result, "Testimonial", $$Testimonial, { "comment": "Funciona al 100%. Es una gran aplicaci\xF3n me ayido a generar dinero", "user": "Angel D\xEDaz", "date": "Enero 15, 2023", "avatar": "avatar-dummy.png" })} </div> </div> <h2 class="text-sm font-normal text-center text-slate-500">
La evaluación general en <strong>Trustindex</strong> es <strong>4.2</strong> de 5, en base a 261 reseñas
</h2> <!-- Slider controls --> <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev> <span class="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition duration-500"> <svg class="text-slate-300 w-4 h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 1 1 5l4 4"></path> </svg> <span class="sr-only">Previous</span> </span> </button> <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next> <span class="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition duration-500"> <svg class="text-slate-300 w-4 h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 9 4-4-4-4"></path> </svg> <span class="sr-only">Next</span> </span> </button> </div> </section>`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/components/Testimonials.astro", void 0);

const $$Astro$8 = createAstro();
const $$FAQs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$FAQs;
  return renderTemplate`${maybeRenderHead()}<section class="bg-slate-200 py-20 px-6" id="faqs"> <div class="w-full max-w-[50rem] mx-auto"> <h2 class="text-4xl font-extrabold text-center">Preguntas frecuentes</h2> <div id="accordion-collapse" class="my-10" data-accordion="collapse"> <!-- ** Accordion 1 ** --> <h2 id="accordion-collapse-heading-1"> <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3 bg-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1"> <span>¿Cómo funciona el sistema de facturación?</span> <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path> </svg> </button> </h2> <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1"> <div class="p-5 border border-b-0 border-gray-200 bg-white"> <p class="mb-2 text-gray-500 dark:text-gray-400">
Nuestro sistema de facturación es fácil de usar. Simplemente ingresa los datos necesarios y genera facturas profesionales en cuestión de minutos.
</p> </div> </div> <!-- ** Accordion 2 ** --> <h2 id="accordion-collapse-heading-2"> <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100gap-3 bg-white" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2"> <span>¿Cuáles son los métodos de pago aceptados?</span> <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path> </svg> </button> </h2> <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2"> <div class="p-5 border border-b-0 bg-white"> <p class="mb-2 text-gray-500 dark:text-gray-400">
Aceptamos pagos con tarjeta de crédito y vía Paypal.
</p> </div> </div> <!-- ** Accordion 3 ** --> <h2 id="accordion-collapse-heading-3"> <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3 bg-white" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3"> <span>¿Puedo personalizar mis facturas?</span> <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path> </svg> </button> </h2> <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3"> <div class="p-5 border border-t-0 border-gray-200 bg-white"> <p class="mb-2 text-gray-500 dark:text-gray-400">
Sí, nuestro sistema te permite personalizar tus facturas con tu logotipo, colores y otros detalles.
</p> </div> </div> <!-- ** Accordion 4 ** --> <h2 id="accordion-collapse-heading-4"> <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3 bg-white" data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4"> <span>¿Cómo puedo acceder a mi cuenta?</span> <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path> </svg> </button> </h2> <div id="accordion-collapse-body-4" class="hidden" aria-labelledby="accordion-collapse-heading-4"> <div class="p-5 border border-t-0 border-gray-200 bg-white"> <p class="mb-2 text-gray-500 dark:text-gray-400">
Puedes acceder a tu cuenta a través de nuestra página web o utilizando nuestra aplicación móvil.
</p> </div> </div> <!-- ** Accordion 5 ** --> <h2 id="accordion-collapse-heading-5"> <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3 bg-white" data-accordion-target="#accordion-collapse-body-5" aria-expanded="false" aria-controls="accordion-collapse-body-5"> <span>¿Ofrecen soporte técnico?</span> <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path> </svg> </button> </h2> <div id="accordion-collapse-body-5" class="hidden" aria-labelledby="accordion-collapse-heading-5"> <div class="p-5 border border-t-0 border-gray-200 bg-white"> <p class="mb-2 text-gray-500 dark:text-gray-400">
Sí, ofrecemos soporte técnico por correo electrónico y chat en vivo.
</p> </div> </div> </div> </div> </section>`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/components/FAQs.astro", void 0);

const $$Astro$7 = createAstro();
const $$IconTick = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$IconTick;
  return renderTemplate`${maybeRenderHead()}<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/components/Atoms/IconTick.astro", void 0);

const pricingData = [
	{
		plan: "Plan Básico",
		popular: false,
		descripcion: "Ideal para los que empiezan.",
		precioPorMes: "8",
		precioPorAno: "6,6",
		facturacionAnual: "Facturado mensualmente. 96 € al año.",
		clientes: "De 0 a 5 clientes.",
		usuariosBillin: "1 usuario Billin.",
		productos: "Máximo de 10 productos.",
		escaneadoInteligente: "Escaneado inteligente de 5 documentos/mes.",
		seguimientoDeDocumentos: false,
		presupuestosYFacturas: "Presupuestos, facturas, tickets y proformas limitados.",
		facturasElectronicas: "Facturas electrónicas Facturae y TicketBAI ilimitadas.",
		"diseñosDeFacturas": false,
		personalizacionDeComunicaciones: "Personalización emails y comunicaciones.",
		facturasConGestor: "Facturas conectadas con gestor.",
		soporte: "Soporte por email.",
		appMovil: "App móvil.",
		integracionConShopify: false,
		integracionConApiPublica: false
	},
	{
		plan: "Plan Pro",
		popular: true,
		descripcion: "Perfecto para ahorrar mucho tiempo.",
		precioPorMes: "15",
		precioPorAno: "12,5",
		facturacionAnual: "Facturado mensualmente. 180 € al año.",
		clientes: "De 6 a 50 clientes.",
		usuariosBillin: "3 usuarios Billin.",
		productos: "Máximo de 50 productos.",
		escaneadoInteligente: "Escaneado inteligente de 50 documentos/mes.",
		seguimientoDeDocumentos: "Seguimiento de documentos enviados.",
		presupuestosYFacturas: "Presupuestos, facturas, tickets y proformas limitados.",
		facturasElectronicas: "Facturas electrónicas Facturae y TicketBAI ilimitadas.",
		"diseñosDeFacturas": "Múltiples diseños de facturas.",
		personalizacionDeComunicaciones: "Personalización emails y comunicaciones.",
		facturasConGestor: "Facturas conectadas con gestor.",
		soporte: "Soporte por email y chat.",
		appMovil: "App móvil.",
		integracionConShopify: false,
		integracionConApiPublica: false
	},
	{
		plan: "Plan Unlimited",
		popular: false,
		descripcion: "El plan para ir a por todas.",
		precioPorMes: "24",
		precioPorAno: "20",
		facturacionAnual: "Facturado mensualmente. 288 € al año.",
		clientes: "Para más de 50 clientes.",
		usuariosBillin: "Sin límite de usuarios Billin.",
		productos: "Sin límite de productos.",
		escaneadoInteligente: "Escaneado inteligente de 250 documentos/mes.",
		seguimientoDeDocumentos: "Seguimiento de documentos enviados.",
		presupuestosYFacturas: "Presupuestos, facturas, tickets y proformas ilimitados.",
		facturasElectronicas: "Facturas electrónicas Facturae y TicketBAI ilimitadas.",
		"diseñosDeFacturas": "Múltiples diseños de facturas.",
		personalizacionDeComunicaciones: "Personalización emails y comunicaciones.",
		facturasConGestor: "Facturas conectadas con gestor.",
		soporte: "Soporte por email, chat y teléfono.",
		appMovil: "App móvil.",
		integracionConShopify: "Nuevo Integración con Shopify.",
		integracionConApiPublica: "BETA Integración con API Pública."
	}
];

const $$Astro$6 = createAstro();
const $$CtaButtonSecondaryLarge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CtaButtonSecondaryLarge;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-y-0 sm:space-x-4"> <a href="/signup-kit-digital" class="w-full sm:w-auto py-3 px-5 text-base font-medium text-center text-blue-700 rounded-lg hover:bg-blue-100 focus:ring-4 focus:ring-primary-300 bg-white transition-all ease-in">
Empieza gratis ahora
</a> </div>`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/components/Atoms/CtaButtonSecondaryLarge.astro", void 0);

const $$Astro$5 = createAstro();
const $$PriceTierCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PriceTierCard;
  const PLANS = pricingData;
  let planActive = "Anual";
  return renderTemplate`${maybeRenderHead()}<header class="text-center"> <label class="relative inline-flex items-center mb-5 cursor-pointer"> <input type="checkbox" value="" class="sr-only peer" checked> <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">${planActive}</span> </label> </header> <section class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0"> ${PLANS.map(({ plan, descripcion, precioPorAno, clientes, usuariosBillin, productos, escaneadoInteligente, seguimientoDeDocumentos, presupuestosYFacturas, facturasElectronicas, dise\u00F1osDeFacturas, personalizacionDeComunicaciones, facturasConGestor, soporte, appMovil, integracionConShopify, integracionConApiPublica, popular }) => renderTemplate`<div${addAttribute(`${popular ? "border-blue-400 border-2 bg-blue-600 text-white" : "bg-white"} flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 rounded-lg xl:p-8 border border-slate-200 w-[100%]`, "class")}> <header class="pb-0"> <h3 class="mb-4 text-2xl font-semibold">${plan} + ${popular}</h3> <p class="font-light text-lg md:text-sm">${descripcion}</p> <div class="flex justify-center items-baseline my-8"> <span class="mr-2 text-5xl font-extrabold">${precioPorAno}€</span> <span>/MES + IVA</span> </div> <div class="flex items-center justify-center mb-8"> ${popular ? renderTemplate`${renderComponent($$result, "CtaButtonSecondaryLarge", $$CtaButtonSecondaryLarge, {})}` : renderTemplate`${renderComponent($$result, "CtaButtonPrimaryLarge", $$CtaButtonPrimaryLarge, {})}`} </div> </header> <!-- ** List ** --> <ul role="list" class="space-y-4 text-left text-pretty"> ${clientes && renderTemplate`<li class="flex items-center space-x-3"> ${renderComponent($$result, "IconTick", $$IconTick, {})} <span>${clientes}</span> </li>`} ${usuariosBillin && renderTemplate`<li class="flex items-center space-x-3"> ${renderComponent($$result, "IconTick", $$IconTick, {})} <span>${usuariosBillin}</span> </li>`} ${productos && renderTemplate`<li class="flex items-center space-x-3"> ${renderComponent($$result, "IconTick", $$IconTick, {})} <span>${productos}</span> </li>`} ${escaneadoInteligente && renderTemplate`<li class="flex items-center space-x-3"> ${renderComponent($$result, "IconTick", $$IconTick, {})} <span>${escaneadoInteligente}</span> </li>`} ${seguimientoDeDocumentos && renderTemplate`<li class="flex items-center space-x-3"> ${renderComponent($$result, "IconTick", $$IconTick, {})} <span>${seguimientoDeDocumentos}</span> </li>`} ${presupuestosYFacturas && renderTemplate`<li class="flex items-center space-x-3"> ${renderComponent($$result, "IconTick", $$IconTick, {})} <span>${presupuestosYFacturas}</span> </li>`} ${facturasElectronicas && renderTemplate`<li class="flex items-center space-x-3"> ${renderComponent($$result, "IconTick", $$IconTick, {})} <span>${facturasElectronicas}</span> </li>`} ${dise\u00F1osDeFacturas && renderTemplate`<li class="flex items-center space-x-3"> ${renderComponent($$result, "IconTick", $$IconTick, {})} <span>${dise\u00F1osDeFacturas}</span> </li>`} ${personalizacionDeComunicaciones && renderTemplate`<li class="flex items-center space-x-3"> ${renderComponent($$result, "IconTick", $$IconTick, {})} <span>${personalizacionDeComunicaciones}</span> </li>`} ${facturasConGestor && renderTemplate`<li class="flex items-center space-x-3"> ${renderComponent($$result, "IconTick", $$IconTick, {})} <span>${facturasConGestor}</span> </li>`} ${soporte && renderTemplate`<li class="flex items-center space-x-3"> ${renderComponent($$result, "IconTick", $$IconTick, {})} <span>${soporte}</span> </li>`} ${appMovil && renderTemplate`<li class="flex items-center space-x-3"> ${renderComponent($$result, "IconTick", $$IconTick, {})} <span>${appMovil}</span> </li>`} ${integracionConShopify && renderTemplate`<li class="flex items-center space-x-3"> ${renderComponent($$result, "IconTick", $$IconTick, {})} <span>${integracionConShopify}</span> </li>`} ${integracionConApiPublica && renderTemplate`<li class="flex items-center space-x-3"> ${renderComponent($$result, "IconTick", $$IconTick, {})} <span>${integracionConApiPublica}</span> </li>`} </ul> </div>`)} </section>`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/components/PriceTierCard.astro", void 0);

const $$Astro$4 = createAstro();
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Pricing;
  return renderTemplate`${maybeRenderHead()}<section class="bg-slate-100 py-20 px-6" id="pricing"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"> <header class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 text-balance"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
Nuestros planes están pensados especialmente para autónomos y PYMEs
</h2> <p class="mb-5 font-light sm:text-xl">
Tenemos un plan a tu medidad, plenamente enfocado para que tú no te tengas que ocupar de nada.
</p> </header> ${renderComponent($$result, "PriceTierCard", $$PriceTierCard, {})} </div> </section>`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/components/Pricing.astro", void 0);

const $$Astro$3 = createAstro();
const $$CtaFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CtaFooter;
  return renderTemplate`${maybeRenderHead()}<section class="bg-white py-20 px-6 text-pretty" id="ctaFooter"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"> <div class="md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center pt-2 md:pt-16 px-8 lg:px-8 mx-auto max-w-screen-xl bg-blue-600 rounded-xl text-white"> <div class="mt-8 md:mt-0"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
Prueba gratis todas las funcionalidades de facturas durante 30 días
</h2> <p class="mb-6 font-light text-blue-200 md:text-lg">
Más de 180.000 autónomos y pymes ya crean sus facturas con Billin. Sin incluir ninguna tarjeta de crédito.
</p> ${renderComponent($$result, "CtaButtonSecondaryLarge", $$CtaButtonSecondaryLarge, {})} </div> ${renderComponent($$result, "DummyImageScreenshot", $$DummyImageScreenshot, { "styles": "md:order-last" })} </div> </div> </section>`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/components/CtaFooter.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900"> <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8"> <div class="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between"> <div class="text-center md:text-left mb-4 sm:mb-0"> <img src="/images/logo-billin-dark.svg" alt="Billin" class="mx-auto md:mx-0"> </div> <div class="text-sm font-medium text-gray-400 text-center md:text-left"> <p class="mb-2">
Talavera, 4. Loft 2, 28016 - Madrid, España
</p> <p>
Avenida Sabino Arana, 8, Bilbao, 48013 , Bizkaia
</p> </div> </div> <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8"> <span class="block text-sm text-center text-gray-400">
© 2024 <a href="https://flowbite.com/" class="hover:underline">Billin</a>. Todos los derechos reservados.
</span> </div> </footer>`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$LogosFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LogosFooter;
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-400 py-2 px-4 text-center"> <div class="my-6 flex justify-center"> ${renderComponent($$result, "PartnerLogo", $$PartnerLogo, { "color": "text-slate-700" })} ${renderComponent($$result, "PartnerLogo", $$PartnerLogo, { "color": "text-slate-700" })} ${renderComponent($$result, "PartnerLogo", $$PartnerLogo, { "color": "text-slate-700" })} ${renderComponent($$result, "PartnerLogo", $$PartnerLogo, { "color": "text-slate-700" })} ${renderComponent($$result, "PartnerLogo", $$PartnerLogo, { "color": "text-slate-700" })} ${renderComponent($$result, "PartnerLogo", $$PartnerLogo, { "color": "text-slate-700" })} </div> </section>`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/components/LogosFooter.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Factura f\xE1cil con Billin - Accede gratis" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "TrustedBy", $$TrustedBy, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "FAQs", $$FAQs, {})} ${renderComponent($$result2, "Pricing", $$Pricing, {})} ${renderComponent($$result2, "CtaFooter", $$CtaFooter, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "LogosFooter", $$LogosFooter, {})} ` })}`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/pages/index.astro", void 0);

const $$file = "/Users/fernandovalanguas/development/astro/billin-landing/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, index as i };
