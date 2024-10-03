# The Endless TODOs of Game Engines
> **Note:** This is work in progress project.

I'm still debating whether building a game engine is a bit crazy, but the process is pretty fun, even though the challenge is up there.

![Description of the image](/GameEngine-1.jpg)
## Tech
Everything is written in C++ and only runs on the Windows operating system due to the frameworks used.

User Interface: I chose to use Qt6 for the UI since there are not many choices with C++. The framework is mature, though, and the documentation is good, so it is easy to get started.

Graphics API: I decided to use DirectX 11 for this game engine implementation because I wanted to get a lower level in terms of graphics usage. I had an implementation using SDL2, which is more abstract and cross-platform, but I thought it would be a good learning experience to see what the swap chain is doing and how textures work when it comes to presenting a series of images to the end user.

## UI
The UI is rearrangeable, meaning that you can resize certain windows and dock and unlock them as you choose.

### Title Bar
Windows applications usually have a title bar where the minimize, maximize, and close buttons are. The Windows operating system usually handles this title bar, but with Qt, you can hide it and implement it on your own. I decided to implement my own title bar because I disliked how the Windows title bar looked. This caused a series of issues, and my program, upon compiling, was very slow. I couldn't pinpoint why adding a title bar could cause my program to run at almost 5 frames per second. The graphics rendering was simple at this point.
![Description of the image](/GameEngine-2.jpg)
### Logging
I used Spdlog as my logging library of choice. However, the implementation is weak in my program since I desperately need a better error-catching system. My issue is that try/catch blocks are not ideal for performance-critical work, so I actively avoided them. This made my program error-prone, as I could not figure out an alternative.

The program is bare-bones, and I don't consider it a game engine. There is a whole list of TODOs that need to be implemented before laying down any visual work. The program's architecture is weak at the moment, as I still need to work on getting a message bus, window abstraction, and error captures, just to name a few.

## Conclusion
Creating this program will be a long journey, but it will be a fun experience.