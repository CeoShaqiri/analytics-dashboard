import { NextRequest, NextResponse } from "next/server";
import { analytics } from "./utils/analytics";

export default async function middleware(req:NextRequest) {
    //checking where the user is navigating if on homepage treating like a visitor
    if(req.nextUrl.pathname === '/'){
        //track analytics event
     try {
  analytics.track("pageview", {
    page: '/',
    
  })
} catch (error) {
  console.error("Analytics error:", error)
}
    }
}
// The matcher determine when the middleware runs on which path
export const matcher ={
    matcher:['/']
}