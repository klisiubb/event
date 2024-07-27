"use server";

import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";
import { topicFormSchema } from "../../_schemas/topicFormSchema";
import { ActionResponse } from "../../_interfaces/actionResponse";

export async function createLecture(topic: string): Promise<ActionResponse> {
  const validation = await topicFormSchema.safeParseAsync({ topic });

  if (validation.success) {
    try {
      const lecture = await prisma.lecture.create({
        data: { topic },
      });
      return {
        type: "SUCCESS",
        message: ["Successfully created new lecture!"],
        id: lecture.id,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === "P2002"
      ) {
        return {
          type: "ERROR",
          message: [
            "Lecture with this name already exists. Choose a different name.",
          ],
        };
      }
      return {
        type: "ERROR",
        message: ["Database error."],
      };
    }
  } else {
    const errors = validation.error.issues.map((issue) => issue.message);
    return {
      type: "ERROR",
      message: errors,
    };
  }
}
