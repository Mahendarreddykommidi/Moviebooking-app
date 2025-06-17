import React from 'react';
import {assets} from "../assets/assets"
const Footer = () => {
  return (
    <>
      <div>
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-white">
          <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-white pb-6">
            <div className="md:max-w-96 flex flex-col space-y-5">
              <img src={assets.logo} alt="" className='w-40' />
            
              <p className="mt-6 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <div className="flex items-center gap-3 my-3">
                <img src={assets.googlePlay} alt="" />
                <img src={assets.appStore} alt="" />

              </div>
            </div>
            <div className="flex-1 flex items-start md:justify-end gap-20">
              <div>
                <h2 className="font-semibold mb-5 text-white">Company</h2>
                <ul className="text-sm space-y-2">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="#">Privacy policy</a></li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold mb-5 text-white">Get in touch</h2>
                <div className="text-sm space-y-2">
                  <p>+1-212-456-7890</p>
                  <p>contact@example.com</p>
                </div>
              </div>
            </div>
          </div>
          <p className="pt-4 text-center text-xs md:text-sm pb-5">
            Copyright 2024 © Company name. All Right Reserved.
          </p>
        </footer>
      </div>

    </>
  );
};

export default Footer;