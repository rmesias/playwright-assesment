import { Locator, Page } from "@playwright/test";


export default class LoginPage {
  readonly username: Locator;
  readonly password:Locator;
  readonly loginBtn:Locator;


  constructor(public page: Page){
    this.page = page;
    this.username = page.locator(`#user-name`);
    this.password = page.locator(`#password`);
    this.loginBtn = page.locator(`#login-button`);
  }

  async login(params:{user:string, password:string}){
    await this.username.fill(params.user);
    await this.password.fill(params.password);
    await this.loginBtn.click();
  }

  async assertSuccessLogin(){
    await this.page.waitForSelector('#shopping_cart_container', {state: 'attached'});
  }
}