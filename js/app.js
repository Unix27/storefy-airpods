var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
   ua = navigator.userAgent;
   var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
   return is_ie;
}
if (isIE()) {
   document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
   document.querySelector('body').classList.add('_touch');
}
function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('_webp');
   } else {
      document.querySelector('body').classList.add('_no-webp');
   }
});
function ibg() {
   if (isIE()) {
      let ibg = document.querySelectorAll("._ibg");
      for (var i = 0; i < ibg.length; i++) {
         if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
         }
      }
   }
}
ibg();

if (document.querySelector('.wrapper')) {
   document.querySelector('.wrapper').classList.add('_loaded');
}

var unlock = true;

//=================
//=================
//Menu
let body = document.querySelector("body");
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
   //let delay = 500;
   let menuBody = document.querySelector(".menu__body");
   iconMenu.addEventListener("click", function (e) {
      if (unlock) {
         //body_lock(delay);
         iconMenu.classList.toggle("_active");
         menuBody.classList.toggle("_active");
         body.classList.toggle("_lock");
      }
   });
};
function menu_close() {
   let iconMenu = document.querySelector(".icon-menu");
   let menuBody = document.querySelector(".menu__body");
   let body = document.querySelector("body");
   iconMenu.classList.remove("_active");
   menuBody.classList.remove("_active");
   body.classList.remove("_lock");
}
//=================
//=================
//=================
//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
   let tab = tabs[index];
   let tabs_items = tab.querySelectorAll("._tabs-item");
   let tabs_blocks = tab.querySelectorAll("._tabs-block");
   for (let index = 0; index < tabs_items.length; index++) {
      let tabs_item = tabs_items[index];
      tabs_item.addEventListener("click", function (e) {
         for (let index = 0; index < tabs_items.length; index++) {
            let tabs_item = tabs_items[index];
            tabs_item.classList.remove('_active');
            tabs_blocks[index].classList.remove('_active');
         }
         tabs_item.classList.add('_active');
         tabs_blocks[index].classList.add('_active');
         e.preventDefault();
      });
   }
}
//=================
//Spollers
let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;
if (spollers.length > 0) {
   for (let index = 0; index < spollers.length; index++) {
      const spoller = spollers[index];
      spoller.addEventListener("click", function (e) {
         if (spollersGo) {
            spollersGo = false;
            if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
               return false;
            }
            if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
               return false;
            }
            if (spoller.closest('._spollers').classList.contains('_one')) {
               let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
               for (let i = 0; i < curent_spollers.length; i++) {
                  let el = curent_spollers[i];
                  if (el != spoller) {
                     el.classList.remove('_active');
                     _slideUp(el.nextElementSibling);
                  }
               }
            }
            spoller.classList.toggle('_active');
            _slideToggle(spoller.nextElementSibling);

            setTimeout(function () {
               spollersGo = true;
            }, 500);
         }
      });
   }
}
//==================
//=================
//SlideToggle
let _slideUp = (target, duration = 500) => {
   target.style.transitionProperty = 'height, margin, padding';
   target.style.transitionDuration = duration + 'ms';
   target.style.height = target.offsetHeight + 'px';
   target.offsetHeight;
   target.style.overflow = 'hidden';
   target.style.height = 0;
   target.style.paddingTop = 0;
   target.style.paddingBottom = 0;
   target.style.marginTop = 0;
   target.style.marginBottom = 0;
   window.setTimeout(() => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
   }, duration);
}
let _slideDown = (target, duration = 500) => {
   target.style.removeProperty('display');
   let display = window.getComputedStyle(target).display;
   if (display === 'none')
      display = 'flex';

   target.style.display = display;
   let height = target.offsetHeight;
   target.style.overflow = 'hidden';
   target.style.height = 0;
   target.style.paddingTop = 0;
   target.style.paddingBottom = 0;
   target.style.marginTop = 0;
   target.style.marginBottom = 0;
   target.offsetHeight;
   target.style.transitionProperty = "height, margin, padding";
   target.style.transitionDuration = duration + 'ms';
   target.style.height = height + 'px';
   target.style.removeProperty('padding-top');
   target.style.removeProperty('padding-bottom');
   target.style.removeProperty('margin-top');
   target.style.removeProperty('margin-bottom');
   window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
   }, duration);
}
let _slideToggle = (target, duration = 500) => {
   if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      if (window.getComputedStyle(target).display === 'none') {
         return _slideDown(target, duration);
      } else {
         return _slideUp(target, duration);
      }
   }
}
//========================================
//Animate
function animate({ timing, draw, duration }) {
   let start = performance.now();
   requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);

      draw(progress); // отрисовать её

      if (timeFraction < 1) {
         requestAnimationFrame(animate);
      }

   });
}
function makeEaseOut(timing) {
   return function (timeFraction) {
      return 1 - timing(1 - timeFraction);
   }
}
function makeEaseInOut(timing) {
   return function (timeFraction) {
      if (timeFraction < .5)
         return timing(2 * timeFraction) / 2;
      else
         return (2 - timing(2 * (1 - timeFraction))) / 2;
   }
}
function quad(timeFraction) {
   return Math.pow(timeFraction, 2)
}
function circ(timeFraction) {
   return 1 - Math.sin(Math.acos(timeFraction));
}
/*
animate({
   duration: 1000,
   timing: makeEaseOut(quad),
   draw(progress) {
      window.scroll(0, start_position + 400 * progress);
*/
//====================================================================================================
const popupLinks = document.querySelectorAll('.popup-link');
//const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

