type Button = {
  size: string;
  label: string;
};

export default function Button({ size, label }: Button) {
  if (size === 'large') {
    return (
      <button className='w-[18.75rem] bg-youtopBase rounded-lg text-white text-6xl py-6'>
        {label}
      </button>
    );
  } else if (size === 'medium') {
    return (
      <button className='w-52 bg-youtopBase rounded-lg text-white text-3xl py-4'>
        {label}
      </button>
    );
  } else {
    return (
      <button className='w-36 bg-youtopBase rounded-lg text-white text-2xl py-3'>
        {label}
      </button>
    );
  }
}
