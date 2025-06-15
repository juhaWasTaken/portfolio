import angels from "./angels.jpg";
import cronos from "./cronos.jpg";
import falling from "./falling.jpg";
import imHere from "./im-here.jpg";
import magazine from "./magazine.jpg";
import mosaic from "./mosaic.jpg";
import reality from "./reality.jpg";
import songsAbout from "./songsAbout.jpg";

interface GraphicDesignImages {
    image: ImageMetadata;
    alt: string;
    desc: string;
}

const graphicDesignImages: {
    intro?: string; 
    list: GraphicDesignImages[]
} = {
    intro: "A showcase of my graphic design skills",
    list: [
      {
        image: falling,
        alt: "Poster with glowing aura",
        desc: "Glowing aura poster"
      },
      {
        image: angels,
        alt: "Poster about a movie",
        desc: "Poster inspired by the movie Fallen Angels"
      },
      {
        image: songsAbout,
        alt: "Poster about a movie",
        desc: "Poster inspired by the movie Begin Again" 
      },
      {
        image: mosaic, 
        alt: "Poster using pixel style",
        desc: "Abstract poster using pixelated style"
      },
            {
        image: magazine,
        alt: "Magazine about Frank Ocean",
        desc: "Magazine inspired by AnOther Magazine"
      },
      {
        image: reality,
        alt: "",
        desc: ""
      },
      {
        image: imHere,
        alt: "Poster using glowing styles ",
        desc: "Poster using glowing styles"
      },
      {
        image: cronos, 
        alt: "Poster about Cronos the Titan",
        desc: "Poster about Cronos"
      }
    ]
}

export default graphicDesignImages;