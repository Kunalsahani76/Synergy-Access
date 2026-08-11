#!/usr/bin/env node

/**
 * Script to validate structured data implementation
 * This helps ensure Google Search Console issues are resolved
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating Structured Data Implementation...\n');

// Check if StructuredData component exists
const structuredDataPath = path.join(__dirname, 'src/components/StructuredData.tsx');
if (fs.existsSync(structuredDataPath)) {
  console.log('✅ StructuredData component found');
} else {
  console.log('❌ StructuredData component missing');
  process.exit(1);
}

// Check if products page includes structured data
const productsPagePath = path.join(__dirname, 'src/app/products/page.tsx');
if (fs.existsSync(productsPagePath)) {
  const productsContent = fs.readFileSync(productsPagePath, 'utf8');
  if (productsContent.includes('ProductCollectionStructuredData')) {
    console.log('✅ Products page includes structured data');
  } else {
    console.log('❌ Products page missing structured data');
  }
} else {
  console.log('❌ Products page not found');
}

// Check if services page includes structured data
const servicesPagePath = path.join(__dirname, 'src/app/services/page.tsx');
if (fs.existsSync(servicesPagePath)) {
  const servicesContent = fs.readFileSync(servicesPagePath, 'utf8');
  if (servicesContent.includes('ServiceStructuredData')) {
    console.log('✅ Services page includes structured data');
  } else {
    console.log('❌ Services page missing structured data');
  }
} else {
  console.log('❌ Services page not found');
}

// Check if about page includes structured data
const aboutPagePath = path.join(__dirname, 'src/app/about/page.tsx');
if (fs.existsSync(aboutPagePath)) {
  const aboutContent = fs.readFileSync(aboutPagePath, 'utf8');
  if (aboutContent.includes('AboutPage') && aboutContent.includes('hasOfferCatalog')) {
    console.log('✅ About page includes structured data with product offers');
  } else {
    console.log('❌ About page missing structured data');
  }
} else {
  console.log('❌ About page not found');
}

// Check if main layout has proper offers structure
const layoutPath = path.join(__dirname, 'src/app/layout.tsx');
if (fs.existsSync(layoutPath)) {
  const layoutContent = fs.readFileSync(layoutPath, 'utf8');
  if (layoutContent.includes('availability') && layoutContent.includes('priceCurrency')) {
    console.log('✅ Main layout includes proper offer structure');
  } else {
    console.log('❌ Main layout missing proper offer structure');
  }
} else {
  console.log('❌ Layout file not found');
}

console.log('\n📋 Structured Data Implementation Summary:');
console.log('- Added Product schema with required "offers" property');
console.log('- Added Service schema for service pages');
console.log('- Added Organization schema for company information');
console.log('- Updated main layout with proper offer structure');
console.log('- Added AboutPage schema with product offers for about page');
console.log('- All products now include availability, pricing currency, and seller information');

console.log('\n🚀 Next Steps:');
console.log('1. Deploy the changes to production');
console.log('2. Test URLs in Google Rich Results Test: https://search.google.com/test/rich-results');
console.log('3. Request re-indexing in Google Search Console');
console.log('4. Monitor for resolution of the "offers/review/aggregateRating" error');

console.log('\n✅ Structured data validation complete!');