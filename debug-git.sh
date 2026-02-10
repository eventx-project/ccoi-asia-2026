#!/bin/bash
echo "Starting script" > script_log.txt
/usr/bin/git log -1 --format="%H" > git_commit_hash.txt
/usr/bin/git status > git_status.txt
/usr/bin/git log --all --name-only -n 20 | grep "tieuvi-nguyen.jpg" > git_grep_log.txt
echo "Ending script" >> script_log.txt
