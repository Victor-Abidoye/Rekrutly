var words = ['"People are not your most important asset. The right people are.... - Jim Collins"', '"Time spent on hiring is time well spent... – Robert Half "',]
var word_count = 0
var letter_count = 0
sentence_count = words.length
var tim;

function start () {
    setTimeout(function () {
        get_words(words[word_count])
    }, 50)
}

function get_words (sentence) {
    text.innerHTML += sentence[letter_count]
    letter_count++
    if (sentence[letter_count] != undefined) {
        setTimeout(function () {
            get_words(words[word_count])
        }, 100)
    } else {
        cursor()
        setTimeout(function () {
            clearInterval(tim)
            document.getElementById('cur').style.color = "#6C6C6C"
            clean()
        }, 1500);
    }
}

// Cleans each character of each sentence in the array
function clean () {
    text.innerHTML = text.innerHTML.substr(0, letter_count - 1)
    letter_count--
    if (letter_count != 0) {
        setTimeout('clean()', 100)
    } else {
        word_count++
        if (word_count == sentence_count) {
            word_count = 0
        }
        cursor()
        setTimeout(function () {
            clearInterval(tim)
            document.getElementById('cur').style.color = "#6C6C6C"
            start()
        }, 1500)
    }
}

// controls cursor blink from black from black to white
function cursor () {
    var condition = true
    tim = setInterval(function () {
        if (condition) {
            document.getElementById('cur').style.color = "#6C6C6C"
            condition = false
        } else {
            document.getElementById('cur').style.color = "white"
            condition = true
        }
    }, 300)
}
start()