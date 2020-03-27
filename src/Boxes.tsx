import * as React from 'react';
import styled from '@emotion/styled';
import { gsap, Bounce } from 'gsap';

const Box = styled.div({
  width: 50,
  height: 50,
  backgroundColor: 'black',
  margin: '200px 50px',
  display: 'inline-block',
});
const NewBox = styled(Box)({ backgroundColor: 'orange' });

export const Boxes = () => {
  React.useLayoutEffect(() => {
    const boxes = document.querySelectorAll('#box');
    const tl = gsap.timeline();
    tl.from(boxes, {
      y: -300,
      ease: Bounce.easeOut,
      duration: 1,
      stagger: {
        amount: 0.05,
      },
    });

    tl.add('rotate');

    tl.from(
      boxes,
      {
        rotation: 90,
        duration: 2,
        ease: Bounce.easeIn,
        stagger: {
          amount: 0.05,
        },
      },
      'rotate-=0.25'
    );
    tl.from(
      boxes,
      {
        rotation: 180,
        duration: 1,
        ease: Bounce.easeOut,
        stagger: {
          amount: 0.05,
        },
      },
      'rotate+=1.75'
    );

    const newBox = document.querySelectorAll('#newbox');
    tl.from(
      newBox,
      {
        rotation: 90,
        duration: 2,
        ease: Bounce.easeIn,
      },
      'rotate-=0.25'
    );
    tl.from(
      newBox,
      {
        rotation: 180,
        duration: 1,
        ease: Bounce.easeOut,
      },
      'rotate+=1.75'
    );
  }, []);

  return (
    <>
      <NewBox id="newbox" />
      <Box key="1" id="box" />
      <Box key="2" id="box" />
      <Box key="3" id="box" />
      <Box key="4" id="box" />
      <Box key="5" id="box" />
    </>
  );
};
