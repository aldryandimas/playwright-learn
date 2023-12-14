const { test, expect } = require("@playwright/test");

test.describe("Enquiry flow Must See", () => {
  test("Whatsapp enquiry on logout", async ({ page }) => {
    const popupPromise = page.waitForEvent("popup");
    const expectedTitle = "Share on WhatsApp";
    await page.goto("/singapore/sale/freehold");
    await page.waitForTimeout(2000);

    await page
      .getByText("Recommended")
      .nth(0)
      .click();

    const mustSee = await page
      .locator('[src="/images/web-icons/listing-card/must-see-icon.svg"]')
      .nth(0)
      .locator("..")
      .locator("..")
      .locator("..");

    await mustSee.scrollIntoViewIfNeeded();
    await mustSee.locator('[data-cy="whatsapp"]').click();

    const popup = await popupPromise;
    const actualTitle = await popup.title();
    await expect(actualTitle).toBe(expectedTitle);
  });

  test("Phone enquiry on logout", async ({ page }) => {
    await page.goto("/singapore/sale/freehold");
    await page.waitForTimeout(2000);

    await page
      .getByText("Recommended")
      .nth(0)
      .click();

    const mustSee = await page
      .locator('[src="/images/web-icons/listing-card/must-see-icon.svg"]')
      .nth(0)
      .locator("..")
      .locator("..")
      .locator("..");

    await mustSee.scrollIntoViewIfNeeded();
    await mustSee.locator('[data-cy="phone"]').click();

    await page.waitForTimeout(1000);

    const agentPhone = await page.textContent('[data-cy="agentPhoneNo"]');
    const hrefVal = await page.evaluate(() =>
      document.querySelector('[data-cy="callAgent"]').getAttribute("href")
    );
    const hrefPhone = hrefVal.replace("tel:", "");

    await expect(hrefPhone).toBe(agentPhone);
  });
});
