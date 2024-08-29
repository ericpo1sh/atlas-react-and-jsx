import React from 'react'
import Header from './Components/Header.jsx'
import Section from './Components/Section.jsx';

function App() {
  return <div className="app">
    <Header />
    <Section title='What is React?'>
      React is a popular JavaScript library for building dynamic user interfaces, particularly for single-page applications. Developed by Facebook, it enables developers to create reusable components that manage their own state, making complex UIs easier to build and maintain. React's key feature is its virtual DOM, which efficiently updates only the parts of the page that change, leading to faster performance. By allowing developers to describe what the UI should look like at any given state, React simplifies the process of creating interactive and responsive web applications.
    </Section>
    <Section title="Benefits of React">
      <ul>
        <li>Component-Based Architecture</li>
        <li>Virtual DOM for Performance</li>
        <li>Declarative UI</li>
        <li>Strong Ecosystem and Community Support</li>
        <li>SEO-Friendly</li>
      </ul>
    </Section>
  </div>;
}

export default App;
