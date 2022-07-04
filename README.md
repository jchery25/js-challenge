# JS - Logo Challenge

## Run Application
To run the application, navigate to application folder via the terminal and enter `python -m http.server`.

## THE NEED TO KNOW
1. Run this application only on Chrome. (I did not make this application cross-browser compatible).
2. The final image that was given was different from the template image that was given.


## Description:
Given 5 color images, create a web app that allows users to move those 5 color images to the correct location in a specific image. 

## Main Todos:
- [x] Must have a reset button to return the logo to its starting state at any time.
- [x] A user should be able to drag a dot from its starting position to the appropriate location in the logo.
- [x] Dots dropped in the wrong location should be rejected.
- [x] Two dots cannot occupy the same space.
- [x] The finished logo should include the dots in the appropriate location within the logo.
- [x] When the logo is properly assembled, congratulate the user.

# Documentaton
## Day 01 Deliverables:
- [x] Determine tech stack (HMTL,CSS, JavaScript (jQuery))
- [x] Set up environment.
- [x] Create repo for assignment.
- [x] Get the 6 colors to show on top, in the center, horizontally.
- [x] Move/Drag each colors to a new location on the screen.

## Day 02 Deliverables:
- [x] Create a reset bottom that will place colors back at original position.
- [x] Add logo onto the center of the page, underneath the dots.

## Day 03 Deliverables:
- [x] Create a 3x3 grid. 
- [x] Center grid.
- [x] Add the feature to click and drag colored dot within the window boundary.
- [x] Add the feature to drop the colored dot within a dedicated grid location. 
- [x] Overlay the logo on top of the grid while keeping the grid and dot feature. 
- [x] Set up the appropriate color location on the logo.

## Day 04 Deliverables:
- [x] Fix styling so that the logo can fit within the circle of the logo. 
- [x] Congratulate the user when they place all the logo in its correct location. 
- [x] Test application for usability. 
- [x] Resolve flex mode where if window is resized, the grid does not flex well compared to the flex of the logo. 

## OVERALL
This challenged proved to be interestingly entertaining. I spent 3 to 4 days planning out the tools, technologies, and the approach for this challenge. I wanted to challenge myself in applying a technology that I haven't used in a while but is quite capable of getting the task done. I chose jQuery because I recalled it being a great tool for DOM manipulation. Additionally, since I haven't used jQuery in quite some time, I thought it would be a double challenge to relearn jQuery to complete this specific task. 

My thought process for this challenge was to use precision however, I recall that using precision on my computer does not necessarily mean that precision would apply to other users. I considered using some type of image manipulation but, I wondered if that was be efficient. After some trials and errors, I thought about using grids specifically 3x3 grid. This approach proved to be successful as I was able to drag and drop the colored dots using jQueryUI into specific grids. 

After playing with grids further, I thought about applying precision and the 3x3 grid idea. To do so, I would identify specific grids that aligns with the location of an area on the image. I would move those grids using css and to aid with making the image and grid static, I applied my css knowlegde. 

As a result, I was able to align the grids to a specific dot location. Since the main functionality were completed, I needed to clean up the code and the user interface and experience. I abstracted some areas of the code and applied more css to align the result close to the final image. 

Here is the result of the product:

![VIDEO HERE](https://imgur.com/a/IsKj6Sz)

# Insights/Lesson Learned/Question
- (Insight) Thought it might be easier to start from scratch using html, css, and javascript. However, I quickly learned that I will most likely need to use a library like jQuery or React. Though I am more familiar with React, I wanted to challenge myself to re-learn jQuery for the specific task. 
- (Insight) jQuery features were quite neat and helpful. It made the task simple and allowed me to have clean code. I wonder if React would have resulted in cleaner code and would React be a different level of difficulty to get it to work. Overall, working with jQuery shown to be challenging and exciting. 
- (Question) I noticed that the beginner logo design is not the same as the finish logo design. Was that intentional?
- (Lesson Learned) I needed to manage my time better. There were too many tings going on during the week which distracted me from completing the task. I need to set a dedicated time, during late hours, where my focus can be primarily on a task with a deadline. 


# References:
1. https://www.google.com/search?q=create+a+3x3+grid+html+css&oq=create+a+3x3+grid+html+css&aqs=chrome..69i57j33i160l2.9353j0j4&sourceid=chrome&ie=UTF-8#kpvalbx=_lYW-Yt2sOeCpptQPoP--kAg16 
2. https://www.javatpoint.com/jquery-ui-droppable
