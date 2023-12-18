import { $ } from '@wdio/globals'
import Base from './base.js';

class loggout extends Base {
    get profileBtn() {
        return $('.mygeek-dropdown-username.text-truncate.ng-binding');
    }

    get logout() {
        return $('[href="/logout"]');
    }

    get return () {
        $('[alt="boardgame geek logo"]');
    }
    async loggingOut() {
        await this.profileBtn.waitForClickable({timeout: 6000});
        await this.profileBtn.click();
        await this.logout.click();
    }
}

export default new loggout();