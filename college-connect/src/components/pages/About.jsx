const About=()=>{
    return (
        <div>
            <section className="text-center py-5">
                <h3 className="fw-bold">About CollegeConnect</h3>
                <p className="lead">"CollegeConnect is a platform designed for college students to collaborate on innovative projects. Whether you have an idea and need a team or are looking to join an exciting project, CollegeConnect brings students together to turn ideas into reality."</p>
            </section>
            <section className="text-center ">
                <h3 className="fw-bold">Our Mission</h3>
                <p className="lead">"We aim to bridge the gap between students looking for projects and those with ideas but no team."</p>
            </section>
            <section className=" container text-center py-5">
                <h3 className="fw-bold mb-4">How it Works</h3>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title">Step 1: Create an Account</h5>
                                <p className ="card-text">Sign up to access projects and connect with students.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title">Step 2: Post or Browse Projects</h5>
                                <p className ="card-text">Create a project or find one that interests you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title">Step 3: Message & Collaborate</h5>
                                <p className ="card-text">Connect with project owners and start working together.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default About;