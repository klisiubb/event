import * as z from "zod";

export const createLectureSchema = z.object({
  topic: z
    .string()
    .min(10, { message: "The name must be at least 10 characters long." })
    .max(100, {
      message: "The name cannot be more than 100 characters long.",
    }),
});
