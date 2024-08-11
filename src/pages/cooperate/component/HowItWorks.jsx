import accessboard from "../../../assets/images/accessBoard.svg"
import boardseat from "../../../assets/images/boardseat.svg"
import verfiedBoard from "../../../assets/images/verfiedBoard.svg"
import arrowright from "../../../assets/images/arrowRight.svg"

const HowItWorks = () => {
    return (
        <section className="howItWorks">
            <p className="redText ">How does it work?</p>
            <h2>Board Recruitment Process</h2>

            <div className="recruitment">
                <div className="box">
                    <img src={boardseat} alt="" />
                    <h3>Create Your BoardSeats Account </h3>
                </div>

                <div className="box">
                    <img src={accessboard} alt="" />
                    <h3>Create Your Corporate Profile </h3>
                </div>

                <div className="box">
                    <img src={verfiedBoard} alt="" />
                    <h3>Access Verified Board Candidates</h3>
                </div>
            </div>

            <p className="redText arrowright ">Get started <img src={arrowright} alt="" /></p>


        </section>
    )
}

export default HowItWorks