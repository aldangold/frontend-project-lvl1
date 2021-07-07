#!/usr/bin/env node
import buildMatch from '../src/index.js';
import game, { rulesOfGame } from '../src/games/calc.js';

buildMatch(rulesOfGame, game);
