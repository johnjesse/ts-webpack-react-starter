import * as React from 'react';
import styled from '@emotion/styled';

import { IThemedProps } from '../theme';

interface IToggleProps {
  on: boolean;
  label: React.ReactNode;
  onChange(value: boolean): void;
}

const Container = styled.div<IThemedProps>(({ theme }) => ({
  position: 'relative',
  width: theme.spacing4,
  height: theme.spacing2,
  display: 'inline-block',
  marginRight: `calc(${theme.spacing1} / 2)`,
}));

const Input = styled.input({
  opacity: 0,
  width: 0,
  height: 0,
});

const Slider = styled.span<IThemedProps>(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: theme.background03,
  transition: '.2s',
  borderRadius: theme.spacing1,

  '&:before': {
    position: 'absolute',
    content: '""',
    height: '1.5rem',
    width: '1.5rem',
    left: '0.25rem',
    bottom: '0.25rem',
    backgroundColor: theme.interactive01,
    transition: '.2s',
    borderRadius: theme.spacing1,
  },

  'input:focus + &:before, input:hover + &:before': {
    boxShadow: `0px 0px 0.5rem ${theme.interactive01}`,
  },
  'input:active + &:before': {
    boxShadow: `0px 0px 1rem ${theme.interactive01}`,
  },

  'input:checked + &:before': {
    transform: `translateX(${theme.spacing2})`,
  },
}));

const Label = styled.label<IThemedProps>(({ theme }) => ({
  height: theme.spacing2,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
}));

const Toggle = ({ on, label, onChange }: IToggleProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <Label>
      <Container>
        <Input checked={on} type="checkbox" onChange={handleChange} />
        <Slider />
      </Container>
      {label}
    </Label>
  );
};

export { Toggle };
