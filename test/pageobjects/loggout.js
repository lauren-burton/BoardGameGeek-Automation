import { $ } from '@wdio/globals'
import Base from './base.js';

class loggout extends Base {

    //selectors
    get profileBtn() {
        return $('.mygeek-dropdown-username.text-truncate.ng-binding');
    }

    get logout() {
        return $('[href="/logout"]');
    }


    //clicking profile and signout button
    async loggingOut() {
        await this.profileBtn.waitForClickable({timeout: 6000});
        await this.profileBtn.click();
        await this.logout.click();
    }
}

export default new loggout();