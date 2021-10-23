export interface User {
  name: string;
  email: string;
  password: string;
  role: string;
  [id: string]: string;
}

export interface Notification {
  status: string;
  message: string;
  autoDelete: boolean;
  id: number;
}
