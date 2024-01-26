/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent } from '../astro_FJ4jCAet.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './index_Rf-JzbcU.mjs';

const $$Astro$1 = createAstro();
const $$IconClose = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$IconClose;
  return renderTemplate`${maybeRenderHead()}<a href="/" class="absolute top-6 right-6 text-slate-600 hover:text-blue-600 md:text-white md:hover:text-indigo-300 transition ease-in-out duration-300"> <svg width="25" height="25" viewBox="0 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M1.375 1.375L24.25 24.25" stroke="currentColor" stroke-width="2"></path> <path d="M1.375 1.375L24.25 24.25" stroke="currentColor" stroke-width="2"></path> <path d="M1.375 1.375L24.25 24.25" stroke="currentColor" stroke-width="2"></path> <path d="M24.25 1.375L1.375 24.25" stroke="currentColor" stroke-width="2"></path> <path d="M24.25 1.375L1.375 24.25" stroke="currentColor" stroke-width="2"></path> <path d="M24.25 1.375L1.375 24.25" stroke="currentColor" stroke-width="2"></path> </svg> </a>`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/components/Atoms/IconClose.astro", void 0);

const $$Astro = createAstro();
const $$SignupKitDigital = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignupKitDigital;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Factura f\xE1cil con Billin - Accede gratis" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 h-full text-pretty relative"> ${renderComponent($$result2, "IconClose", $$IconClose, {})} <!-- ** Left Column ** --> <div class="bg-white px-24 py-16"> <img src="/images/logo-billin.svg" alt="Logo" class="mb-6"> <h1 class="text-3xl font-bold mb-4">
Consigue Billin gratis gracias al Kit Digital del Gobierno
</h1> <p class="mb-6">
Regístrate ahora y <strong>crea facturas, tickets y presupuestos sin coste para tu negocio</strong>.<br>
Nosotros te ayudamos con todos los trámites.
</p> <form class="space-y-4 mb-6"> <input type="email" placeholder="Email" class="w-full p-2 border rounded"> <input type="password" placeholder="Contraseña" class="w-full p-2 border rounded"> <a href="#" class="block w-full text-center bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-all ease-in-out">
Regístrate GRATIS
</a> </form> <p class="mb-4">
¿Tienes una cuenta? <a href="#" class="text-blue-600 border-b-2 border-b-transparent hover:border-b-blue-600 transition-all ease-in-out">Inicia sesión</a> </p> <p class="text-xs text-gray-600">
Billin únicamente utiliza tus datos personales en la medida necesaria para prestar nuestros Servicios.
</p> </div> <!-- ** Right Column ** --> <div class="bg-blue-600 px-24 py-16 text-white"> <h1 class="text-3xl font-bold mb-4">
Más de 180.000 negocios confían en Billin
</h1> <ul class="mt-6"> <li class="grid grid-cols-10 my-6"> <div> <img class="size-10 rounded-full" src="/images/avatar-dummy.png" alt="User profile"> </div> <div class="col-span-9"> <div class="px-3"> <p class="font-normal text-sm mb-1 text-white">
“Empecé con el típico Word y tardaba mucho en redactar la factura. Ahora son sólo 4 clics.”
</p> <p class="text-xs text-blue-200">
Alex Verdaguer de Wualia Studio
</p> </div> </div> </li> <li class="grid grid-cols-10 my-6"> <div> <img class="size-10 rounded-full" src="/images/avatar-dummy.png" alt="User profile"> </div> <div class="col-span-9"> <div class="px-3"> <p class="font-normal text-sm mb-1 text-white">
“Me gusta la facilidad para extraer las facturas a final de trimestre y el envío de la factura por email desde la herramienta”
</p> <p class="text-xs text-blue-200">
Sacha Piel de Tech-Ebike
</p> </div> </div> </li> <li class="grid grid-cols-10 my-6"> <div> <img class="size-10 rounded-full" src="/images/avatar-dummy.png" alt="User profile"> </div> <div class="col-span-9"> <div class="px-3"> <p class="font-normal text-sm mb-1 text-white">
“La atención ha sido super-rápida y me han intentado ayudar en todo momento. Atención personalizada por chat, email y teléfono. Estoy muy contenta.”
</p> <p class="text-xs text-blue-200">
Mª Jesús Martín de Stilo Personal
</p> </div> </div> </li> </ul> <p class="mb-2">
*Solución 100% subvencionada para autónomos y empresas de 0 a 49 empleados gracias al Kit Digital.
</p> <p class="text-xs text-blue-200">
Plan de Recuperación, Transformación y Resiliencia, España Digital 2025, y Plan de Digitalización de Pymes 2021-2025 de los fondos Next Generation de la UE.
</p> <footer> <img src="/images/logos-kit-nuevos-BN.svg" alt="Logos organismos oficiales del Kit Digital" class="my-6"> </footer> </div> </div> ` })}`;
}, "/Users/fernandovalanguas/development/astro/billin-landing/src/pages/signup-kit-digital.astro", void 0);

const $$file = "/Users/fernandovalanguas/development/astro/billin-landing/src/pages/signup-kit-digital.astro";
const $$url = "/signup-kit-digital";

export { $$SignupKitDigital as default, $$file as file, $$url as url };
