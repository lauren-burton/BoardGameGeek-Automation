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

    get complexityRating() {
        return $('[uib-tooltip="View results"]');
    }

    get goToPoll() {
        return $('[ng-click="questions();"]');
    }

    get mediumHeavy() {
        return $('//*[contains(text(),"Medium Heavy")]');
    }

    get vote() {
        return $('[ng-click="submit();"]');
    }

    get close() {
        return $('//button[contains(text(),"Close")]');
    }
    //opening the forums and clicking hot/spirit island

    async forum () {
        await this.forumsTab.click();
        await this.hotLink.click();
        await this.spiritIsland.click();
        await this.complexityRating.click();
        await this.goToPoll.click();
        await this.mediumHeavy.click();
        await this.vote.click();
        await this.close.click();
    }

}

export default new forums();