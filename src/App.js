import React from 'react';

const ContentComponent = (props) => {
  return <div>{props.content}</div>;
};

const App = () => {
  return (
      <div>
        <ContentComponent content="Привет, мир!" />
        <ContentComponent content="Это еще один компонент" />
        <ContentComponent content="Меня зовут Гулзат" />
      </div>
  );
};

export default App;