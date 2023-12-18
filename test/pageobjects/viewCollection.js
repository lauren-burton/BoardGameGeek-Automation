import { $ } from '@wdio/globals'
import {expect} from '@wdio/globals'
import {browser} from '@wdio/globals'
import Base from './base.js';
import Checking from './checks.js'

class viewCollection extends Base {

    get profileBtn() {
        return $('//span[contains(text(), "automationtest")]');
    }

    get viewLoggedPlays() {
        return $('[href="/plays/bymonth/user/automationtest/subtype/boardgame"]');

    }

    get filterBy() {
        return $('#action');
    }

    get byGame() {
        return $('[value="bygame"]');
    }

    get byDate() {
        return $('[value="bydate"]');
    }

    get thumbs() {
        return $('[value="thumbs"]');
    }

    get fiveanddime() {
        return $('[value="fiveanddime"]');
    }
    get go() {
        return $('[value="Go"]');
    }
    async viewingCollection() {
        await this.profileBtn.waitForExist({ timeout: 10000 });
        await this.profileBtn.click();
        await this.viewLoggedPlays.click(); 
        await expect(Checking.checkProfile).toBeExisting();
    }
    
    async filteringByDate() {
        await this.filterBy.click();
        await this.byGame.click();
        await this.go.click();
        await this.filterBy.click();
        await this.byDate.click();
        await this.go.click();
        await this.filterBy.click();
        await this.thumbs.click();
        await this.go.click();
        await this.filterBy.click();
        await this.fiveanddime.click();
        await this.go.click();
    }
}

export default new viewCollection();