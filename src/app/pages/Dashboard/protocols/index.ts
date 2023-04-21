type UserData = {
  id: string;
  email: string;
};

export type ResponseData = {
  id: string;
  company: string;
  price: number;
  techs: string[];
  thumbnail: string;
  user: UserData;
};

export type DomainData = {
  id: string;
  company: string;
  price_jsx: string | JSX.Element | null;
  thumbnail_jsx: JSX.Element | null;
  user_id: string;
};
