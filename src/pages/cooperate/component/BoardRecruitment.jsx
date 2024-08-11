import PrimaryBtn from "../../../components/utils/PrimaryBtn"

const BoardRecruitment = () => {
    return (
        <section className="boardRecruitment">
            <h2> <span className="red">Optimised Board </span>Recruitment <br />
                for Corporate members</h2>

            <p>BoardSeats provides a digitised platform, built to enable the requisite connections for a flexible, <br /> reliable and optimised Board recruitment process.</p>

            <div className="columnsContainer">

                <div className="column" >
                    <div></div>
                    <p>Candidate pool and access to organisations </p>
                    <p>Recruitment process</p>
                    <p>Background check and vetting </p>
                    <p>Competence, skills and needs match </p>
                </div>
                <div className="column ">
                    <div>
                        <h3><span className="red">Board</span> Recruitment </h3>
                        <h4>The Boardseats Approach</h4>
                    </div>
                    <p>Easy access to a wider pool of qualified prospects and leading organisations</p>
                    <p>Eliminating the lengthy recruitment process through automation</p>
                    <p>Prevetted prospects and organisations</p>
                    <div>
                        <p>Automated matching of
                            prospects to organisations</p>
                        <PrimaryBtn>Hire Board Candidates</PrimaryBtn>
                    </div>

                </div>
                <div className="column">
                    <div>
                        <h3><span className="red">Board</span> Recruitment </h3>
                        <p>The Old approach</p>
                    </div>
                    <p>Limited access to professionals and
                        organisations within your network</p>
                    <p>Ardous search through piles of
                        prospects for best fit</p>
                    <p>Extended background check
                        process and cost</p>
                    <p>High propensity for board-candidate
                        mismatch</p>

                </div>
            </div>
        </section>
    )
}

export default BoardRecruitment