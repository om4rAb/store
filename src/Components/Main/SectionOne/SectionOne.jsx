import "./SectionOneStyle.css"

export default function FirstSection() {
  return (
    <section className='first-section'>
        <div className='left-side'>
            <p>
              Our shop <br /> carries a diverse <br /> range of clothing for <br />
              <span className='Men'>men</span> , <span className='Women'>women</span>, 
              and <br /> 
              <span className="kids">kids</span>.
            </p>
        </div>

        <div className='right-side'>
        </div>
      
    </section>
  )
}
