import { $ } from '@wdio/globals'
import {browser} from '@wdio/globals'
import Base from './base.js';
import Checking from './checks.js'


class otherUsers extends Base {

    get community () {
        return $('//button[contains(text(),"Community")]');
    }
    get findUsers () {
        return $('[href="/users.php"]');
    }

    get findGamers () {
        return $('[href="/findgamers.php?action=findclosestform"]');
    }

    get country () {
        return $('#country');
    }

    get findCountry() {
        return $('[value="US"]');
    }

    get postalCode() {
        return $('#srczip');
    }

    get maxDistance() {
        return $('#maxdist');
    }

    get miles () {
        return $('[value="25"]');
    }

    get submit() {
        return $('[value="Submit"]');
    }

    async findingOthers () {
        await this.community.click();
        await this.findUsers.waitForExist({ timeout: 4000});
        await this.findUsers.click();
        await this.findGamers.waitForClickable({ timeout: 5000 });
        await this.findGamers.click();
    }

    async findingGamers(zipCode) {
        await this.country.click();
        await this.findCountry.click();
        await this.postalCode.setValue(zipCode);
        await this.submit.click();
        await expect(Checking.boardGameDatabase).toBeExisting();
    }
}

export default new otherUsers();