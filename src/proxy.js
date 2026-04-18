import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function proxy(request) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  let isValidToken = false;

  if (token) {
    try {
      await jwtVerify(token, secret);
      isValidToken = true;
    } catch (err) {
      console.log(err)
      isValidToken = false;
    }
  }

  // FRONTEND PROTECTION
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
  const isLoginPage = request.nextUrl.pathname === "/admin";

  if (isAdminRoute && !isValidToken && !isLoginPage) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (isLoginPage && isValidToken) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  // API PROTECTION
  const isApiProject = pathname.startsWith("/api/projects");
  const isWriteMethod = ["POST", "PUT", "DELETE"].includes(request.method);

  if (isApiProject && isWriteMethod) {
    if (!isValidToken) {
      return NextResponse.json(
        { success: false, message: "Access denied. You don't have the required privileges." },
        { status: 401 },
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/projects/:path*"],
};
