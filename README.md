# Day Planner

Project "Day Planner" is a mini app where user can write down notes for 
each hour from 9AM to 5PM, with immediate visibily of hours yet to come,
current hours, and hours past. Click to edit, save to save. Notes are persistent
through use of localStorage. Site is responsive and will react to different 
screen widths (within limits). 

## Project Repo

http://github.com/kschang77/day-planner

## Prerequisites

Any Javascript-capable browser

## Installation

No installation required

# Built With

[Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[Bootstrap 4](https://getbootstrap.com/docs/4.4/getting-started/introduction/)

[Moment.js](https://momentjs.com/)

[FontAwesome](https://fontawesome.com/)

[Google Fonts](https://fonts.google.com/)

[jQuery](https://jquery.com/)


## Code Snippet

        $(".saveBtn").on("click", function(event) {
            event.preventDefault();
            var el = this.className;
            arr = el.split(" ");
            curHours = arr[0];
            var txtArea = $(
                "textarea." + curHours
            ).val();
            saveRow(curHours, txtArea);
            $("." + curHours + ".inputvis.t-display"
            ).text(txtArea);
            $("." + curHours + ".inputvis"
            ).toggle();
            });



## Screenshots

[Main view](screenshot01.png)


## Potential enhancements

Can probably improve UI with tweaks here and there, like expand text 
area dynamically to fit the central box, and put a real icon in the 
save button area. 


# Deployed Link

https://kschang77.github.io/day-planner/


## Author

**Kasey Chang** 

- [Link to Github](https://github.com/kschang77)
- [Link to LinkedIn](https://www.linkedin.com/in/kasey-chang)


## License

This project is licensed under the MIT License 

## Acknowledgments

* Hat tip to Jerome, Kerwin, Mahi, and the UCBEx Coding Bootcamp March 2020 cohort
