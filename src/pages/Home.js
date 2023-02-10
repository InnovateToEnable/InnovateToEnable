import React from "react";
import { useAuth } from "../hooks/useAuth.js";

const Home = () => {
  const { user, signout, signInWithGoogle } = useAuth();
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="builder-columns div-3">
            <div className="builder-column column">
              <div className="div-4">
                <div className="div-5">
                  <div className="div-6">
                    <div className="builder-columns div-7">
                      <div className="builder-column column-2">
                        <div className="div-8">Innovate to Enable</div>
                      </div>
                    </div>
                  </div>
                  <div className="div-9">
                    <div className="builder-columns div-10">
                      <div className="builder-column column-3">
                        <div className="here-at-enable-pulse-we-seek-to">
                          Here at EnablePulse we seek to bring trailblazers
                          together to address specific problems faced by people
                          with disabilities.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-11">
                    <div className="div-12">
                      {user ? (
                        <div
                          className="div-13"
                          style={{ cursor: "pointer" }}
                          onClick={signout}
                        >
                          Logout
                        </div>
                      ) : (
                        <div
                          className="div-13"
                          style={{ cursor: "pointer" }}
                          onClick={signInWithGoogle}
                        >
                          Login
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="builder-column column-4">
              <div className="div-14">
                <div className="builder-columns div-15">
                  <div className="builder-column column-5">
                    <div className="div-16">
                      <div className="builder-columns div-17">
                        <div className="builder-column column-6">
                          <div className="div-18">
                            <div className="div-19" />
                            <div className="div-20">
                              <picture>
                                <source
                                  srcset="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3ae282a329b849e8993834c01dafca27?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3ae282a329b849e8993834c01dafca27?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3ae282a329b849e8993834c01dafca27?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3ae282a329b849e8993834c01dafca27?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3ae282a329b849e8993834c01dafca27?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3ae282a329b849e8993834c01dafca27?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3ae282a329b849e8993834c01dafca27?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3ae282a329b849e8993834c01dafca27"
                                  type="image/webp"
                                />
                                <img
                                  loading="lazy"
                                  alt="image1"
                                  src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3ae282a329b849e8993834c01dafca27"
                                  srcset="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3ae282a329b849e8993834c01dafca27?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3ae282a329b849e8993834c01dafca27?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3ae282a329b849e8993834c01dafca27?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3ae282a329b849e8993834c01dafca27?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3ae282a329b849e8993834c01dafca27?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3ae282a329b849e8993834c01dafca27?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3ae282a329b849e8993834c01dafca27?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3ae282a329b849e8993834c01dafca27"
                                  className="image"
                                />
                              </picture>
                              <div className="builder-image-sizer image-sizer" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          display: flex;
          flex-direction: column;
          max-width: 1557px;
          justify-content: flex-start;
          align-items: flex-start;
          padding-top: 10px;
          padding-right: 10px;
          padding-bottom: 10px;
          padding-left: 10px;
        }
        .div-2 {
          display: flex;
          flex-direction: column;
          max-width: 1537px;
        }
        .div-3 {
          display: flex;
        }
        @media (max-width: 999px) {
          .div-3 {
            flex-direction: column;
            align-items: stretch;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(51.82% - 10px);
          margin-left: 0px;
        }
        @media (max-width: 999px) {
          .column {
            width: 100%;
          }
        }
        .div-4 {
          display: flex;
          flex-direction: column;
          max-width: 797px;
          justify-content: flex-start;
          align-items: flex-start;
          padding-top: 10px;
          padding-right: 10px;
          padding-bottom: 10px;
          padding-left: 10px;
        }
        .div-5 {
          display: flex;
          flex-direction: column;
          max-width: 701px;
          justify-content: flex-start;
          align-items: flex-start;
          padding-right: 88px;
          padding-bottom: 114px;
          padding-left: 20px;
          background-color: rgba(255, 255, 255, 1);
        }
        .div-6 {
          display: flex;
          flex-direction: column;
          max-width: 691px;
          padding-top: 10px;
          padding-right: 10px;
          padding-bottom: 10px;
          padding-left: 10px;
        }
        .div-7 {
          display: flex;
        }
        @media (max-width: 999px) {
          .div-7 {
            flex-direction: column;
            align-items: stretch;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(101.36% - 0px);
          margin-left: 0px;
        }
        @media (max-width: 999px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-8 {
          max-width: 671px;
          color: rgba(0, 0, 0, 1);
          font-size: 80px;
          letter-spacing: -3%;
          text-align: left;
          font-family: "Open Sans", sans-serif;
        }
        .div-9 {
          display: flex;
          flex-direction: column;
          max-width: 556px;
          margin-top: 12px;
          padding-top: 10px;
          padding-right: 10px;
          padding-bottom: 10px;
          padding-left: 10px;
        }
        .div-10 {
          display: flex;
        }
        @media (max-width: 999px) {
          .div-10 {
            flex-direction: column;
            align-items: stretch;
          }
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(101.71% - 0px);
          margin-left: 0px;
        }
        @media (max-width: 999px) {
          .column-3 {
            width: 100%;
          }
        }
        .here-at-enable-pulse-we-seek-to {
          max-width: 536px;
          color: rgba(0, 0, 0, 1);
          font-size: 36px;
          letter-spacing: -3%;
          text-align: left;
        }
        .div-11 {
          display: flex;
          flex-direction: row;
          max-width: 770px;
          justify-content: center;
          margin-top: 12px;
          border-radius: 50px;
          padding-top: 20px;
          padding-right: 20px;
          padding-bottom: 20px;
          padding-left: 20px;
          background-image: linear-gradient(
            to left,
            rgba(123, 97, 255, 1) 0%,
            rgba(254, 136, 136, 1) 100%
          );
          overflow: auto;
          width: 304.297px;
        }
        .div-12 {
          display: flex;
          flex-direction: row;
          max-width: 107px;
          justify-content: center;
          align-items: center;
          padding-right: 5px;
          padding-left: 5px;
        }
        .div-13 {
          display: flex;
          flex-direction: row;
          max-width: 91px;
          justify-content: center;
          align-items: center;
          padding-top: 3px;
          padding-right: 3px;
          padding-bottom: 3px;
          padding-left: 3px;
          color: rgba(255, 255, 255, 1);
          font-size: 29px;
          letter-spacing: 0%;
          text-align: center;
          font-family: "Heebo", sans-serif;
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(48.11% - 10px);
          margin-left: 20px;
        }
        @media (max-width: 999px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-14 {
          display: flex;
          flex-direction: column;
          max-width: 740px;
          padding-top: 10px;
          padding-right: 10px;
          padding-bottom: 10px;
          padding-left: 10px;
        }
        .div-15 {
          display: flex;
        }
        @media (max-width: 999px) {
          .div-15 {
            flex-direction: column;
            align-items: stretch;
          }
        }
        .column-5 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(101.27% - 0px);
          margin-left: 0px;
        }
        @media (max-width: 999px) {
          .column-5 {
            width: 100%;
          }
        }
        .div-16 {
          display: flex;
          flex-direction: column;
          max-width: 720px;
        }
        .div-17 {
          display: flex;
        }
        @media (max-width: 999px) {
          .div-17 {
            flex-direction: column;
            align-items: stretch;
          }
        }
        .column-6 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(99.86% - 0px);
          margin-left: 0px;
        }
        @media (max-width: 999px) {
          .column-6 {
            width: 100%;
          }
        }
        .div-18 {
          display: flex;
          flex-direction: column;
          max-width: 720px;
          justify-content: flex-start;
          align-items: flex-end;
          padding-top: 31px;
          padding-right: 82px;
          padding-bottom: 31px;
          background-color: rgba(255, 255, 255, 1);
        }
        .div-19 {
          display: flex;
          max-width: 636px;
          height: 1px;
          width: 636px;
        }
        .div-20 {
          display: flex;
          align-self: stretch;
          position: relative;
          min-width: 20px;
          min-height: 20px;
          max-width: 710px;
          margin-top: 169px;
        }
        .image {
          object-fit: contain;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer {
          width: 100%;
          padding-top: 60.985915492957744%;
          pointer-events: none;
          font-size: 0;
        }
      `}</style>
    </>
  );
};

export default Home;
