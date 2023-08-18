#!/bin/bash

node "$TASKS/bin/menu-gen.mjs" < "$DATA/menu.json" > "$WEB_STATIC/menu.json"
