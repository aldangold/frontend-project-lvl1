#!/usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import buildMatch from '../src/index.js';
import { gcd, rulesOfGame } from '../src/games/gcd.js';

buildMatch(rulesOfGame, gcd);
