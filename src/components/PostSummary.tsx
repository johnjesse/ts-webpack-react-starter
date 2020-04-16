import * as React from 'react';
import styled from '@emotion/styled';

import { IThemedProps } from '../theme';
import { getLocaleSensitiveDateTimeString } from '../utils/getLocaleSensitiveDateTimeString';

const Container = styled.a<IThemedProps>(({ theme }) => ({
  cursor: 'pointer',
  background: theme.background02,
  width: '100%',
  padding: '1.5rem',
  transition: 'all 0.2s ease-in-out',
  '&:focus,&:hover': {
    transform: 'scale(1.05)',
  },
  display: 'flex',
  '@media (max-width: 480px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },

  marginBottom: '2rem',
  borderRadius: theme.borderRadius,
}));

const ImagePanel = styled.div({
  height: '8rem',
  width: '8rem',
  flex: ' 0 0 auto',
  alignSelf: 'center',
});

const Img = styled.img({
  height: '100%',
  width: '100%',
  objectFit: 'contain',
  objectPosition: 'center',
});

const ContentPanel = styled.div({
  marginLeft: '3rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  '@media (max-width: 480px)': {
    alignItems: 'center',
    marginLeft: 0,
    marginTop: '2rem',
  },
});

const TitleContainer = styled.div<IThemedProps>(({ theme }) => ({
  color: theme.interactive01,
  marginBottom: '1em',
}));

const SummaryContainer = styled.div({
  marginBottom: '1em',
  '@media (max-width: 480px)': {
    display: 'none',
  },
});
const TimeStampContainer = styled.div({
  fontSize: '12px',
});

interface IPostSummaryProps {
  children: React.ReactNode;
  className?: string;
}

function PostSummary({ children, className }: IPostSummaryProps) {
  return (
    <Container className={className} tabIndex={0}>
      {children}
    </Container>
  );
}

interface ITitleProps {
  children: string;
}
const Title = ({ children }: ITitleProps) => <TitleContainer>{children}</TitleContainer>;

interface ISummaryProps {
  children: string;
}

const Summary = ({ children }: ISummaryProps) => <SummaryContainer>{children}</SummaryContainer>;

interface ITimeStampProps {
  day: number;
  month: number;
  year: number;
}

const TimeStamp = ({ day, month, year }: ITimeStampProps) => (
  <TimeStampContainer>{getLocaleSensitiveDateTimeString(day, month, year)}</TimeStampContainer>
);

interface IImageProps {
  src?: string;
  alt?: string;
  children?: React.ReactNode;
}

const Image = ({ src, alt, children }: IImageProps) => (
  <ImagePanel>{src ? <Img src={src} alt={alt} loading="lazy" /> : children}</ImagePanel>
);

interface IContent {
  children: React.ReactNode;
}
const Content = ({ children }: IContent) => <ContentPanel>{children}</ContentPanel>;

PostSummary.Image = Image;
PostSummary.Content = Content;
PostSummary.Title = Title;
PostSummary.Summary = Summary;
PostSummary.TimeStamp = TimeStamp;

export { PostSummary };
