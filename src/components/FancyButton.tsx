
export default function FancyButton({ text }: {text:string}) {
  return (
    <div className="bg-[var(--myred)] text-white py-3 px-6 w-fit rounded mt-6 mx-auto">
      {text}
    </div>
  );
}
