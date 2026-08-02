import { test, expect, type Page } from "@playwright/test";

async function openSearch(page: Page) {
  const desktop = page.locator("#search-trigger");
  const mobile = page.locator("#search-trigger-mobile");
  if (await desktop.isVisible()) await desktop.click();
  else await mobile.click();
}

test.describe("Global Search", () => {
  test("opens with Ctrl/Meta+K and navigates to a bike-related result", async ({ page }) => {
    await page.goto("/");

    await page.keyboard.press("ControlOrMeta+K");
    const dialog = page.locator("#search-dialog");
    await expect(dialog).toBeVisible();

    await page.locator("#search-input").fill("bike");

    const bouticycle = page.locator("#search-results a", { hasText: "Bouticycle" });
    await expect(bouticycle).toBeVisible();

    const campus = page.locator("#search-results a", {
      hasText: "CERN Campus Amenities and Life Hacks",
    });
    await expect(campus).toBeVisible();

    await bouticycle.click();
    await expect(page).toHaveURL("/services/bouticycle");
  });

  test("search trigger is visible in the navbar on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1100, height: 800 });
    await page.goto("/");
    await expect(page.locator("#search-trigger")).toBeVisible();
    await expect(page.locator("#search-trigger-mobile")).toBeHidden();
  });

  test("mobile search button sits left of the hamburger", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const mobileSearch = page.locator("#search-trigger-mobile");
    const hamburger = page.locator(".nav-toggle-label");
    await expect(mobileSearch).toBeVisible();
    await expect(page.locator("#search-trigger")).toBeHidden();

    const searchBox = await mobileSearch.boundingBox();
    const hamBox = await hamburger.boundingBox();
    expect(searchBox).toBeTruthy();
    expect(hamBox).toBeTruthy();
    expect(searchBox!.x + searchBox!.width).toBeLessThanOrEqual(hamBox!.x + 1);

    await mobileSearch.click();
    await expect(page.locator("#search-dialog")).toBeVisible();
  });

  test("can jump to a static page from search", async ({ page }) => {
    await page.goto("/guides");
    await openSearch(page);
    await page.locator("#search-input").fill("about");
    await page.locator("#search-results a", { hasText: "About" }).click();
    await expect(page).toHaveURL("/about");
  });
});
