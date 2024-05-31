import { LinkButton } from '@zabui/comps';


export default function NavBar() {
  return (
        <nav className="justify-center hidden w-1/3 sm:flex">
          <LinkButton href="/" text="Home" color="white"/>
          <LinkButton href="/docs" text="Docs" color="white" />
          <LinkButton href="/component" text="Components" color="white" />
        </nav>
  );
}