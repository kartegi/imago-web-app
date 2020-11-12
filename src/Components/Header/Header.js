import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/swiper.scss";
import "./Header.css";

SwiperCore.use([Autoplay, Pagination]);

function Header() {
    return (
        <header className="slider">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                speed={1000}
                effect={"cube"}
                // pagination={{
                //     el: ".swiper-pagination",
                //     type: "bullets",
                // }}
                autoplay={{
                    disableOnInteraction: false,
                }}
                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img
                        className="slider-img"
                        src="https://sun9-54.userapi.com/c849536/v849536663/1cf5e0/PL3-YrNixII.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://sun9-66.userapi.com/c841339/v841339257/48fb0/tXxk9SOfzFg.jpg"
                        className="slider-img"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://sun9-47.userapi.com/c638119/v638119531/6061c/iNKHGnCkpkg.jpg"
                        className="slider-img"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://sun9-7.userapi.com/c836530/v836530604/1a812/LnwVsenvVJE.jpg"
                        className="slider-img"
                    />
                </SwiperSlide>
            </Swiper>
        </header>
    );
}

export default Header;
