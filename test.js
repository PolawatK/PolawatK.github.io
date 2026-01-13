const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    // Collect console errors
    const consoleErrors = [];
    page.on('console', msg => {
        if (msg.type() === 'error') {
            consoleErrors.push(msg.text());
        }
    });

    page.on('pageerror', err => {
        consoleErrors.push(err.message);
    });

    try {
        // Navigate to the HTML file
        await page.goto(`file:///workspace/index.html`, { waitUntil: 'networkidle' });

        // Wait for page to fully load
        await page.waitForLoadState('domcontentloaded');

        console.log('Page loaded successfully!');

        // Check for key elements
        const checks = [
            { selector: '.navbar', name: 'Navigation bar' },
            { selector: '#home', name: 'Hero section' },
            { selector: '#education', name: 'Education section' },
            { selector: '#experience', name: 'Experience section' },
            { selector: '#skills', name: 'Skills section' },
            { selector: '#certifications', name: 'Certifications section' },
            { selector: '#contact', name: 'Contact section' },
            { selector: '.hero-text h1', name: 'Hero heading' },
            { selector: '.projects-grid', name: 'Projects grid' },
            { selector: '.skills-container', name: 'Skills container' },
            { selector: '.cert-grid', name: 'Certifications grid' }
        ];

        let allPassed = true;
        for (const check of checks) {
            const element = await page.$(check.selector);
            if (element) {
                console.log(`✓ ${check.name} found`);
            } else {
                console.log(`✗ ${check.name} NOT found`);
                allPassed = false;
            }
        }

        // Test navigation links
        const navLinks = await page.$$('.nav-links a');
        console.log(`✓ Found ${navLinks.length} navigation links`);

        // Test project cards
        const projectCards = await page.$$('.project-card');
        console.log(`✓ Found ${projectCards.length} project cards`);

        // Test skill badges
        const skillBadges = await page.$$('.skill-badge');
        console.log(`✓ Found ${skillBadges.length} skill badges`);

        // Report console errors
        if (consoleErrors.length > 0) {
            console.log('\n⚠ Console Errors:');
            consoleErrors.forEach(err => console.log(`  - ${err}`));
            allPassed = false;
        } else {
            console.log('\n✓ No console errors detected');
        }

        console.log('\n' + (allPassed ? '✓ All tests passed!' : '✗ Some tests failed'));

    } catch (error) {
        console.error('Test error:', error.message);
    } finally {
        await browser.close();
    }
})();
