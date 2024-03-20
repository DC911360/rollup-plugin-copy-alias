# rollup-plugin-copy-alias
a practice project of rollup-plugin


# Install
Using pnpm:
```
    pnpm install
```
# Usage
Create a rollup.config.js  configuration file and import the plugin:

```
import { defineConfig } from 'rollup';
import { alias } from 'alias'

export default defineConfig({
    input:'./index.js',
    output:{
        file:'./dist/index.js',
        format:'es'
    },
    plugins:[
        alias({
            entries:{
                "@":'./utils'
            }
        })
    ],
})
```
