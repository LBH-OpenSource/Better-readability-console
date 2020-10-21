# Better Readability Console
*A package to help read through your browser JavaScript.*

This package was created cause, I sometimes have issues seeing specific console logs.
therefore I added this simple package to help with that issue.

## Usage
Install the package with `npm install @lbhindsberg/brc`.

```javaScript
var brc = require("@lbhindsberg/brc)

BRC("%c I am easier to read."); // BRC = BetterReadabilityConsole

BRCImportant("%cI am more important!");
```
*Shortened function to BRC for faster usage.*

**Important remember to use `%c` Before each string, to allow styling.**
    