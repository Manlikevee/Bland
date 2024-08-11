import accessboard from "../../../assets/images/accessBoard.svg"
import boardseat from "../../../assets/images/boardseat.svg"
import profile from "../../../assets/images/profile.svg"
import arrowright from "../../../assets/images/arrowRight.svg"

const HowItWorks = () => {
    return (
        <section className="howItWorks">
            <p className="redText ">How does it work?</p>
            <h2>Optimised Recruitment for Executives</h2>

            <div className="recruitment">
                <div className="box">
                    <img src={boardseat} alt="" />
                    <h3>Create Your BoardSeats Account </h3>
                </div>
                <div className="box">
                    <img src={profile} alt="" />
                    <h3>Create Your Profile </h3>
                </div>
                <div className="box">
                    <img src={accessboard} alt="" />
                    <h3>Access Board Opportunities </h3>
                </div>
            </div>

            <p className="redText arrowright ">Get started <img src={arrowright} alt="" /></p>


        </section>
    )
}

export default HowItWorks