import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';

const Test = forwardRef((props, ref) => {
  const [value, setValue] = useState(250);
  const inputRef = useRef();

  useImperativeHandle(
    ref,
    () => ({
      props,
      inputRef,
      value,
      random: Math.random() * 100,
    }),
    // eslint-disable-next-line
    [value]
  );

  return (
    <input
      type='text'
      value={value}
      ref={ref}
      onChange={e => setValue(e.target.value)}
    />
  );
});

function App() {
  const ref = useRef();
  const getInputValue = () => console.log(ref.current);
  return (
    <>
      <Test ref={ref} />
      <button type='button' onClick={() => getInputValue()}>
        点击我获取值
      </button>
    </>
  );
}

export default App;
