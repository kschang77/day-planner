# Day Planner

Project "Day Planner" is a mini app where user can write down notes for 
each hour from 9AM to 5PM, with immediate visibily of hours yet to come,
current hours, and hours past. Click to edit, click save to save. Notes are persistent
through use of localStorage. Site is responsive and will react to different 
screen widths (within limits). 

![Demo Recording](dayplannerdemo.gif)

## Project Repo

http://github.com/kschang77/day-planner

## Deployed Link

https://kschang77.github.io/day-planner/

# Built With

[Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[Bootstrap 4](https://getbootstrap.com/docs/4.4/getting-started/introduction/)

[Moment.js](https://momentjs.com/)

[FontAwesome](https://fontawesome.com/)

[Google Fonts](https://fonts.google.com/)

[jQuery](https://jquery.com/)


## Code Snippet

Upon clicking on "save" button, the class name of the cell is used to derive the same key, and content is saved by calling saveRow. There are actually TWO fields there, regular text that's hidde, and textare that's visible. Toggle was used to swap the visibility of the two, thus updating the local row display. 

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

![Main view](screenshot01.png)


## Potential enhancements

Can probably improve UI with tweaks here and there, like expand text 
area dynamically to fit the central box, and put a real icon in the 
save button area via FontAwesome or similar icon projects. 


## Author

**Kasey Chang** 

- [Link to Github](https://kschang77.github.io)
- [Link to LinkedIn](https://www.linkedin.com/in/kasey-chang)


## License

This project is licensed under the MIT License 

## Acknowledgments

* Hat tip to Jerome, Kerwin, Mahi, and the UCBEx Coding Bootcamp March 2020 cohort
