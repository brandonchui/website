# The Making of a Replayable Game

##
![Description of the image](/Fishing-1.jpg)
This game has only one objective—to fish. I collaborated with another programmer to make this game prototype, where I took on the role of the visuals and gameplay mechanics. They contributed to the random spawning mechanics of the fish that the player had to capture.

## Features
**Procedural**: The game has a procedurally generated map. In other words, every re-run of the game is different. The islands you are on might be bigger or smaller, and the shapes will also change.

**Harpoon**: The game uses a projectile-based tool to capture fish. The tool basically shoots a game object in a forward vector at a certain speed. The speed is not instant—rather, it ramps up due to acceleration, so timing is key.
![Description of the image](/Fishing-2.jpg)
**Teleports**: Since the map is island-based, we thought teleporting into various islands would be fun, like in the game Portal. The mechanics worked, but the controls felt clunky to use. The implementation also had several bugs in which the character would get stuck, probably due to how the procedural generation works when an existing portal is present. We just managed to patch this by deleting everything on the map and respawning.
![Description of the image](/Fishing-3.jpg)
## Conclusion
The game has low stakes but follows the same repetition idea. Looking back at the game now, adding new tools or fish to the game mechanic variety could have provided a better experience.