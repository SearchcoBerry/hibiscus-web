import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(__dirname, "top-fold.png"), fullPage: false });
  await page.screenshot({ path: path.join(__dirname, "full.png"), fullPage: true });
  await browser.close();
  console.log("done");
})().catch((e) => { console.error(e); process.exit(1); });
