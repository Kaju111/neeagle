

import ScrollZoom from "../../elements/ScrollZoom";

export default function Video() {
    return (
        <> 
            
            <section className="video-section video-parents">
                <div className='inner-box'>
                    <ScrollZoom>
                    <div className="outer-container video-wrapper">
                        <video
                            src="assets/images/promo.mp4" // put your video in /public/videos
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{
                            width: "100%",
                            borderRadius: "10px",
                            objectFit: "cover",
                            }}
                        />
                    </div>
                    </ScrollZoom>
                </div>
            </section>

        </>
    )
}
