import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";

export async function GET() {
  try {
    await dbConnect();
    return NextResponse.json({ message: "Conectado ao MongoDB" });
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao conectar ao MongoDB", error },
      { status: 500 }
    );
  }
}
