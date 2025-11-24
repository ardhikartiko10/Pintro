//enroll-step4-page.js
class LoginstatePage {
    constructor(page) {
    this.page = page;

    this.halotext = page.locator('div.font-size-24.font-weight-300:visible');
    this.menuPayment = page.getByText('Pembayaran', { exact: true });
    this.payment = page.getByRole('link', { name: 'Pembayaran Aktif' });
    this.selectPayment = page.locator(':text("Klik disini untuk pilih pembayaran")');
    this.popupPaymentMethod = page.locator('h5.modal-title.font-weight-600.font-size-24:visible');
    this.selectMandiri = page.locator('div').filter({ hasText: 'Virtual Account Mandiri' }).last();
    this.confirmPayment = page.locator('#changeChannel:visible');
    this.PayInvoice = page.getByText('Bayar Tagihan');
    this.Logout = page.locator('img.image');
    }


    async Loginstate() {
    await this.halotext.isVisible();
    await this.menuPayment.click();
    await this.payment.click();
    await this.selectPayment.click();
    await this.selectMandiri.click();
    await this.confirmPayment.click();
    await this.PayInvoice.click();
    }

    async clickLogout() {
    await this.Logout.click();
    }
}

module.exports = { LoginstatePage };
