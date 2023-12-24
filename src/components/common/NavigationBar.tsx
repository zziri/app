import Link from "next/link";
import styled from 'styled-components';

const NavBar = styled.div`
  color: white;
  padding: 0.5rem;
  text-align: center;
  border-bottom: 1px solid #DBDEE3;
`;

const LinkItem = styled.a`
  color: #15181E;
  padding: 0.5rem 1.5rem;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  font-size: 1rem;
`;

export default function NavigationBar() {
  return (
    <NavBar>
      <Link href="/" passHref legacyBehavior>
        <LinkItem>홈</LinkItem>
      </Link>
      <Link href="https://zziri.me" passHref legacyBehavior>
        <LinkItem>블로그</LinkItem>
      </Link>
    </NavBar>
  );
}
