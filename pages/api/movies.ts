import {Movie} from "../../types/movie";

// .../api/movies
export default async function handler(req:any, res:any) {
    const movies: Movie[] = [
        { _id: 1, title: "The Batman" },
        { _id: 2, title: "The Joker" },
    ];

    res.json({ status: 200, data: movies })
}