import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './TreeDetails.css'
import { Modal, ModalHeader, ModalBody } from "reactstrap"

const TreeDetails = (props) => {

    const hoverStyle = {
        boxShadow: "10.5px 10.5px 7px black",
        bottom: "6px"
    }
    let [empData, setEmpData] = useState([])
    let [singleData, setSingleData] = useState({})
    let [modal,setModal]=useState(false)
    let [ceoHover,setCeoHover]=useState(false)
    let [ctoHover,setCtoHover]=useState(false)
    let [cboHover,setCboHover]=useState(false)
    let [cfoHover,setCfoHover]=useState(false)

    useEffect(() => {
        setEmpData(props.wholeData)
    }, [props])

   let teamHover=(name)=>{
    if(name==="Jas John"){setCeoHover(true)}
    else {setCeoHover(false)}
    if(name==="Leo Six"){setCtoHover(true)}
    else {setCtoHover(false)}
    if(name==="Diala Sho"){setCboHover(true)}
    else {setCboHover(false)}
    if(name==="Tab Han"){setCfoHover(true)}
    else {setCfoHover(false)}
    }

    let popUpView = (data) => {
        setSingleData(data)
        setModal(true)
    }

    return <>
        <div className="container-fluid mt-5" >
            <div className="row">
            <div className="col-md-12 cartTextContainer">
                    <h1 className="chartText">Employee Organization Chart</h1>
            </div>
            </div>
            {
                modal ? <><div>
                        <Modal size='sm' isOpen={modal} className=" card detailCard" >
                            <ModalHeader  toggle={() => { setModal(!modal) }}></ModalHeader>
                            <ModalBody>
                            <div id=" card-header detailsC-head">
                                    <center key={singleData.id}><img src={singleData.image} className="detailImage" alt="no-pic" /></center>
                                </div>
                            <div >
                                    <ul  className="list-group" >
                                        <li className="list-group-item"><b>Name : </b>{singleData.name}</li>
                                        <li className="list-group-item"><b>Id : </b>{singleData.id}</li>
                                        <li className="list-group-item"><b>Designation : </b>{singleData.designation}</li>
                                      <li className="list-group-item"><b>Team : </b>{singleData.team}</li>
                                    </ul>
                                </div>
                            </ModalBody>
                        </Modal>
                    </div>
                </> : null
            }
            {empData.length > 0 ? <>
                <div className="row mt-5" >
                    <div className="col-md-12">
                        <div className="row row-flex" >
                            {empData.map((dat) => {
                                if (dat.id === 101) {
                                    return <>
                                        <div className="card card1 card11"  onClick={popUpView.bind(this, dat)} style={ceoHover?hoverStyle:null} onMouseOver={teamHover.bind(this,dat.name)} onMouseOut={teamHover.bind(this,"")}>
                                            <center key={dat.id} > <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                            </center>
                                        </div>
                                    </>
                                }
                            })
                            }
                        </div>
                        <div className="v-line-sm"  ></div>
                        <div className="h-line-lg" ></div>
                        <div className="row">

                            <div className="col-md-4 row5" >
                                <div className="v-line-sm" ></div>
                                {empData.map((dat) => {
                                    if (dat.id === 102) {
                                        return <>
                                            <div className="card card1 card11" onClick={popUpView.bind(this, dat)} style={ceoHover || ctoHover?hoverStyle:null} onMouseOver={teamHover.bind(this,dat.name)} onMouseOut={teamHover.bind(this,"")}>
                                                <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                    <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                    <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                </center>
                                            </div>
                                        </>
                                    }
                                })}

                                <center>
                                    <div >
                                        <div className="v-line-sm"></div>
                                        {empData.map((dat) => {
                                            if (dat.id === 108) {
                                                return <>
                                                    <div className="card card1" onClick={popUpView.bind(this, dat)}  style={ ctoHover?hoverStyle:null}>
                                                        <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                            <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                            <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                        </center>
                                                    </div>
                                                </>
                                            }
                                        })}
                                        <div className="v-line-xsm"></div>
                                        <div className="split-line-sm" ></div>
                                        <div className="row4" >
                                            {empData.map((dat) => {
                                                if (dat.id === 106) {
                                                    return <>
                                                        <div className="card card1" onClick={popUpView.bind(this, dat)}style={ ctoHover?hoverStyle:null} >
                                                            <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                                <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                                <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                            </center>
                                                        </div>
                                                    </>
                                                }
                                            })}
                                            {empData.map((dat) => {
                                                if (dat.id === 107) {
                                                    return <>
                                                        <div className="card card1" onClick={popUpView.bind(this, dat)} style={ ctoHover?hoverStyle:null}>
                                                            <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                                <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                                <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                            </center>
                                                        </div>
                                                    </>
                                                }
                                            })}
                                        </div>
                                        <div style={{ display: "flex", gap: "2rem", position: "relative" }}>
                                            <div >
                                                <div className="v-line-sm" ></div>
                                                {empData.map((dat) => {
                                                    if (dat.id === 105) {
                                                        return <>
                                                            <div className="card card1" onClick={popUpView.bind(this, dat)}style={ ctoHover?hoverStyle:null} >
                                                                <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                                    <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                                    <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                                </center>
                                                            </div>
                                                        </>
                                                    }
                                                })}
                                            </div>
                                            <div>
                                                <div className="v-line-sm"></div>
                                                {empData.map((dat) => {
                                                    if (dat.id === 109) {
                                                        return <>
                                                            <div className="card card1" onClick={popUpView.bind(this, dat)} style={ ctoHover?hoverStyle:null}>
                                                                <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                                    <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                                    <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                                </center>
                                                            </div>
                                                        </>
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </center>

                            </div>

                            <div className="col-md-4 row5">
                                <div className="v-line-sm" ></div>
                                {empData.map((dat) => {
                                    if (dat.id === 111) {
                                        return <>
                                            <div className="card card1 card11" onClick={popUpView.bind(this, dat)} style={ceoHover || cboHover ?hoverStyle:null}  onMouseOver={teamHover.bind(this,dat.name)} onMouseOut={teamHover.bind(this,"")}>
                                                <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                    <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                    <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                </center>
                                            </div>
                                        </>
                                    }
                                })}
                                <center>
                                    <div>
                                        <div className="v-line-sm"  ></div>
                                        {empData.map((dat) => {
                                            if (dat.id === 104) {
                                                return <>
                                                    <div className="card card1" onClick={popUpView.bind(this, dat)} style={cboHover ?hoverStyle:null}>
                                                        <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                            <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                            <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                        </center>
                                                    </div>
                                                </>
                                            }
                                        })}
                                        <div className="v-line-xsm" ></div>
                                        <div className="split-line-sm"  ></div>
                                        <div className="row4"  >
                                            {empData.map((dat) => {
                                                if (dat.id === 110) {
                                                    return <>
                                                        <div className="card card1" onClick={popUpView.bind(this, dat)} style={cboHover ?hoverStyle:null}>
                                                            <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                                <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                                <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                            </center>
                                                        </div>
                                                    </>
                                                }
                                            })}
                                            {empData.map((dat) => {
                                                if (dat.id === 112) {
                                                    return <>
                                                        <div className="card card1" onClick={popUpView.bind(this, dat)} style={cboHover ?hoverStyle:null}>
                                                            <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                                <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                                <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                            </center>
                                                        </div>
                                                    </>
                                                }
                                            })}
                                        </div>
                                    </div>
                                </center>
                            </div>

                            <div className="col-md-4 row5">
                                <div className="v-line-sm" ></div>
                                {empData.map((dat) => {
                                    if (dat.id === 103) {
                                        return <>
                                            <div className="card card1 card11" onClick={popUpView.bind(this, dat)} style={ceoHover || cfoHover?hoverStyle:null}onMouseOver={teamHover.bind(this,dat.name)} onMouseOut={teamHover.bind(this,"")}>
                                                <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                    <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                    <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                </center>
                                            </div>
                                        </>
                                    }
                                })}
                                <center>
                                    <div >
                                        <div className="v-line-xsm"></div>
                                        <div className="split-line-sm" ></div>
                                        <div className="row4" style={{ position: "relative" }}>
                                            {empData.map((dat) => {
                                                if (dat.id === 113) {
                                                    return <>
                                                        <div className="card card1" onClick={popUpView.bind(this, dat)} style={cfoHover?hoverStyle:null}>
                                                            <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                                <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                                <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                            </center>
                                                        </div>
                                                    </>
                                                }
                                            })}
                                            {empData.map((dat) => {
                                                if (dat.id === 114) {
                                                    return <>
                                                        <div className="card card1" onClick={popUpView.bind(this, dat)} style={cfoHover?hoverStyle:null}>
                                                            <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                                <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                                <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                            </center>
                                                        </div>
                                                    </>
                                                }
                                            })}
                                        </div>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </> : null}
        </div>
    </>
}

export default TreeDetails