import { PexelsImage } from "./PexelsImage";

function getBackground(): Promise<Error | PexelsImage> {
    console.log(process.env)
    return new Promise<Error | PexelsImage>((s, f) => {
        fetch(`${process.env.VUE_APP_SERVER_URL}/api/background/random-image`).then(function (response) {
            console.dir(response)
            if (response.ok) {
                const imageObject = response.json().then(function (img) {
                    const pexelsImage = new PexelsImage(img);
                    s(pexelsImage);
                });
                return imageObject;
            } else {
                f(new Error(response.statusText))
            }
        })
    })
}

export default {
    getBackground
}