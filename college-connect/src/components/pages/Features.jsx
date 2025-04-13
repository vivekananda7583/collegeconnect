const Features=()=>{
    return (
        <div>
            <section className=" text-center py-5 ">
                <h1>Discover what CollegeConnect offers!!</h1>
                <p className="lead">A platform where students connect, collaborate, and innovate together.</p>
            </section>
            <section className="container ">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title">Find Team members</h5>
                                <p className ="card-text">Browse projects and connect with like-minded individuals.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title">Collaborate Seamlessly</h5>
                                <p className ="card-text">Chat with project owners and work together efficiently.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title">Post Project Ideas</h5>
                                <p className ="card-text">Easily share your project ideas and find teammates to work with.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-center py-5 bg-light">
                <h2>Start Your Journey Today!</h2>
                <button className="btn btn-success btn-lg">Join Now</button>
            </section>
        </div>
    )
}
export default Features;