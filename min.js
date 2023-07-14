const colorPreferido = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

slider.addEventListener('click', () => {
    let cambio_de_color = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(cambio_de_color);
} );

setTheme(localStorage.getItem('theme') || colorPreferido);

kiko.addEventListener('click', () => {
    alert("Metal Gotico kiko 🎸, - Lacrimosa cancion Der Morgen Danach -");
});