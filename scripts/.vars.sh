#!/usr/bin/env bash

# The base directory relative to the script file. 
# Use this to resolve scripts relative to the script's location, as opposed to the location where the script was executed ($PWD).
SCRIPTS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Source the project's .env file for this script and any scripts sourcing it.
if [[ -f '.env' ]]; then
    source .env
fi

ROOT_DIR="${SCRIPTS_DIR}/.."
