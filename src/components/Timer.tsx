
export default function Timer() {
  return (
    <div className='flex items-center gap-4 timer'>
      <div>
        <p>Days</p>
        <p className='time'>03</p>
      </div>
      <p className='colan'>:</p>
      <div>
        <p>Hours</p>
        <p className='time'>23</p>
      </div>
      <p className='colan'>:</p>
      <div>
        <p>Minutes</p>
        <p className='time'>19</p>
      </div>
      <p className='colan'>:</p>
      <div>
        <p>Seconds</p>
        <p className='time'>56</p>
      </div>
    </div>
  );
}
