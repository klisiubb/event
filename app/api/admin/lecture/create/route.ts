import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function POST(req: Request) {
  const { getPermission, isAuthenticated } = getKindeServerSession();
  const isAdmin = await getPermission("admin");

  if ((await isAuthenticated()) === false || !isAdmin?.isGranted) {
    return NextResponse.json(
      { message: "You can't access this functionality." },
      { status: 401 }
    );
  }

  const { topic } = await req.json();

  if (!topic) {
    return new NextResponse("Topic is required.", { status: 400 });
  }

  try {
    const lecture = await prisma.lecture.create({
      data: { topic },
    });

    return NextResponse.json(lecture, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
