
//console.log("working ")

const $input = $("input")
const $button = $("button")
const $location = $(".location")
const $temperature = $(".temperature") 
const $feels = $(".feels")
const $condition = $(".condition")
const apikey = "c2e2c691dca22443281625adb550280f"

const $loc = $("#loc")
const $temp = $("#temp") 
const $feel = $("#feel")
const $con = $("#con")

//console.log($condition)

$button.on("click", () => {
    const city = $input.val()
    console.log(city)
    $.ajax(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apikey}`)
    .then((data) =>{
        console.log(data[0])
        const lat = data[0].lat
        const lon = data[0].lon
        $.ajax(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`)
        .then((data) =>{
            console.log(data)
            $loc.text(` ${data.name} `)
            $temp. html(` ${data.main.temp} &#8457;`)
            $feel.html(` ${data.main.feels_like} &#8457;`)
            $con.text(` ${data.weather[0].description} `)
        })
        
        
    })

    
})

// question how to append text to existing text in a div without using span