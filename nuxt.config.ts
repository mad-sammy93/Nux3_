// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"

export default defineNuxtConfig({
    alias: {
        assets:"/<rootDir>/assets/img",
        // "@": resolve(__dirname, "/"),

    },
    css: ["~/assets/css/main.scss"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        '@nuxt/content',
    ],

})
