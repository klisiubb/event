export type ActionResponse =
  | { type: "SUCCESS"; message: string[]; id: string }
  | { type: "ERROR"; message: string[] };
