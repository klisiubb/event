import { ZodObject } from "zod";

export interface CreateFormProps {
  formSchema: ZodObject<any, any>;
  defaultValues: any;
  route: string;
  mainNameText: string;
  mainNameSubText: string;
  labelText: string;
  descriptionText: string;
  placeholderText: string;
  fieldName: string;
}
