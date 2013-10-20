{spawn} = require 'child_process'

module.exports = (args = {}) ->
  
  cmd = 'terminal-notifier.app/Contents/MacOS/terminal-notifier'
  
  cmd = "#{__dirname}/#{cmd}"
  
  {title, message} = args
  
  return spawn cmd, ['-title', title, '-message', message]