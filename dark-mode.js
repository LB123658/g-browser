const body = document.querySelector('#body')
if (window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: dark)').matches) {
  body.style.background = "#282828";
}
