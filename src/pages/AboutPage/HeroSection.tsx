    
export default function HeroSection() {
  return (
    <div className=" grid grid-cols-2 items-center gap-8 pt-9">
      <div>
        <h1 className="text-6xl mb-8">Our Story</h1>
        <p className="whitespace-pre-line">
          {`Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by wide
              range of tailored marketing, data and service solutions, Exclusive has
              10,500 sallers and 300 brands and serves 3 millioons customers across
              the region. 
              
              
              Exclusive has more than 1 Million products to offer,
              growing at a very fast. Exclusive offers a diverse assotment in
              categories ranging from consumer.`}
        </p>
      </div>
      <div>
        <img src="/About.jpg" alt="about" />
      </div>
    </div>
  );
}
