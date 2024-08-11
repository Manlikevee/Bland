import PrimaryBtn from "../../../components/utils/PrimaryBtn"
import { FaArrowRightLong } from "react-icons/fa6";

const Training = () => {
    return (
        <section className="profilewriting training">
            <div>
                <div>
                    <h3>Training</h3>
                    <p>Upskill and improve competencies with our governance-focused trainings for <br /> organisations and professionals.</p>

                </div>
                <PrimaryBtn>Request Service <FaArrowRightLong />
                </PrimaryBtn>
            </div>
            <div>
                <div>
                    <h3>Board Setup</h3>
                    <p>Starting a new board or seeking to improve an existing one? BoardSeats provides digitised tools and services for effective board setup and management.</p>
                </div>

                <PrimaryBtn>View Training <FaArrowRightLong />
                </PrimaryBtn>
            </div>
        </section>
    )
}

export default Training