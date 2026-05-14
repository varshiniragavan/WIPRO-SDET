import { test, expect } from "@playwright/test";

test('check title', async ({ page }) => {
    await page.goto("https://www.techxincorporation.com/");

    const consultBtn = page.getByRole("link", { name: /Request/ }).nth(1);
    await consultBtn.click();
    expect(page.url()).toBe("https://www.techxincorporation.com/contact");
});