//let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
         console.log('true');
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
         popupClose(el.closest('.popup'));
         e.preventDefault();
      });
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         body.classList.toggle("_lock");
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest('.popup__content')) {
            popupClose(e.target.closest('.popup'));
            body.classList.remove("_lock");
         }
      });
   }
}

function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
         body.classList.toggle("_lock");
      }
   }
}


// function bodyLock() {
//    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

//    if (lockPadding.length > 0) {
//       for (let index = 0; index < lockPadding.length; index++) {
//          const el = lockPadding[index];
//          el.style.paddingRight = lockPaddingValue;
//       }
//    }
//    body.style.paddingRight = lockPaddingValue;
//    body.classList.add('lock');

//    unlock = false;
//    setTimeout(function () {
//       unlock = true;
//    }, timeout);
// }

// function bodyUnLock() {
//    setTimeout(function () {
//       if (lockPadding.length > 0) {
//          for (let index = 0; index < lockPadding.length; index++) {
//             const el = lockPadding[index];
//             el.style.paddingRight = '0px';
//          }
//       }
//       body.style.paddingRight = '0px';
//       body.classList.remove('lock');
//    }, timeout);

//    unlock = false;
//    setTimeout(function () {
//       unlock = true;
//    }, timeout);
// }

document.addEventListener('keydown', function (e) {
   if (e.which === 27) {
      const popupActive = document.querySelector('.popup.open');
      popupClose(popupActive);
   }
});

//====================================================================================================
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";


