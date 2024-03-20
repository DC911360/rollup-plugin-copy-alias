import { describe, it, expect } from 'vitest'
import { alias } from '.'

describe("alias", () => {

    describe("entries is Object", () => {
        it('shoule replace when match successful', () => {

            const aliasObj: any = alias({
                entries: {
                    "@": './utils'
                }
            })

            expect(aliasObj.resolveId('@/add')).toBe('./utils/add.js')
        });



        it('shoule replace when match fail', () => {

            const aliasObj: any = alias({
                entries: {
                    "@": './utils'
                }
            })

            expect(aliasObj.resolveId('!/add')).toBe('!/add')
        });
    })




    describe("entries is Array", () => {

        it('shoule replace when match successful',()=>{
            const aliasObj:any = alias({
                entries:[{
                    find:'@',
                    replacement:'./utils'
                }]
            }) 
            
            expect(aliasObj.resolveId('@/add')).toBe('./utils/add.js')
        });

        it("should replace when find is regular",()=>{
            const aliasObj:any = alias({
                entries:[{
                    find:'/^(.*)\.js$/',
                    replacement:'$1.alias'
                }]
            })
            expect(aliasObj.resolveId("add.js")).toBe("add.alias.js")
        })
    })


})