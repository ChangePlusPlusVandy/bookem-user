import Event from '@/components/Event/Event';
import { QueriedVolunteerProgramData } from 'bookem-shared/src/types/database';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import mongoose from 'mongoose';

const EventDetail = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [event, setEvent] = useState<QueriedVolunteerProgramData>({
    _id: new mongoose.Types.ObjectId(),
    name: 'Default Event',
    description:
      "Book'em partners with Habitat for Humanity of Greater Nashville to provide books to children moving into their new homes. Books are handpicked, bundled, and personalized with a name tag before being taken to home dedication sites.",
    programDate: new Date('October 20, 2014 11:13:00'),
    createdAt: new Date(),
    updatedAt: new Date(),
    users: [new mongoose.Types.ObjectId()],
    hasForm: false,
    category: 'RFR',
  });

  useEffect(() => {
    //Fetch the data using pid
    setEvent({
      _id: new mongoose.Types.ObjectId(),
      name: 'Example Event',
      description:
        "Book'em partners with Habitat for Humanity of Greater Nashville to provide books to children moving into their new homes. Books are handpicked, bundled, and personalized with a name tag before being taken to home dedication sites.",
      programDate: new Date('October 13, 2014 11:13:00'),
      createdAt: new Date(),
      updatedAt: new Date(),
      users: [new mongoose.Types.ObjectId()],
      hasForm: false,
      category: 'RFR',
    });
  }, [pid]);

  return (
    <>
      <Event event={event} />
    </>
  );
};

export default EventDetail;

// perform automatic redirection to login page if user not logged in.
export { getServerSideProps } from '@/lib/getServerSideProps';