function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();
//let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
let forms = document.querySelectorAll('form');
if (forms.length > 0) {
   for (let index = 0; index < forms.length; index++) {
      const el = forms[index];
      el.addEventListener('submit', form_submit);
   }
}
async function form_submit(e) {
   let btn = e.target;
   let form = btn.closest('form');
   let error = form_validate(form);
   if (error == 0) {
      let formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
      let formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
      const message = form.getAttribute('data-message');
      const ajax = form.getAttribute('data-ajax');

      //SendForm
      if (ajax) {
         e.preventDefault();
         let formData = new FormData(form);
         form.classList.add('_sending');
         let response = await fetch(formAction, {
            method: formMethod,
            body: formData
         });
         if (response.ok) {
            let result = await response.json();
            form.classList.remove('_sending');
            if (message) {
               popup_open('_' + message + '-message');
            }
            form_clean(form);
         } else {
            alert("Ошибка");
            form.classList.remove('_sending');
         }
      }
   } else {
      let form_error = form.querySelectorAll('._error');
      if (form_error && form.classList.contains('_goto-error')) {
         _goto(form_error[0], 1000, 50);
      }
      e.preventDefault();
   }
}
function form_validate(form) {
   let error = 0;
   let form_req = form.querySelectorAll('._req');
   if (form_req.length > 0) {
      for (let index = 0; index < form_req.length; index++) {
         const el = form_req[index];
         if (!_is_hidden(el)) {
            error += form_validate_input(el);
         }
      }
   }
   return error;
}
function form_validate_input(input) {
   let error = 0;
   let input_g_value = input.getAttribute('data-value');

   if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
      if (input.value != input_g_value) {
         let em = input.value.replace(" ", "");
         input.value = em;
      }
      if (email_test(input) || input.value == input_g_value) {
         form_add_error(input);
         error++;
      } else {
         form_remove_error(input);
      }
   } else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
      form_add_error(input);
      error++;
   } else {
      if (input.value == '' || input.value == input_g_value) {
         form_add_error(input);
         error++;
      } else {
         form_remove_error(input);
      }
   }
   return error;
}
function form_add_error(input) {
   input.classList.add('_error');
   input.parentElement.classList.add('_error');

   let input_error = input.parentElement.querySelector('.form__error');
   if (input_error) {
      input.parentElement.removeChild(input_error);
   }
   let input_error_text = input.getAttribute('data-error');
   if (input_error_text && input_error_text != '') {
      input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
   }
}
function form_remove_error(input) {
   input.classList.remove('_error');
   input.parentElement.classList.remove('_error');

   let input_error = input.parentElement.querySelector('.form__error');
   if (input_error) {
      input.parentElement.removeChild(input_error);
   }
}
function form_clean(form) {
   let inputs = form.querySelectorAll('input,textarea');
   for (let index = 0; index < inputs.length; index++) {
      const el = inputs[index];
      el.parentElement.classList.remove('_focus');
      el.classList.remove('_focus');
      el.value = el.getAttribute('data-value');
   }
   let checkboxes = form.querySelectorAll('.checkbox__input');
   if (checkboxes.length > 0) {
      for (let index = 0; index < checkboxes.length; index++) {
         const checkbox = checkboxes[index];
         checkbox.checked = false;
      }
   }
   let selects = form.querySelectorAll('select');
   if (selects.length > 0) {
      for (let index = 0; index < selects.length; index++) {
         const select = selects[index];
         const select_default_value = select.getAttribute('data-default');
         select.value = select_default_value;
         select_item(select);
      }
   }
}

let viewPass = document.querySelectorAll('.form__viewpass');
for (let index = 0; index < viewPass.length; index++) {
   const element = viewPass[index];
   element.addEventListener("click", function (e) {
      if (element.classList.contains('_active')) {
         element.parentElement.querySelector('input').setAttribute("type", "password");
      } else {
         element.parentElement.querySelector('input').setAttribute("type", "text");
      }
      element.classList.toggle('_active');
   });
}



