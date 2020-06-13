# Test my switch button

I created this page for testing my js button

### How it works?
1. Firstable, you should create a button with js class in HTML.
2. In js file define your button and function and give them classes from your button
3. Write function for example:
``` java script 
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
```

### Voila! You have your switch-mode button
