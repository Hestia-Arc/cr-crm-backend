export class UserDto {
  id?: number | undefined;
  email: string;
  firstname: string | null;
  lastname: string | null;
  username: string | null;
  password: string | null | undefined;
}
