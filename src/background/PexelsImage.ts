class PexelsImageSrc {
    original;
    large2x;
    landscape;

    constructor(o: { original: string, large2x: string, landscape: string }) {
        this.original = o.original;
        this.large2x = o.large2x;
        this.landscape = o.landscape;
    }

}

export class PexelsImage {
    photographer;
    photographer_url;
    alt;
    src;
    url;

    constructor(o?: { url: string, photographer_url: string, photographer: string, alt: string, src: PexelsImageSrc }) {
        if (o) {
            this.photographer_url = o.photographer_url;
            this.photographer = o.photographer;
            this.alt = o.alt;
            this.url = o.url;

        } else {
            this.photographer_url = "";
            this.photographer = "";
            this.alt = "";
            this.url = "";
        }

        if (o && "src" in o) {
            this.src = new PexelsImageSrc(o.src);
        } else {
            this.src = new PexelsImageSrc({
                original: "",
                large2x: "",
                landscape: ""
            });
        }
    }

}