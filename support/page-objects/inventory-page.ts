import { expect, Locator, Page } from "@playwright/test";

export default class InventoryPage {
  readonly backpack: Locator;
  readonly bike:Locator;
  readonly tShirt:Locator;
  readonly jacket: Locator;
  readonly onesie:Locator;
  readonly redTShirt:Locator;
  readonly removeBackpack: Locator;
  readonly removeBike:Locator;
  readonly removeTShirt:Locator;
  readonly removeJacket: Locator;
  readonly removeOnesie:Locator;
  readonly removeRedTShirt:Locator;
  readonly cartCTA: Locator;
  readonly cartBadge: Locator;
  private items: Record<string, Locator>;
  private toRemoveItems: Record<string, Locator>;

  constructor(public page: Page){
    this.page = page;
    this.backpack = page.locator(`#add-to-cart-sauce-labs-backpack`);
    this.bike = page.locator(`#add-to-cart-sauce-labs-bike-light`);
    this.tShirt = page.locator(`#add-to-cart-sauce-labs-bolt-t-shirt`);
    this.jacket = page.locator(`#add-to-cart-sauce-labs-fleece-jacket`);
    this.onesie = page.locator(`#add-to-cart-sauce-labs-onesie`);
    this.redTShirt = page.locator(`[name='add-to-cart-test.allthethings()-t-shirt-(red)']`);
    this.cartCTA = page.locator(`.shopping_cart_link`);
    this.cartBadge = page.locator(`.shopping_cart_badge`);
    this.removeBackpack = page.locator(`#remove-sauce-labs-backpack`);
    this.removeBike = page.locator(`#remove-sauce-labs-bike-light`);
    this.removeTShirt = page.locator(`#remove-sauce-labs-bolt-t-shirt`);
    this.removeJacket = page.locator(`#remove-sauce-labs-fleece-jacket`);
    this.removeOnesie = page.locator(`#remove-sauce-labs-onesie`);
    this.removeRedTShirt = page.locator(`[name='remove-test.allthethings()-t-shirt-(red)']`);

    // Map item names to their corresponding locators
    this.items = {
      backpack: this.backpack,
      bike: this.bike,
      tShirt: this.tShirt,
      jacket: this.jacket,
      onesie: this.onesie,
      redTShirt: this.redTShirt,
    };

    this.toRemoveItems = {
      backpack: this.removeBackpack,
      bike: this.removeBike,
      tShirt: this.removeTShirt,
      jacket: this.removeJacket,
      onesie: this.removeOnesie,
      redTShirt: this.removeRedTShirt,
    };
  }

  async addToCart(params:{array: string[]}){
    for (const item of params.array) {
      const locator = this.items[item];
      if (locator) {
        await locator.click();
      } else {
        console.warn(`Item "${item}" is not a valid locator on the inventory page.`);
      }
    }
  }

  async assertBadge(count:string){
    await expect(this.cartBadge).toContainText(count);
    await this.cartCTA.click();
  }

  async assertAddedItem(params:{array: string[]}){
    for (const item of params.array) {
      const locator = this.toRemoveItems[item];
      if (locator) {
        await expect(locator).toBeVisible();
      } else {
        console.warn(`Item "${item}" does not exist from the Cart`);
      }
    }
  }

  async removeItem(params:{array: string[]}){
    for (const item of params.array) {
      const locator = this.toRemoveItems[item];
      if (locator) {
        await locator.click();
      } else {
        console.warn(`Item "${item}" no longer exist from Cart`);
      }
    }
  }

  async assertRemoveItem(params:{array: string[]}){
    for (const item of params.array) {
      const locator = this.toRemoveItems[item];
      if (locator) {
        await expect(locator).toHaveCount(0);
      } else {
        console.warn(`Item "${item}" still exist from Cart`);
      }
    }
  }
}