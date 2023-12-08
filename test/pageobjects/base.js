import { browser } from '@wdio/globals'


export default class Base {
   
    open (path) {
        return browser.url(`https://boardgamegeek.com/`)
    }
}