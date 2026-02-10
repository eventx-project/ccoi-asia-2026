#!/bin/bash
git add public/manifest.json
git commit -m "Fix: Replace SVG icon with PNG fallback in manifest for better device support"
git push origin main
git rev-parse HEAD > deployment_commit_hash.txt
echo "Deployment Complete"
