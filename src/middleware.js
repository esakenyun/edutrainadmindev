import { NextResponse } from "next/server";

export async function middleware(request) {
  try {
    const bearerToken = request.cookies.get("token");

    if (!bearerToken) {
      return NextResponse.redirect(new URL("/auth", request.url));
    }

    const serverResponse = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/validate-token", {
      method: "POST",
      body: JSON.stringify({
        token: bearerToken.value,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${bearerToken.value}`,
      },
    });

    if (serverResponse.status === 200) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/auth", request.url));
    }
    // if (bearerToken) {
    //   return NextResponse.next();
    // } else {
    //   return NextResponse.redirect(new URL("/admin/auth", request.url));
    // }
  } catch (err) {
    console.log(err.message);
    return NextResponse.redirect(new URL("/auth", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
