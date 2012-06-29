require '../../../sdk/microloader/development.js'

File  = require('pathfinder').File

global.chai   = require 'chai'

global.assert = chai.assert
global.expect = chai.expect
global.test   = it
global.sinon  = require 'sinon'
global.async  = require 'async'
global.cb     = true
