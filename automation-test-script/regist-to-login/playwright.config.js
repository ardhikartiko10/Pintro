import { defineConfig } from '@playwright/test';

export default defineConfig({
  // folder untuk test‐file Anda
  testDir: 'tests',
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },

    // bagian video:
    video: 'on',        // opsi bisa: 'off' | 'on' | 'retain-on-failure' | 'on-first-retry' :contentReference[oaicite:1]{index=1}
    //custom ukuran video:
    // video: { mode: 'on', size: { width: 640, height: 480 } },
  },
  outputDir: 'test-results',      // hasil video/screenshot/trace akan disimpan di sini :contentReference[oaicite:2]{index=2}
});
