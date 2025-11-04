import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, description } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 401 });
  }

  return NextResponse.json({
    success: true,
    message: "Contact sent successfully",
    email,
    description,
  });
}
export async function GET(req: Request) {
  return NextResponse.json({
    message: "Contact sent successfully",
  });
}
