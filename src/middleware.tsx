import { NextRequest } from "next/server";

export default async function middleware(req:NextRequest) {
    //checking where the user is navigating if on homepage treating like a visitor
    if(req.nextUrl.pathname === '/'){
        //track analytics event
        console.log("Track!")
    }
}
// The matcher determine when the middleware runs on which path
export const matcher ={
    matcher:['/']
}