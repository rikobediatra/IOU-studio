import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { username, password } = await req.json();
    const isCorrectUsername = username === process.env.ADMIN_USERNAME;
    const isCorrectPassword = password === process.env.ADMIN_PASSWORD;

    if (isCorrectUsername && isCorrectPassword) {
      const response = NextResponse.json({ success: true });
      response.cookies.set("token", "user-token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24,
      });

      return response;
    }

    return NextResponse.json(
      { success: false, message: "Incorrect username or password" },
      { status: 401 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });

  response.cookies.set("token", "", {
    path: "/",
    expires: new Date(0),
  });

  return response;
}
