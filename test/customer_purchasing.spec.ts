import {test} from '../support/fixture/object-fixture';

test.describe(`Customer purchasing`, ()=>{
  test.beforeEach(async ({page})=>{
    await page.goto(`/`);
  });

  test(`Customer Login`,async ({login}) => {
    await login.login({user: `standard_user` , password: `${process.env.PASSWORD}` });
    await login.assertSuccessLogin();
  });

  test(`Customer select item`, async ({login,inventory})=>{
    const itemsToAdd:string [] = ["backpack", "bike", "tShirt"];

    await login.login({user: `standard_user` , password: `${process.env.PASSWORD}` });
    await login.assertSuccessLogin();
    await inventory.addToCart({array: itemsToAdd});
    await inventory.assertBadge('3'); //Number of added Items
    await inventory.assertAddedItem({array:itemsToAdd});
  });

  test(`Remove item from Cart`, async ({login,inventory})=>{
    const allItems: string [] = ["backpack", "bike", "tShirt","jacket","onesie","redTShirt"];
    const itemsToRemove: string []= ["backpack", "bike"];

    await login.login({user: `standard_user` , password: `${process.env.PASSWORD}` });
    await login.assertSuccessLogin();
    await inventory.addToCart({array: allItems});
    await inventory.assertBadge('6');
    await inventory.assertAddedItem({array:allItems});
    await inventory.removeItem({array:itemsToRemove});
    await inventory.assertRemoveItem({array:itemsToRemove});
  });
});