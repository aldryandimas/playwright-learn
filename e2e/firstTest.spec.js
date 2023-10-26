const { test, expect } = require("@playwright/test");

test("visit 99.co homepage", async ({ page }) => {
  await page.goto("https://www.99.co/singapore");

  const searchButton = page.getByRole("button", { name: "Search" });
  await searchButton.click();
});
