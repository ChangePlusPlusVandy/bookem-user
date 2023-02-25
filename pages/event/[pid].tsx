import Event from '@/components/Event/Event';
import { QueriedVolunteerProgramData } from 'bookem-shared/src/types/database';
import { useRouter } from 'next/router';
import useSWR from 'swr';

// Helper function for useSWR to fetch data
const fetcher = (url: string) => fetch(url).then(res => res.json());

/**
 * Event Detail Page
 * @returns
 */
const EventDetail = () => {
  const router = useRouter();
  const { pid } = router.query;

  // Fetch event by id
  const {
    data: event,
    error,
    isLoading,
  } = useSWR<QueriedVolunteerProgramData>('/api/event/' + pid, fetcher);

  if (error) return <div>Failed to load volunteer history</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!event) return <></>;

  return (
    <>
      <Event event={event} />
    </>
  );
};

export default EventDetail;

// perform automatic redirection to login page if user not logged in.
export { getServerSideProps } from '@/lib/getServerSideProps';
