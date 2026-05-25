import { NextResponse } from "next/server";

export async function proxy(request) {
  try {
    const bearerToken = request.cookies.get("token");

    if (!bearerToken) {
      return NextResponse.redirect(new URL("/admin/auth", request.url));
    }

    return NextResponse.next();
  } catch (err) {
    console.log(err.message);
    return NextResponse.redirect(new URL("/admin/auth", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
