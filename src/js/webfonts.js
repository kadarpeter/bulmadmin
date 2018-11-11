WebFontConfig = {
    google: {families: [
        'Barlow+Semi+Condensed:200,400:latin,latin-ext',
        'Maven+Pro:400,700:latin,latin-ext',
        'Open+Sans:400,700:latin,latin-ext',
        //'Roboto:400,700:latin,latin-ext'
    ]}
};

(function () {
    let wf   = document.createElement('script');
    wf.src   = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type  = 'text/javascript';
    wf.async = 'true';
    let s    = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
    console.log('webfonts loaded');
})();