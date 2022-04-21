import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import styles from "./Card.module.scss"

function Card(props) {
    const { results } = props;
    let display;
    if (results) {
        display = results.map(x => {
            let { id, name, image, location, status } = x;

            return (
                <div key={id} className="col-4 mb-4 position-relative">
                    <div className={styles.card}>
                        <img src={image} alt="" className={`${styles.img} img-fluid`} />
                        <div className="content" style={{padding:"10px"}}>
                            <div className="fs-4 fw-bold mb-4">{name}</div>
                            <div className="">
                                <div className="fs-6">Last Location</div>
                                <div className="fs-5">{location.name}</div>
                            </div>
                        </div>
                    </div>

                    {(() => {
                        if (status === "Dead") {
                            return(<div className={`${styles.badge} badge bg-danger position-absolute`}  >{status}</div>);

                        } else if (status === "Alive") {
                            return (<div className={`${styles.badge} badge bg-success position-absolute`}  >{status}</div>);
                        } else {
                            return (<div className={`${styles.badge} badge bg-secondary position-absolute`}  >{status}</div>);
                        }
                    })()}
                </div>);

        });

    }
    else {
        display = "no Characters Found :/";
    }

    return (
        <div >
            {display}
        </div>
    )
}

export default Card;
