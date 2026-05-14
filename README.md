# 🚀 Playwright-UI-API-TS

Automation framework built using **Playwright** with **TypeScript** for robust and scalable **UI testing**, with plans to include **API automation**. This project uses **Playwright Test Runner** and integrates with **GitHub Actions** for continuous integration and **Allure** for comprehensive test reporting.

**Current Status**: ✅ All tests passing | 🟢 100% pass rate | 📊 6 test cases

---

## 🧰 Tech Stack

- 🎭 [Playwright](https://playwright.dev) v1.52.0 – UI automation across Chromium, Firefox, WebKit
- 🟦 TypeScript v5 – Static typing for maintainable code
- 🧪 Playwright Test Runner – Native test runner with parallel execution
- ☁️ GitHub Actions – CI pipeline for every commit/PR
- 📊 [Allure Reports](https://docs.qameta.io/allure/) – Beautiful test reports with trends and analytics
- 📁 Page Object Model – Modular test structure with reusable components

---

## 📁 Project Structure

```bash
Playwright-UI-API-TS/
├── .github/workflows/       # GitHub Actions CI/CD workflows
├── tests/
│   └── ui-practice/         # UI test specs
│       ├── accounts.spec.ts
│       ├── home.spec.ts
│       └── upload.spec.ts
├── pages/                   # Page Object Models
│   ├── home.page.ts
│   ├── cart.page.ts
│   └── component/
│       └── upload.comp.ts
├── pages/fixtures/
│   └── pages.fixture.ts     # Reusable test fixtures
├── storageStates/           # Playwright auth storage
├── utils/
│   └── global-setup.ts      # Global setup/teardown
├── allure-report/           # Allure report output
├── allure-results/          # Raw test results
├── playwright.config.ts     # Playwright configuration
├── tsconfig.json            # TypeScript config
├── env.config.ts            # Environment configuration
├── package.json
└── README.md
```

---

## 📦 Installation

### Prerequisites

- **Node.js** v16+ ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/SabFloki/Playwright-UI-API-TS.git
   cd Playwright-UI-API-TS
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

---

## 🚀 Getting Started

### Run All Tests

```bash
npm run ui-test
```

### Run Tests in Headed Mode (see browser)

```bash
npx playwright test tests/ui-practice --headed
```

### Run Tests with Debug Mode

```bash
npx playwright test tests/ui-practice --debug
```

### Run Specific Test File

```bash
npx playwright test tests/ui-practice/home.spec.ts
```

### Run Tests with Specific Browser

```bash
npx playwright test --project=chromium
```

Available browsers: `chromium`, `firefox`, `webkit`

---

## 📊 Reporting

### Generate Allure Report

```bash
npm run allure-report
```

This command:

1. Generates a beautiful HTML report from test results
2. Opens the report in your default browser
3. Displays metrics, trends, and detailed test information

### View Playwright HTML Report

```bash
npx playwright show-report
```

---

## ⚙️ Configuration

### Test Environment

Edit `env.config.ts` to change test environments:

```typescript
export enum ENVIRONMENTS {
  qa = "https://demo.automationtesting.in",
  test = "https://practice.sdetunicorns.com",
}
```

### Playwright Config

Configure test behavior in `playwright.config.ts`:

- Browser options
- Timeout settings
- Retry policies
- Screenshot/video capture
- Reporter settings

---

## 📝 Available Scripts

| Script            | Command                 | Description                   |
| ----------------- | ----------------------- | ----------------------------- |
| **UI Tests**      | `npm run ui-test`       | Run all UI tests              |
| **Allure Report** | `npm run allure-report` | Generate & open Allure report |
| **Lint**          | `npm run lint`          | Run ESLint for code quality   |

---

## 📋 Test Coverage

### Current Tests

✅ **Home Page Tests** (home.spec.ts)

- Homepage title verification
- Navigation link validation
- Button interactions
- Text selectors
- Broken links detection

✅ **Cart/Upload Tests** (upload.spec.ts)

- File upload functionality
- Success message verification
- Multi-browser support

✅ **Account Tests** (accounts.spec.ts)

- My Account page navigation
- Orders and Downloads links
- Login/Register form visibility

---

## 🔄 CI/CD Pipeline

Tests run automatically on:

- **Every commit** to `main` or `develop` branches
- **Pull requests** to track regression
- **Scheduled runs** (optional cron jobs)

GitHub Actions workflow generates HTML reports and artifacts.

---

## 🛠️ Development Guidelines

### Page Object Model Pattern

Create reusable page objects for each page:

```typescript
import { Page, Locator } from "playwright";

class HomePage {
  private page: Page;
  getStartedBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedBtn = page.locator("#get-started");
  }

  async navigateTo() {
    await this.page.goto("/");
  }
}
```

### Writing Tests

Use fixtures for page objects:

```typescript
import { test, expect } from "../../pages/fixtures/pages.fixture";

test("Test description", async ({ page, homePage }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Expected Title");
});
```

### Type Safety

- Always use TypeScript types instead of `any`
- Enable strict mode in `tsconfig.json`
- Follow ESLint rules

---

## 🐛 Troubleshooting

### Tests Failing

1. Check `allure-results/` for detailed failure info
2. View screenshots in Allure report
3. Run with `--debug` flag for step-by-step execution

### Port Conflicts

If Allure report fails to open, the port may be in use:

```bash
npx allure generate allure-results --clean -o allure-report
```

### Browser Issues

Reinstall Playwright browsers:

```bash
npx playwright install --with-deps
```

---

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright Testing Guide](https://playwright.dev/docs/intro)
- [Allure Report Docs](https://docs.qameta.io/allure/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 📄 License

This project is licensed under the ISC License.

---

## 👤 Author

**Sab Floki**

- GitHub: [@SabFloki](https://github.com/SabFloki)
- Repository: [Playwright-UI-API-TS](https://github.com/SabFloki/Playwright-UI-API-TS)

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📞 Support

For issues, questions, or suggestions, please open a [GitHub Issue](https://github.com/SabFloki/Playwright-UI-API-TS/issues).
