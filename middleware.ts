import { NextRequest, NextResponse } from "next/server";

const signedInPages = ["/", "/playlist", "/library"];

export default function middleware(req: NextRequest) {
  if (signedInPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.get("HK_ACCESS_TOKEN");

    if (!token) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  }
}
