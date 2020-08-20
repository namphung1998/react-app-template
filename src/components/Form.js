import React, { useState } from 'react';

function Form() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form>
      <input type="text" value={value} onChange={handleChange} />
    </form>
  );
}

export default Form;
