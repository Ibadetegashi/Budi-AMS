import { Link } from "react-router-dom";

export default function Slider() {
    return (
        <div>
            <div id="carouselBasicExample" className="carousel slide carousel-fade" data-mdb-ride="carousel" style={{ maxHeight: "698px" }}>

                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>


                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src="https://akologic.info/wp-content/uploads/2018/05/2.jpg" className="d-block w-100" alt="Sunset Over the City" />
                        <div className="carousel-caption d-none d-md-block">
                            <Link className="nav-link " style={{ color: "white" }} to="/products">                        <div className="btn btn-secondary">
                                Products</div>
                            </Link>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>


                    <div className="carousel-item">
                        <img src="http://phama.com.au/wp-content/uploads/2021/06/FoodTank_agriculturesubsidiesworldbankreport.jpg" className="d-block w-100" alt="Canyon at Nigh" />
                        <div className="carousel-caption d-none d-md-block">
                            <Link className="nav-link " style={{ color: "white" }} to="/products">                        <div type="button" className="btn btn-secondary">
                                Products</div>
                            </Link>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>


                    <div className="carousel-item">
                        <img src="https://images.squarespace-cdn.com/content/v1/59a706d4f5e2319b70240ef9/1598971164694-F75Y7VUAHC6TLFJXLCWF/veggies.jpg" className="d-block w-100" alt="Cliff Above a Stormy Sea" />
                        <div className="carousel-caption d-none d-md-block">
                            <Link className="nav-link " style={{ color: "white" }} to="/products">                        <button type="button" className="btn btn-secondary">
                                Products</button>
                            </Link>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
         
     </div>
        
    );
}