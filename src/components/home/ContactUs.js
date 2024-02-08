import React, { useState } from 'react'

export default function ContactUs() {
    const [formData, setFormData] = useState({
        child_name: '',
        child_dob: '',
        parent_name: '',
        designation: '',
        email: '',
        phone: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {        
        e.preventDefault();
        alert('form submitted');

        fetch('http://localhost/react/server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(formData),
        })
            .then(response => response.text())
            .then(data => {
                console.log(data);                
            })
            .catch(error => console.error('Error:', error));
    };
      function refreshPage() {
    window.location.reload(false);
  }

    return (
        <>
            <section className=" bg-smoke " data-bg-src="assets/img/bg/bg-con-1-1.png">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-auto col-xxl-6">
                            <div className="img-box6">
                                <div className="img-1 mega-hover"><img src="assets/img/about/con-1-1.jpg" alt="img" /></div>
                                <div className="img-2 mega-hover"><img src="assets/img/about/con-1-2.jpg" alt="img" /></div>
                            </div>
                        </div>
                        <div className="col-xl col-xxl-6 align-self-center">
                            <h2 className="sec-title mb-3">Apply for Admission</h2>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="list-style1">
                                        <ul className="list-unstyled mb-0">
                                            <li>Assign practice exercises</li>
                                            <li>Track student progress</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="list-style1">
                                        <ul className="list-unstyled">
                                            <li>Videos and articles</li>
                                            <li>Join millions of students</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <form action="#" className="form-style3" onSubmit={handleSubmit}>
                                <div className="row justify-content-between">
                                    <div className="col-md-6 form-group">
                                        <label>Child's Name <span className="required">(Required)</span></label>
                                        <input type="text"
                                            name="child_name"
                                            value={formData.child_name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Child's DOB <span className="required">(Required)</span></label>
                                        <input type="date"
                                            name="child_dob"
                                            value={formData.child_dob}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Parent's Name <span className="required">(Required)</span></label>
                                        <input type="text"
                                            name="parent_name"
                                            value={formData.parent_name}
                                            onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Parent's Designation <span className="required">(Required)</span></label>
                                        <input type="text" name="designation"
                                            value={formData.designation}
                                            onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Email <span className="required">(Required)</span></label>
                                        <input type="email" name="email"
                                            value={formData.email}
                                            onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Phone No</label>
                                        <input type="number" name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-auto align-self-center form-group">
                                        <input type="checkbox" id="notice" name="notice" />
                                        <label htmlFor="notice">Notify Your child weekly progress</label>
                                    </div>
                                    <div className="col-auto form-group">
                                        <button className="vs-btn" type="submit" onClick={refreshPage}>Apply Now</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
            <section className=" space-extra bg-smoke">
                <div className="container">
                    <div className="title-area">
                        <h2 className="text-center mt-n2">Key supporters</h2>
                    </div>
                    <div className="row vs-carousel gx-10" data-slide-show="5" data-ml-slide-show="4" data-lg-slide-show="3" data-md-slide-show="2" data-sm-slide-show="2">
                        <div className="col-auto" style={{ width: '260px' }}>
                            <div className="brand-style1"><img src="assets/img/brand/b-1-1.png" alt="brand" /></div>
                        </div>
                        <div className="col-auto" style={{ width: '260px' }}>
                            <div className="brand-style1"><img src="assets/img/brand/b-1-2.png" alt="brand" /></div>
                        </div>
                        <div className="col-auto" style={{ width: '260px' }}>
                            <div className="brand-style1"><img src="assets/img/brand/b-1-3.png" alt="brand" /></div>
                        </div>
                        <div className="col-auto" style={{ width: '260px' }}>
                            <div className="brand-style1"><img src="assets/img/brand/b-1-4.png" alt="brand" /></div>
                        </div>
                        <div className="col-auto" style={{ width: '260px' }}>
                            <div className="brand-style1"><img src="assets/img/brand/b-1-5.png" alt="brand" /></div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="vs-wave-shape style2 bg-smoke">
                <svg viewBox="0 0 1920 295" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="wave-path" fillRule="evenodd" clipRule="evenodd" d="M1920 295V202.758C1906.48 131.342 1843.63 77.168 1768.34 77.168C1739.37 77.168 1711.54 85.1814 1687.4 100.128C1650.68 38.4074 1584.56 0 1511.11 0C1412.1 0 1329.2 70.2842 1309.68 163.577C1294.03 136.928 1265.08 119 1232 119C1215.11 119 1198.88 123.673 1184.8 132.389C1163.39 96.397 1124.83 74 1082 74C1022.17 74 972.422 118.018 963.444 175.369C947.459 160.855 926.246 152 903 152C886.11 152 869.88 156.673 855.803 165.389C834.387 129.397 795.832 107 753 107C710.158 107 672.487 129.569 651.251 163.442C635.542 150.075 615.199 142 593 142C576.11 142 559.88 146.673 545.803 155.389C524.387 119.397 485.832 97 443 97C400.012 97 362.23 119.723 341.034 153.789C324.552 132.631 298.841 119 270 119C253.11 119 236.88 123.673 222.803 132.389C201.387 96.397 162.832 74 120 74C53.8333 74 0.000244141 127.833 0.000244141 194C0.000244141 194.41 0.000244141 194.835 0.0152435 195.245L0.000244141 195.248V295H1920Z" />
                </svg>
            </div>
        </>
    )
}
