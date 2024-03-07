import {Movie} from "../../types/movie";

// .../api/movies
export default async function handler(req:any, res:any) {
    const movies: Movie[] = [
        { _id: 1, title: "The Batman" },
        { _id: 2, title: "The Joker" },
    ];

    switch (req.method) {
        case "POST":
            // Here the logic for POST case
            res.json({ status: 200, data: movies, method: "POST" })
            break;
        case "GET":
            // Here the logic for GET case
            res.json({ status: 200, data: movies, method: "GET" })
            break;
    }
}