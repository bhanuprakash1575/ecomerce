export default function ({label}:{label ?: string | undefined}){
  return (
    <div className={`input-group w-full `}>
      <input className="w-full p-2 z-10" type="text" id="name" placeholder="" required />
      <p className="-z-10">{label}</p>
    </div>
  );
};
