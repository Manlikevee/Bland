import PrimaryBtn from "../../../components/utils/PrimaryBtn"
import { FaArrowRightLong } from "react-icons/fa6";


const ProfileWriting = () => {
    return (
        <section className="profilewriting">
            <div>
                <div>
                    <h3>Profile Writing Service</h3>
                    <p>Give your profile a boost. Attract the board opportunities you desire. BoardSeats' profile writing service provides the visibility required to find your Board role. Get more board oppoertunities with a revamped profile that increases your chances of automatching to give you a competitive advantage</p>

                </div>
                <PrimaryBtn>Request Service <FaArrowRightLong />
                </PrimaryBtn>
            </div>
            <div>
                <div>
                    <h3>Trainings</h3>
                    <p>Find Governance focused trainings  for your  professional upskilling. We offer programs designed for Board of Directors and Senior Management. <br /> <br />

                        We are a PECB Certified training partner. Through this partnership, we provide education and certification under ISO/IEC 17024 for individuals on a wide range of disciplines such as, Information Security, Privacy and Data Protection, Business Continuity, Quality and Service Management, Risk Management, Health and Safety, and Sustainability.</p>
                </div>

                <PrimaryBtn>View Training <FaArrowRightLong />
                </PrimaryBtn>
            </div>
        </section>
    )
}

export default ProfileWriting