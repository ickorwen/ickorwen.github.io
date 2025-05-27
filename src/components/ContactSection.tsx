import { Section } from './Section';

export function ContactSection() {
  return (
    <Section delay={0.25}>
      <h2 id="contact">Contact</h2>
      <p>
        Want to collaborate, chat, or just say hi? Reach out via any of the links above or email me at{' '}
        <a 
          href="mailto:chua.raignekenzi@gmail.com" 
          style={{ color: '#dfd390', textDecoration: 'underline' }}
        >
          chua.raignekenzi@gmail.com
        </a>
        .
      </p>
    </Section>
  );
}
