
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Example: log / save to DB / send email
    console.log("📩 Received data:", data);

    return NextResponse.json(
      { message: "Message received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error in POST /api/contact:", error);

    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
