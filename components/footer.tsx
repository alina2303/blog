import Container from './container'
import { AiFillYoutube, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="flex gap-20 items-center my-2">
          <div>
            <img src='/assets/blog/authors/alina.jpeg' className="w-50 h-50 rounded-full mr-4" alt='Alina picture' />
          </div>
          <div>
            <h3 className='text-3xl font-extrabold tracking-tight'>Alina Bo</h3>
            <p className='text-sm font-semibold text-gray-500'>
              Software developer from Denmark
            </p>
            <p className='prose prose-sm prose-slate pb-4'>
              Alina is a software developer since 2017. She has a MS degree in Mathematics and BS in Software development.
            </p>
            <div className='flex space-x-5'>
              <p>
                <a target="_blank" href="https://www.youtube.com/alinabo"
                  className="text-gray-400 hover:text-red-500">
                  <AiFillYoutube className='social-media' />
                </a>
              </p>
              <p>
                <a target="_blank" href="https://www.instagram.com/girl_loves_coding"
                  className="text-gray-400 hover:text-pink-500">
                  <AiFillInstagram className='social-media' />
                </a>
              </p>
              <p>
                <a target="_blank" href="https://twitter.com/AlinaBo97934919?t=TN3-wIEX-uYFMYEjPTHGUg&s=09"
                  className="text-gray-400 hover:text-blue-500">
                  <AiFillTwitterCircle className='social-media' />
                </a>
              </p>
            </div>
            <p>
              ©{new Date().getFullYear()} Alina Bo, all rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
