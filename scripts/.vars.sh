#!/usr/bin/env bash

# The base directory relative to the script file. 
# Use this to resolve scripts relative to the script's location, as opposed to the location where the script was executed ($PWD).
SCRIPTS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Source the project's .env file for this script and any scripts sourcing it.
if [[ -f '.env' ]]; then
    source .env
fi

ROOT_DIR="${SCRIPTS_DIR}/.."

function packageName() {
    _PACKAGE_DIR=$1
    echo $(cat $_PACKAGE_DIR/package.json | grep name | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[[:space:]]')
}

function branch() {

    # If we are supplied BRANCH_NAME by GCP in a triggered build...
    if [[ -z $BRANCH ]]; then export BRANCH=$BRANCH_NAME; fi

    # If we are in a git repo, try loading branch from git directly.
    if [[ -z $BRANCH ]]; then export BRANCH=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,'); fi

    echo $BRANCH
}

export BRANCH=$(branch)
