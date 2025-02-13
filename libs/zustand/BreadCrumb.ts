import { create } from "zustand";

type Breadcrumb = {
  title: string;
  url: string;
};

interface BreadcrumbState {
  breadcrumb: {
    title: string;
    url: string;
  };
  setBreadcrumb: (item: Breadcrumb) => void;
}

export const useBreadcrumbStore = create<BreadcrumbState>()((set) => ({
  breadcrumb: {
    title: "Loading...",
    url: "/",
  },
  setBreadcrumb: (item) => set(() => ({ breadcrumb: item })),
}));
