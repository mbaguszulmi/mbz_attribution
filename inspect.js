document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    window.location = "https://mbaguszulmi.github.io";
});

document.addEventListener('keydown', e => {
if(e.keyCode == 123) {
    e.preventDefault();
    window.location = "https://mbaguszulmi.github.io";
    return false;
}
if((e.ctrlKey || e.metaKey) && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'i'.charCodeAt(0))) {
    e.preventDefault();
    window.location = "https://mbaguszulmi.github.io";
    return false;
}
if((e.ctrlKey || e.metaKey) && e.shiftKey && (e.keyCode == 'C'.charCodeAt(0) || e.keyCode == 'c'.charCodeAt(0))) {
    e.preventDefault();
    window.location = "https://mbaguszulmi.github.io";
    return false;
}
if((e.ctrlKey || e.metaKey) && e.shiftKey && (e.keyCode == 'J'.charCodeAt(0) || e.keyCode == 'j'.charCodeAt(0))) {
    e.preventDefault();
    window.location = "https://mbaguszulmi.github.io";
    return false;
}
if((e.ctrlKey || e.metaKey) && (e.keyCode == 'U'.charCodeAt(0) || e.keyCode == 'u'.charCodeAt(0))) {
    e.preventDefault();
    window.location = "https://mbaguszulmi.github.io";
    return false;
}
})
