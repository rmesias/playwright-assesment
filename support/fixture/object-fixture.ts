import {test as objectsFixture } from '@playwright/test';
import LoginPage from '../page-objects/login-page';
import InventoryPage from '../page-objects/inventory-page';

type pageObject = {
    login: LoginPage;
    inventory:InventoryPage
};

export const test = objectsFixture.extend<pageObject>({
    login: async({page},use)=>{
        await use(new LoginPage(page))
    },
    inventory: async({page},use)=>{
        await use(new InventoryPage(page))
    }
});



