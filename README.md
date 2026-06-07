# Memory Bloom

#### Video Demo: https://youtu.be/zkeXq9wc4po

#### Description:
Memory Bloom is a web-based memory game created using HTML, CSS, and JavaScript. The goal of the game is to match pairs of cards by remembering their positions on the board. While developing this project, I wanted to create an experience that felt calm, visually friendly, and accessible rather than fast-paced or overwhelming.

One of the main ideas behind Memory Bloom was creating a simple memory activity that could also feel comfortable for older adults. Memory games are commonly associated with cognitive exercises and mental stimulation, so I wanted the interface, colors, animations, and gameplay to feel relaxing and easy to understand. Instead of focusing only on difficulty or competition, I focused on creating a pleasant user experience that encourages concentration and memory practice in a more peaceful environment.

The game includes multiple difficulty levels, sound effects, animations, responsive design for mobile devices, and a record system that saves the player's best scores using localStorage. Throughout development, I focused heavily on improving my understanding of JavaScript DOM manipulation, event handling, animations, responsive design, and game logic while also paying close attention to visual polish and user experience.

## Features and Gameplay

Memory Bloom includes three different difficulty levels: Easy, Medium, and Hard. Each difficulty changes the number of card pairs that appear on the board, allowing the player to gradually increase the challenge. Before the game begins, all cards are briefly revealed so the player can memorize their positions, which recreates the classic memory-game experience.

The game also includes a timer and a move counter to track player performance. Once the player completes the board, a win screen appears showing the final results. To encourage replayability, the game stores the player's best time and best move count for each difficulty level using localStorage.

I also added sound effects and visual feedback to make the gameplay feel more interactive and alive. Cards animate when matched successfully, incorrect matches trigger a shake animation and a soft error sound, and buttons include hover effects and glowing animations. The interface was designed to feel modern and visually engaging without becoming distracting or overwhelming.

Another important aspect of the project was responsive design. I wanted the game to remain fully playable on both desktop and mobile devices, so I adjusted the layout and interface elements to adapt to smaller screens.


## Project Files

The project is divided into three main files: `index.html`, `style.css`, and `script.js`, along with a folder containing the sound effects used during gameplay.

The `index.html` file contains the structure of the game interface. It includes the start screen, difficulty buttons, game board, move counter, timer display, restart button, and win screen. This file acts as the foundation of the entire project and connects the CSS and JavaScript files together.

The `style.css` file controls the visual appearance of the game. I used CSS to create the overall aesthetic, animations, hover effects, glowing buttons, responsive layout, and card transitions. A large part of the development process involved improving the interface design to make the game feel polished and visually appealing while still remaining simple and easy to navigate.

The `script.js` file contains all of the game logic. This includes card generation, random shuffling, difficulty selection, move counting, timer functionality, matching logic, animations, sound effects, localStorage records, and win detection. Most of the interactive behavior of the game is controlled through JavaScript DOM manipulation and event listeners.

The `sounds` folder contains the audio files used for card flipping, successful matches, incorrect matches, and winning the game. These sounds were added to improve feedback and make the gameplay feel more dynamic and responsive.

## Challenges and Design Choices

One of the biggest challenges during development was balancing visual polish with simplicity. Since the main goal of the project was to create a relaxing and accessible experience, I had to carefully choose colors, animations, and sound effects that felt engaging without becoming distracting or overwhelming for the player.

Another challenge was implementing the game logic correctly while handling different difficulty levels. I needed to ensure that the board updated dynamically depending on the selected difficulty while still maintaining responsive behavior on smaller mobile screens. Managing the timer, move counter, card states, animations, and localStorage records also required careful organization inside the JavaScript code.

I also spent a significant amount of time improving the user interface and overall game feel. Small details such as hover effects, glowing buttons, match animations, shake effects for incorrect guesses, and responsive layouts made the game feel much more complete and interactive. I learned that these smaller design details can greatly improve the overall player experience even when the gameplay itself remains simple.

If I continue developing this project in the future, I would like to add additional accessibility settings, more visual themes, smoother transitions, and new game modes. One feature I would especially like to implement is additional accessibility options and a multiplayer mode, allowing older adults to practice memory skills together with friends and family. I would also consider adding a backend system to store player statistics online instead of using localStorage.



