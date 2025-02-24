import { z } from "zod";

export const JoinFormObject = z
  .object({
    username: z.string().min(5).max(20),
    password: z.string().min(5).max(20),
    passwordConfirm: z.string().min(5).max(20),
  })
  .refine((data) => data.password === data.passwordConfirm);

type JoinFormSchema = z.infer<typeof JoinFormObject>;

export default JoinFormSchema;
