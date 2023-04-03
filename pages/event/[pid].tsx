import Event from '@/components/Event/Event';
import { fetchData } from '@/utils/utils';
import { QueriedVolunteerEventData } from 'bookem-shared/src/types/database';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

/**
 * Event Detail Page
 * @returns
 */
const EventDetail = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [event, setEvent] = useState<QueriedVolunteerEventData>();
  const [error, setError] = useState<Error>();

  // use simple fetch to fetch when component is mounted
  useEffect(() => {
    if (pid) {
      fetchData('/api/event/' + pid)
        .then(data => setEvent(data))
        .catch(err => setError(err));
    } else setError(new Error('No pid found'));
  }, [pid]);

  return (
    <>
      {/* TODO: render 404 page */}
      {error && <>404 Event not found!</>}
      {!event && !error && <div>Loading...</div>}
      {event && <Event event={event} />}
    </>
  );
};

export default EventDetail;

// perform automatic redirection to login page if user not logged in.
export { getServerSideProps } from '@/lib/getServerSideProps';
