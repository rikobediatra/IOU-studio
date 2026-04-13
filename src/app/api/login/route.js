import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    const isValidUser =
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD;

    if (!isValidUser) {
      return NextResponse.json(
        { success: false, message: "Incorrect username or password" },
        { status: 401 },
      );
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({ success: true });
    response.cookies.set("token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (error) {
    console.log(error)
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
