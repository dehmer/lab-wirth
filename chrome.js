#!/usr/bin/env node
const chromium = require('chromium')
const {execFile} = require('child_process')
execFile(chromium.path, ['http://localhost:3000'])