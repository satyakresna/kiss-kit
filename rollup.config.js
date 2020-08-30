import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
    input: 'src/js/app.js',
    output: {
        dir: './dist/js',
        format: 'es',
        globals: {
            page: 'page'
        },
        sourcemap: true,
        compact: true
    },
    plugins: [nodeResolve(), terser()]
}