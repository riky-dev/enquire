import { test, expect } from "@playwright/test";

test.describe("Category Filtering", () => {
  test("should filter services client-side when clicking category buttons", async ({ page }) => {
    // 1. Visit Services page
    await page.goto("/services");

    // 2. Verify all initial cards are visible
    const bouticycleCard = page.locator("#service-card-bouticycle");
    const loicAndLeaCard = page.locator("#service-card-loic-and-lea");
    const cernCarClubCard = page.locator("#service-card-cern-car-club");

    await expect(bouticycleCard).toBeVisible();
    await expect(loicAndLeaCard).toBeVisible();
    await expect(cernCarClubCard).toBeVisible();

    // 3. Filter by 'Bicycle Repair'
    const bicycleFilterBtn = page.locator("#filter-btn-bicycle-repair");
    await bicycleFilterBtn.click();

    // Bouticycle should be visible, others should be hidden
    await expect(bouticycleCard).toBeVisible();
    await expect(loicAndLeaCard).not.toBeVisible();
    await expect(cernCarClubCard).not.toBeVisible();

    // 4. Filter by 'Barbers'
    const barbersFilterBtn = page.locator("#filter-btn-barbers");
    await barbersFilterBtn.click();

    // Barber card should be visible, bicycle and car club cards should be hidden
    await expect(loicAndLeaCard).toBeVisible();
    await expect(bouticycleCard).not.toBeVisible();
    await expect(cernCarClubCard).not.toBeVisible();

    // 5. Reset filter by clicking 'All Services'
    const allFilterBtn = page.locator("#filter-btn-all");
    await allFilterBtn.click();

    // All cards should be visible again
    await expect(bouticycleCard).toBeVisible();
    await expect(loicAndLeaCard).toBeVisible();
    await expect(cernCarClubCard).toBeVisible();
  });
});
