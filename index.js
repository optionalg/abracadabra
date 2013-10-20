var spawn;

spawn = require('child_process').spawn;

module.exports = function(args) {
  var cmd, message, title;
  if (args == null) {
    args = {};
  }
  cmd = 'terminal-notifier.app/Contents/MacOS/terminal-notifier';
  cmd = "" + __dirname + "/" + cmd;
  title = args.title, message = args.message;
  return spawn(cmd, ['-title', title, '-message', message]);
};
