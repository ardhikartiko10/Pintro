// enroll-step1-page.js
class EnrollStep1Page {
  constructor(page) {
    this.page = page;

    this.popup = page.getByText('Mohon diperhatikan');
    this.closepopup = page.getByText('Baik, Saya mengerti', { exact: true });

    this.inputNama = page.getByPlaceholder('Isi nama lengkap', { exact: true });
    this.placeborn = page.getByPlaceholder('Tempat Lahir', { exact: true });
    this.tanggal = page.locator('//input[@name="dob_day"]');
    this.bulan = page.locator('select[name="dob_month"]');
    this.tahun = page.locator('input[name="dob_year"]');
    this.genderMale = page.getByRole('radio', { name: 'Laki-laki' });
    this.genderFemale = page.getByRole('radio', { name: 'Perempuan' });

    this.grade = page.locator('[name="level"]');
    this.school = page.locator('[name="ng_department_id"]');
    this.type = page.locator('select[name="ng_applicant_type_id"]');
    this.class = page.locator('[name="ng_class_level_id"]');
    this.typeClass = page.locator('[name="ng_class_type_id"]');
    this.method = page.getByTitle('Pilih Metode Seleksi', { exact: true });

    this.beforeschool = page.locator('div').filter({ hasText: 'Pilih Jenis Sekolah' }).last();
    this.valuebeforeSchool = page.locator('a:has-text("Negeri")');
    this.inputschool = page.getByPlaceholder('Isi Nama Sekolah Asal');
    this.infoRegist = page.locator("//div[contains(text(),'Pilih Sumber')]");
    this.valueinfoRegist = page.locator('a').filter({ hasText: 'Internet' }).first();
    this.reason = page.locator('div').filter({ hasText: 'Pilih Alasan Anda Mendaftar' }).last();
    this.valuereason = page.locator('a:has-text("Dekat Dari Kantor")');

    this.btnNext = page.locator('button').filter({ hasText: 'Selanjutnya' }).first();
  }

  async closePopupIfPresent() {
    if (await this.popup.isVisible()) {
      await this.closepopup.click();
    }
  }

  async fillPersonalInfo({ nama, place, day, month, year, gender }) {
    await this.inputNama.fill(nama);
    await this.placeborn.fill(place);
    await this.tanggal.fill(day);
    await this.bulan.selectOption({ label: month });
    await this.tahun.fill(year);

    if (gender === 'Laki-laki') {
      await this.genderMale.check();
    } else {
      await this.genderFemale.check();
    }
  }

  async fillEducation({ sekolahAsal }) {
    await this.grade.selectOption('SMP');
    await this.school.selectOption('SMP Islam Al Azhar 17 Pontianak');
    await this.type.selectOption('Pendaftar Baru');
    await this.class.selectOption('Kelas 7');

    await this.typeClass.selectOption('Reguler');
    await this.method.selectOption('Penerimaan Dengan Jalur Test');

    await this.beforeschool.click();
    await this.valuebeforeSchool.click();
    await this.inputschool.fill(sekolahAsal);

    await this.infoRegist.click();
    await this.valueinfoRegist.click();
    await this.reason.click();
    await this.valuereason.click();
  }

  async clickNext() {
    await this.btnNext.click();
  }
}

module.exports = { EnrollStep1Page };
