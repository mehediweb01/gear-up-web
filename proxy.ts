import jwt, { JwtPayload } from "jsonwebtoken";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const AUTH_ROUTES = ["/login", "/register"];
const PUBLIC_ROUTES = ["/", "/gear", "/about"];

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const accessToken = request.cookies.get("accessToken")?.value;

  const isPublicRoute = PUBLIC_ROUTES.some(
    (route) => route === pathname || pathname.startsWith(`${route}/`),
  );

  const isAuthRoute = AUTH_ROUTES.some(
    (route) => route === pathname || pathname.startsWith(`${route}/`),
  );

  if (!accessToken && !isPublicRoute && !isAuthRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const user = accessToken
    ? (jwt.verify(
        accessToken,
        process.env.JWT_ACCESS_SECRET as string,
      ) as JwtPayload)
    : null;

  if (user && isAuthRoute) {
    switch (user.role) {
      case "CUSTOMER":
        return NextResponse.redirect(new URL("/", request.url));

      case "PROVIDER":
        return NextResponse.redirect(
          new URL("/provider-dashboard", request.url),
        );

      case "ADMIN":
        return NextResponse.redirect(new URL("/admin-dashboard", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
