#!/bin/bash
# Takes in URL, sends request, and diasplays size
curl -s -w '%{size_download}\n' -o /dev/null "$1"
