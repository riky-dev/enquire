import { test, expect } from "@playwright/test";

test.describe("Navigation Flow", () => {
  test("should navigate through core pages and load main components", async ({ page }) => {
    // 1. Load Homepage
    await page.goto("/");
    await expect(page).toHaveTitle(/Enquire/);
    await expect(page.locator(".hero-section h1")).toContainText("Enquire");

    // 2. Navigate to Services Directory
    await page.locator("#cta-view-directory").click();
    await expect(page).toHaveURL("/services");
    await expect(page.locator(".directory-header h1")).toContainText("Services Directory");
    await expect(page.locator("#btn-suggest-service-header")).toBeVisible();

    // 3. Navigate to Suggest a Place via the services page header button
    await page.locator("#btn-suggest-service-header").click();
    await expect(page).toHaveURL("/suggest");
    await expect(page.locator(".suggest-header h1")).toContainText("Suggest a Place");

    // Verify Suggestion Form iframe exists
    const iframe = page.locator("iframe");
    await expect(iframe).toBeVisible();

    // 4. Navigate to Guides Directory
    await page.goto("/guides");
    await expect(page).toHaveURL("/guides");
    await expect(page.locator(".guides-header h1")).toContainText("Guides");
    await expect(page.locator("#btn-suggest-guide-header")).toBeVisible();

    // Verify guides categories are listed
    await expect(page.locator("#cat-getting-here")).toContainText("Getting Here");
    await expect(page.locator("#cat-housing")).toContainText("Housing");

    // 5. Navigate to a specific guide (e.g. cern-campus-hacks)
    await page.locator("#guide-card-cern-campus-hacks").click();
    await expect(page).toHaveURL("/guides/cern-campus-hacks");
    await expect(page.locator(".guide-header h1")).toContainText(
      "CERN Campus Amenities and Life Hacks",
    );
    await expect(page.locator("#btn-suggest-guide-detail")).toBeVisible();
  });
});
