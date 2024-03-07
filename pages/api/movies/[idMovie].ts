import {Movie} from "../../../types/movie";

// .../api/movies/:id
export default async function handler(req:any, res:any) {
    const idMovie = parseInt(req.query.idMovie, 10)

    const movies: Movie[] = [
        { _id: 1, title: "The Batman" },
        { _id: 2, title: "The Joker" },
    ]

    const movie = movies.find(({ _id }) => _id === idMovie );

    switch (req.method) {
        case "POST":
            // Here the logic for POST case
            res.json({ status:200, data: {movie: movie || "not found"}, method: "POST" })
            break;
        case "GET":
            // Here the logic for GET case
            res.json({ status:200, data: {movie: movie || "not found"}, method: "GET" })
            break;
    }
}