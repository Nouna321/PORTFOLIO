module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                header: "url('/src/Components/img/christina-wocintechchat-com-PISwYqWIGPc-unsplash.jpg')",
                tools: "url('/src/Components/img/lg.jpg')",
                code: "url('/src/Components/img/code.jpg')",
                code2: "url('/src/Components/img/code2.jpg')",
                code3: "url('/src/Components/img/code3.jpg')",
                code4: "url('/src/Components/img/code4.jpg')",
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
