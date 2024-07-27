import * as z from "zod";

export const topicFormSchema = z.object({
  topic: z
    .string()
    .min(10, { message: "The name must be at least 10 characters long." })
    .max(100, {
      message: "The name cannot be more than 100 characters long.",
    }),
});
export type TopicFormSchema = z.infer<typeof topicFormSchema>;
