#!/usr/bin/env bash

browserify -e "./src/app.js" -o "./public/js/bundle.js" && \
    minify -o "./public/js/bundle.min.js" "./public/js/bundle.js" && \
    rm -f "./public/js/bundle.js"
