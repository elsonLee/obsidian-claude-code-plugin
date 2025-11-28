#!/bin/bash

# Release script for Claude Code Integration plugin
# Author: David Alcalá
# Repository: https://github.com/deivid11/obsidian-claude-code-plugin

set -e  # Exit on error

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 Claude Code Integration - Release Preparation"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Check if version argument is provided
if [ -z "$1" ]; then
    echo "❌ Error: Version number required"
    echo ""
    echo "Usage: ./release.sh <version>"
    echo "Example: ./release.sh 1.0.0"
    echo ""
    exit 1
fi

VERSION=$1

# Validate version format (semantic versioning)
if ! [[ $VERSION =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "❌ Error: Invalid version format"
    echo "   Version must be in format: MAJOR.MINOR.PATCH (e.g., 1.0.0)"
    echo ""
    exit 1
fi

echo "📋 Release version: $VERSION"
echo ""

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  Warning: You have uncommitted changes"
    echo ""
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Release cancelled"
        exit 1
    fi
    echo ""
fi

# Update version in manifest.json
echo "📝 Updating version in manifest.json..."
sed -i "s/\"version\": \".*\"/\"version\": \"$VERSION\"/" manifest.json

# Update version in package.json
echo "📝 Updating version in package.json..."
sed -i "s/\"version\": \".*\"/\"version\": \"$VERSION\"/" package.json

echo "✅ Version updated to $VERSION"
echo ""

# Build the plugin
echo "🔨 Building plugin..."
./build.sh

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Build failed. Aborting release."
    exit 1
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Release Files Ready"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Create release directory
RELEASE_DIR="obsidian-claude-code-plugin-$VERSION"
if [ -d "$RELEASE_DIR" ]; then
    echo "🗑️  Removing existing release directory..."
    rm -rf "$RELEASE_DIR"
fi

echo "📁 Creating release directory: $RELEASE_DIR"
mkdir -p "$RELEASE_DIR"

# Copy release files
echo "📦 Copying release files..."
cp main.js "$RELEASE_DIR/"
cp manifest.json "$RELEASE_DIR/"
cp styles.css "$RELEASE_DIR/"
cp LICENSE "$RELEASE_DIR/"
cp README.md "$RELEASE_DIR/"

echo "✅ Release files copied to $RELEASE_DIR/"
echo ""

# Show what's in the release directory
echo "📦 Release contents:"
ls -lh "$RELEASE_DIR/" | awk '{if(NR>1) print "   " $9 " (" $5 ")"}'
echo ""

# Create zip file
ZIP_FILE="$RELEASE_DIR.zip"
if [ -f "$ZIP_FILE" ]; then
    echo "🗑️  Removing existing zip file..."
    rm -f "$ZIP_FILE"
fi

echo "🗜️  Creating zip file: $ZIP_FILE"
cd "$RELEASE_DIR"
zip -q ../"$ZIP_FILE" main.js manifest.json styles.css
cd ..
echo "✅ Zip file created"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📋 Next Steps"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. Review the changes:"
echo "   git diff manifest.json package.json"
echo ""
echo "2. Commit the version update:"
echo "   git add manifest.json package.json main.js"
echo "   git commit -m \"Release version $VERSION\""
echo ""
echo "3. Create a git tag:"
echo "   git tag -a $VERSION -m \"Release version $VERSION\""
echo ""
echo "4. Push to GitHub:"
echo "   git push origin main"
echo "   git push origin $VERSION"
echo ""
echo "5. Create GitHub Release:"
echo "   • Go to: https://github.com/deivid11/obsidian-claude-code-plugin/releases/new"
echo "   • Tag: $VERSION"
echo "   • Title: Version $VERSION"
echo "   • Upload files from: $RELEASE_DIR/ or use $ZIP_FILE"
echo "   • Files to upload:"
echo "     - main.js"
echo "     - manifest.json"
echo "     - styles.css"
echo "   • Or upload the complete zip: $ZIP_FILE"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Ask if user wants to commit and tag
read -p "Do you want to commit and tag now? (y/N): " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "🔀 Committing changes..."
    git add manifest.json package.json main.js
    git commit -m "Release version $VERSION"

    echo "🏷️  Creating tag..."
    git tag -a "$VERSION" -m "Release version $VERSION"

    echo ""
    echo "✅ Committed and tagged!"
    echo ""

    read -p "Push to GitHub now? (y/N): " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo ""
        echo "⬆️  Pushing to GitHub..."
        git push origin main
        git push origin "$VERSION"
        echo ""
        echo "✅ Pushed to GitHub!"
        echo ""
        echo "🎉 Now create the GitHub release at:"
        echo "   https://github.com/deivid11/obsidian-claude-code-plugin/releases/new"
        echo ""
    fi
fi

echo "🎉 Release preparation complete!"
echo ""
