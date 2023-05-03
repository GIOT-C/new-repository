import './HotelsBody.css';
import Hotels from './Hotels';
import img1 from './images/hotel-img-1.png';
import img2 from './images/hotel-img-2.png';
import img3 from './images/hotel-img-3.png';
import img4 from './images/hotel-img-4.png';
function HotelsBody() {
    const hotelsData = [
        {
            hotelsImage: img1,
            place: "Monastero Santa rosa & Spa",
            location: "Salerno, Italy",
            fullStar: "fa-solid fa-star",
            star: "fa-solid fa-star",
            star2: "fa-solid fa-star"
        },
        {
            hotelsImage: img2,
            place: "Grand Hotel Tremezzo",
            location: "Lake Komo, Italy",
            fullStar: "fa-solid fa-star",
            star: "fa-regular fa-star",
            star2: "fa-regular fa-star"
        },
        {
            hotelsImage: img3,
            place: "The Oberoi Udaivilas, Udaipur",
            location: "Udaipur, India",
            fullStar: "fa-solid fa-star",
            star: "fa-regular fa-star",
            star2: "fa-solid fa-star"
        },
        {
            hotelsImage: img4,
            place: "Aka Beverly Hills",
            location: "Los Angeles, USA",
            fullStar: "fa-solid fa-star",
            star: "fa-regular fa-star",
            star2: "fa-regular fa-star"
        }
    ]



    return (
        <>
            <div className="hotels-header-container">
                <div className="hotels-header-child-container">
                    <h1>Hotels and Restaurants</h1>
                    <button className='hotels-header-button read-more' >View all <i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>

            <div className="hotels-body-container">
                <Hotels data={hotelsData[0]} />
                <Hotels data={hotelsData[1]} />
                <Hotels data={hotelsData[2]} />
                <Hotels data={hotelsData[3]} />
            </div>
        </>

    )
}

export default HotelsBody;

