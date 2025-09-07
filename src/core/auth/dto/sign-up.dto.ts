export class SignUpDto {
  id?: number;
  email: string;
  firstname: string | null;
  lastname: string | null;
  username: string | null;
  password: string | null | undefined;
}
