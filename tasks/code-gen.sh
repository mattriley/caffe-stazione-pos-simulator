#!/bin/bash

node "$TASKS/bin/menu-gen.mjs" < "$DATA/menu.json" > "$STATIC/menu.json"
