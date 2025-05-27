export interface Job {
  _id: string;
  title: string;
  description: string;
  company: Company;
  workspace: string;
  location: string;
  type: string;
  deadline: string;
  status: string;
  created_at: string;
}

interface Company {
  _id: string;
  name: string;
  logo: string;
}
