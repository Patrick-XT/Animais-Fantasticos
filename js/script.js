import ScrollSuave from "./module/scroll-suave.js";
import initAnimacaoScroll from "./module/animation-scroll.js";
import initTabNav from "./module/tab-nav.js";
import initAccordion from "./module/accordion.js";
import initModal from "./module/modal.js";
import initTooltip from "./module/tooltip.js";
import initDropdownMenu from "./module/dropdown-menu.js";
import initMenuMobile from "./module/menu-mobile.js";
import initAnimaNumero from "./module/anima-numeros.js";
import initFuncionamento from "./module/funcionamento.js";
import initFetchBtc from "./module/fetch-bitcoin.js";



const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimacaoScroll();
initTabNav();
initAccordion();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initAnimaNumero();
initFuncionamento();
initFetchBtc()

