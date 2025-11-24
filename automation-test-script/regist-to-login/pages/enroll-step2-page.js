//enroll-step2-page.js
class EnrollStep2Page {
    constructor(page) {
    this.page = page;

    this.parentName = page.getByPlaceholder('Nama Lengkap Orang Tua / Wali');
    this.relationship = page.getByText('Pilih hubungan pendaftar dengan murid', { exact: true });
    this.valueRelationship = page.locator('a:has-text("Ayah")');
    this.address = page.getByPlaceholder('Isikan alamat lengkap domisili', { exact: true });
    this.country = page.locator("//div[contains(text(),'Pilih Negara')]");
    this.selectCountry = page.locator("//div[@class='dropdown-menu show']//input[@aria-label='Search']");
    this.selectRegion = page.locator('a:has-text("JAWA TIMUR")');
    this.region = page.locator('button').filter({ hasText: '--Pilih--' }).first();
    this.district = page.locator('button').filter({ hasText: '--Pilih--' }).first();
    this.selectDistrict = page.locator('button').filter({ hasText: '--Pilih--' }).last();
    this.phone = page.getByPlaceholder('Handphone');
    this.mail = page.getByPlaceholder('Email');
    this.checkbox = page.locator('input[type="checkbox"]');

    this.btnNext = page.locator('button').filter({ hasText: 'Selanjutnya' }).nth(1);
    }

    async fillParentInfo({ parentName, nohp, email }) {
    await this.parentName.fill(parentName);
    await this.address.fill('Perum Purimas');
    await this.phone.fill(nohp);
    await this.mail.fill(email);
    }

    async fillAddressAndConsent({ relationship, country, region, district }) {
    await this.relationship.click();
    await this.valueRelationship.filter({ hasText: relationship }).click(); 

    await this.country.click();
    await this.selectCountry.click(country); 

    await this.region.click();
    await this.selectRegion.click(region);

    await this.district.click();
    await this.selectDistrict.click(district);
    await this.checkbox.click();
    }

  async clickNext() {
    await this.btnNext.click();
  }
}

module.exports = { EnrollStep2Page };
