import './LoadingOverlay.css';

function LoadingOverlay() {
  return (
    <div className='loading'>
      <div className='loading-logo'>
        <img src={process.env.PUBLIC_URL + '/logo.svg'} alt='' className='loading-logo' />
      </div>
      <div className='text'> Loading </div>
    </div>
  );
}

export default LoadingOverlay;
