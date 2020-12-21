module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                header: "url('/src/img/christina-wocintechchat-com-PISwYqWIGPc-unsplash.jpg')",
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
