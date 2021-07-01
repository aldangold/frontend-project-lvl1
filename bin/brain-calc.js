#!/usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import buildMatch from '../src/index.js';
import { calc, rulesOfGame } from '../src/games/calc.js';

buildMatch(rulesOfGame, calc);
