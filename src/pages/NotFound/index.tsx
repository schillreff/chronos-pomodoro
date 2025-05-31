import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

export const NotFound = () => {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml aria-labelledby='not-found-heading'>
          <Heading id='not-found-heading'>404 - Page Not Found 🚀</Heading>
          <p>
            Oops! It looks like the page you're trying to access doesn't exist.
            Maybe it went on vacation, decided to explore the universe, or got
            lost somewhere between two black holes. 🌌
          </p>
          <p>
            But don’t worry, you're not lost in space (yet). You can safely
            return to the{' '}
            <a href='/' aria-label='Go to the home page'>
              home page
            </a>{' '}
            or the{' '}
            <a href='/history' aria-label='Go to your page history'>
              history
            </a>{' '}
            — or you can stay here and pretend you found a secret page that only
            the coolest explorers can access. 🧭✨
          </p>
          <p>
            If you believe this page should exist (or if you want to chat about
            time travel and wormholes), feel free to get in touch. Otherwise,
            use the menu to return to the real world.
          </p>
          <p>
            In the meantime, here's something to ponder: "If a page doesn’t
            exist on the internet, did it ever really exist?" 🤔💭
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
};
