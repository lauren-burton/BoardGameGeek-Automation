import { $ } from '@wdio/globals'
import {expect} from '@wdio/globals'
import {browser} from '@wdio/globals'
import Base from './base.js';
import Checking from './checks.js'


class BBG extends Base {


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

    get forumsTab () {
        return $('//button[contains(text(),"Forums")]') ;
    }

    get hotLink () {
        return $('[href="/threads/region/1?sort=hot&interval=twodays"]');

    }

    get myceliaGame () {
        return $('[href="/boardgame/392023/mycelia"]');
    }

    get searchBar () {
        return $('#site-search');

    }

    get confirm () {
        return $('[ng-click="searchctrl.fullSearch()"]');
    }

    get mushroomCatsBtn () {
        return $('.primary[href="/boardgame/362710/mushroom-cats"]');

    }

   get logPlay() {
    return $('//*[@id="mainbody"]/div[2]/div/div[2]/div[2]/ng-include/div/ng-include/div/div[2]/div[2]/div[4]/span[3]/ng-include/div/div[3]/geekitem-record-play/span/button');
   }

   get gameDetails() {
    return $('//*[contains(text(), "Game details")]');
   }

   
    get time1 () {
        return $('//*[contains(text(), "30 m")]');

    }
    get profileBtn() {
        return $('.mygeek-dropdown-username.text-truncate.ng-binding');
    }

    get viewLoggedPlays() {
        return $('[href="/plays/bymonth/user/apricotmilk/subtype/boardgame"]');

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

    get logout() {
        return $('[href="/logout"]');
    }

    //array of selectors

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

// asyncs

    async notLogin (goodUsername, badPassword) {
        await this.signInBtn.click();
        await this.inputUsername.setValue(goodUsername);
        await this.inputPassword.setValue(badPassword);
        await this.btnSubmit.click();
        await expect(Checking.dontLogin).toBeExisting()
    }

    async login (rightUsername, rightPassword) {
        await this.signInBtn.click();
        await this.inputUsername.setValue(rightUsername);
        await this.inputPassword.setValue(rightPassword);
        await this.btnSubmit.click();
        await expect(Checking.successfulLogin).toBeExisting()
        await expect(Checking.successfulLogin).toHaveTextContaining(
            'apricotmilk')
    }

    async forums () {
        await this.forumsTab.click();
        await this.hotLink.click();
        await this.myceliaGame.click();

        await expect(Checking.myceliaPage).toBeExisting();
    }

    async searching (mushroom) {
        await this.searchBar.setValue(mushroom);
        await this.confirm.click();
        await expect(Checking.titleCheck).toBeExisting();
    }

    async mushroomCats () {
        await this.mushroomCatsBtn.click();
        await expect(Checking.mushroomCatsCheck).toBeExisting();
    }

    async loggingPlay() {
        await this.logPlay.click();
        await this.gameDetails.click();
        await this.addPlayers.click();
        await this.addUser.click();
        await this.applyPlayerAmount.click();
        await expect(Checking.finishAddingPlayers).toBeExisting()
    }

    async commentLogPlay(comment) {

        await this.comments.waitForClickable({ timeout: 2000 });
        await this.comments.setValue(comment);
    }

    async randomTime () {
        let randomElement = await this.randomizer();
        await randomElement.click();
    }
    async doneLogging() {
        await this.saveBtn.click();
    }

    async viewingCollection() {
        await this.profileBtn.waitForClickable({ timeout: 2000 });
        await this.profileBtn.click();
        await this.viewLoggedPlays.click(); 
        await expect(Checking.checkProfile).toBeExisting();
    }

    async loggingOut() {
        await this.profileBtn.click();
        await this.logout.click();
    }
  
    open () {
        return super.open('login');
    }
}

export default new BBG();
