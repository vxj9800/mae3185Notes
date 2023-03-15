var observer = new MutationObserver(function (mutations) {
    const dark = document.documentElement.dataset.theme == 'dark';
    if (dark) {
        document.getElementsByClassName('logo__image only-dark')[0].src = document.getElementsByClassName('logo__image only-dark')[0].src.replace('Light', 'Dark');
    }
})
observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });