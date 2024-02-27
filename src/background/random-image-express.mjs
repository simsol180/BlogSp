
//get's background images from https://www.pexels.com/
import express from "express";
import http from "https"

let backgrounds = "";
let i = 0;
async function getBackground() {
    return new Promise((s, f) => {
        let toReturn = "";

        let url = `https://api.pexels.com/v1/search?per_page=${process.env.PEXELS_Per_Page}&query=${process.env.PEXELS_Query}&orientation=landscape&color=blue&size=large2x&locale=en-us`

        http.get(url, {
            headers: {
                'Authorization': `${process.env.PEXELS_Key}`,
                'Content-Type': 'application/json'
            }
        }, function (res) {

            res.setEncoding('utf8');

            res.on('data', function (d) {
                toReturn += d;
            })

            return res.on('end', function () {
                backgrounds = JSON.parse(toReturn);
                s(backgrounds);
            })
        }).on('error', function (e) {
            e(e)
        })

        i++;
        console.log(i)
    })
}

async function getRandomBackground() {
    if (backgrounds == "") {
        await getBackground();
    }

    let number = Math.floor(Math.random() * (backgrounds.photos.length - 1));
    console.log(number + "  " + (backgrounds.photos.length - 1))

    return backgrounds.photos[number]
}

var app = express();

app.get('/random-image', (req, res) => {
    getRandomBackground().then(function (backgrounds) {
        res.send(backgrounds)
    });
})

export default app;