//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
   if (inputs.length > 0) {
      for (let index = 0; index < inputs.length; index++) {
         const input = inputs[index];
         const input_g_value = input.getAttribute('data-value');
         input_placeholder_add(input);
         if (input.value != '' && input.value != input_g_value) {
            input_focus_add(input);
         }
         input.addEventListener('focus', function (e) {
            if (input.value == input_g_value) {
               input_focus_add(input);
               input.value = '';
            }
            if (input.getAttribute('data-type') === "pass") {
               input.setAttribute('type', 'password');
            }
            if (input.classList.contains('_date')) {
               /*
               input.classList.add('_mask');
               Inputmask("99.99.9999", {
                  //"placeholder": '',
                  clearIncomplete: true,
                  clearMaskOnLostFocus: true,
                  onincomplete: function () {
                     input_clear_mask(input, input_g_value);
                  }
               }).mask(input);
               */
            }
            if (input.classList.contains('_phone')) {
               //'+7(999) 999 9999'
               //'+38(999) 999 9999'
               //'+375(99)999-99-99'
               input.classList.add('_mask');
               Inputmask("+375 (99) 9999999", {
                  //"placeholder": '',
                  clearIncomplete: true,
                  clearMaskOnLostFocus: true,
                  onincomplete: function () {
                     input_clear_mask(input, input_g_value);
                  }
               }).mask(input);
            }
            if (input.classList.contains('_digital')) {
               input.classList.add('_mask');
               Inputmask("9{1,}", {
                  "placeholder": '',
                  clearIncomplete: true,
                  clearMaskOnLostFocus: true,
                  onincomplete: function () {
                     input_clear_mask(input, input_g_value);
                  }
               }).mask(input);
            }
            form_remove_error(input);
         });
         input.addEventListener('blur', function (e) {
            if (input.value == '') {
               input.value = input_g_value;
               input_focus_remove(input);
               if (input.classList.contains('_mask')) {
                  input_clear_mask(input, input_g_value);
               }
               if (input.getAttribute('data-type') === "pass") {
                  input.setAttribute('type', 'text');
               }
            }
         });
         if (input.classList.contains('_date')) {
            datepicker(input, {
               customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
               customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
               formatter: (input, date, instance) => {
                  const value = date.toLocaleDateString()
                  input.value = value
               },
               onSelect: function (input, instance, date) {
                  input_focus_add(input.el);
               }
            });
         }
      }
   }
}
function input_placeholder_add(input) {
   const input_g_value = input.getAttribute('data-value');
   if (input.value == '' && input_g_value != '') {
      input.value = input_g_value;
   }
}
function input_focus_add(input) {
   input.classList.add('_focus');
   input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
   input.classList.remove('_focus');
   input.parentElement.classList.remove('_focus');
}
function input_clear_mask(input, input_g_value) {
   input.inputmask.remove();
   input.value = input_g_value;
   input_focus_remove(input);
}

//QUANTITY
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
   for (let index = 0; index < quantityButtons.length; index++) {
      const quantityButton = quantityButtons[index];
      quantityButton.addEventListener("click", function (e) {
         let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
         if (quantityButton.classList.contains('quantity__button_plus')) {
            value = value + 1;
            if (value > 28) {
               value = 28
            }
         } else {
            value = value - 1;
            if (value < 1) {
               value = 1
            }
         }
         quantityButton.closest('.quantity').querySelector('input').value = value;
      });
   }
}

//RANGE
const priceSlider = document.querySelector('.price__range');
if (priceSlider) {
   noUiSlider.create(priceSlider, {
      start: [0, 200000],
      connect: true,
      tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
      range: {
         'min': [0],
         'max': [200000]
      }
   });

   const priceStart = document.getElementById('price-start');
   const priceEnd = document.getElementById('price-end');
   priceStart.addEventListener('change', setPriceValues);
   priceEnd.addEventListener('change', setPriceValues);

   function setPriceValues() {
      let priceStartValue;
      let priceEndValue;
      if (priceStart.value != '') {
         priceStartValue = priceStart.value;
      }
      if (priceEnd.value != '') {
         priceEndValue = priceEnd.value;
      }
      priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
   }
}

