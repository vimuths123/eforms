import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setInputValue, fetchResult } from '../redux/store';
import { useRouter } from 'next/router';
import { useHistory } from 'react-router-dom';





function MyComponent({ inputValue, setInputValue, fetchResult, result, loading, error }) {
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const router = useRouter();

  const handleClick = () => {
    // Perform any actions with the input value here
    console.log('Input value:', inputValue);

    // Dispatch the fetchResult action
    // fetchResult(inputValue);

    // Dispatch the fetchResult action
    fetchResult(inputValue)
      .then(() => {
        alert(error)
        alert(loading)
        // Check if there is no error and loading is false
        if (!error && !loading) {
          alert('dsd');
        }
      })
      .catch((error) => {
        // Handle error
        console.log('Error:', error);
      });

  };




  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleClick}>Get Input Value and Call API</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>} {/* Update error rendering */}
      {result && <div>Result: {result.completion}</div>} {/* Update result rendering */}
    </div>
  );

}

const mapStateToProps = (state) => ({
  inputValue: state.input.inputValue,
  result: state.input.result,
  loading: state.input.loading,
  error: state.input.error,
});

const mapDispatchToProps = { setInputValue, fetchResult };

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
