# Getting Started
Follow the steps below to install the project locally.
Prerequisite:
- Install Node.js and npm
- Download the project
-- via git or as a zip


1.	Installation process:
    1. CD into project root
    1. Run `npm install`
2.	Software dependencies
    1. Can be found in the packages file.
3.	Latest releases
4.	API references

# Build and Test
1. Build
1.1. Run `npm run build`
2. Test
2.1. Run `npm run test`

# Contribute
To contribute to the project, you can fork the project and make a pull request.

# License
This project is licensed under the MIT License - see the LICENSE.md file for details

# About 

hook on all mouse events, check msdn, for all events [https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent#instance_methods](here)

store all data in dictionaries of time & KeyMouseTracker( class {
TimeMouse: Dictionary < time, MouseTracker( class {
    x: number
    y: number
    x relative to component: number
    y relative to component: number
    current datetime: Date
    duration of movement: number
    direction of movement: string
    distance of movement: number
    speed of movement: number
    number of movements: number
    movementstart: {
        x: number
        y: number
    }
    movementend: {
        x: number
        y: number
    }
}) >
TimeKeys : Dictionary < time, KeyTracker( class {
    key: string
    current datetime: Date
    duration of keypress: number
    number of keypresses: number
    keypressstart: Date
    keypressend: Date
}) >

Send a chuncked stream to server Beacon ( class { 

    Dictonary to Steam : () ;
    stream to chuncked stream : () ;
    Send chuncked stream to server : () ;

})
/// reduce size by compacting( this meanse find a serie of similar positions of a length of time and reduce/remove them )
Minimize data : () ;
} )
 will try to track the mouse movements, clicks, scrolls, swipes, drags, drops of the current user on the website
for each component, it will report the following:
    - component 
        - name
        - type
        - id
        - class
        - style
        - attributes
        - innerHTML
        - innerText
        - outerHTML
        - outerText
        - x
        - y
    - mouse movements
        - x
        - y
        - x relative to component
        - y relative to component
        - current datetime
        - duration of movement
        - direction of movement
        - distance of movement
        - speed of movement
        - number of movements
        - movementstart
            - x
            - y
        - movementend
            - x
            - y
        
    - mouse clicks
        - x
        - y
        - x relative to component
        - y relative to component
        - current datetime
        - duration of click
        - number of clicks
        - click type
    - mouse scrolls
        - x
        - y
        - x relative to component
        - y relative to component
        - current datetime
        - scroll direction
        - scroll amount
    - mouse swipes
        - x
        - y
        - x relative to component
        - y relative to component
        - current datetime
        - swipe direction
        - swipe amount
        - movementstart
            - x
            - y
        - movementend
            - x
            - y
        
    - mouse drags
        - x
        - y
        - x relative to component
        - y relative to component
        - current datetime
        - drag direction
        - drag amount
        - movementstart
            - x
            - y
        - movementend
            - x
            - y
    - mouse drops
        - x
        - y
        - x relative to component
        - y relative to component
        - current datetime
        - drop direction
        - drop amount
        - movementstart
            - x
            - y
        - movementend
            - x
            - y
    - mouse hovers
        - x
        - y
        - x relative to component
        - y relative to component
        - current datetime
        - duration of hover
        - number of hovers
        - movementstart
            - x
            - y
        - movementend
            - x
            - y
    - mouse enters
        - x
        - y
        - x relative to component
        - y relative to component
        - current datetime
        - duration of enter
        - number of enters
        - movementstart
            - x
            - y
        - movementend
            - x
            - y
    - mouse leaves
        - x
        - y
        - x relative to component
        - y relative to component
        - current datetime
        - duration of leave
        - number of leaves
        - movementstart
            - x
            - y
        - movementend
            - x
            - y
    - Text
        - Selected
        - what was selected
        - duration
        - current datetime
    - Keyboard
        - key pressed
            - key
            - key code
            - key name
            - current datetime
        - key released
        - key held
    - Cookies
        - name
        - value
        - current datetime
    - LocalStorage
        - name
        - value
        - current datetime
    - SessionStorage
        - name
        - value
        - current datetime