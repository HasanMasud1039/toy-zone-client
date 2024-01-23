
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import ToyTabShow from "./ToyTabShow";
import { Pagination } from "swiper/modules";

// TODO: implement pagination here on this page
const ToyTab = ({ items }) => {
    // console.log(items);
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <div >

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex flex-wrap justify-evenly mt-8 gap-4'>
                        {
                            items.map(item => <ToyTabShow
                                key={item._id}
                                item={item}
                            ></ToyTabShow>)
                        }
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default ToyTab;