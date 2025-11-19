import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_ROUTES = ["/login", "/signup"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("access_token")?.value || null;
  const pathname = req.nextUrl.pathname;

  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
  const isAuth = Boolean(token);

  // For protected route - unauthorized user will redirect to login
  if (!isAuth && !isPublicRoute) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // For login/logout route - authorized user will redirect to dashboard
  if (isAuth && isPublicRoute) {
    const dashboardUrl = new URL("/", req.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images).*)",
  ],
};
