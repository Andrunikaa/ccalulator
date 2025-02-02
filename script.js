const themeButtons = document.querySelectorAll('.header__theme-menu-button');
const minusButton = document.querySelector(".calculator__counter-minusButton")
const plusButton = document.querySelector(".calculator__counter-plusButton")
const counterValue = document.querySelector(".calculator__counter-value")
const slider = document.querySelector(".calculator__slider-range")
const result = document.querySelector(".calculator__result-value")

let a = 10000
slider.value = 10000
let counter = 2

function setValue(value){
  return value*counter

}


plusButton.addEventListener("click", function(){
  counter = counter+1
  counterValue.textContent = counter
  result.textContent = (setValue(a))
})
minusButton.addEventListener("click", function(){
  counter = counter-1
  counterValue.textContent = counter
  result.textContent = (setValue(a))
  
})


slider.addEventListener("input", function(event){
  value = parseInt(event.target.value);
  setValue(value)
  result.textContent = (value*counter)
  a = value
})
result.textContent = setValue(a)

















themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    themeButtons.forEach((btn) => {
      btn.classList.remove('header__theme-menu-button_active');
      btn.removeAttribute('disabled');
    });
    if (
      [...button.classList].includes('header__theme-menu-button_type_light')
    ) {
      changeTheme('light');
    } else if (
      [...button.classList].includes('header__theme-menu-button_type_dark')
    ) {
      changeTheme('dark');
    } else {
      changeTheme('auto');
    }
    button.classList.add('header__theme-menu-button_active');
    button.setAttribute('disabled', true);
  });
});

function changeTheme(theme) {
  document.body.className = 'page';
  document.body.classList.add(`theme_${theme}`);
  localStorage.setItem('theme', theme);
}

function initTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    changeTheme(theme);
    themeButtons.forEach((btn) => {
      btn.classList.remove('header__theme-menu-button_active');
      btn.removeAttribute('disabled');
    });
    document
      .querySelector(`.header__theme-menu-button_type_${theme}`)
      .classList.add('header__theme-menu-button_active');
    document
      .querySelector(`.header__theme-menu-button_type_${theme}`)
      .setAttribute('disabled', true);
  }
}

initTheme();
