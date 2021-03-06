/*
This project is licensed under the MIT license. 
Copyrights are respective of each contributor listed at the beginning of each definition file. 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: 

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. 

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE 
*/

// Type definitions for yargs
// Project: https://github.com/chevex/yargs
// Definitions by: Martin Poelstra <https://github.com/poelstra>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// This file has been changed from the original.

declare module "yargs" {

    module yargs {
        interface Argv {
            argv: any;
            (...args: any[]): any;
            parse(...args: any[]): any;

            alias(shortName: string, longName: string): Argv;
            alias(aliases: { [shortName: string]: string }): Argv;
            alias(aliases: { [shortName: string]: string[] }): Argv;

            default(key: string, value: any): Argv;
            default(defaults: { [key: string]: any }): Argv;

            demand(key: string, msg: string): Argv;
            demand(key: string, required?: boolean): Argv;
            demand(keys: string[], msg: string): Argv;
            demand(keys: string[], required?: boolean): Argv;
            demand(positionals: number, required?: boolean): Argv;
            demand(positionals: number, msg: string): Argv;
            demand(count: number, max?: number, msg?: string): Argv;  // new from original

            require(key: string, msg: string): Argv;
            require(key: string, required: boolean): Argv;
            require(keys: number[], msg: string): Argv;
            require(keys: number[], required: boolean): Argv;
            require(positionals: number, required: boolean): Argv;
            require(positionals: number, msg: string): Argv;

            required(key: string, msg: string): Argv;
            required(key: string, required: boolean): Argv;
            required(keys: number[], msg: string): Argv;
            required(keys: number[], required: boolean): Argv;
            required(positionals: number, required: boolean): Argv;
            required(positionals: number, msg: string): Argv;

            requiresArg(key: string): Argv;
            requiresArg(keys: string[]): Argv;

            describe(key: string, description: string): Argv;
            describe(descriptions: { [key: string]: string }): Argv;

            option(key: string, options: Options): Argv;
            option(options: { [key: string]: Options }): Argv;
            options(key: string, options: Options): Argv;
            options(options: { [key: string]: Options }): Argv;

            usage(message: string, options?: { [key: string]: Options }): Argv;
            usage(options?: { [key: string]: Options }): Argv;

            command(command: string, description: string, func?: (yargs: Argv) => any): Argv;  // changed from original

            example(command: string, description: string): Argv;

            check(func: (argv: any, aliases: { [alias: string]: string }) => any): Argv;

            boolean(key: string): Argv;
            boolean(keys: string[]): Argv;

            string(key: string): Argv;
            string(keys: string[]): Argv;

            config(key: string): Argv;
            config(keys: string[]): Argv;

            wrap(columns: number): Argv;

            strict(): Argv;

            help(): string;
            help(option: string, description?: string): Argv;

            version(version: string, option?: string, description?: string): Argv;

            showHelpOnFail(enable: boolean, message?: string): Argv;

            showHelp(func?: (message: string) => any): Argv;

            terminalWidth(): number;  // new from original

            /* Undocumented */

            normalize(key: string): Argv;
            normalize(keys: string[]): Argv;

            implies(key: string, value: string): Argv;
            implies(implies: { [key: string]: string }): Argv;

            count(key: string): Argv;
            count(keys: string[]): Argv;

            fail(func: (msg: string) => any): Argv;  // changed from original
        }

        interface Options {
            type?: string;
            alias?: any;
            demand?: any;
            required?: any;
            require?: any;
            default?: any;
            boolean?: any;
            string?: any;
            count?: any;
            describe?: any;
            description?: any;
            desc?: any;
            requiresArg?: any;
        }
    }

    var yargs: yargs.Argv;
    export = yargs;
}
