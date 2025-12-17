import { test, expect } from '@playwright/test';

test.describe('i18n - Internationalization', () => {
  test('root should redirect to a valid locale', async ({ page }) => {
    await page.goto('/');
    // Should redirect to either pt-BR (default) or detected locale
    expect(page.url()).toMatch(/\/(pt-BR|en-US|es)/);
  });

  test('should load Portuguese (pt-BR) page correctly', async ({ page }) => {
    await page.goto('/pt-BR');
    await expect(page).toHaveTitle(/Bacco ERP.*Sistema Completo para Gestão de Vinícolas/);
    // Use first() to avoid strict mode violation
    await expect(page.getByRole('heading', { name: /Do Vinhedo à Garrafa/ }).first()).toBeVisible();
  });

  test('should load English (en-US) page correctly', async ({ page }) => {
    await page.goto('/en-US');
    await expect(page).toHaveTitle(/Bacco ERP.*Complete Winery Management/);
    await expect(page.getByRole('heading', { name: /From Vineyard to Bottle/ }).first()).toBeVisible();
  });

  test('should load Spanish (es) page correctly', async ({ page }) => {
    await page.goto('/es');
    await expect(page).toHaveTitle(/Bacco ERP.*Sistema Completo para Gestión de Bodegas/);
    await expect(page.getByRole('heading', { name: /Del Viñedo a la Botella/ }).first()).toBeVisible();
  });

  test('should load Terms of Use in all languages', async ({ page }) => {
    // Portuguese
    await page.goto('/pt-BR/termos-de-uso');
    await expect(page).toHaveURL(/\/pt-BR\/termos-de-uso/);
    await expect(page.getByRole('heading', { name: 'Termos de Uso' })).toBeVisible();

    // English
    await page.goto('/en-US/terms-of-use');
    await expect(page).toHaveURL(/\/en-US\/terms-of-use/);
    await expect(page.getByRole('heading', { name: 'Terms of Use' })).toBeVisible();

    // Spanish
    await page.goto('/es/terminos-de-uso');
    await expect(page).toHaveURL(/\/es\/terminos-de-uso/);
    await expect(page.getByRole('heading', { name: 'Términos de Uso' })).toBeVisible();
  });

  test('should load Privacy Policy in all languages', async ({ page }) => {
    // Portuguese
    await page.goto('/pt-BR/politica-de-privacidade');
    await expect(page).toHaveURL(/\/pt-BR\/politica-de-privacidade/);
    await expect(page.getByRole('heading', { name: 'Política de Privacidade' })).toBeVisible();

    // English
    await page.goto('/en-US/privacy-policy');
    await expect(page).toHaveURL(/\/en-US\/privacy-policy/);
    await expect(page.getByRole('heading', { name: 'Privacy Policy' })).toBeVisible();

    // Spanish
    await page.goto('/es/politica-de-privacidad');
    await expect(page).toHaveURL(/\/es\/politica-de-privacidad/);
    await expect(page.getByRole('heading', { name: 'Política de Privacidad' })).toBeVisible();
  });

  test('comparison section should be translated', async ({ page }) => {
    // Portuguese
    await page.goto('/pt-BR');
    await expect(page.locator('text=IA Pioneira').first()).toBeVisible();

    // English
    await page.goto('/en-US');
    await expect(page.locator('text=Pioneer AI').first()).toBeVisible();

    // Spanish
    await page.goto('/es');
    await expect(page.locator('text=IA Pionera').first()).toBeVisible();
  });
});
