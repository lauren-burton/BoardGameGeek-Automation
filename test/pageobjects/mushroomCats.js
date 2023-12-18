import { $ } from '@wdio/globals'
import {expect} from '@wdio/globals'
import Base from './base.js';
import Checking from './checks.js'

class mushroomCats extends Base {

    //selectors 

    get searchBar () {
        return $('.form-control');
    }

    get confirm () {
        return $('.svg-inline--fa.fa-magnifying-glass.fa-flip-horizontal.fa-sm');
    }

    get mushroomCatsBtn () {
        return $('.primary[href="/boardgame/362710/mushroom-cats"]');

    }

   get logPlay() {
    return $('.toolbar-actions.ng-scope > .toolbar-action > geekitem-record-play > .btn-group > .btn.btn-sm.btn-subtle.game-action-play.ng-isolate-scope');
   }

   get gameDetails() {
    return $('//strong[contains(text(), "Game details")]');
   }

   get addPlayers () {
    return $('.btn.btn-block.btn-default.btn-chevron-right > .text-muted.ng-scope');
    }

    get addUser () {
    return $('[ng-if="user.userid"]');
    }

    get applyPlayerAmount () {
    return $('.hidden-xs.btn.btn-lg.btn-primary');
    }

    get comments() {
    return $('[ng-model="play.comments"]');
    }

    get saveBtn() {
    return $('.btn.btn-lg.btn-primary');
    }

    get profileBtn() {
        return $('//*[@id="global-header-outer"]/header/nav/div/div[2]/div/div[1]/ul/li[8]/button/span[2]');
    }

    get logout() {
        return $('.fi-power');
    }

    get obscureSelector() {
        return $('.modal.modal-record-play.modal-fixed-right.fade.ng-scope.ng-isolate-scope.ng-animate.ng-leave.ng-leave-active')
    }
    //randomized times
    times = [ 
        '//*[contains(text(), "30 m")]',
        '//*[contains(text(), "1 h")]',
        '//*[contains(text(), "1.5 h")]',
        '//*[contains(text(), "2 h")]',
        '//*[contains(text(), "2.5 h")]',
        '//*[contains(text(), "3 h")]'
        
    ];  

    // randomizing selectors
    
    async randomIndex(arr){ 
        return Math.floor(Math.random() * arr.length);
    } 


      async randomizer() {
        let index = await this.randomIndex(this.times);
        let randomSelector = this.times[index];

        let randomElement = await browser.$(randomSelector);

        return randomElement;
      }

      //searching in the search bar "mushroom"
    async searching (mushroom) {
        await this.searchBar.setValue(mushroom);
        await this.confirm.click();
        await expect(Checking.titleCheck).toBeExisting();
    }

    //click mushroomcats button
    async mushroomCats () {
        await this.mushroomCatsBtn.waitForExist();
        await this.mushroomCatsBtn.click();
        await expect(Checking.mushroomCatsCheck).toBeExisting();
    }

    //logging play for mushroom cats
    async loggingPlay() {
        await this.logPlay.click();
        await this.gameDetails.waitForExist();
        await this.gameDetails.click();
        await this.addPlayers.waitForExist();
        await this.addPlayers.click();
        await this.addUser.click();
        await this.applyPlayerAmount.waitForExist();
        await this.applyPlayerAmount.click();
        await expect(Checking.finishAddingPlayers).toBeExisting()
    }

    //commenting in the play log

    async commentLogPlay(comment) {

        await this.comments.waitForClickable({ timeout: 2000 });
        await this.comments.setValue(comment);
    }

    //selecting a random play time
    async randomTime () {
        let randomElement = await this.randomizer();
        await randomElement.click();
    }

    //clicking save
    async doneLogging() {
        await this.saveBtn.click();
    }
}

export default new mushroomCats();