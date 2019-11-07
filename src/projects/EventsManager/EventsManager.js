import React from 'react';
import styled from 'styled-components';
import { DescriptionBlock } from 'components/DescriptionBlock';
import { motion } from 'framer-motion';
import { TextBlock } from 'components/TextBlock';
import { Slides } from 'components/Slides';
import party1 from 'assets/party1.gif';
import party2 from 'assets/party2.png';
import party3 from 'assets/party3.png';

const imageSet = [
  { src: party1, des: 'des' },
  { src: party2, des: 'des' },
  { src: party3, des: 'des' }
];

const descDetail = (
  <p>
    This is a Website helping myself and my friends to manage the events we are
    attending. We buy ticket from different website like EventBrite, See ticket
    and Facebook but sometime hard to maintain them all in one platform. The
    website is based on MERN stack MongoDB, Express.js, React, TypeScript, and
    Node.js . The Function of Beta 1.0 includes:
    <br />
    <ul>
      <li>
        Basic Authentication including Register and Login and events editing
        protection
      </li>
      <li>
        Basic interaction including Adding, Updating, and Deleting the events.
      </li>
      <li>Basic Animation and styling</li>
      <li>Basic searching and Filtering function</li>
      <li>Creator detecting enable to edit the events card </li>
      <li>Members attending showing on the events card</li>
      <li>Image uploading on the eventsForm</li>
      <li>Account Page</li>
    </ul>
    <br />
    The future Function will be added soon includes:
    <ul>
      <li>
        More filtering index including Date, Attending number, and distance
        detection
      </li>
      <li>Email Alert when the events is getting close</li>
      <li>Events Detail Page</li>
      <li>Similar Events Page</li>
    </ul>{' '}
  </p>
);

const EventsManager = () => {
  return (
    <motion.div
      initial="exit"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <DescriptionBlock
        title="Party Animal - Events Maneger"
        brief="This is a Website helping myself and my friends to manage the events we are attending. We buy ticket from different website like EventBrite, See ticket and Facebook but sometime hard to maintain them all in one platform. "
        stack=" MongoDB | Express.js | React | TypeScript | Node.js "
        platform=" Web/Mobile"
        category="Web/Design"
        creator="Shuai Wang"
        plink="HTTPS://WARM-CAVERNS-43568.HEROKUAPP.COM/"
        glink="HTTPS://GITHUB.COM/AIDANWANG0309/EVENTSMANAGER"
      />

      <TextBlock title="Description and Technology" description={descDetail} />
      <Container>
        <Slides images={imageSet} />
      </Container>
    </motion.div>
  );
};

const Container = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
`;

export default EventsManager;
