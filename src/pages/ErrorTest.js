import React from 'react';
import ErrorBoundary from '../CatchError';
import ErrorBoundaryTest from '../ErrorBoundaryTest';
function ErrorTest() {
    return (
      <div>
        
          <ErrorBoundary><ErrorBoundaryTest /></ErrorBoundary>
        
      </div>
    );
  }
  
  export default ErrorTest;