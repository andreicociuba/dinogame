# dinogame
Auto-player for the Chrome dinosaur runner game

# Introduction
The Dinosaur Runner Game is included by default in Google Chrome.

When you are not connected to the internet, the error page contains a small dinosaur. If you press the space bar, it will start the game in an HTML canvas.

Press SPACE or ARROW_UP to jump and ARROW_DOWN to duck.
# How To Play Game when Online
If you want to play the game and also have internet connectivity, you can:

1. Open a new Tab

2. Press F12 

3. In the appearing Developer Section, go to the Network tab and make sure "Offline" is CHECKED

4. Go to any web page

5. Press SPACE when the error message appears

# How to use the auto-player
1. If you didn't close the Developer Console, go on, else open it again pressing F12

2. Go to the "Console" tab and paste the code in the dinogame.js file

3. press ENTER

#Credits, History and Apologies

I initially used Autohotkey for this, by checking the colors of pixels on the screen, but because of framerate variation and general low responsiveness, it gave mixed results.

Then I discovered this:
https://www.youtube.com/watch?v=KPxV8f-VeeM
which just sets the Z height of the dinosaur above the height of any incoming obstacles (after fixing some errors in the code provided in the description). This seemed completely unnatural. I wanted something that PLAYS the game instead of completely rigging it.

While I have no experience with Javascript, I found it sufficiently easy to read the code available here: https://github.com/wayou/t-rex-runner/blob/gh-pages/js/game.js and by some googling (and stack-exchange-ing)I found a way to grab pixels within Javascript directly from the HTML Canvas. This is of course faster, because it all runs within the JavaScript engine in the browser. It also works better because i now dont have to compare colors against a pixel that is always constant in the background, to account for the day-night changes, because it gives me access to the transparency of the pixels, which is always 255 for incoming obstacles.

# Enjoy
