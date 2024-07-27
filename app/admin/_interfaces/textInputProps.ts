import { ZodObject } from "zod";

export interface TextInputProps {
  formSchema: ZodObject<any, any>;
  defaultValues: any;
  route: string;
  Id: string;
  fieldName: string;
  labelText: string;
  placeholderText?: string;
}
