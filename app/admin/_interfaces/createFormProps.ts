import { ActionResponse } from "./actionResponse";

export interface CreateFormProps<T> {
  form: any;
  route: string;
  mainNameText: string;
  mainNameSubText: string;
  labelText: string;
  descriptionText: string;
  placeholderText: string;
  fieldName: string;
  onSubmit(values: T): Promise<void>;
}
