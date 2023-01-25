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
    description: 'awjiaosjdijdioawjaiojsiodjwioajsidjwioj',
    programDate: new Date('October 20, 2014 11:13:00'),
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  useEffect(() => {
    //Fetch the data using pid
    setEvent({
      _id: new mongoose.Types.ObjectId(),
      name: 'Example Event',
      description: 'awjiaosjdijdioawjaiojsiodjwioajsidjwioj',
      programDate: new Date('October 13, 2014 11:13:00'),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }, [pid]);

  return (
    <>
      <Event event={event} />
    </>
  );
};

export default EventDetail;
