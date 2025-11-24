//enroll-step3-page.js
class EnrollStep3Page {
    constructor(page) {
    this.page = page;
    this.congrats = page.getByText('Selamat! Pendaftaran anda telah berhasil.', { exact: true });
    this.hidepassword = page.locator("//img[@src='https://pmb-dev-alazharpontianak.pintro.id/assets/images/icons/icons-eye.png']");
    this.btnLogin = page.locator('#login:visible');
    }

    async waitForConfirmation() {
        await this.congrats.isVisible();
    }

    // async toggleHidePassword() {
    //     await this.hidePassword.click();
    // }

    async clickLogin() {
        await this.btnLogin.click();
    }
}

module.exports = { EnrollStep3Page };
