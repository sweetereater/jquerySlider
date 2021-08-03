const colorsHandler = {
    activeProperty: "color",
    color: {
        red: 127,
        green: 127,
        blue: 127,

    },
    "background-color": {
        red: 127,
        green: 127,
        blue: 127,

    },
}

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.innerHTML;
        let otherButton;
        if (value !== colorsHandler.activeProperty) {

            otherButton = Array.from(buttons).find(button => button.innerHTML === colorsHandler.activeProperty);
            otherButton.classList.remove("buttonClicked");


            button.classList.add("buttonClicked");

            colorsHandler.activeProperty = value;
            const red = colorsHandler[colorsHandler.activeProperty].red
            const green = colorsHandler[colorsHandler.activeProperty].green
            const blue = colorsHandler[colorsHandler.activeProperty].blue

            $('.red').slider({
                value: red
            })
            $('.green').slider({
                value: green
            })
            $('.blue').slider({
                value: blue
            })


            $('.text').css(colorsHandler.activeProperty, `rgb(${red},${green},${blue})`);

        }
    })
})

const setColor = () => {
    const red = $('.red').slider('value'),
        green = $('.green').slider('value'),
        blue = $('.blue').slider('value')


    const result = `rgb(${red},${green},${blue})`;

    colorsHandler[colorsHandler.activeProperty].red = red;
    colorsHandler[colorsHandler.activeProperty].green = green;
    colorsHandler[colorsHandler.activeProperty].blue = blue;

    $('.text').css(colorsHandler.activeProperty, result);

}

$('.red, .green, .blue').slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: setColor,
    change: setColor
});
