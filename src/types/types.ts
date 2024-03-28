export interface Menu
  extends Array<{
    name: string;
    path: string;
  }> {}

export interface Contact {
  name: string;
  url: string;
  icon: string;
}

export interface MetaData {
  title: string;
  full_name: string;
  designation: string;
  company: string;
  company_url: string;
  email: string;
  phone_number: string;
  social_links: Contact[];
}