//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
   selects_init();
}
function selects_init() {
   for (let index = 0; index < selects.length; index++) {
      const select = selects[index];
      select_init(select);
   }
   //select_callback();
   document.addEventListener('click', function (e) {
      selects_close(e);
   });
   document.addEventListener('keydown', function (e) {
      if (e.code === 'Escape') {
         selects_close(e);
      }
   });
}
function selects_close(e) {
   const selects = document.querySelectorAll('.select');
   if (!e.target.closest('.select')) {
      for (let index = 0; index < selects.length; index++) {
         const select = selects[index];
         const select_body_options = select.querySelector('.select__options');
         select.classList.remove('_active');
         _slideUp(select_body_options, 100);
      }
   }
}
function select_init(select) {
   const select_parent = select.parentElement;
   const select_modifikator = select.getAttribute('class');
   const select_selected_option = select.querySelector('option:checked');
   select.setAttribute('data-default', select_selected_option.value);
   select.style.display = 'none';

   select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

   let new_select = select.parentElement.querySelector('.select');
   new_select.appendChild(select);
   select_item(select);
}
function select_item(select) {
   const select_parent = select.parentElement;
   const select_items = select_parent.querySelector('.select__item');
   const select_options = select.querySelectorAll('option');
   const select_selected_option = select.querySelector('option:checked');
   const select_selected_text = select_selected_option.text;
   const select_type = select.getAttribute('data-type');

   if (select_items) {
      select_items.remove();
   }

   let select_type_content = '';
   if (select_type == 'input') {
      select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
   } else {
      select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
   }

   select_parent.insertAdjacentHTML('beforeend',
      '<div class="select__item">' +
      '<div class="select__title">' + select_type_content + '</div>' +
      '<div class="select__options">' + select_get_options(select_options) + '</div>' +
      '</div></div>');

   select_actions(select, select_parent);
}
function select_actions(original, select) {
   const select_item = select.querySelector('.select__item');
   const select_body_options = select.querySelector('.select__options');
   const select_options = select.querySelectorAll('.select__option');
   const select_type = original.getAttribute('data-type');
   const select_input = select.querySelector('.select__input');

   select_item.addEventListener('click', function () {
      let selects = document.querySelectorAll('.select');
      for (let index = 0; index < selects.length; index++) {
         const select = selects[index];
         const select_body_options = select.querySelector('.select__options');
         if (select != select_item.closest('.select')) {
            select.classList.remove('_active');
            _slideUp(select_body_options, 100);
         }
      }
      _slideToggle(select_body_options, 100);
      select.classList.toggle('_active');
   });

   for (let index = 0; index < select_options.length; index++) {
      const select_option = select_options[index];
      const select_option_value = select_option.getAttribute('data-value');
      const select_option_text = select_option.innerHTML;

      if (select_type == 'input') {
         select_input.addEventListener('keyup', select_search);
      } else {
         if (select_option.getAttribute('data-value') == original.value) {
            select_option.style.display = 'none';
         }
      }
      select_option.addEventListener('click', function () {
         for (let index = 0; index < select_options.length; index++) {
            const el = select_options[index];
            el.style.display = 'block';
         }
         if (select_type == 'input') {
            select_input.value = select_option_text;
            original.value = select_option_value;
         } else {
            select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
            original.value = select_option_value;
            select_option.style.display = 'none';
         }
      });
   }
}
function select_get_options(select_options) {
   if (select_options) {
      let select_options_content = '';
      for (let index = 0; index < select_options.length; index++) {
         const select_option = select_options[index];
         const select_option_value = select_option.value;
         if (select_option_value != '') {
            const select_option_text = select_option.text;
            select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
         }
      }
      return select_options_content;
   }
}
function select_search(e) {
   let select_block = e.target.closest('.select ').querySelector('.select__options');
   let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
   let select_search_text = e.target.value.toUpperCase();

   for (let i = 0; i < select_options.length; i++) {
      let select_option = select_options[i];
      let select_txt_value = select_option.textContent || select_option.innerText;
      if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
         select_option.style.display = "";
      } else {
         select_option.style.display = "none";
      }
   }
}
function selects_update_all() {
   let selects = document.querySelectorAll('select');
   if (selects) {
      for (let index = 0; index < selects.length; index++) {
         const select = selects[index];
         select_item(select);
      }
   }
}
//====================================================================================================

// let int = document.querySelectorAll('input[type="tel"]');
// let im = new Inputmask('+380 99 999 99 99');
// im.mask(int);

//====================================================================================================
const phoneInputField = document.querySelector("#phone");
const info = document.querySelector(".alert-info");
if (phoneInputField || info) {
   const phoneInput = window.intlTelInput(phoneInputField, {
      preferredCountries: ["us", "co", "in", "de"],
      utilsScript:
         "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });

   function process(event) {
      event.preventDefault();

      const phoneNumber = phoneInput.getNumber();

      info.style.display = "";
      info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
   }
}




