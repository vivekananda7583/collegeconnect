import { useState } from "react";

const Postidea = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="card p-4 shadow" style={{ width: "400px" }}>
                <h3 className="text-center mb-3">Post Idea</h3>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Project Title:</label>
                        <input type="text" name="title" placeholder="Enter the project title" className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Project Summary:</label>
                        <textarea name="description" rows="4" style={{ resize: "none" }} className="form-control" placeholder="Give some information about project"></textarea>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Required Positions:</label>
                        <input className="form-control" type="text" name="tags" placeholder="Enter the required positions with space"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Project Owner:</label>
                        <input className="form-control" type="text" placeholder="Enter your name"/>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Post Idea</button>
                </form>
            </div>
        </div>
    );
}

export default Postidea;
