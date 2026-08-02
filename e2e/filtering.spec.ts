import { test, expect } from "@playwright/test";

test.describe("Category Filtering", () => {
  test("should filter services client-side when clicking category buttons", async ({ page }) => {
    // 1. Visit Services page
    await page.goto("/services");

    // 2. Verify all initial cards are visible
    const bouticycleCard = page.locator("#service-card-bouticycle");
    const leBarbierDuCoinCard = page.locator("#service-card-le-barbier-du-coin");
    const cernCarClubCard = page.locator("#service-card-cern-car-club");

    await expect(bouticycleCard).toBeVisible();
    await expect(leBarbierDuCoinCard).toBeVisible();
    await expect(cernCarClubCard).toBeVisible();

    // 3. Filter by 'Bicycle Repair'
    const bicycleFilterBtn = page.locator("#filter-btn-bicycle-repair");
    await bicycleFilterBtn.click();

    // Bouticycle should be visible, others should be hidden
    await expect(bouticycleCard).toBeVisible();
    await expect(leBarbierDuCoinCard).not.toBeVisible();
    await expect(cernCarClubCard).not.toBeVisible();
    await expect(page).toHaveURL(/[?&]category=bicycle-repair/);

    // 4. Filter by 'Barbers'
    const barbersFilterBtn = page.locator("#filter-btn-barbers");
    await barbersFilterBtn.click();

    // Barber card should be visible, bicycle and car club cards should be hidden
    await expect(leBarbierDuCoinCard).toBeVisible();
    await expect(bouticycleCard).not.toBeVisible();
    await expect(cernCarClubCard).not.toBeVisible();
    await expect(page).toHaveURL(/[?&]category=barbers/);

    // 5. Reset filter by clicking 'All Services'
    const allFilterBtn = page.locator("#filter-btn-all");
    await allFilterBtn.click();

    // All cards should be visible again; category param cleared
    await expect(bouticycleCard).toBeVisible();
    await expect(leBarbierDuCoinCard).toBeVisible();
    await expect(cernCarClubCard).toBeVisible();
    await expect(page).toHaveURL(/\/services\/?$/);
  });

  test("should apply category from URL on load", async ({ page }) => {
    await page.goto("/services?category=barbers");

    await expect(page.locator("#filter-btn-barbers")).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("#service-card-le-barbier-du-coin")).toBeVisible();
    await expect(page.locator("#service-card-bouticycle")).not.toBeVisible();
    await expect(page.locator("#service-card-cern-car-club")).not.toBeVisible();
  });

  test("should fall back to all for invalid category param", async ({ page }) => {
    await page.goto("/services?category=not-a-real-category");

    await expect(page.locator("#filter-btn-all")).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("#service-card-bouticycle")).toBeVisible();
    await expect(page.locator("#service-card-le-barbier-du-coin")).toBeVisible();
    await expect(page.locator("#service-card-cern-car-club")).toBeVisible();
  });

  test("should restore previous filter on browser back", async ({ page }) => {
    await page.goto("/services");

    await page.locator("#filter-btn-bicycle-repair").click();
    await expect(page).toHaveURL(/[?&]category=bicycle-repair/);
    await expect(page.locator("#service-card-bouticycle")).toBeVisible();
    await expect(page.locator("#service-card-le-barbier-du-coin")).not.toBeVisible();

    await page.locator("#filter-btn-barbers").click();
    await expect(page).toHaveURL(/[?&]category=barbers/);

    await page.goBack();
    await expect(page).toHaveURL(/[?&]category=bicycle-repair/);
    await expect(page.locator("#service-card-bouticycle")).toBeVisible();
    await expect(page.locator("#service-card-le-barbier-du-coin")).not.toBeVisible();
  });
});
