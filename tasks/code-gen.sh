#!/bin/bash

echo "PACKAGE_NAME=$PACKAGE_NAME" > "./.env"
node "$TASKS/bin/menu-gen.mjs" < "$DATA/menu.json" > "$STATIC/menu.json"
