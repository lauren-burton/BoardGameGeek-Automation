import { $ } from '@wdio/globals'
import Base from './base.js';


class forums extends Base {

    //selectors
    get forumsTab () {
        return $('//button[contains(text(),"Forums")]') ;
    }

    get hotLink () {
        return $('[href="/threads/region/1?sort=hot&interval=twodays"]');

    }

    get spiritIsland () {
        return $('.tw-break-words > [href="/boardgame/162886/spirit-island"]');
    }

    //opening the forums and clicking hot/spirit island

    async forum () {
        await this.forumsTab.click();
        await this.hotLink.click();
        await this.spiritIsland.click();
    }

}

export default new forums();