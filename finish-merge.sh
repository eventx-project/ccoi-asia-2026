#!/bin/bash
echo "Committing merge..." > merge_log.txt
/usr/bin/git commit --no-edit >> merge_log.txt 2>&1
echo "Pushing to origin..." >> merge_log.txt
/usr/bin/git push origin main >> merge_log.txt 2>&1
echo "Verifying..." >> merge_log.txt
/usr/bin/git rev-parse HEAD > latest_commit.txt
/usr/bin/git rev-parse origin/main > origin_commit.txt
echo "Done" >> merge_log.txt
