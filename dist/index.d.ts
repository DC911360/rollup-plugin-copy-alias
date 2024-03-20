import { Plugin } from 'rollup';
interface AliasOptions {
    entries: {
        [key: string]: string;
    };
}
export declare function alias(options: AliasOptions): Plugin;
export {};
