const { test, expect } = require("@playwright/test");

// element selectors

test.describe("Login flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/singapore/");
  });

  test("Login verified", async ({ page }) => {
    const loginButton = page.locator('[data-cy="navLogin"]');
    const email = page.locator('[data-cy="email_or_phone"]');
    const password = page.locator('[data-cy="password"]');
    const login = page.locator('[data-cy="login"]');

    await loginButton.click();

    await expect(page.getByText("Why sign up")).toBeVisible();

    await email.fill("test99@99.co");
    await password.fill("000000");
    await login.click();

    await expect(page.locator("form:nth-child(2)")).not.toBeVisible();

    await expect(page.getByRole("link", { name: "Log in" })).not.toBeVisible();

    await expect(
      page.getByText(`Singapore's Smarter Property Search`)
    ).toBeVisible();
  });

  test("Login unverified", async ({ page }) => {
    await page.click('[data-cy="navLogin"]');
    await page.fill('[data-cy="email_or_phone"]', "isty@99.co");
    await page.fill('[data-cy="password"]', "qwerty");
    await page.click('[data-cy="login"]');

    await page.locator("#content").click({ position: { x: 700, y: 700 } });

    await expect(page.getByText("Welcome Istiqomah!")).not.toBeVisible();

    await expect(page.getByRole("link", { name: "Log in" })).not.toBeVisible();
    await expect(page.locator('[data-cy="navProfile"]')).toBeVisible();
    await expect(
      page.getByText(`Singapore's Smarter Property Search`)
    ).toBeVisible();
  });
});
