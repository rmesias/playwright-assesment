import { expect } from '@playwright/test';
import {test} from '../support/fixture/object-fixture';

test.describe(`Login feature`, ()=>{
  test.beforeEach(async ({page})=>{
    await page.goto(`/`);
  });

  test(`Customer Login with lockout account`,async ({login,page}) => {
    await login.login({user: `locked_out_user` , password: `${process.env.PASSWORD}` });
    await expect(page.locator(`h3[data-test='error']`)).toContainText(`Epic sadface: Sorry, this user has been locked out.`);
  });

  test(`To fail test scenario`,async ({login,page}) => {
    await login.login({user: `locked_out_user` , password: `${process.env.PASSWORD}` });
    await expect(page.locator(`.random-name`)).toContainText(`Epic sadface: Sorry, this user has been locked out.`);
  });
});