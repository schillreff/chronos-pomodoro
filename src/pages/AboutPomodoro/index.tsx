import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

export const AboutPomodoro = () => {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml aria-labelledby='about-pomodoro-heading'>
          <Heading id='about-pomodoro-heading'>
            The Pomodoro Technique 🍅
          </Heading>

          <p>
            The Pomodoro Technique is a productivity method created by{' '}
            <strong>Francesco Cirillo</strong>, which consists of breaking work
            into timed intervals (the famous "Pomodoros") separated by short
            breaks. The goal is to stay fully focused for a short period and
            rest to avoid mental fatigue.
          </p>

          <img
            src='https://placehold.co/1920x1080'
            alt='Visual representation of the Pomodoro technique'
          />

          <h2>How does the traditional Pomodoro work?</h2>
          <ul>
            <li>
              <strong>1. Choose a task</strong> you want to accomplish.
            </li>
            <li>
              <strong>2. Work on it for 25 minutes</strong> without
              interruptions.
            </li>
            <li>
              <strong>3. Take a short 5-minute break</strong>.
            </li>
            <li>
              <strong>4. After 4 cycles, take a longer break</strong> (usually
              15 to 30 minutes).
            </li>
          </ul>

          <h2>
            But <strong>Chronos Pomodoro</strong> has a twist 🚀
          </h2>

          <p>
            Our app follows the original concept but with some enhancements and
            customizations to make your workflow even more efficient:
          </p>

          <h3>⚙️ Custom time settings</h3>
          <p>
            You can configure focus time, short breaks, and long breaks however
            you prefer! Just go to the{' '}
            <a href='/settings' aria-label='Go to the settings page'>
              settings page
            </a>{' '}
            and adjust the times to your needs.
          </p>

          <h3>🔁 Sequentially organized cycles</h3>
          <p>
            After each cycle, a new task is automatically added to your history,
            and the app suggests the next step (focus or rest).
          </p>
          <p>
            <strong>Our default pattern:</strong>
          </p>
          <ul>
            <li>
              <strong>Odd cycles</strong>: Work (focus).
            </li>
            <li>
              <strong>Even cycles</strong>: Short break.
            </li>
            <li>
              <strong>Cycle 8</strong>: Special long break to reset the full
              cycle.
            </li>
          </ul>

          <h3>🍅 Cycle visualization</h3>
          <p>
            Just below the timer, you’ll see colored dots representing each
            cycle:
          </p>
          <ul>
            <li>🟡 Yellow: Focus session.</li>
            <li>🟢 Green: Short break.</li>
            <li>🔵 Blue: Long break (every 8 cycles).</li>
          </ul>

          <p>
            This way, you’ll always know where you are in the process and what’s
            coming next — no more scribbling on paper or doing math in your
            head!
          </p>

          <h3>📊 Automatic history</h3>
          <p>
            All your completed and interrupted tasks and cycles are saved in the{' '}
            <a href='/history' aria-label='View your task and cycle history'>
              history
            </a>{' '}
            so you can track your progress over time.
          </p>

          <h2>Why use Chronos Pomodoro?</h2>
          <ul>
            <li>✅ Stay focused with clarity.</li>
            <li>✅ Balance work and rest effectively.</li>
            <li>✅ Customize your own times and cycles.</li>
            <li>✅ Track your history automatically.</li>
          </ul>

          <p>
            <strong>Ready to focus?</strong> Let’s{' '}
            <a href='/' aria-label='Return to the homepage'>
              go back to the homepage
            </a>{' '}
            and start your Pomodoros! 🍅🚀
          </p>

          <p>
            <em>"Full focus, no rush, no pause — just go!"</em> 💪🧘‍♂️
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
};
