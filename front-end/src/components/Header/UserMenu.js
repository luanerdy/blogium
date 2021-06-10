import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

import Avatar from '../Avatar';
import DropdownMenu from './DropdownMenu';

export default function UserMenu() {
  const [isDropdownMenuOpen, setDropdownMenuOpen] = useState(false);

  return (
    <Container onClick={() => setDropdownMenuOpen(!isDropdownMenuOpen)}>
      {isDropdownMenuOpen ? <AiOutlineUp /> : <AiOutlineDown />}
      <Avatar middle avatarUrl="https://i.imgur.com/1zISlxg.png" style={{ marginLeft: '10px' }} />
      {isDropdownMenuOpen && <DropdownMenu />}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
