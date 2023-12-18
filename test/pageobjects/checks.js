import { $ } from '@wdio/globals'
import Base from './base.js';


class Checking extends Base {
  
    // checking if these selectors exist

    get successfulLogin () {
        return $('//span[contains(text(),"automationtest")]');
    }

    get dontLogin () {
        return $('[role="alert"]');

    }

    get myceliaPage () {
        return $('//*[@id="mainbody"]/div[2]/div/div[2]/div[2]/ng-include/div/ng-include/div/div[2]/div[2]/div[1]/div/div[2]/h1/a');

    }

    get finishAddingPlayers() {
        return $('//*[contains(text(),"Log Play")]');
    }
    get titleCheck () {
        return $('.collection_title');
    }

    get mushroomCatsCheck() {
        return $('.game-header-ranks.hidden-game-header-collapsed.ng-scope');
    }
    
    get checkProfile() {
        return $('#legacy_modal');
    }

    get boardGameDatabase() {
        return $('#maincontent');
    }

    get wrongEntry() {
        return $('.messagebox.error');
    }
    }


export default new Checking();
