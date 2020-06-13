let isDark = false;


const switchModes = document.querySelector('.mode--js');
const button = document.querySelector(".mode--js");
switchModes.addEventListener('click', () => {
if (isDark) {
    document.documentElement.style.setProperty('--background-color', 'rgb(243, 239, 226)');
    document.documentElement.style.setProperty('--text-color', '#000');
    button.innerHTML = `Dark Mode`;
    isDark = false;
} else {
    document.documentElement.style.setProperty('--background-color', '#000');
    document.documentElement.style.setProperty('--text-color', '#fff');
    button.innerHTML = `Light Mode`;
    isDark = true;
}
});









