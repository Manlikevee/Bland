import PrimaryBtn from "../../../components/utils/PrimaryBtn"
import yellored from "../../../assets/images/yelloRed.svg"
import arrowDown from "../../../assets/images/arrowdown.svg"

const ExploreBoardRoles = () => {
    return (
        <section className="exploreboard">
            <h2>Explore Board Roles</h2>
            <p>Enjoy access to board opportunities once you <a className="redLink" href="">Signup</a>.</p>

            <div className="exploreBox">

                <img className="yellowred" src={yellored} alt="" />
                <div className="box">
                    <h3>Non-Executive Director</h3>
                    <p>Chief Operating Officer / General Manager</p>
                    <p className="redText">Hospital & Health care</p>
                </div>
                <div className="box">
                    <h3>Executive Director</h3>
                    <p>Strategy & Transformation Manager</p>
                    <p className="redText">Banking</p>
                </div>
                <div className="box">
                    <h3>Independent Director</h3>
                    <p>MBA & MiM Admissions Associate Director</p>
                    <p className="redText">education</p>
                </div>
                <div className="box">
                    <h3>Chair</h3>
                    <p>Director, West Africa Region</p>
                    <p className="redText">Technology</p>
                </div>
                <div className="box">
                    <h3>Independent Director</h3>
                    <p>Head of Innovation</p>
                    <p className="redText">Financial Services</p>
                </div>
                <div className="box">
                    <h3>Independent Director</h3>
                    <p>Head of Development</p>
                    <p className="redText">Financial technology</p>
                </div>

            </div >

            <div className="signup">
                <p>Signup to see all available roles</p>
                <img src={arrowDown} alt="" />
            </div>

            <PrimaryBtn>Sign Up</PrimaryBtn>

        </section >
    )
}

export default ExploreBoardRoles