// Reusable Queries

import { queryOptions } from "@tanstack/react-query";
import Api from "../Api";
import { Job } from "@/types/Job";

export default function retrieveJobQueryOptions() {
  return queryOptions({
    queryKey: ["jobs"],
    queryFn: getJobs,
  });
}

const getJobs = async (): Promise<Job[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const jobs = await Api.POST(`/job`);
  return jobs;
};

// ** How to use **
// const {data} = useQuery(retrieveJobQueryOptions());
// const {data} = useSuspenseQuery(retrieveJobQueryOptions()); make sure data always exists or defined

// ** Multiple queries **

// const [{data: reseult1, data: reseult2}] = useQueries({queries: [retrieveJobQueryOptions(), retrieveJobQueryOptions()]});
