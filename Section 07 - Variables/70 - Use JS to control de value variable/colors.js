let colors = document.querySelectorAll('.colors div');
let root = document.querySelector(':root');

colors.forEach(color => {
    color.addEventListener('click', e => {
        root.style.setProperty('--primary-color', e.target.style.backgroundColor)
        root.style.setProperty('--secondary-color', tinycolor(e.target.style.backgroundColor).lighten().toString())
        root.style.setProperty('--theme-color', tinycolor.random())
    })
})