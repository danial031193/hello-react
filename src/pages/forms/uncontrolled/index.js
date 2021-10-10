import React, { useRef } from 'react';

const UncontrolledForm = () => {
  const inputs = useRef({});

  const getRefs = (element, id) => {
    inputs.current[id] = element;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const resultRefs = Object.values(inputs.current).reduce((data, element) => {
      data[element.name] = element.value;
      return data;
    }, {});

    const resultForm = [...e.target.elements].reduce((data, element) => {
      if (element.type === 'text') {
        data[element.name] = element.value;
      }

      return data;
    }, {});

    console.log({ resultRefs, resultForm });
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <p>Name</p>
        <input ref={(element) => getRefs(element, 'name')} type="text" name="name" />
      </label>

      <label>
        <p>Phone</p>
        <input ref={(element) => getRefs(element, 'phone')} type="text" name="phone" />
      </label>

      <button type="submit">Submit form</button>
    </form>
  );
};

export default UncontrolledForm;
