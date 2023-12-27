import { test } from '@playwright/test';
import {LoginPage} from '../pages/login.js';

test('test', async ({ page }) => {

  const  Login = new LoginPage(page)

  await Login.gotoLoginPage()
  await Login.login('Admin', 'admin123' )
  await page.close();

});

