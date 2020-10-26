# Better Readability Console
*A package to help read through your browser JavaScript.*

This package was created cause, I sometimes have issues seeing specific console logs.
therefore I added this simple package to help with that issue.


The pack is used to help the user, with better visibility when using the `console.log()` feature, to check your web based `JS`.

## Usage
Install the package with `npm install @lbhindsberg/brc`.

```javaScript
var brc = require("@lbhindsberg/brc)

BRC("%c I am easier to read."); // BRC = BetterReadabilityConsole

BRCImportant("%cI am more important!");

BRCWarning("%cI warn you!");

BRCFinished("%CFinished Example");
```
*Shortened function to BRC for faster usage.*

**Important remember to use `%c` Before each string, to allow styling.**
    
### Example 
*You've just fetched a huge array, and tried to `console.log()`'d it, but it didnt show up in your console*

To figure out where your function went wrong you enter
```javascript
//fetching badabing badaboom
BRC("%CFinished Fetching");

//Printing out into console
BRC("%CFinished printing array");

```