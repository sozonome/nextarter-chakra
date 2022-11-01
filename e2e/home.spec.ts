import { test, expect } from "@playwright/test";

/** replace with env vars if needed */
const LOCAL_HOST_URL = "http://localhost:3000/";
const USE_THIS_TEMPLATE_TEXT = "Use This Template";
const OPEN_IN_GITHUB_TEXT = "Open in Github";

test("should shown home page", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  await expect(page.locator("h1")).toContainText("nextarter-chakra");
  await expect(
    page.locator("a", { hasText: USE_THIS_TEMPLATE_TEXT })
  ).toBeVisible();
  await expect(page.locator("a", { hasText: "Open in Github" })).toBeVisible();
});

test("click use this template should redirect to github generate project", async ({
  context,
  page,
}) => {
  await page.goto(LOCAL_HOST_URL);
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("a", { hasText: USE_THIS_TEMPLATE_TEXT }).click(), // Opens a new tab
  ]);

  await newPage.waitForLoadState();
  expect(newPage.url()).toBe(
    "https://github.com/sozonome/nextarter-chakra/generate"
  );
});

test("click use this template should redirect to github repo", async ({
  context,
  page,
}) => {
  await page.goto(LOCAL_HOST_URL);
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("a", { hasText: OPEN_IN_GITHUB_TEXT }).click(), // Opens a new tab
  ]);

  await newPage.waitForLoadState();
  expect(newPage.url()).toBe("https://github.com/sozonome/nextarter-chakra");
});
