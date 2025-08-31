import { NextRequest, NextResponse } from "next/server";
import { analytics } from "./utils/analytics";

export default async function middleware(req:NextRequest) {
    //checking where the user is navigating if on homepage treating like a visitor
   if (req.nextUrl.pathname === '/') {
  try {
    analytics.track("pageview", { page: '/' })
  } catch (error) {
    console.error("Analytics error:", error)
  }
}
return NextResponse.next()
}
export const config = {
  matcher: ["/"], // this runs middleware only on homepage
}
