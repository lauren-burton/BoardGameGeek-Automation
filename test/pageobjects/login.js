import { $ } from '@wdio/globals'
import {expect} from '@wdio/globals'
import {browser} from '@wdio/globals'
import Base from './base.js';
import Checking from './checks.js'

class login extends Base {

    //selectors
    get signInBtn () {
        return $('.c-nav-session.c-nav-primary-separated.dropdown-primary');
    }
  
    get inputUsername () {
        return $('#inputUsername');
    }

    get inputPassword () {
        return $('#inputPassword');
    }

    get btnSubmit () {
        return $('.btn.btn-lg.btn-primary');
    }

    get homePage () {
        return $('[alt="boardgamegeek logo"]');
    }


    //logging in incorrectly
    async notLogin (goodUsername, badPassword) {
        await this.signInBtn.click();
        await this.inputUsername.setValue(goodUsername);
        await this.inputPassword.setValue(badPassword);
        await this.btnSubmit.click();
        await expect(Checking.dontLogin).toBeExisting()
    }

    //logging in correctly
    async login (rightUsername, rightPassword) {
        await this.signInBtn.click();
        await this.inputUsername.setValue(rightUsername);
        await this.inputPassword.setValue(rightPassword);
        await this.btnSubmit.click();
        await (Checking.successfulLogin).waitForClickable({ timeout: 15000 });
        await expect(Checking.successfulLogin).toBeExisting()
        await expect(Checking.successfulLogin).toHaveTextContaining(
            'automationtest')
    }

    //going back to the home page
    async return () {
        await this.homePage.click();
    }
    open () {

        return super.open('login');
    }
}

export default new login();