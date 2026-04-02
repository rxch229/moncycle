if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Système PWA activé !'))
            .catch(err => console.log('Erreur PWA :', err));
    });
}

