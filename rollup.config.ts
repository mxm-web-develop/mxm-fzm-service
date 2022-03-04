import path from 'path'
import { RollupOptions } from 'rollup'
import rollupTypescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from "rollup-plugin-terser";
import { DEFAULT_EXTENSIONS } from '@babel/core'
import pkg from './package.json'

function createEntry(options){
  const config ={ 
    input:['./src/components/index.ts'],
    output:{
        file:options.file,
        name:options.name,
        format:options.format,
    },
    plugins:[
        resolve(),
        commonjs(),
        rollupTypescript({
            tsconfigOverride:{
                compilerOptions:{
                    declaration:options.format === 'es'
                },
                // include: ["src/components/**/*.vue"],
                // exclude: ["node_modules", "**/*.stories.ts"]
            }
        }),
        terser()
  ]}
}