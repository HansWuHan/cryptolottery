import './LoadingOverlay.css';

function LoadingOverlay() {
  return (
    <div className='loading'>
      <div className='logo'>
        <img src={process.env.PUBLIC_URL + '/logo.svg'} alt='' className='logo' />
      </div>
      <div className='text'> Loading </div>
    </div>
  );
}

export default LoadingOverlay;
