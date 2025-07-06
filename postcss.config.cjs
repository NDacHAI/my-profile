// postcss.config.cjs
module.exports = {
    plugins: {
        // plugin PostCSS chính thức của Tailwind v4
        '@tailwindcss/postcss': {},
        // hay nếu bạn muốn:
        // 'tailwindcss': {},
        autoprefixer: {},
    },
}
