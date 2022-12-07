import dinoguys from "../icons/dinoguys.png";
import chatterly from "../icons/chatterly.png";
import fortyfivepercent from "../icons/fortyfivepercent.png";
import wordle_backend from "../icons/wordlebackend.png";

const cards = [
    {
        src: dinoguys,
        alt: "picture of dino guys game",
        gitHubLink: "https://github.com/potatoes-team/dinoguys",
        demoLink: "https://dinoguys.org",
        title: "DinoGuys",
        description: `
        DinoGuys is a 2D platformer battle royale style game
        where friends can compete to see who can make it to
        the finish line first!`,
        techStack: "JavaScript Express Phaser3 Socket.IO Tiled",
    },
    {
        src: chatterly,
        alt: "picture of chatterly application",
        gitHubLink: "https://github.com/Super-Rogatory/chatterly",
        demoLink: "https://wechatterly.com",
        title: "WeChatterly",
        description: `
            WeChatterly is a web socket based chat application
            that allows users to join rooms with friends and
            talk online together.
        `,
        techStack: "React/Redux Express Socket.IO Sequelize(PostgreSQL)",
    },
    {
        src: fortyfivepercent,
        alt: "picture of forty five percent classifier program",
        gitHubLink: "https://github.com/super-rogatory/thepercentfortyfive",
        demoLink: undefined,
        title: "Percent 45",
        description: `
            Percent 45 is an image classifying project that uses machine learning to guess the nature of any image.
        `,
        techStack: "Python TensorFlow Keras FastAPI Foreman Uvicorn",
    },
    {
        src: wordle_backend,
        alt: "picture of forty five percent classifier program",
        gitHubLink: "https://github.com/super-rogatory/wordle_backend",
        demoLink: undefined,
        title: "Wordle Backend",
        description: `
            Wordle Backend is a load-balanced microservice implementation of a backend for the wordle guessing game.
        `,
        techStack: "Python FastAPI SQLite Redis Foreman Uvicorn Traefik",
    },
];

export default cards;
