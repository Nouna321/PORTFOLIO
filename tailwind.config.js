module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                header: "url('/src/img/christina-wocintechchat-com-PISwYqWIGPc-unsplash.jpg')",
                code: "url('/src/img/code.jpg')",
                code2: "url('/src/img/code2.jpg')",
                code3: "url('/src/img/code3.jpg')",
                code4: "url('/src/img/code4.jpg')",
            }),
            fontFamily: {
                playfair: 'playfair',
                mont: 'mont',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
