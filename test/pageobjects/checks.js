import { $ } from '@wdio/globals'
import Base from './base.js';


class Checking extends Base {
  
    get successfulLogin () {
        return $('.mygeek-dropdown-username.tw-truncate');

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

    get checkCommentFilled() {
        return $('.form-control.ng-valid.ng-touched.ng-dirty.ng-valid-parse.ng-not-empty')        
    }
    
    get checkProfile() {
        return $('#legacy_modal');
    }
    }


export default new Checking();
