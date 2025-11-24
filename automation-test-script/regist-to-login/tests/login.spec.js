const { test, expect } = require('@playwright/test');
const { EnrollStep1Page} = require('../pages/enrollstep1.page');
const { EnrollStep2Page} = require('../pages/enrollstep2.page');
const { EnrollStep3Page } = require('../pages/enrollstep3.page');
const { LoginstatePage } = require('../pages/login.page');

test('Registrasi Enroll PMB Al Azhar Pontianak', async ({ page }) => {
  const step1 = new EnrollStep1Page(page);
  await page.goto('https://pmb-dev-alazharpontianak.pintro.id/enroll-new');

  await step1.closePopupIfPresent();
  await step1.fillPersonalInfo({
    nama: 'Ardhi Automation Test kedua', //Hanya bisa 1 kali daftar nama
    place: 'Tulungagung',
    day: '20',
    month: 'Januari',
    year: '2006',
    gender: 'Laki-laki',
  });
  await step1.fillEducation({ sekolahAsal: 'SD 1 Kampung Dalem' });
  await step1.clickNext();

  //await expect(page).toHaveURL(/.*enroll-step-2/);

  const step2 = new EnrollStep2Page(page);
  await step2.fillParentInfo({
    parentName: 'Karti',
    nohp: '082257090517',
    email: 'ardhibagusk@gmail.com'
  });
  await step2.fillAddressAndConsent({
    relathionship: 'Ayah',
    country: 'INDONESIA',
    region: 'Jawa Timur',
    district: 'Tulungagung'
  });
  await step2.clickNext();

  // await expect(page).toHaveURL(/.*enroll-step-3/);

  const step3 = new EnrollStep3Page(page);
await step3.waitForConfirmation();
//await step3.toggleHidePassword();
await step3.clickLogin();

const loginState = new LoginstatePage(page);
await loginState.Loginstate();
await loginState.clickLogout();
});
