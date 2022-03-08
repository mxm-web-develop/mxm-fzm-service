
import rollupTypescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from "rollup-plugin-terser";

import pkg from './package.json'


const extensions = [".ts", ".js"]

function createEntry(options){
  const config ={ 
    input:['./src/index.ts'],
    output:{
        file:options.file,
        name:options.name,
        format:options.format
    },
    external:[
        'axios',
        'mxm-usrstorage'
    ],
    plugins:[
        resolve({
            extensions
        }),
        commonjs(),
        
        rollupTypescript({
            tsconfigOverride:{
                compilerOptions:{
                    removeComments: true,
                    declaration:true
                    //options.format === 'es'
                },
                // include: ["src/components/**/*.vue"],
                exclude: ["node_modules"]
            }
        }),
        terser()
  ]}
  return config
}

export default [
    createEntry({file:pkg.main,format:'es'})
]