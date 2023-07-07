import React from 'react'
import './Maps.css'

const Maps = () => {
    return (
        <section className='maps container'>
            <div className="container-row">
                <div className="container-colum-iframe">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.474920229705!2d-58.498129600000006!3d-34.6174369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9d0971e6157%3A0x4b9846f015c6116a!2sMiranda%204231%2C%20C1407%20CABA!5e0!3m2!1ses-419!2sar!4v1688689662262!5m2!1ses-419!2sar"
                    /* width="600" */
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    /* referrerpolicy="no-referrer-when-downgrade" */
                ></iframe>
                </div>
                <div className="container-colum">
                    <div className="row">
                        <div className="col s12 boxInfo">
                            <div>
                                <ion-icon name="location-outline"></ion-icon>
                            </div>
                            <div>
                                <p><b>Dirección de Administración:</b></p>
                                <p>Miranda 4231, C1407, C.A.B.A. Argentina.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Maps