$prog="cmd.exe"
$p1 = "/c node C:\Users\Anon\Documents\GitHub\LogSee\DevTools\LogCreator.js"
$p2 = "/c node C:\Users\Anon\Documents\GitHub\LogSee\Client\runClient.js"
$p3 = "/c node C:\Users\Anon\Documents\GitHub\LogSee\Server\runServer.js"

Start-Process $prog -Argument $p1
Start-Process $prog -Argument $p2
Start-Process $prog -Argument $p3