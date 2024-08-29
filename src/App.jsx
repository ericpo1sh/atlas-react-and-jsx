import React from 'react'
import Header from './Components/Header.jsx'
import Section from './Components/Section.jsx';
import HelpfulResource from './Components/HelpfulResource.jsx';

function App() {
  return <div className="app">
    <Header />
    <Section title='What is react?'>
      React is a popular JavaScript library for building dynamic user interfaces, particularly for single-page applications. Developed by Facebook, it enables developers to create reusable components that manage their own state, making complex UIs easier to build and maintain. React's key feature is its virtual DOM, which efficiently updates only the parts of the page that change, leading to faster performance. By allowing developers to describe what the UI should look like at any given state, React simplifies the process of creating interactive and responsive web applications.
    </Section>
    <Section title="Benefits of react">
      <ul>
        <li>Component-Based Architecture</li>
        <li>Virtual DOM for Performance</li>
        <li>Declarative UI</li>
        <li>Strong Ecosystem and Community Support</li>
        <li>SEO-Friendly</li>
      </ul>
    </Section>
    <Section title='Helpful resources'>
      <HelpfulResource label='How to copy to clipboard in react' link='https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard'></HelpfulResource>
      <HelpfulResource label='Event Handling' link='https://atlas-jswank.github.io/blog/jsx/#event-handling'></HelpfulResource>
      <HelpfulResource label='Rendering Children' link='https://atlas-jswank.github.io/blog/jsx/#rendering-children'></HelpfulResource>
    </Section>
  </div>;
}

export default App;
