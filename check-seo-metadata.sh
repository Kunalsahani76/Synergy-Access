#!/bin/bash

# SEO Metadata Checker Script
# This script verifies that all important pages have metadata

echo "=================================================="
echo "   SEO METADATA VERIFICATION REPORT"
echo "=================================================="
echo ""

# Check if metadata utility exists
if [ -f "src/lib/metadata.ts" ]; then
    echo "✅ Metadata utility found: src/lib/metadata.ts"
else
    echo "❌ Metadata utility NOT found: src/lib/metadata.ts"
fi

echo ""
echo "Layouts with Metadata:"
echo "----------------------"

layout_count=0

# Find all layout files and check for metadata
find src/app -name "layout.tsx" -type f | while read -r layout; do
    if grep -q "metadata" "$layout"; then
        echo "✅ $layout"
        ((layout_count++))
    else
        echo "⚠️  $layout (no metadata export found)"
    fi
done

echo ""
echo "=================================================="
echo "Page Metadata Summary:"
echo "=================================================="
echo ""

# Check specific important pages
check_page() {
    local page=$1
    local layout="src/app/$page/layout.tsx"
    
    if [ -f "$layout" ]; then
        if grep -q "metadata" "$layout"; then
            echo "✅ /$page - Has metadata"
        else
            echo "⚠️  /$page - Layout exists but no metadata"
        fi
    else
        echo "❌ /$page - No layout file"
    fi
}

echo "Main Pages:"
echo "-----------"
check_page "about"
check_page "contact"
check_page "blog"
check_page "privacy"
check_page "terms"
check_page "consultancy"
check_page "assistance"

echo ""
echo "Product Pages:"
echo "--------------"
check_page "products/boomBarrier"
check_page "products/bollards"
check_page "products/tripod-turnstile"
check_page "products/flap-swing-barrier"
check_page "products/full-height-turnstile"
check_page "products/tyre-killer"
check_page "products/road-blocker"
check_page "products/parking-management"
check_page "products/anpr-solution"
check_page "products/dfmd"
check_page "products/hhmd"
check_page "products/baggage-scanner"
check_page "products/uvss"
check_page "products/biometric-fingerprint"
check_page "products/visitor-management"
check_page "products/rfid-solution"
check_page "products/qr-solutions"
check_page "products/face-recognition"
check_page "products/siren-system"

echo ""
echo "=================================================="
echo "Total Layout Files: $(find src/app -name "layout.tsx" -type f | wc -l)"
echo "=================================================="
echo ""
echo "Next Steps:"
echo "-----------"
echo "1. Verify metadata appears in browser view-source"
echo "2. Test with Google Rich Results Test"
echo "3. Submit sitemap to Google Search Console"
echo "4. Monitor search performance"
echo ""
