
import Link from "next/link"
export default function error() {

    return (
        <>
            <section className="error-section p_relative pb_100 centred">
                <div className="auto-container">
                    <div className="content-box">
                        <div className="sub-title">error</div>
                        <h1><span>404</span></h1>
                        <h2><span>Oops... Something want wrong.</span></h2>
                        <p>We can&apos;t find the page you&apos;re looking for.</p>
                        <Link href="/" className="theme-btn theme-bg">
                            <div className="static-text"><span className="dot"></span><span>Go back</span></div>
                            <div className="overlay-text"><span className="dot"></span><span>Go back</span></div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
